/* =========================================================
   SEA029 — servicio de cuentas y progreso
   Cloudflare Worker + KV (binding: PROGRESO)

   Claves en KV
     cuenta:<usuario>  { salt, hash, iter, creado, visto }
     s:<sesion>     usuario            (caduca a los 90 dias)
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
     GET  /p/<token>           compatibilidad con el sistema antiguo
     PUT  /p/<token>           compatibilidad con el sistema antiguo
   ========================================================= */

const ORIGENES_PERMITIDOS = ["https://lydiel.online", "https://www.lydiel.online"];
const MAX_BYTES = 60000;
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
  const usuario = await env.PROGRESO.get("s:" + m[1]);
  return usuario ? { usuario, sesion: m[1] } : null;
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
  const sesion = aleatorio(32);
  await env.PROGRESO.put("s:" + sesion, u, { expirationTtl: SESION_SEG });
  return json({ sesion, usuario: u, nuevo: true }, 201, origen);
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
  const hash = await derivar(clave, cuenta.salt, cuenta.iter || ITERACIONES);
  if (!iguales(hash, cuenta.hash)) {
    await env.PROGRESO.put("r:" + u, String(intentos + 1), { expirationTtl: INTENTOS_SEG });
    return json(generico, 401, origen);
  }
  await env.PROGRESO.delete("r:" + u);
  cuenta.visto = Date.now();
  await env.PROGRESO.put("cuenta:" + u, JSON.stringify(cuenta));
  const sesion = aleatorio(32);
  await env.PROGRESO.put("s:" + sesion, u, { expirationTtl: SESION_SEG });
  return json({ sesion, usuario: u }, 200, origen);
}

async function salir(peticion, env, origen) {
  const s = await sesionDe(peticion, env);
  if (s) await env.PROGRESO.delete("s:" + s.sesion);
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
