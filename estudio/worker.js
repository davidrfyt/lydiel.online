/* =========================================================
   SEA029 — servicio de cuentas y progreso
   Cloudflare Worker + KV (binding: PROGRESO)

   Claves en KV
     cuenta:<usuario>   { salt, hash, iter, creado, visto, suspendido,
                          nombre, avatar }
     s:<sesion>         { u, admin }   (caduca a los 90 dias)
     sesiones:<usuario> [ids de sesion abiertos]
     p:<usuario>    progreso en JSON
     r:<usuario>    intentos fallidos  (caduca a los 15 min)
     <token>-sea029 progreso del sistema antiguo de tokens

   Endpoints
     GET  /                    estado del servicio
     POST /registro            { usuario, clave } -> { sesion, usuario }
     POST /entrar              { usuario, clave } -> { sesion, usuario }
     POST /salir               cierra la sesion presentada
     GET  /progreso            devuelve el progreso de la sesion
     PUT  /progreso            guarda el progreso de la sesion
     POST /importar            { token } copia el progreso de un token antiguo
     GET  /yo                  quien soy y si administro
     GET  /perfil              nombre, avatar y fechas de la cuenta
     PUT  /perfil              { nombre, avatar } actualiza el perfil
     POST /clave               { actual, nueva } cambia la contrasena
     POST /cerrar-todas        cierra el resto de sesiones abiertas
     POST /baja                { clave } borra la propia cuenta
     GET  /admin/usuarios      listado con actividad y progreso (solo admin)
     POST /admin/suspender     { usuario, suspendido } (solo admin)
     POST /admin/borrar        { usuario } (solo admin)
     GET  /p/<token>           compatibilidad con el sistema antiguo
     PUT  /p/<token>           compatibilidad con el sistema antiguo
   ========================================================= */

const ORIGENES_PERMITIDOS = [
  "https://temariovigilantesdeseguridad.com",
  "https://www.temariovigilantesdeseguridad.com",
  "https://lydiel.online",              // se retira al completar la mudanza
  "https://www.lydiel.online",
];
const ADMINS = ["lydiel"];
const MAX_BYTES = 160000;      // el avatar viaja dentro del cuerpo
const AVATAR_MAX = 60000;      // ~44 KB de imagen en base64
const NOMBRE_MAX = 40;
const AVATAR_RE = /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/;
const TOKEN_RE = /^[A-Za-z0-9_-]{6,64}$/;
const USUARIO_RE = /^[a-z0-9][a-z0-9._-]{2,31}$/;
const CLAVE_MIN = 8;
const CLAVE_MAX = 200;
const ITERACIONES = 100000;   // maximo que admite WebCrypto en Workers
const SESION_SEG = 90 * 24 * 3600;
const INTENTOS_MAX = 8;
const INTENTOS_SEG = 900;

/* ---------- utilidades ---------- */

function cors(origen) {
  const permitido = ORIGENES_PERMITIDOS.includes(origen) ? origen : ORIGENES_PERMITIDOS[0];
  return {
    "Access-Control-Allow-Origin": permitido,
    "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(datos, estado, origen) {
  return new Response(JSON.stringify(datos), {
    status: estado || 200,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...cors(origen) },
  });
}

const b64url = buf => btoa(String.fromCharCode(...new Uint8Array(buf)))
  .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

function aleatorio(n) {
  const a = new Uint8Array(n);
  crypto.getRandomValues(a);
  return b64url(a.buffer);
}

async function derivar(clave, saltB64, iteraciones) {
  const salt = Uint8Array.from(atob(saltB64.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));
  const material = await crypto.subtle.importKey("raw", new TextEncoder().encode(clave), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: iteraciones, hash: "SHA-256" }, material, 256);
  return b64url(bits);
}

/* comparacion en tiempo constante */
function iguales(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

async function leerCuerpo(peticion) {
  const txt = await peticion.text();
  if (txt.length > MAX_BYTES) throw new Error("demasiado grande");
  if (!txt) return {};
  return JSON.parse(txt);
}

function normaliza(u) {
  return String(u || "").trim().toLowerCase();
}

async function sesionDe(peticion, env) {
  const cab = peticion.headers.get("Authorization") || "";
  const m = cab.match(/^Bearer\s+(\S+)$/i);
  if (!m) return null;
  const crudo = await env.PROGRESO.get("s:" + m[1]);
  if (!crudo) return null;
  let d;
  try { d = JSON.parse(crudo); } catch (e) { d = { u: crudo }; }   // sesiones antiguas
  if (!d || !d.u) return null;
  return { usuario: d.u, sesion: m[1], admin: ADMINS.includes(d.u) };
}

/* indice de sesiones abiertas: permite cerrarlas al suspender o borrar */
const MAX_SESIONES = 10;

async function abreSesion(env, usuario) {
  const sesion = aleatorio(32);
  await env.PROGRESO.put("s:" + sesion, JSON.stringify({ u: usuario, admin: ADMINS.includes(usuario) }),
    { expirationTtl: SESION_SEG });
  let abiertas = [];
  try { abiertas = JSON.parse(await env.PROGRESO.get("sesiones:" + usuario)) || []; } catch (e) {}
  abiertas.push(sesion);
  while (abiertas.length > MAX_SESIONES) {
    await env.PROGRESO.delete("s:" + abiertas.shift());
  }
  await env.PROGRESO.put("sesiones:" + usuario, JSON.stringify(abiertas), { expirationTtl: SESION_SEG });
  return sesion;
}

async function cierraSesion(env, usuario, sesion) {
  await env.PROGRESO.delete("s:" + sesion);
  let abiertas = [];
  try { abiertas = JSON.parse(await env.PROGRESO.get("sesiones:" + usuario)) || []; } catch (e) {}
  abiertas = abiertas.filter(x => x !== sesion);
  await env.PROGRESO.put("sesiones:" + usuario, JSON.stringify(abiertas), { expirationTtl: SESION_SEG });
}

async function cierraTodas(env, usuario, salvo) {
  let abiertas = [];
  try { abiertas = JSON.parse(await env.PROGRESO.get("sesiones:" + usuario)) || []; } catch (e) {}
  for (const id of abiertas) if (id !== salvo) await env.PROGRESO.delete("s:" + id);
  if (salvo) {
    await env.PROGRESO.put("sesiones:" + usuario, JSON.stringify([salvo]), { expirationTtl: SESION_SEG });
  } else {
    await env.PROGRESO.delete("sesiones:" + usuario);
  }
}

function limpiaNombre(n) {
  return String(n == null ? "" : n)
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, NOMBRE_MAX);
}

/* el avatar se pinta en un <img>: solo mapa de bits, nunca SVG (puede llevar script) */
function validaAvatar(a) {
  if (a === null || a === "") return { ok: true, valor: "" };
  if (typeof a !== "string") return { ok: false, error: "El avatar no es válido." };
  if (a.length > AVATAR_MAX) return { ok: false, error: "La imagen es demasiado grande." };
  if (!AVATAR_RE.test(a)) return { ok: false, error: "Formato de imagen no admitido. Usa PNG, JPG o WebP." };
  return { ok: true, valor: a };
}

async function leeCuenta(env, usuario) {
  const crudo = await env.PROGRESO.get("cuenta:" + usuario);
  if (!crudo) return null;
  try { return JSON.parse(crudo); } catch (e) { return null; }
}

/* ---------- rutas ---------- */

async function registro(peticion, env, origen) {
  const { usuario, clave } = await leerCuerpo(peticion);
  const u = normaliza(usuario);
  if (!USUARIO_RE.test(u)) {
    return json({ error: "El usuario debe tener entre 3 y 32 caracteres: letras minúsculas, números, punto, guion o guion bajo, empezando por letra o número." }, 400, origen);
  }
  if (typeof clave !== "string" || clave.length < CLAVE_MIN || clave.length > CLAVE_MAX) {
    return json({ error: "La contraseña debe tener al menos " + CLAVE_MIN + " caracteres." }, 400, origen);
  }
  if (await env.PROGRESO.get("cuenta:" + u)) {
    return json({ error: "Ese usuario ya existe. Entra con él o elige otro." }, 409, origen);
  }
  const salt = aleatorio(16);
  const hash = await derivar(clave, salt, ITERACIONES);
  const ahora = Date.now();
  await env.PROGRESO.put("cuenta:" + u, JSON.stringify({ salt, hash, iter: ITERACIONES, creado: ahora, visto: ahora }));
  const sesion = await abreSesion(env, u);
  return json({ sesion, usuario: u, nuevo: true, admin: ADMINS.includes(u) }, 201, origen);
}

async function entrar(peticion, env, origen) {
  const { usuario, clave } = await leerCuerpo(peticion);
  const u = normaliza(usuario);
  const generico = { error: "Usuario o contraseña incorrectos." };
  if (!USUARIO_RE.test(u) || typeof clave !== "string") return json(generico, 401, origen);

  const intentos = +(await env.PROGRESO.get("r:" + u) || 0);
  if (intentos >= INTENTOS_MAX) {
    return json({ error: "Demasiados intentos. Espera unos minutos y vuelve a probar." }, 429, origen);
  }

  const crudo = await env.PROGRESO.get("cuenta:" + u);
  if (!crudo) {
    await env.PROGRESO.put("r:" + u, String(intentos + 1), { expirationTtl: INTENTOS_SEG });
    return json(generico, 401, origen);
  }
  let cuenta;
  try { cuenta = JSON.parse(crudo); } catch (e) { cuenta = null; }
  if (!cuenta || typeof cuenta.salt !== "string" || typeof cuenta.hash !== "string") {
    await env.PROGRESO.put("r:" + u, String(intentos + 1), { expirationTtl: INTENTOS_SEG });
    return json(generico, 401, origen);
  }
  if (cuenta.suspendido) {
    return json({ error: "Esta cuenta está suspendida." }, 403, origen);
  }
  const hash = await derivar(clave, cuenta.salt, cuenta.iter || ITERACIONES);
  if (!iguales(hash, cuenta.hash)) {
    await env.PROGRESO.put("r:" + u, String(intentos + 1), { expirationTtl: INTENTOS_SEG });
    return json(generico, 401, origen);
  }
  await env.PROGRESO.delete("r:" + u);
  cuenta.visto = Date.now();
  await env.PROGRESO.put("cuenta:" + u, JSON.stringify(cuenta));
  const sesion = await abreSesion(env, u);
  return json({ sesion, usuario: u, admin: ADMINS.includes(u) }, 200, origen);
}

async function salir(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (s) await cierraSesion(env, s.usuario, s.sesion);
  return json({ ok: true }, 200, origen);
}

async function leerProgreso(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  const datos = await env.PROGRESO.get("p:" + s.usuario);
  return new Response(datos || "{}", {
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...cors(origen) },
  });
}

async function guardarProgreso(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  let datos;
  try { datos = await leerCuerpo(peticion); }
  catch (e) { return json({ error: "Datos no válidos." }, 400, origen); }
  if (typeof datos !== "object" || Array.isArray(datos)) return json({ error: "Datos no válidos." }, 400, origen);
  datos._guardado = Date.now();
  await env.PROGRESO.put("p:" + s.usuario, JSON.stringify(datos));
  return json({ ok: true, guardado: datos._guardado }, 200, origen);
}

async function importar(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  const { token } = await leerCuerpo(peticion);
  const t = String(token || "").trim();
  if (!TOKEN_RE.test(t)) return json({ error: "Ese token no tiene un formato válido." }, 400, origen);
  // los tokens se guardaron con varias formas a lo largo del tiempo
  let viejo = null;
  for (const clave of [t + "-sea029", t, "u:" + t + "-sea029", "u:" + t]) {
    viejo = await env.PROGRESO.get(clave);
    if (viejo) break;
  }
  if (!viejo) return json({ error: "No hay progreso guardado con ese token." }, 404, origen);
  await env.PROGRESO.put("p:" + s.usuario, viejo);
  return json({ ok: true, importado: true }, 200, origen);
}

async function yo(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  let c = {};
  try { c = JSON.parse(await env.PROGRESO.get("cuenta:" + s.usuario)) || {}; } catch (e) {}
  return json({
    usuario: s.usuario, admin: s.admin,
    creado: c.creado || null, visto: c.visto || null, suspendido: !!c.suspendido
  }, 200, origen);
}

function resumeProgreso(txt) {
  const vacio = { epi: 0, temas: 0, fichas: 0, falladas: 0, mejor: null, examen: null, actividad: null, bytes: 0 };
  if (!txt) return vacio;
  let d;
  try { d = JSON.parse(txt); } catch (e) { return Object.assign({}, vacio, { bytes: txt.length }); }
  const caja = d.box || {};
  return {
    epi: Object.values(d.epi || {}).filter(Boolean).length,
    temas: Object.values(d.done || {}).filter(Boolean).length,
    fichas: Object.values(caja).filter(v => v >= 2).length,
    falladas: (d.wrong || []).length,
    mejor: d.best ? d.best.pct : null,
    examen: d.examBest ? d.examBest.pct : null,
    actividad: d._guardado || null,
    bytes: txt.length
  };
}

async function adminUsuarios(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  if (!s.admin) return json({ error: "No tienes permiso." }, 403, origen);

  const lista = await env.PROGRESO.list({ prefix: "cuenta:" });
  const usuarios = [];
  for (const k of lista.keys) {
    const nombre = k.name.slice("cuenta:".length);
    let c = {};
    try { c = JSON.parse(await env.PROGRESO.get(k.name)) || {}; } catch (e) {}
    usuarios.push({
      usuario: nombre,
      nombre: c.nombre || "",
      avatar: c.avatar || "",
      creado: c.creado || null,
      visto: c.visto || null,
      suspendido: !!c.suspendido,
      admin: ADMINS.includes(nombre),
      progreso: resumeProgreso(await env.PROGRESO.get("p:" + nombre))
    });
  }
  usuarios.sort((a, b) => (b.visto || 0) - (a.visto || 0));
  return json({ usuarios, total: usuarios.length, completa: lista.list_complete !== false }, 200, origen);
}

async function adminSuspender(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  if (!s.admin) return json({ error: "No tienes permiso." }, 403, origen);
  const { usuario, suspendido } = await leerCuerpo(peticion);
  const u = normaliza(usuario);
  if (ADMINS.includes(u)) return json({ error: "No puedes suspender una cuenta de administración." }, 400, origen);
  const crudo = await env.PROGRESO.get("cuenta:" + u);
  if (!crudo) return json({ error: "Ese usuario no existe." }, 404, origen);
  const c = JSON.parse(crudo);
  c.suspendido = !!suspendido;
  await env.PROGRESO.put("cuenta:" + u, JSON.stringify(c));
  if (c.suspendido) await cierraTodas(env, u);
  return json({ ok: true, usuario: u, suspendido: c.suspendido }, 200, origen);
}

async function adminBorrar(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  if (!s.admin) return json({ error: "No tienes permiso." }, 403, origen);
  const { usuario } = await leerCuerpo(peticion);
  const u = normaliza(usuario);
  if (ADMINS.includes(u)) return json({ error: "No puedes borrar una cuenta de administración." }, 400, origen);
  if (!(await env.PROGRESO.get("cuenta:" + u))) return json({ error: "Ese usuario no existe." }, 404, origen);
  await cierraTodas(env, u);
  await env.PROGRESO.delete("cuenta:" + u);
  await env.PROGRESO.delete("p:" + u);
  await env.PROGRESO.delete("r:" + u);
  return json({ ok: true, borrado: u }, 200, origen);
}

async function perfil(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  const c = await leeCuenta(env, s.usuario);
  if (!c) return json({ error: "La cuenta ya no existe." }, 401, origen);
  return json({
    usuario: s.usuario, admin: s.admin,
    nombre: c.nombre || "", avatar: c.avatar || "",
    creado: c.creado || null, visto: c.visto || null
  }, 200, origen);
}

async function guardaPerfil(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  const datos = await leerCuerpo(peticion);
  const c = await leeCuenta(env, s.usuario);
  if (!c) return json({ error: "La cuenta ya no existe." }, 401, origen);

  if (Object.prototype.hasOwnProperty.call(datos, "nombre")) c.nombre = limpiaNombre(datos.nombre);
  if (Object.prototype.hasOwnProperty.call(datos, "avatar")) {
    const v = validaAvatar(datos.avatar);
    if (!v.ok) return json({ error: v.error }, 400, origen);
    c.avatar = v.valor;
  }
  await env.PROGRESO.put("cuenta:" + s.usuario, JSON.stringify(c));
  return json({ ok: true, nombre: c.nombre || "", avatar: c.avatar || "" }, 200, origen);
}

async function cambiaClave(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  const { actual, nueva } = await leerCuerpo(peticion);
  if (typeof nueva !== "string" || nueva.length < CLAVE_MIN || nueva.length > CLAVE_MAX) {
    return json({ error: "La contraseña nueva debe tener al menos " + CLAVE_MIN + " caracteres." }, 400, origen);
  }
  const c = await leeCuenta(env, s.usuario);
  if (!c || typeof c.salt !== "string") return json({ error: "La cuenta ya no existe." }, 401, origen);
  const hash = await derivar(String(actual || ""), c.salt, c.iter || ITERACIONES);
  if (!iguales(hash, c.hash)) return json({ error: "La contraseña actual no es correcta." }, 401, origen);

  c.salt = aleatorio(16);
  c.hash = await derivar(nueva, c.salt, ITERACIONES);
  c.iter = ITERACIONES;
  await env.PROGRESO.put("cuenta:" + s.usuario, JSON.stringify(c));
  // cambiar la clave echa al resto de dispositivos, pero no a quien la cambia
  await cierraTodas(env, s.usuario, s.sesion);
  return json({ ok: true }, 200, origen);
}

async function cerrarTodas(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  await cierraTodas(env, s.usuario, s.sesion);
  return json({ ok: true }, 200, origen);
}

async function baja(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (!s) return json({ error: "Sesión no válida." }, 401, origen);
  if (ADMINS.includes(s.usuario)) {
    return json({ error: "La cuenta de administración no puede darse de baja desde aquí." }, 400, origen);
  }
  const { clave } = await leerCuerpo(peticion);
  const c = await leeCuenta(env, s.usuario);
  if (!c || typeof c.salt !== "string") return json({ error: "La cuenta ya no existe." }, 401, origen);
  const hash = await derivar(String(clave || ""), c.salt, c.iter || ITERACIONES);
  if (!iguales(hash, c.hash)) return json({ error: "La contraseña no es correcta." }, 401, origen);

  await cierraTodas(env, s.usuario);
  await env.PROGRESO.delete("cuenta:" + s.usuario);
  await env.PROGRESO.delete("p:" + s.usuario);
  await env.PROGRESO.delete("r:" + s.usuario);
  return json({ ok: true, baja: true }, 200, origen);
}

/* compatibilidad con el sistema antiguo de tokens */
async function tokenAntiguo(peticion, env, origen, token) {
  if (!TOKEN_RE.test(token)) return json({ error: "Token no válido." }, 400, origen);
  const clave = token + "-sea029";
  if (peticion.method === "GET") {
    const datos = await env.PROGRESO.get(clave);
    return new Response(datos || "{}", {
      headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...cors(origen) },
    });
  }
  let datos;
  try { datos = await leerCuerpo(peticion); }
  catch (e) { return json({ error: "Datos no válidos." }, 400, origen); }
  if (typeof datos !== "object" || Array.isArray(datos)) return json({ error: "Datos no válidos." }, 400, origen);
  datos._guardado = Date.now();
  await env.PROGRESO.put(clave, JSON.stringify(datos));
  return json({ ok: true }, 200, origen);
}

export default {
  async fetch(peticion, env) {
    const origen = peticion.headers.get("Origin") || "";
    if (peticion.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origen) });

    const url = new URL(peticion.url);
    const ruta = url.pathname.replace(/\/+$/, "") || "/";
    const M = peticion.method;

    try {
      if (ruta === "/" && M === "GET") {
        return json({ ok: true, servicio: "sea029", cuentas: true, version: 2 }, 200, origen);
      }
      if (ruta === "/registro" && M === "POST") return await registro(peticion, env, origen);
      if (ruta === "/entrar" && M === "POST") return await entrar(peticion, env, origen);
      if (ruta === "/salir" && M === "POST") return await salir(peticion, env, origen);
      if (ruta === "/importar" && M === "POST") return await importar(peticion, env, origen);
      if (ruta === "/progreso" && M === "GET") return await leerProgreso(peticion, env, origen);
      if (ruta === "/progreso" && M === "PUT") return await guardarProgreso(peticion, env, origen);
      if (ruta === "/yo" && M === "GET") return await yo(peticion, env, origen);
      if (ruta === "/perfil" && M === "GET") return await perfil(peticion, env, origen);
      if (ruta === "/perfil" && M === "PUT") return await guardaPerfil(peticion, env, origen);
      if (ruta === "/clave" && M === "POST") return await cambiaClave(peticion, env, origen);
      if (ruta === "/cerrar-todas" && M === "POST") return await cerrarTodas(peticion, env, origen);
      if (ruta === "/baja" && M === "POST") return await baja(peticion, env, origen);
      if (ruta === "/admin/usuarios" && M === "GET") return await adminUsuarios(peticion, env, origen);
      if (ruta === "/admin/suspender" && M === "POST") return await adminSuspender(peticion, env, origen);
      if (ruta === "/admin/borrar" && M === "POST") return await adminBorrar(peticion, env, origen);

      const antiguo = ruta.match(/^\/p\/(.+)$/);
      if (antiguo && (M === "GET" || M === "PUT")) {
        return await tokenAntiguo(peticion, env, origen, decodeURIComponent(antiguo[1]));
      }
      return json({ error: "Ruta no encontrada." }, 404, origen);
    } catch (e) {
      return json({ error: "Error del servicio." }, 500, origen);
    }
  },
};
