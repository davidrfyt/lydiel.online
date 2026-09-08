"use strict";
/* =========================================================
   SEA029 — panel de estudio
   Barra lateral fija; el lienzo cambia entre el indice de
   unidades, una unidad concreta y las herramientas.
   ========================================================= */

const CONFIG = { SYNC_URL: "https://uf2676.entrenadorespokemon.workers.dev", SUFIJO: "-sea029" };

/* ---------------- estado ---------------- */
const KSES = "sea029:sesion";
const KUSR = "sea029:usuario";
const TKEY = "sea029:token";            // sistema antiguo, solo para importar
const TOKEN_RE = /^[A-Za-z0-9_-]{6,56}$/;
const USUARIO_RE = /^[a-z0-9][a-z0-9._-]{2,31}$/;
let SESION = null;
let USUARIO = null;
let ADMIN = false;
let PERFIL = { nombre: "", avatar: "", creado: null, visto: null };
let TOKEN = null;                       // solo si el servicio no tiene cuentas
let CUENTAS = null;
let modoGate = "entrar";
let S = { done: {}, epi: {}, best: null, wrong: [], box: {}, sr: {}, oral: {},
          acc: {}, racha: { ultimo: "", dias: 0 }, examBest: null, uBest: {} };
let pushTimer = null;

let IDX = [];
const CACHE = {};

/* El material ya no viaja en un fichero suelto: lo sirve el servicio a quien
   presenta una sesion. Hasta entonces estas listas estan vacias. */
let MODULOS = [], TEMAS = [], FICHAS = [], PREGUNTAS = [], ORAL = [], CHULETA = [];
let CONTENIDO = false;
let PAGO = { paywall: false, precio: 300, acceso: true, pagado: false, fecha: null };

const $ = id => document.getElementById(id);
const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const lsDel = k => { try { localStorage.removeItem(k); } catch (e) {} };
const slotKey = () => "sea029:p:" + (USUARIO || TOKEN);
const remoteKey = () => TOKEN + CONFIG.SUFIJO;
const conSesion = extra => Object.assign({ Authorization: "Bearer " + SESION }, extra || {});

/* el estado de guardado solo se asoma cuando hay un problema:
   si todo va bien, no hace falta decirlo */
function setSync(state, txt) {
  const b = $("syncBadge"); if (!b) return;
  b.dataset.s = state;
  $("syncTxt").textContent = txt;
  b.hidden = state !== "err";
}
function save() {
  lsSet(slotKey(), JSON.stringify(S));
  if (!CONFIG.SYNC_URL) return;
  setSync("wait", "guardando");
  clearTimeout(pushTimer);
  pushTimer = setTimeout(push, 800);
}
const cuerpoProgreso = () => JSON.stringify({
  done: S.done, epi: S.epi, best: S.best, wrong: S.wrong,
  box: S.box, sr: S.sr, oral: S.oral, acc: S.acc, racha: S.racha,
  examBest: S.examBest, uBest: S.uBest
});
async function push() {
  if (!CONFIG.SYNC_URL) return;
  try {
    let r;
    if (SESION) {
      r = await fetch(CONFIG.SYNC_URL + "/progreso", {
        method: "PUT", headers: conSesion({ "Content-Type": "application/json" }), body: cuerpoProgreso()
      });
      if (r.status === 401) { caduca(); return; }
    } else if (TOKEN) {
      r = await fetch(CONFIG.SYNC_URL + "/p/" + encodeURIComponent(remoteKey()), {
        method: "PUT", headers: { "Content-Type": "application/json" }, body: cuerpoProgreso()
      });
    } else return;
    if (!r.ok) throw new Error("HTTP " + r.status);
    setSync("ok", "sincronizado");
  } catch (e) { setSync("err", "sin conexión"); }
}
async function pull() {
  if (!CONFIG.SYNC_URL) return null;
  try {
    let r;
    if (SESION) {
      r = await fetch(CONFIG.SYNC_URL + "/progreso", { headers: conSesion() });
      if (r.status === 401) { caduca(); return null; }
    } else if (TOKEN) {
      r = await fetch(CONFIG.SYNC_URL + "/p/" + encodeURIComponent(remoteKey()));
    } else return null;
    if (!r.ok) throw new Error("HTTP " + r.status);
    return await r.json();
  } catch (e) { return null; }
}
function caduca() {
  lsDel(KSES); lsDel(KUSR);
  SESION = null; USUARIO = null; ADMIN = false;
  abrePuerta("Tu sesión ha caducado. Entra otra vez.");
}
const hasData = o => !!o && ((o.done && Object.keys(o.done).length) || (o.epi && Object.keys(o.epi).length) ||
  o.best || (o.wrong && o.wrong.length) || (o.box && Object.keys(o.box).length));
function norma(o) {
  const S2 = {
    done: o.done || {}, epi: o.epi || {}, best: o.best || null, wrong: o.wrong || [],
    box: o.box || {}, sr: o.sr || {}, oral: o.oral || {}, acc: o.acc || {},
    racha: o.racha || { ultimo: "", dias: 0 },
    examBest: o.examBest || null, uBest: o.uBest || {}
  };
  // quien venia del sistema de dos cajas conserva lo aprendido
  Object.keys(S2.box).forEach(k => {
    if (S2.sr[k]) return;
    const caja = S2.box[k] || 0;
    if (caja >= 2) S2.sr[k] = { n: 3, v: hoyISO(DIAS_SR[3]) };
    else if (caja === 1) S2.sr[k] = { n: 1, v: hoyISO(DIAS_SR[1]) };
  });
  return S2;
}

function pintaIdentidad() {
  const quien = USUARIO || TOKEN || "";
  const visible = PERFIL.nombre || quien;
  $("whoChip").textContent = visible;
  $("whoChip").title = (SESION ? "Cuenta: " : "Token de estudio: ") + quien;
  const av = $("avatar");
  if (PERFIL.avatar) {
    av.innerHTML = '<img src="' + esc(PERFIL.avatar) + '" alt="">';
    av.classList.add("con-foto");
  } else {
    av.textContent = visible.slice(0, 1);
    av.classList.remove("con-foto");
  }
}

async function unlock(quien) {
  pintaIdentidad();

  let local = null;
  try { const raw = lsGet(slotKey()); if (raw) local = JSON.parse(raw); } catch (e) {}

  if (CONFIG.SYNC_URL) {
    setSync("wait", "conectando");
    const remoto = await pull();
    if (!SESION && !TOKEN) return;
    if (hasData(remoto)) { S = norma(remoto); setSync("ok", "sincronizado"); }
    else if (hasData(local)) { S = norma(local); await push(); }
    else { S = norma({}); setSync(remoto === null ? "err" : "ok", remoto === null ? "sin conexión" : "sincronizado"); }
  } else {
    S = hasData(local) ? norma(local) : norma({});
    setSync("local", "solo este equipo");
  }
  lsSet(slotKey(), JSON.stringify(S));
  $("gate").hidden = true;
  await boot();
}
async function lock() {
  clearTimeout(pushTimer);
  paraVoz();
  if (SESION) {
    try { await fetch(CONFIG.SYNC_URL + "/salir", { method: "POST", headers: conSesion() }); } catch (e) {}
  }
  lsDel(KSES); lsDel(KUSR); lsDel(TKEY);
  SESION = null; USUARIO = null; TOKEN = null; ADMIN = false;
  PERFIL = { nombre: "", avatar: "", creado: null, visto: null };
  S = norma({});
  abrePuerta("");
}

/* ---------------- utilidades ---------------- */
const temaById = id => TEMAS.find(t => t.id === id);
const modById = id => MODULOS.find(m => m.id === id);
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const plano = h => String(h).replace(/<[^>]*>/g, "");
const sinAc = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const epiKey = (clave, un, en) => clave + "|" + un + "|" + en;
const uKey = (man, ud) => man + "|" + ud;
const fKey = f => f.t + ":" + FICHAS.indexOf(f);

/* =========================================================
   REPASO ESPACIADO
   Cada ficha guarda cuantas veces seguidas la has acertado y
   la fecha en que vuelve. Fallar la devuelve al principio.
   ========================================================= */
const DIAS_SR = [0, 1, 3, 7, 21, 60];
const DIA_MS = 86400000;

const hoyClave = d => new Date((d || Date.now()) - new Date().getTimezoneOffset() * 60000)
  .toISOString().slice(0, 10);
const hoyISO = dias => hoyClave(Date.now() + (dias || 0) * DIA_MS);

/* una ficha toca si no se ha visto nunca o si su fecha ya llego */
function toca(f) {
  const e = S.sr[fKey(f)];
  return !e || !e.v || e.v <= hoyClave();
}
function dominada(f) {
  const e = S.sr[fKey(f)];
  return !!e && e.n >= DIAS_SR.length - 1;
}
function califica(f, acierto) {
  const k = fKey(f);
  const e = S.sr[k] || { n: 0, v: "" };
  e.n = acierto ? Math.min(DIAS_SR.length - 1, e.n + 1) : 0;
  e.v = hoyISO(DIAS_SR[e.n] || 1);
  S.sr[k] = e;
  S.box[k] = Math.min(2, e.n);          // compatibilidad con lo ya guardado
  marcaRacha();
  save();
}
const pendientesHoy = lista => (lista || FICHAS).filter(toca);

/* ---- racha ---- */
function marcaRacha() {
  const hoy = hoyClave();
  const r = S.racha || (S.racha = { ultimo: "", dias: 0 });
  if (r.ultimo === hoy) return;
  const ayer = hoyISO(-1);
  r.dias = r.ultimo === ayer ? (r.dias || 0) + 1 : 1;
  r.ultimo = hoy;
}

/* ---- aciertos por unidad, para el mapa de puntos flacos ---- */
function apunta(man, ud, acierto) {
  const k = uKey(man, ud);
  const a = S.acc[k] || { ok: 0, ko: 0 };
  acierto ? a.ok++ : a.ko++;
  S.acc[k] = a;
}
function tino(man, ud) {
  const a = S.acc[uKey(man, ud)];
  if (!a || a.ok + a.ko < 4) return null;      // sin muestra suficiente no se opina
  return Math.round(a.ok / (a.ok + a.ko) * 100);
}

const TONOS = { mf0080: "--m80", mf0081: "--m81", mf0082: "--m82", mf0272: "--m272" };
const tono = mod => { const k = TONOS[mod] || "--m80"; return "--tono:var(" + k + ");--tono-2:var(" + k + "-2)"; };

const temasDe = (man, ud) => TEMAS.filter(t => t.man === man && t.ud === ud);
const idsDe = (man, ud) => temasDe(man, ud).map(t => t.id);
const fichasDe = (man, ud) => { const ids = idsDe(man, ud); return FICHAS.filter(f => ids.includes(f.t)); };
const oralDe = (man, ud) => { const ids = idsDe(man, ud); return ORAL.filter(o => ids.includes(o.t)); };
function preguntasDe(man, ud) {
  const ids = idsDe(man, ud);
  return PREGUNTAS.map((q, i) => Object.assign({}, q, { i })).filter(q => ids.includes(q.t));
}
const chuletaDe = (man, ud) => CHULETA.filter(r => r.man === man && (r.ud == null || r.ud === ud));

function unidades() {
  const out = [];
  IDX.forEach(m => m.uds.forEach(u => out.push({
    man: m.clave, cod: m.cod, mod: m.mod, manNombre: m.nombre,
    ud: u.n, titulo: u.titulo, epis: u.epigrafes
  })));
  return out;
}
const unidad = (man, ud) => unidades().find(u => u.man === man && u.ud === +ud);

function epiHechos(man, ud) {
  const u = unidad(man, ud); if (!u) return 0;
  return u.epis.filter(e => S.epi[epiKey(man, ud, e.n)]).length;
}
const fichasDominadas = (man, ud) => fichasDe(man, ud).filter(dominada).length;

function progresoUD(man, ud) {
  const u = unidad(man, ud); if (!u) return 0;
  const tramos = [];
  if (u.epis.length) tramos.push(epiHechos(man, ud) / u.epis.length);
  const ts = temasDe(man, ud);
  if (ts.length) tramos.push(ts.filter(t => S.done[t.id]).length / ts.length);
  const fs = fichasDe(man, ud);
  if (fs.length) tramos.push(fichasDominadas(man, ud) / fs.length);
  const b = S.uBest[uKey(man, ud)];
  if (preguntasDe(man, ud).length) tramos.push(b ? Math.min(1, b.pct / 100) : 0);
  return tramos.length ? Math.round(tramos.reduce((a, x) => a + x, 0) / tramos.length * 100) : 0;
}
const totalEpi = () => IDX.reduce((a, m) => a + m.uds.reduce((b, u) => b + u.epigrafes.length, 0), 0);
const hechosEpi = () => Object.values(S.epi).filter(Boolean).length;

function updHud() {
  const tot = totalEpi() || 1, n = hechosEpi();
  const pct = Math.round(n / tot * 100), C = 2 * Math.PI * 26;
  const arc = $("ringArc");
  arc.setAttribute("stroke-dasharray", C.toFixed(1));
  arc.setAttribute("stroke-dashoffset", (C * (1 - pct / 100)).toFixed(1));
  $("ringTxt").textContent = pct + "%";
  $("hudDone").textContent = n + " / " + tot;
}

async function pideMaterial(ruta) {
  const cab = SESION ? conSesion() : {};
  const r = await fetch(CONFIG.SYNC_URL + ruta, { headers: cab });
  if (r.status === 401) { caduca(); throw new Error("Sesión no válida."); }
  if (r.status === 402) { const e = new Error("Falta la inscripción."); e.pago = true; throw e; }
  if (!r.ok) throw new Error("No se pudo cargar el material.");
  return await r.json();
}

async function cargaEstadoPago() {
  try {
    const r = await fetch(CONFIG.SYNC_URL + "/pago/estado", { headers: conSesion() });
    if (r.status === 401) { caduca(); return; }
    if (r.ok) PAGO = await r.json();
  } catch (e) {}
}

async function cargaContenido() {
  if (CONTENIDO) return true;
  const d = await pideMaterial("/contenido");
  MODULOS = d.MODULOS || []; TEMAS = d.TEMAS || []; FICHAS = d.FICHAS || [];
  PREGUNTAS = d.PREGUNTAS || []; ORAL = d.ORAL || []; CHULETA = d.CHULETA || [];
  CONTENIDO = true;
  return true;
}

async function cargaManual(clave) {
  if (CACHE[clave]) return CACHE[clave];
  CACHE[clave] = await pideMaterial("/manual/" + encodeURIComponent(clave));
  return CACHE[clave];
}

/* =========================================================
   LECTURA EN VOZ ALTA
   ========================================================= */
const VOZ = { trozos: [], i: 0, estado: "parado", vel: 1, voz: null, li: null, pinta: null };

const hayVoz = () => typeof speechSynthesis !== "undefined" && typeof SpeechSynthesisUtterance !== "undefined";

function vocesEs() {
  if (!hayVoz()) return [];
  return speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang));
}
function eligeVoz() {
  const vs = vocesEs();
  if (!vs.length) return null;
  const guardada = lsGet("sea029:voz");
  return vs.find(v => v.voiceURI === guardada) || vs.find(v => /es[-_]ES/i.test(v.lang)) || vs[0];
}
function trocea(texto) {
  const frases = texto.replace(/\s+/g, " ").split(/(?<=[.:;!?])\s+/);
  const out = [];
  let acc = "";
  frases.forEach(f => {
    if ((acc + " " + f).trim().length > 230) { if (acc) out.push(acc.trim()); acc = f; }
    else acc += " " + f;
  });
  if (acc.trim()) out.push(acc.trim());
  return out.filter(Boolean);
}
function paraVoz() {
  if (!hayVoz()) return;
  speechSynthesis.cancel();
  VOZ.trozos = []; VOZ.i = 0; VOZ.estado = "parado";
  if (VOZ.li) VOZ.li.classList.remove("leyendo");
  VOZ.li = null;
  if (VOZ.pinta) VOZ.pinta();
}
function siguienteTrozo() {
  if (VOZ.i >= VOZ.trozos.length) { paraVoz(); return; }
  const u = new SpeechSynthesisUtterance(VOZ.trozos[VOZ.i]);
  u.lang = "es-ES";
  u.rate = VOZ.vel;
  if (VOZ.voz) u.voice = VOZ.voz;
  u.onend = () => { if (VOZ.estado === "leyendo") { VOZ.i++; siguienteTrozo(); } };
  u.onerror = () => paraVoz();
  speechSynthesis.speak(u);
  if (VOZ.pinta) VOZ.pinta();
}
function lee(texto, li, repinta) {
  paraVoz();
  VOZ.voz = eligeVoz();
  VOZ.trozos = trocea(texto);
  VOZ.i = 0; VOZ.estado = "leyendo"; VOZ.li = li; VOZ.pinta = repinta;
  if (li) li.classList.add("leyendo");
  siguienteTrozo();
}
function pausaVoz() {
  if (VOZ.estado === "leyendo") { speechSynthesis.pause(); VOZ.estado = "pausa"; }
  else if (VOZ.estado === "pausa") { speechSynthesis.resume(); VOZ.estado = "leyendo"; }
  if (VOZ.pinta) VOZ.pinta();
}

/* =========================================================
   RUTAS Y ARMAZON
   ========================================================= */
const ir = hash => { location.hash = hash; };

function ruta() {
  const h = (location.hash || "#/").replace(/^#/, "");
  const p = h.split("/").filter(Boolean);
  if (!p.length) return { vista: "indice" };
  if (p[0] === "u" && p[1] && p[2]) return { vista: "unidad", man: p[1], ud: +p[2], sec: p[3] || "plan" };
  return { vista: p[0], sub: p[1] };
}

const MENU = [
  ["indice", "Unidades", "indice", "#/"],
  ["buscar", "Buscar", "buscar", "#/buscar"],
  ["examen", "Examen general", "examen", "#/examen"],
  ["chuleta", "Chuleta", "chuleta", "#/chuleta"],
  ["falladas", "Mis falladas", "falladas", "#/falladas"],
];

function pintaNav() {
  const r = ruta();
  const actual = r.vista === "unidad" ? "indice" : r.vista;
  let h = '<div class="titulo">Estudio</div>';
  h += '<button type="button" data-ir="#/hoy" aria-current="' + (actual === "hoy") + '" class="hoy-nav">' +
    icono("hoy") + "<span>Estudiar hoy</span>" +
    (pendientesHoy().length ? '<span class="cifra">' + pendientesHoy().length + "</span>" : "") + "</button>";
  MENU.forEach(([id, txt, ic, hash]) => {
    let n = "";
    if (id === "falladas") n = S.wrong.length || "";
    if (id === "chuleta") n = CHULETA.length;
    h += '<button type="button" data-ir="' + hash + '" aria-current="' + (actual === id) + '">' +
      icono(ic) + "<span>" + txt + "</span>" + (n ? '<span class="cifra">' + n + "</span>" : "") + "</button>";
  });
  if (SESION) {
    h += '<div class="titulo" style="margin-top:16px">Cuenta</div>' +
      '<button type="button" data-ir="#/perfil" aria-current="' + (actual === "perfil") + '">' +
      icono("perfil") + "<span>Mi perfil</span></button>";
  }
  if (ADMIN) {
    h += '<div class="titulo" style="margin-top:16px">Administración</div>' +
      '<button type="button" data-ir="#/panel" aria-current="' + (actual === "panel") + '">' +
      icono("panel") + "<span>Usuarios</span></button>";
  }
  const nav = $("nav");
  nav.innerHTML = h;
  nav.querySelectorAll("[data-ir]").forEach(b => {
    b.onclick = () => { cierraMenu(); ir(b.dataset.ir); };
    const t = b.querySelector("span:not(.cifra)");
    if (t) b.title = t.textContent;                 // el rotulo, cuando esta plegada
  });
}

function cabecera(ruta, titulo) {
  $("ruta").textContent = ruta;
  $("titulo").textContent = titulo;
  document.title = titulo + " · TemarioVigilanteSeguridad";
}
const cierraMenu = () => { $("app").dataset.menu = "0"; const v = document.querySelector(".velo"); if (v) v.remove(); };

/* Plegar la lateral. En pantalla estrecha el boton abre el cajon, asi que
   solo se pliega por encima del punto en que la lateral es una columna fija. */
const anchaHay = () => matchMedia("(min-width:1001px)").matches;

function pintaLateral() {
  const abierta = $("app").dataset.lat !== "0";
  const b = $("hambBtn");
  b.setAttribute("aria-expanded", String(abierta));
  b.title = anchaHay() ? (abierta ? "Ocultar el menú" : "Mostrar el menú") : "Menú";
}

function plegable(v) {
  $("app").dataset.lat = v ? "1" : "0";
  lsSet("sea029:lateral", v ? "1" : "0");
  pintaLateral();
}

function pinta() {
  paraVoz();
  const r = ruta();
  pintaNav();
  window.scrollTo({ top: 0, behavior: "instant" });
  if (r.vista === "unidad") return vistaUnidad(r);
  if (r.vista === "buscar") return vistaBuscar();
  if (r.vista === "examen") return vistaExamenGeneral();
  if (r.vista === "chuleta") return vistaChuletaGeneral();
  if (r.vista === "falladas") return vistaFalladas();
  if (r.vista === "panel") return vistaAdmin();
  if (r.vista === "perfil") return vistaPerfil();
  if (r.vista === "hoy") return ruta().sub === "fichas" ? vistaHoyFichas() : vistaHoy();
  if (r.vista === "inscripcion") return vistaInscripcion();
  if (r.vista === "pago") return vistaPagoHecho();
  return vistaIndice();
}
window.addEventListener("hashchange", () => { if (SESION || TOKEN) pinta(); });

/* =========================================================
   INDICE DE UNIDADES
   ========================================================= */
let filtroMod = "";

function vistaIndice() {
  cabecera("Panel", "Tus unidades");
  const p = $("vista");
  const us = unidades();
  const conMaterial = us.filter(u => temasDe(u.man, u.ud).length).length;
  const completas = us.filter(u => progresoUD(u.man, u.ud) === 100).length;
  const medias = us.length ? Math.round(us.reduce((a, u) => a + progresoUD(u.man, u.ud), 0) / us.length) : 0;
  const fichasOk = FICHAS.filter(f => (S.box[fKey(f)] || 0) >= 2).length;

  let h = '<div class="resumen">' +
    kpi(medias + "%", "Avance medio", true) +
    kpi(hechosEpi() + " / " + totalEpi(), "Epígrafes leídos") +
    kpi(fichasOk + " / " + FICHAS.length, "Fichas dominadas") +
    kpi(completas + " / " + us.length, "Unidades al 100 %") +
    "</div>";

  h += mapaFlacos();

  h += '<div class="acciones">' +
    accion("buscar", "Buscar", "En todo el material", "buscar") +
    accion("examen", "Examen general", EX_N + " preguntas · " + EX_MIN + " min", "examen") +
    accion("chuleta", "Chuleta completa", CHULETA.length + " bloques", "chuleta") +
    accion("falladas", "Mis falladas", S.wrong.length + " pendientes", "falladas") +
    "</div>";

  const viejo = lsGet(TKEY);
  if (SESION && viejo && !hasData(S)) {
    h += '<div class="aviso" style="margin-bottom:22px">Tienes progreso guardado con el token antiguo <b>' +
      esc(viejo) + '</b>. <button class="link" id="traerBtn" type="button">Traerlo a esta cuenta</button> ' +
      '<span class="hint" id="traerMsg"></span></div>';
  }

  h += '<div class="bar"><span class="hint">Módulo</span>' +
    '<button class="chip" data-f="" aria-pressed="' + (filtroMod === "") + '">Todos</button>';
  MODULOS.forEach(m => h += '<button class="chip" data-f="' + m.id + '" aria-pressed="' +
    (filtroMod === m.id) + '">' + m.cod + "</button>");
  h += '<span class="spacer"></span><span class="hint">' + conMaterial + " de " + us.length +
    " unidades con material de repaso</span></div>";

  IDX.forEach(m => {
    if (filtroMod && filtroMod !== m.mod) return;
    const eps = m.uds.reduce((a, u) => a + u.epigrafes.length, 0);
    const d = m.uds.reduce((a, u) => a + u.epigrafes.filter(e => S.epi[epiKey(m.clave, u.n, e.n)]).length, 0);
    h += '<div class="mod-head" style="' + tono(m.mod) + '">' +
      '<span class="pastilla" style="background:var(--tono-2);color:var(--tono)">' + esc(m.cod) + "</span>" +
      "<h3>" + esc(m.nombre) + "</h3>" +
      '<span class="hint">' + d + " / " + eps + " epígrafes</span></div>";
    h += '<div class="uds">' + m.uds.map(u => tarjetaUD(m, u)).join("") + "</div>";
  });

  p.innerHTML = h;
  p.querySelectorAll("[data-f]").forEach(c => c.onclick = () => { filtroMod = c.dataset.f; vistaIndice(); });
  p.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => ir(b.dataset.ir));
  const tb = $("traerBtn");
  if (tb) tb.onclick = async () => {
    tb.disabled = true; $("traerMsg").textContent = "importando…";
    try { await importaToken(lsGet(TKEY)); lsDel(TKEY); updHud(); vistaIndice(); }
    catch (e) { $("traerMsg").textContent = e.message; tb.disabled = false; }
  };
}

/* cuadricula de las 32 unidades tenida por tu acierto: se ve de un vistazo
   donde estas fallando en vez de repasar a ciegas */
/* la clave del manual entra en una celda; el nombre largo no */
const cortito = u => u.man === "INSTRUM" ? "INSTR" : u.man.replace("_2", "");

function mapaFlacos() {
  const us = unidades().filter(u => preguntasDe(u.man, u.ud).length);
  const con = us.filter(u => tino(u.man, u.ud) !== null);
  if (!con.length) return "";
  const flojas = con.filter(u => tino(u.man, u.ud) < 75)
    .sort((a, b) => tino(a.man, a.ud) - tino(b.man, b.ud));

  let h = '<section class="flacos"><div class="flacos-cab"><h3>Dónde estás fallando</h3>' +
    '<span class="hint">' + con.length + " de " + us.length + " unidades con test suficiente</span></div>" +
    '<div class="mapa">';
  us.forEach(u => {
    const t = tino(u.man, u.ud);
    const clase = t === null ? "sin" : t >= 85 ? "bien" : t >= 75 ? "regular" : "mal";
    h += '<button class="celda ' + clase + '" type="button" data-ir="#/u/' + u.man + "/" + u.ud + '/test" ' +
      'title="' + esc(u.cod + " UD " + u.ud + " · " + u.titulo) + (t === null ? " · sin datos" : " · " + t + " % de acierto") + '">' +
      '<span class="c-k">' + esc(cortito(u)) + " · " + u.ud + "</span>" +
      '<span class="c-t">' + (t === null ? "—" : t + "%") + "</span></button>";
  });
  h += "</div>";
  if (flojas.length) {
    h += '<p class="flacos-pie">Empieza por <b>' + esc(flojas[0].titulo) + "</b> (" +
      tino(flojas[0].man, flojas[0].ud) + " % de acierto)" +
      (flojas.length > 1 ? " y <b>" + esc(flojas[1].titulo) + "</b> (" + tino(flojas[1].man, flojas[1].ud) + " %)" : "") + ".</p>";
  } else {
    h += '<p class="flacos-pie">Vas por encima del 75 % en todo lo que has probado.</p>';
  }
  return h + "</section>";
}

const kpi = (v, l, acento) => '<div class="kpi' + (acento ? " acento" : "") + '"><div class="v">' + v + '</div><div class="l">' + l + "</div></div>";
const accion = (id, t, sub, ic) =>
  '<button class="accion" type="button" data-ir="#/' + id + '">' +
  '<span class="ic">' + icono(ic, 20) + "</span>" +
  '<span><span class="tt">' + t + '</span><span class="ts">' + sub + "</span></span></button>";

function tarjetaUD(m, u) {
  const man = m.clave, ud = u.n;
  const pct = progresoUD(man, ud);
  const nT = temasDe(man, ud).length, nF = fichasDe(man, ud).length;
  const nQ = preguntasDe(man, ud).length, nO = oralDe(man, ud).length, nC = chuletaDe(man, ud).length;
  const plural = (n, uno, varios) => n + " " + (n === 1 ? uno : varios);
  const partes = [plural(u.epigrafes.length, "epígrafe", "epígrafes")];
  if (nT) partes.push(plural(nT, "resumen", "resúmenes"));
  if (nF) partes.push(plural(nF, "ficha", "fichas"));
  if (nQ) partes.push(plural(nQ, "pregunta", "preguntas"));
  if (nO) partes.push(plural(nO, "oral", "orales"));
  if (nC) partes.push(plural(nC, "chuleta", "chuletas"));

  return '<button class="ud-card" type="button" data-ir="#/u/' + man + "/" + ud + '" style="' + tono(m.mod) + '">' +
    '<span class="ilustra">' +
    '<span class="num">UD ' + String(ud).padStart(2, "0") + "</span>" +
    (pct === 100 ? '<span class="insignia">Superada</span>' : "") +
    dibujo(man, ud) + "</span>" +
    '<span class="ud-cuerpo">' +
    "<h4>" + esc(u.titulo) + "</h4>" +
    '<span class="meta">' + partes.map(x => "<span>" + x + "</span>").join("") + "</span>" +
    '<span class="pie"><span class="barp' + (pct === 100 ? " ok" : "") + '"><i style="width:' + pct + '%"></i></span>' +
    '<span class="pct">' + pct + "%</span></span></span></button>";
}

/* =========================================================
   UNA UNIDAD
   ========================================================= */
const SECCIONES = [
  ["plan", "Plan"], ["temario", "Temario"], ["resumen", "Resumen"], ["fichas", "Fichas"],
  ["test", "Test"], ["examen", "Examen"], ["oral", "Oral"], ["chuleta", "Chuleta"]
];

function seccionesDe(man, ud) {
  const u = unidad(man, ud);
  const n = {
    plan: "", temario: u.epis.length, resumen: temasDe(man, ud).length,
    fichas: fichasDe(man, ud).length, test: preguntasDe(man, ud).length,
    examen: preguntasDe(man, ud).length >= 10 ? "" : null,
    oral: oralDe(man, ud).length, chuleta: chuletaDe(man, ud).length
  };
  return SECCIONES.filter(([id]) => n[id] !== 0 && n[id] !== null).map(([id, t]) => [id, t, n[id]]);
}

async function vistaUnidad(r) {
  const u = unidad(r.man, r.ud);
  if (!u) { ir("#/"); return; }
  const secs = seccionesDe(r.man, r.ud);
  const sec = secs.some(s => s[0] === r.sec) ? r.sec : "plan";
  cabecera(u.cod + " · UD " + String(u.ud).padStart(2, "0"), u.titulo);

  let h = '<div class="ud-hero" style="' + tono(u.mod) + '">' +
    '<span class="escudo">' + dibujo(r.man, r.ud) + "</span>" +
    '<div class="txt"><div class="k">' + esc(modById(u.mod).cod) + " · " + esc(u.cod) + "</div>" +
    "<h2>" + esc(u.titulo) + "</h2>" +
    '<p class="sub">' + esc(u.manNombre) + "</p></div>" +
    '<div class="aro"><b>' + progresoUD(r.man, r.ud) + "%</b><span>de la unidad</span></div></div>";

  h += '<nav class="tabs" role="tablist">' + secs.map(([id, t, n]) =>
    '<button class="tab" type="button" role="tab" data-ir="#/u/' + r.man + "/" + r.ud + "/" + id + '"' +
    ' aria-selected="' + (id === sec) + '">' + t + (n ? '<span class="n">' + n + "</span>" : "") + "</button>"
  ).join("") + "</nav>";

  h += '<div id="panel" class="panel-uni"></div>';
  const p = $("vista");
  p.innerHTML = h;
  p.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => ir(b.dataset.ir));

  const ctx = { man: r.man, ud: r.ud, u };
  if (sec === "plan") panelPlan(ctx);
  else if (sec === "temario") await panelTemario(ctx);
  else if (sec === "resumen") panelResumen(ctx);
  else if (sec === "fichas") panelFichas(ctx);
  else if (sec === "test") panelTest(ctx);
  else if (sec === "examen") panelExamenUD(ctx);
  else if (sec === "oral") panelOral(ctx);
  else if (sec === "chuleta") panelChuleta(ctx, chuletaDe(r.man, r.ud));
}

/* ---------------- plan ---------------- */
function panelPlan(c) {
  const { man, ud, u } = c;
  const ts = temasDe(man, ud), fs = fichasDe(man, ud), qs = preguntasDe(man, ud), os = oralDe(man, ud);
  const cs = chuletaDe(man, ud);
  const best = S.uBest[uKey(man, ud)];
  const pasos = [];

  pasos.push({
    id: "temario", t: "Leer el temario de la unidad",
    d: "Los " + u.epis.length + " epígrafes del manual, con el texto íntegro. Puedes escucharlos en voz alta mientras sigues la lectura.",
    hecho: epiHechos(man, ud), total: u.epis.length
  });
  if (ts.length) pasos.push({
    id: "resumen", t: "Repasar con el resumen",
    d: "Lo esencial de la unidad en " + ts.length + (ts.length > 1 ? " bloques" : " bloque") + ". Sirve para refrescar sin releer el manual entero.",
    hecho: ts.filter(t => S.done[t.id]).length, total: ts.length
  });
  if (fs.length) pasos.push({
    id: "fichas", t: "Fijar con las fichas",
    d: "Repaso espaciado: la ficha sale de la rotación cuando la aciertas dos veces seguidas. Hazlas en sesiones cortas y repetidas.",
    hecho: fichasDominadas(man, ud), total: fs.length
  });
  if (qs.length) pasos.push({
    id: "test", t: "Comprobar con el test",
    d: "Corrección inmediata y explicación de cada respuesta. Lo que falles se guarda para repasarlo después.",
    hecho: best ? best.pct : 0, total: 100, nota: best ? "Mejor marca: " + best.pct + " %" : "Sin marca todavía"
  });
  if (qs.length >= 10) pasos.push({
    id: "examen", t: "Simular el examen de la unidad",
    d: "Sin corrección hasta el final y con cronómetro. Repítelo hasta pasar del 75 % con holgura.",
    hecho: best && best.examen ? best.examen : 0, total: 100,
    nota: best && best.examen ? "Mejor examen: " + best.examen + " %" : "Aún no lo has hecho"
  });
  if (os.length) pasos.push({
    id: "oral", t: "Responder en voz alta",
    d: "Es lo que vas a hacer delante del tribunal. Responde primero y solo después despliega el guion.",
    hecho: 0, total: 0
  });
  if (cs.length) pasos.push({
    id: "chuleta", t: "La víspera, la chuleta",
    d: "Las listas y las cifras que caen. Si la pregunta empieza por «cuántos» o «cuáles», la respuesta sale de aquí.",
    hecho: 0, total: 0
  });

  let h = '<p class="lead">Este es el orden que funciona: entender, condensar, memorizar, comprobar y decir en voz alta. ' +
    "Puedes saltar entre pasos, pero no te saltes el primero.</p>";
  h += '<ol class="plan">';
  pasos.forEach((s, i) => {
    const pct = s.total ? Math.round(s.hecho / s.total * 100) : null;
    h += '<li class="paso' + (pct === 100 ? " done" : "") + '">' +
      '<span class="pn">' + (pct === 100 ? "&#10003;" : i + 1) + "</span>" +
      "<div><h4>" + s.t + "</h4><p>" + s.d + "</p>" +
      (pct !== null ? '<div class="barp' + (pct === 100 ? " ok" : "") + '"><i style="width:' + pct + '%"></i></div>' +
        '<div class="pmeta">' + (s.nota || s.hecho + " de " + s.total) + "</div>" : "") +
      "</div>" +
      '<button class="btn ghost" type="button" data-ir="#/u/' + man + "/" + ud + "/" + s.id + '">Ir</button></li>';
  });
  h += "</ol>";
  h += '<div class="metodo"><h3>Cómo estudiar esta unidad</h3><ul>' +
    "<li><b>Sesiones de 25 minutos</b> con 5 de descanso. Más seguido, no más largo.</li>" +
    "<li><b>Espacia los repasos</b>: el mismo día, a los 2 días, a la semana y al mes. Las fichas ya lo hacen por ti.</li>" +
    "<li><b>Responde antes de mirar</b>. El esfuerzo de recordar es lo que fija; releer no fija nada.</li>" +
    "<li><b>Di la respuesta en voz alta</b>. En el examen oral no vale reconocerla, hay que producirla.</li>" +
    "<li><b>Vuelve a lo que fallaste</b>, no a lo que ya te sale.</li>" +
    "</ul></div>";

  $("panel").innerHTML = h;
  $("panel").querySelectorAll("[data-ir]").forEach(b => b.onclick = () => ir(b.dataset.ir));
}

/* ---------------- temario con lectura en voz alta ---------------- */
function tam(e) {
  const n = e.chars != null ? e.chars : (e.texto ? e.texto.length : 0);
  if (!n) return "";
  return n >= 1000 ? Math.round(n / 1000) + "k caracteres" : n + " caracteres";
}
const parrafos = txt => txt.split("\n")
  .map(l => l.startsWith("### ") ? "<h5>" + esc(l.slice(4)) + "</h5>" : "<p>" + esc(l) + "</p>").join("");

async function panelTemario(c) {
  const { man, ud } = c;
  const panel = $("panel");
  panel.innerHTML = '<p class="empty">Cargando el temario…</p>';
  let datos;
  try { datos = await cargaManual(man); }
  catch (e) { panel.innerHTML = '<p class="empty">No se pudo cargar el temario de este manual.</p>'; return; }
  const real = datos.uds.find(x => x.n === +ud);
  if (!real) { panel.innerHTML = '<p class="empty">Esta unidad no tiene texto cargado.</p>'; return; }

  let h = '<p class="lead">El texto íntegro del manual. Pulsa un epígrafe para leerlo, el cuadro para marcarlo como entendido, y <b>Escuchar</b> si prefieres oírlo.</p>';

  if (hayVoz()) {
    h += '<div class="voz"><span class="hint">Voz</span>' +
      '<select id="vozSel" aria-label="Voz"></select>' +
      '<span class="hint">Velocidad</span><select id="vozVel" aria-label="Velocidad">' +
      [0.8, 0.9, 1, 1.1, 1.25, 1.5].map(v => '<option value="' + v + '"' + (v === VOZ.vel ? " selected" : "") + ">" + v + "×</option>").join("") +
      '</select><span class="spacer"></span>' +
      '<button class="btn ghost chico" id="vozTodo" type="button">Escuchar la unidad entera</button>' +
    '<button class="btn ghost chico" id="vozStop" type="button">Detener</button></div>';
  } else {
    h += '<div class="aviso" style="margin-bottom:16px">Este navegador no tiene lectura en voz alta. En Chrome, Edge o Safari sí funciona.</div>';
  }

  h += '<div class="bar"><button class="btn ghost chico" id="abrirTodo" type="button">Abrir todos</button>' +
    '<button class="btn ghost chico" id="cerrarTodo" type="button">Cerrar todos</button>' +
    '<span class="spacer"></span><span class="hint" id="epiCont"></span></div>';

  h += '<ul class="epis">' + real.epigrafes.map(e => {
    const k = epiKey(man, ud, e.n);
    return '<li class="epi' + (S.epi[k] ? " done" : "") + '" data-k="' + esc(k) + '" data-n="' + esc(e.n) + '">' +
      '<button class="epi-h" type="button">' +
      '<span class="mark" data-act="mark" role="button" tabindex="0" aria-label="Marcar como entendido">&#10003;</span>' +
      '<span class="epi-n">' + esc(e.n) + "</span>" +
      '<span class="epi-t">' + esc(e.titulo) + "</span>" +
      '<span class="epi-m">pág. ' + e.pag + " · " + tam(e) + "</span></button>" +
      '<div class="epi-b" hidden></div></li>';
  }).join("") + "</ul>";
  panel.innerHTML = h;

  const cuenta = () => { $("epiCont").textContent = epiHechos(man, ud) + " de " + real.epigrafes.length + " marcados"; };
  cuenta();

  if (hayVoz()) {
    const rellena = () => {
      const sel = $("vozSel"); if (!sel) return;
      const vs = vocesEs();
      if (!vs.length) { sel.innerHTML = '<option>del sistema</option>'; sel.disabled = true; return; }
      const actual = eligeVoz();
      sel.innerHTML = vs.map(v => '<option value="' + esc(v.voiceURI) + '"' +
        (actual && v.voiceURI === actual.voiceURI ? " selected" : "") + ">" + esc(v.name) + "</option>").join("");
      sel.onchange = () => { lsSet("sea029:voz", sel.value); VOZ.voz = eligeVoz(); };
    };
    rellena();
    speechSynthesis.onvoiceschanged = rellena;
    $("vozVel").onchange = e => {
      VOZ.vel = +e.target.value;
      if (VOZ.estado !== "parado") { const t = VOZ.trozos.slice(VOZ.i).join(" "); const li = VOZ.li; const rp = VOZ.pinta; lee(t, li, rp); }
    };
    $("vozStop").onclick = paraVoz;
    $("vozTodo").onclick = () => {
      const entera = real.epigrafes.map(e => e.n + ". " + e.titulo + ". " + e.texto).join("\n\n");
      lee(entera, null, null);
      $("vozTodo").textContent = "Sonando…";
      setTimeout(() => { const b = $("vozTodo"); if (b) b.textContent = "Escuchar la unidad entera"; }, 3000);
    };
  }

  panel.querySelectorAll(".epi").forEach(li => {
    const cuerpo = li.querySelector(".epi-b");
    const ep = real.epigrafes.find(x => x.n === li.dataset.n);

    const pintaBotones = () => {
      const zona = cuerpo.querySelector(".epi-acc"); if (!zona) return;
      const leyendo = VOZ.li === li && VOZ.estado !== "parado";
      zona.innerHTML =
        '<button class="btn ghost chico" data-v="play" type="button">' + (leyendo ? "Reiniciar" : "Escuchar") + "</button>" +
        (leyendo ? '<button class="btn ghost chico" data-v="pausa" type="button">' + (VOZ.estado === "pausa" ? "Reanudar" : "Pausar") + "</button>" +
          '<button class="btn ghost chico" data-v="stop" type="button">Detener</button>' : "");
      zona.querySelectorAll("[data-v]").forEach(b => b.onclick = ev => {
        ev.stopPropagation();
        if (b.dataset.v === "play") lee(ep.texto, li, pintaBotones);
        else if (b.dataset.v === "pausa") pausaVoz();
        else paraVoz();
      });
    };

    const carga = () => {
      if (cuerpo.dataset.cargado) return;
      cuerpo.innerHTML = (hayVoz() ? '<div class="epi-acc"></div>' : "") +
        '<div class="lectura">' + parrafos(ep.texto) + "</div>";
      cuerpo.dataset.cargado = "1";
      pintaBotones();
    };

    li.querySelector(".epi-h").addEventListener("click", e => {
      if (e.target.closest('[data-act="mark"]')) {
        const k = li.dataset.k;
        S.epi[k] = !S.epi[k];
        li.classList.toggle("done", !!S.epi[k]);
        save(); updHud(); cuenta();
        return;
      }
      if (!cuerpo.hidden) { cuerpo.hidden = true; if (VOZ.li === li) paraVoz(); return; }
      carga(); cuerpo.hidden = false;
    });
    li._abrir = () => { carga(); cuerpo.hidden = false; };
    li._cerrar = () => { cuerpo.hidden = true; };
  });
  $("abrirTodo").onclick = () => panel.querySelectorAll(".epi").forEach(li => li._abrir());
  $("cerrarTodo").onclick = () => { paraVoz(); panel.querySelectorAll(".epi").forEach(li => li._cerrar()); };
}

/* ---------------- resumen ---------------- */
function panelResumen(c) {
  const ts = temasDe(c.man, c.ud);
  let h = '<p class="lead">Lo esencial de la unidad, condensado. Marca el bloque cuando lo tengas.</p><div class="blocks">';
  ts.forEach(t => {
    h += '<article class="block' + (S.done[t.id] ? " done" : "") + '" data-id="' + t.id + '" data-open="0">' +
      '<button class="bh" type="button"><span class="num">' + t.n + '</span><span class="t">' + t.t + "</span>" +
      '<span class="mark" data-act="mark" role="button" tabindex="0" aria-label="Marcar">&#10003;</span>' +
      '<span class="caret">&#9656;</span></button><div class="bbody" hidden>';
    t.c.forEach(s => { h += "<h4>" + s.h + "</h4><ul>" + s.l.map(x => "<li>" + x + "</li>").join("") + "</ul>"; });
    h += "</div></article>";
  });
  const panel = $("panel");
  panel.innerHTML = h + "</div>";
  panel.querySelectorAll(".block").forEach(bl => {
    bl.querySelector(".bh").addEventListener("click", e => {
      if (e.target.closest('[data-act="mark"]')) {
        const id = bl.dataset.id; S.done[id] = !S.done[id];
        bl.classList.toggle("done", !!S.done[id]); save(); return;
      }
      const open = bl.dataset.open === "1";
      bl.dataset.open = open ? "0" : "1";
      bl.querySelector(".bbody").hidden = open;
    });
  });
}

/* ---------------- fichas ---------------- */
let fDeck = [], fIdx = 0, fModo = "esp", fCtx = null;
function buildDeck() {
  const base = fCtx.lista || fichasDe(fCtx.man, fCtx.ud);
  if (fModo === "esp") {
    const hoy = pendientesHoy(base);
    fDeck = hoy.length ? shuffle(hoy.slice()) : shuffle(base.slice());
  } else fDeck = shuffle(base.slice());
  fIdx = 0;
}
function panelFichas(c) {
  fCtx = c;
  const base = c.lista || fichasDe(c.man, c.ud);
  const pend = pendientesHoy(base).length;
  let h = '<p class="lead">Pregunta delante, respuesta detrás. En <b>repaso espaciado</b> cada ficha vuelve el día que toca: ' +
    "acertarla la aleja (1, 3, 7, 21 y 60 días) y fallarla la devuelve al principio. " +
    (pend ? "<b>Hoy te tocan " + pend + "</b>." : "Hoy no te toca ninguna: vuelve mañana.") + "</p>";
  h += '<div class="bar"><span class="hint">Modo</span>' +
    '<button class="chip" data-md="esp" aria-pressed="' + (fModo === "esp") + '">Repaso espaciado</button>' +
    '<button class="chip" data-md="all" aria-pressed="' + (fModo === "all") + '">Todas, al azar</button>' +
    '<span class="spacer"></span><span class="hint" id="fStats"></span></div>';
  h += '<div class="deck"><div class="card" id="card" data-flip="0" tabindex="0" role="button" aria-label="Girar ficha"><div class="card-in">' +
    '<div class="face front"><span class="lbl" id="fLbl"></span><div class="q" id="fQ"></div><span class="lbl" style="opacity:.6">Pulsa para ver la respuesta</span></div>' +
    '<div class="face back"><span class="lbl">Respuesta</span><div class="a" id="fA"></div></div></div></div>' +
    '<div class="deck-nav"><button class="btn ghost" id="prev" type="button">&larr;</button>' +
    '<span class="counter" id="fCount"></span>' +
    '<div class="grade"><button class="bad" id="gBad" type="button">La fallé</button>' +
    '<button class="good" id="gGood" type="button">La sé</button></div>' +
    '<button class="btn ghost" id="next" type="button">&rarr;</button></div></div>';
  const panel = $("panel");
  panel.innerHTML = h;
  buildDeck(); paintFicha();
  panel.querySelectorAll("[data-md]").forEach(x => x.onclick = () => {
    fModo = x.dataset.md;
    panel.querySelectorAll("[data-md]").forEach(y => y.setAttribute("aria-pressed", String(y === x)));
    buildDeck(); paintFicha();
  });
  $("prev").onclick = () => { if (fDeck.length) { fIdx = (fIdx - 1 + fDeck.length) % fDeck.length; paintFicha(); } };
  $("next").onclick = () => { if (fDeck.length) { fIdx = (fIdx + 1) % fDeck.length; paintFicha(); } };
  $("gBad").onclick = () => gradeFicha(0);
  $("gGood").onclick = () => gradeFicha(1);
  const card = $("card");
  card.onclick = () => card.dataset.flip = card.dataset.flip === "1" ? "0" : "1";
  card.onkeydown = e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); card.click(); } };
}
function gradeFicha(ok) {
  const f = fDeck[fIdx]; if (!f) return;
  califica(f, ok);
  const quedan = fDeck.filter((x, i) => i !== fIdx && toca(x));
  if (fModo === "esp" && !quedan.length) { paintFicha(true); return; }
  if (fDeck.length) { fIdx = (fIdx + 1) % fDeck.length; paintFicha(); }
}
function paintFicha(terminado) {
  const f = fDeck[fIdx];
  const base = fCtx.lista || fichasDe(fCtx.man, fCtx.ud);
  if (terminado || !f) {
    $("fQ").innerHTML = terminado
      ? "Has terminado el repaso de hoy.<br><span style=\"font-weight:400;font-size:var(--t-base);color:var(--gris)\">Vuelve mañana: las que has acertado no tocan hasta dentro de unos días.</span>"
      : "No quedan fichas.";
    $("fA").textContent = "";
    $("fCount").textContent = "";
    $("card").dataset.flip = "0";
  } else {
    $("card").dataset.flip = "0";
    const e = S.sr[fKey(f)];
    $("fLbl").textContent = temaById(f.t).t + (e && e.n ? " · acertada " + e.n + (e.n > 1 ? " veces seguidas" : " vez") : " · nueva");
    $("fQ").innerHTML = f.q; $("fA").innerHTML = f.a;
    $("fCount").textContent = (fIdx + 1) + " / " + fDeck.length;
  }
  const pend = pendientesHoy(base).length;
  $("fStats").textContent = base.filter(dominada).length + " de " + base.length + " dominadas · " +
    (pend ? pend + " tocan hoy" : "ninguna toca hoy");
}
document.addEventListener("keydown", e => {
  if (!$("card") || !fDeck.length || !$("gate").hidden) return;
  if (e.target.matches("input, textarea, select")) return;
  if (e.key === "ArrowRight") { fIdx = (fIdx + 1) % fDeck.length; paintFicha(); }
  if (e.key === "ArrowLeft") { fIdx = (fIdx - 1 + fDeck.length) % fDeck.length; paintFicha(); }
});

/* =========================================================
   MOTOR DE PREGUNTAS
   ========================================================= */
let tSet = [], tIdx = 0, tSel = [], tAnswered = false, tScore = 0, tFails = [];
let tCfg = { len: 10, of: "" };
let tCtx = null;
let exTimer = null, exFin = 0;
const EX_N = 40, EX_MIN = 30;
const EXU_N = 20, EXU_MIN = 15;

function panelTest(c) {
  tCtx = c;
  const pool = preguntasDe(c.man, c.ud);
  const ofic = pool.filter(q => q.of).length;
  const best = S.uBest[uKey(c.man, c.ud)];
  const mias = pool.filter(q => S.wrong.includes(q.i)).length;

  let h = '<p class="lead">' + pool.length + " preguntas de esta unidad, con corrección inmediata y la explicación del temario.</p>";
  if (ofic) h += '<div class="bar"><span class="hint">Origen</span>' +
    '<button class="chip" data-tf="" aria-pressed="' + (tCfg.of === "") + '">Todas</button>' +
    '<button class="chip" data-tf="si" aria-pressed="' + (tCfg.of === "si") + '">Solo oficiales (' + ofic + ")</button>" +
    '<button class="chip" data-tf="no" aria-pressed="' + (tCfg.of === "no") + '">Sin oficiales</button></div>';
  h += '<div class="bar"><span class="hint">Preguntas</span>' +
    [5, 10, 20, 999].map(n => '<button class="chip" data-tl="' + n + '" aria-pressed="' + (tCfg.len === n) + '">' +
      (n === 999 ? "Todas" : n) + "</button>").join("") + "</div>";
  h += '<div class="bar"><button class="btn" id="start" type="button">Empezar test</button>' +
    (mias ? '<button class="btn ghost" id="startFails" type="button">Repasar mis ' + mias + " falladas</button>" : "") +
    '<span class="spacer"></span><span class="hint">' +
    (best ? "Mejor marca en la unidad: " + best.pct + " %" : "Aún sin marca en esta unidad") + "</span></div>";

  const panel = $("panel");
  panel.innerHTML = h;
  panel.querySelectorAll("[data-tf]").forEach(x => x.onclick = () => {
    tCfg.of = x.dataset.tf;
    panel.querySelectorAll("[data-tf]").forEach(y => y.setAttribute("aria-pressed", String(y === x)));
  });
  panel.querySelectorAll("[data-tl]").forEach(x => x.onclick = () => {
    tCfg.len = +x.dataset.tl;
    panel.querySelectorAll("[data-tl]").forEach(y => y.setAttribute("aria-pressed", String(y === x)));
  });
  $("start").onclick = () => {
    let s = pool.slice();
    if (tCfg.of === "si") s = s.filter(q => q.of);
    if (tCfg.of === "no") s = s.filter(q => !q.of);
    shuffle(s);
    if (tCfg.len < s.length) s = s.slice(0, tCfg.len);
    arranca(s, false, 0);
  };
  const sf = $("startFails");
  if (sf) sf.onclick = () => arranca(pool.filter(q => S.wrong.includes(q.i)), false, 0);
}

function panelExamenUD(c) {
  tCtx = c;
  const pool = preguntasDe(c.man, c.ud);
  const n = Math.min(EXU_N, pool.length);
  const best = S.uBest[uKey(c.man, c.ud)];
  $("panel").innerHTML = '<p class="lead">Simulacro de la unidad: <b>' + n + " preguntas</b> en <b>" + EXU_MIN +
    " minutos</b>, sin corrección hasta el final. Se aprueba con <b>75 %</b>.</p>" +
    '<div class="bar"><button class="btn" id="exStart" type="button">Empezar</button>' +
    '<span class="spacer"></span><span class="hint">' +
    (best && best.examen ? "Mejor examen de la unidad: " + best.examen + " %" : "Aún no lo has hecho") + "</span></div>" +
    '<div class="aviso">El cronómetro sigue corriendo aunque cambies de pestaña. Si se agota, se corrige lo respondido.</div>';
  $("exStart").onclick = () => arranca(shuffle(pool.slice()).slice(0, n), true, EXU_MIN);
}

function vistaExamenGeneral() {
  tCtx = null;
  cabecera("Herramientas", "Examen general");
  const b = S.examBest ? "Mejor examen: " + S.examBest.pct + " % · " + S.examBest.fecha : "Aún no has hecho ningún examen";
  $("vista").innerHTML = '<div id="panel"><p class="lead">Simulacro completo: <b>' + EX_N +
    " preguntas</b> de los cuatro módulos en <b>" + EX_MIN + " minutos</b>, sin corrección hasta el final. Se aprueba con <b>75 %</b>.</p>" +
    '<div class="bar"><button class="btn" id="exStart" type="button">Empezar examen</button>' +
    '<span class="spacer"></span><span class="hint">' + b + "</span></div>" +
    '<div class="aviso">El cronómetro corre aunque cambies de pestaña. Si se agota, se corrige lo respondido hasta ese momento.</div></div>';
  $("exStart").onclick = () => arranca(shuffle(PREGUNTAS.map((q, i) => Object.assign({}, q, { i }))).slice(0, EX_N), true, EX_MIN);
}

function vistaFalladas() {
  tCtx = null;
  cabecera("Herramientas", "Mis falladas");
  const pool = PREGUNTAS.map((q, i) => Object.assign({}, q, { i })).filter(q => S.wrong.includes(q.i));
  let h = '<div id="panel">';
  if (!pool.length) {
    h += '<p class="empty">No tienes preguntas falladas pendientes. Aparecen aquí en cuanto falles alguna y salen cuando la aciertas.</p>';
  } else {
    h += '<p class="lead">Repasa solo lo que has fallado. Una pregunta sale de esta lista cuando la aciertas.</p>' +
      '<div class="bar"><button class="btn" id="start" type="button">Repasar las ' + pool.length + "</button></div>";
  }
  $("vista").innerHTML = h + "</div>";
  const s = $("start");
  if (s) s.onclick = () => arranca(shuffle(pool.slice()), false, 0);
}

function arranca(set, examen, minutos) {
  if (!set.length) return;
  tSet = set; tIdx = 0; tScore = 0; tFails = []; tSel = []; tAnswered = false;
  clearInterval(exTimer);
  if (examen) { exFin = Date.now() + minutos * 60000; exTimer = setInterval(tick, 1000); }
  paintQ(examen);
}

function paintQ(examen) {
  const p = $("panel"), q = tSet[tIdx], multi = q.c.length > 1, tm = temaById(q.t);
  let h = '<div class="progress"><i style="width:' + (tIdx / tSet.length * 100) + '%"></i></div>';
  h += '<div class="qcard"><div class="qmeta">' +
    '<span class="pill">' + esc(tm.man) + " UD " + String(tm.ud).padStart(2, "0") + "</span>" +
    '<span class="pill">' + esc(tm.t) + "</span>" +
    '<span class="pill">' + (tIdx + 1) + " de " + tSet.length + "</span>" +
    (q.of ? '<span class="pill of">' + esc(q.of) + "</span>" : "") +
    (multi ? '<span class="pill multi">Respuesta múltiple</span>' : "") +
    (examen ? '<span class="pill time" id="clock">--:--</span>' : "") +
    '<span class="spacer"></span><span>Aciertos: ' + tScore + "</span></div>";
  h += '<div class="qtext">' + q.q + '</div><div class="opts" id="opts">';
  q.o.forEach((o, i) => { h += '<button class="opt" type="button" data-i="' + i + '"><span class="k">' + "abcd"[i] + ')</span><span>' + o + "</span></button>"; });
  h += '</div><div id="fb"></div>';
  h += '<div class="bar" style="margin:18px 0 0"><button class="btn" id="check" type="button">Comprobar</button>' +
    '<button class="btn ghost" id="skip" type="button">Saltar</button>' +
    '<span class="spacer"></span><button class="btn ghost" id="abort" type="button">' +
    (examen ? "Abandonar" : "Terminar") + "</button></div></div>";
  p.innerHTML = h;
  tSel = []; tAnswered = false;
  p.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    if (tAnswered) return;
    const i = +b.dataset.i;
    if (multi) { const k = tSel.indexOf(i); if (k >= 0) tSel.splice(k, 1); else tSel.push(i); b.classList.toggle("sel"); }
    else { tSel = [i]; p.querySelectorAll(".opt").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); }
  });
  $("check").onclick = () => { if (!tAnswered) check(examen); else nextQ(examen); };
  $("skip").onclick = () => { if (!tAnswered) registerFail(q); nextQ(examen); };
  $("abort").onclick = () => termina(examen, true);
  if (examen) tick();
}
function check(examen) {
  const q = tSet[tIdx], p = $("panel");
  if (!tSel.length) return;
  tAnswered = true;
  const ok = tSel.length === q.c.length && tSel.every(i => q.c.includes(i));
  p.querySelectorAll(".opt").forEach(b => {
    const i = +b.dataset.i; b.disabled = true; b.classList.remove("sel");
    if (q.c.includes(i)) { b.classList.add("right"); b.querySelector(".k").classList.add("right"); }
    else if (tSel.includes(i)) { b.classList.add("wrong"); b.querySelector(".k").classList.add("wrong"); }
  });
  if (ok) tScore++; else registerFail(q);
  const tmq = temaById(q.t);
  if (tmq) apunta(tmq.man, tmq.ud, ok);
  marcaRacha();
  if (!examen) $("fb").innerHTML = '<div class="why"><b>' + (ok ? "Correcto." : "Incorrecto.") + "</b> " + q.w + "</div>";
  $("check").textContent = (tIdx + 1 === tSet.length) ? "Ver resultado" : "Siguiente";
}
function registerFail(q) { tFails.push(q); if (!S.wrong.includes(q.i)) { S.wrong.push(q.i); save(); } }
function nextQ(examen) {
  const q = tSet[tIdx];
  if (tAnswered) {
    const ok = tSel.length === q.c.length && tSel.every(i => q.c.includes(i));
    if (ok) { const k = S.wrong.indexOf(q.i); if (k >= 0) { S.wrong.splice(k, 1); save(); } }
  }
  tIdx++;
  if (tIdx >= tSet.length) termina(examen, false);
  else paintQ(examen);
}
function tick() {
  const c = $("clock"); if (!c) return;
  const ms = exFin - Date.now();
  if (ms <= 0) { c.textContent = "00:00"; termina(true, false); return; }
  const s = Math.floor(ms / 1000);
  c.textContent = String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}
function termina(examen, abortado) {
  clearInterval(exTimer);
  const hechas = abortado ? Math.max(1, tIdx + (tAnswered ? 1 : 0)) : tSet.length;
  const pct = Math.round(tScore / hechas * 100);
  if (!abortado) {
    if (!S.best || pct > S.best.pct) S.best = { pct, hits: tScore, total: tSet.length };
    if (tCtx) {
      const k = uKey(tCtx.man, tCtx.ud);
      const b = S.uBest[k] || {};
      if (!b.pct || pct > b.pct) b.pct = pct;
      if (examen && (!b.examen || pct > b.examen)) b.examen = pct;
      S.uBest[k] = b;
    } else if (examen) {
      const fecha = new Date().toLocaleDateString("es-ES");
      if (!S.examBest || pct > S.examBest.pct) S.examBest = { pct, fecha };
    }
    save();
  }
  $("panel").innerHTML = abortado
    ? '<div class="ud-hero" style="' + tono("mf0080") + '"><div class="txt"><h2>Sesión interrumpida</h2>' +
      '<p class="sub">' + tScore + " de " + hechas + " aciertos</p></div></div>" +
      '<div class="bar"><button class="btn" id="again" type="button">Volver</button></div>'
    : resultHTML(pct, examen);
  const a = $("again"); if (a) a.onclick = repite;
  const r = $("redo"); if (r) r.onclick = () => arranca(tFails.slice(), false, 0);
  updHud(); pintaNav();
}
function repite() {
  const r = ruta();
  if (r.vista === "unidad") vistaUnidad(r); else pinta();
}
function resultHTML(pct, examen) {
  let h = '<div class="ud-hero" style="' + tono(pct >= 75 ? "mf0272" : "mf0082") + '">' +
    '<div class="txt"><div class="k">' + (examen ? "Examen" : "Test") + "</div>" +
    "<h2>" + (pct >= 75 ? "Apto" : "A repasar") + "</h2></div>" +
    '<div class="aro"><b>' + pct + "%</b><span>nota</span></div></div>";
  h += '<div class="score">' +
    '<div class="stat ok"><div class="v">' + tScore + '</div><div class="l">Aciertos</div></div>' +
    '<div class="stat mal"><div class="v">' + (tSet.length - tScore) + '</div><div class="l">Fallos</div></div>' +
    '<div class="stat"><div class="v">' + S.wrong.length + '</div><div class="l">Falladas pendientes</div></div></div>';
  if (tFails.length) {
    h += '<h3 class="sec-h">Lo que has fallado</h3><div class="review">';
    tFails.forEach(q => {
      h += '<div class="rev"><div class="rq">' + q.q + '</div><div class="ra"><b>' +
        q.c.map(i => "abcd"[i] + ") " + plano(q.o[i])).join(" · ") + "</b><br>" + q.w + "</div></div>";
    });
    h += "</div>";
  } else h += '<div class="why">Pleno. Sube el número de preguntas o pasa a otra unidad.</div>';
  h += '<div class="bar" style="margin-top:20px"><button class="btn" id="again" type="button">Volver</button>' +
    (tFails.length ? '<button class="btn ghost" id="redo" type="button">Repetir solo las falladas</button>' : "") + "</div>";
  return h;
}

/* ---------------- oral ---------------- */
const oKey = o => o.t + ":" + ORAL.indexOf(o);
const NOTA_ORAL = { 0: "Ni idea", 1: "A medias", 2: "Clavada" };

function panelOral(c) {
  const os = oralDe(c.man, c.ud);
  const hechas = os.filter(o => (S.oral[oKey(o)] || 0) >= 2).length;

  let h = '<p class="lead">En el examen oral no vale reconocer la respuesta: hay que producirla. ' +
    'Escribe la tuya de memoria, luego destapa el guion y <b>califícate sin piedad</b>. ' +
    "Las que no claves vuelven a salirte marcadas.</p>";
  h += '<div class="bar"><span class="hint">' + hechas + " de " + os.length + " clavadas</span></div>";
  h += '<div class="oral">';
  os.forEach((o, i) => {
    const nota = S.oral[oKey(o)];
    const marca = nota === 2 ? "clavada" : nota === 1 ? "media" : nota === 0 ? "floja" : "";
    h += '<article class="oq ' + marca + '" data-k="' + esc(oKey(o)) + '">' +
      '<button type="button"><span class="qi">' + String(i + 1).padStart(2, "0") + "</span>" +
      '<span class="qt">' + o.q + "</span>" +
      '<span class="st">' + (nota == null ? "responder" : NOTA_ORAL[nota]) + "</span></button>" +
      '<div class="oa" hidden>' +
      '<textarea class="respuesta" rows="5" placeholder="Escribe aquí tu respuesta de memoria, sin mirar. Luego destapa el guion."></textarea>' +
      '<div class="bar" style="margin:12px 0 0"><button class="btn ghost chico" data-act="ver" type="button">Ver el guion</button></div>' +
      '<div class="guion" hidden><ul>' + o.p.map(x => "<li>" + x + "</li>").join("") + "</ul>" +
      '<div class="bar" style="margin:14px 0 0"><span class="hint">¿Cómo ha ido?</span>' +
      '<button class="chip" data-nota="0" type="button">Ni idea</button>' +
      '<button class="chip" data-nota="1" type="button">A medias</button>' +
      '<button class="chip" data-nota="2" type="button">Clavada</button></div></div>' +
      "</div></article>";
  });
  const panel = $("panel");
  panel.innerHTML = h + "</div>";

  panel.querySelectorAll(".oq").forEach(art => {
    const cab = art.querySelector("button");
    const cuerpo = art.querySelector(".oa");
    const guion = art.querySelector(".guion");
    cab.onclick = () => {
      cuerpo.hidden = !cuerpo.hidden;
      if (!cuerpo.hidden) art.querySelector(".respuesta").focus();
    };
    art.querySelector('[data-act="ver"]').onclick = () => { guion.hidden = false; };
    art.querySelectorAll("[data-nota]").forEach(b => b.onclick = () => {
      S.oral[art.dataset.k] = +b.dataset.nota;
      marcaRacha(); save();
      panelOral(c);
    });
  });
}

/* ---------------- chuleta ---------------- */
const CIRC = [
  { n: "1er círculo · interior", who: "Escolta personal", d: "Las personas más próximas al protegido; la distancia depende de la situación concreta. Misión: cubrir y proteger de un ataque y realizar una rápida evacuación a lugar seguro." },
  { n: "2º círculo", who: "Puestos de seguridad", d: "Guardan cierta distancia con el protegido, pero lo mantienen dentro de su campo de observación." },
  { n: "3er círculo", who: "Patrullas móviles y grupos de información", d: "El más alejado. No controlan ni vigilan al protegido, pero están dentro del dispositivo para una posible actuación si ocurriese alguna desgracia." }
];
const conv = (cap, cars) => '<div class="conv"><div class="cap">' + cap + "</div>" +
  cars.slice().reverse().map(c => '<div class="car ' + (c === "VIP" ? "vip" : "ve") + '">' + c + "</div>")
    .join('<div class="arrow">&#9650;</div>') + "</div>";
function selCirc(i) {
  const c = CIRC[i];
  $("cN").textContent = c.n; $("cW").textContent = c.who; $("cD").innerHTML = c.d;
  document.querySelectorAll("#cLeg button").forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.c === i)));
}
const diagramaCirculos = () =>
  '<div class="diagram"><svg viewBox="0 0 240 240" role="img" aria-label="Diagrama de los tres círculos concéntricos">' +
  '<circle class="d-ring" data-c="2" cx="120" cy="120" r="112" fill="var(--marca-2)" stroke="var(--marca)" stroke-width="1.5"></circle>' +
  '<circle class="d-ring" data-c="1" cx="120" cy="120" r="80" fill="var(--sup-3)" stroke="var(--marca)" stroke-width="1.5"></circle>' +
  '<circle class="d-ring" data-c="0" cx="120" cy="120" r="48" fill="var(--acento-2)" stroke="var(--acento)" stroke-width="1.5"></circle>' +
  '<circle cx="120" cy="120" r="20" fill="var(--marca)"></circle>' +
  '<text x="120" y="124" text-anchor="middle" fill="var(--sup)" font-family="JetBrains Mono, monospace" font-size="11">VIP</text>' +
  '<text x="120" y="90" text-anchor="middle" fill="var(--acento)" font-family="JetBrains Mono, monospace" font-size="12">1</text>' +
  '<text x="120" y="58" text-anchor="middle" fill="var(--marca)" font-family="JetBrains Mono, monospace" font-size="12">2</text>' +
  '<text x="120" y="26" text-anchor="middle" fill="var(--marca)" font-family="JetBrains Mono, monospace" font-size="12">3</text>' +
  '</svg><div class="d-info"><h4 id="cN"></h4><div class="who" id="cW"></div><p id="cD"></p>' +
  '<div class="d-legend" id="cLeg"></div></div></div>';
const diagramaCaravana = () =>
  '<div class="ref" style="margin-bottom:14px"><h3>Posición de los coches</h3><div class="cnt">Sentido de la marcha hacia arriba</div><div class="caravana">' +
  conv("1 coche de escolta", ["VIP", "VE"]) +
  conv("2 coches de escolta", ["VE", "VIP", "VE"]) +
  conv("3 coches de escolta", ["VE", "VIP", "VE", "VE"]) + "</div></div>";

function panelChuleta(c, lista, destino) {
  const p = destino ? $(destino) : $("panel");
  const es2676 = c && c.man === "UF2676";
  let h = '<p class="lead">Las listas numeradas y las cifras que caen. Si la pregunta empieza por «cuántos» o «cuáles», la respuesta sale de aquí.</p>';
  if (!c) h += diagramaCirculos() + diagramaCaravana();
  else {
    if (es2676 && c.ud === 1) h += diagramaCirculos();
    if (es2676 && c.ud === 2) h += diagramaCaravana();
  }
  h += '<div class="grid2">';
  lista.forEach(r => {
    const tag = r.ord ? "ol" : "ul";
    h += '<div class="ref"><h3>' + r.t + '</h3><div class="cnt">' + r.cnt + "</div><" + tag + ">" +
      r.l.map(x => "<li>" + x + "</li>").join("") + "</" + tag + "></div>";
  });
  h += "</div>";
  if (es2676) h += '<div class="aviso" style="margin-top:16px"><b>Fe de erratas del manual.</b> En la página 17 cita «Ley 5/2014, de <s>14</s> de abril». La fecha correcta —y la que repite el propio manual en el resto de páginas— es <b>Ley 5/2014, de 4 de abril, de Seguridad Privada</b>. Si te lo preguntan, di <b>4 de abril</b>.</div>';
  p.innerHTML = h;

  const leg = $("cLeg");
  if (leg) {
    CIRC.forEach((cc, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.dataset.c = i;
      b.innerHTML = '<span class="sw" style="background:' + (i === 0 ? "var(--acento)" : "var(--marca)") +
        ";opacity:" + (1 - i * 0.3) + '"></span>' + cc.n;
      b.onclick = () => selCirc(i);
      leg.appendChild(b);
    });
    p.querySelectorAll(".d-ring").forEach(r => r.onclick = () => selCirc(+r.dataset.c));
    selCirc(0);
  }
}
function vistaChuletaGeneral() {
  cabecera("Herramientas", "Chuleta completa");
  $("vista").innerHTML = '<div id="panel"></div>';
  panelChuleta(null, CHULETA, "panel");
}

/* ---------------- buscador ---------------- */
let cargandoTodo = false;
function vistaBuscar() {
  cabecera("Herramientas", "Buscar");
  $("vista").innerHTML =
    '<p class="lead">Busca a la vez en el temario, los resúmenes, las fichas, las preguntas y la chuleta.</p>' +
    '<div class="bar"><input class="search" id="q" type="search" placeholder="Glasgow, ANFO, detención, balística, armero…" autocomplete="off">' +
    '<button class="btn ghost" id="loadAll" type="button">Incluir el temario completo</button></div>' +
    '<div id="hits"><p class="empty">Escribe al menos dos caracteres.</p></div>';
  $("q").addEventListener("input", doSearch);
  $("q").focus();
  $("loadAll").onclick = async () => {
    if (cargandoTodo) return;
    cargandoTodo = true;
    $("loadAll").textContent = "Cargando…";
    await Promise.all(IDX.map(m => cargaManual(m.clave).catch(() => null)));
    $("loadAll").textContent = "Temario completo incluido";
    $("loadAll").disabled = true;
    doSearch();
  };
}
function doSearch() {
  const raw = ($("q") ? $("q").value : "").trim();
  const box = $("hits");
  if (raw.length < 2) { box.innerHTML = '<p class="empty">Escribe al menos dos caracteres.</p>'; return; }
  const q = sinAc(raw), hits = [];

  IDX.forEach(m => {
    const d = CACHE[m.clave]; if (!d) return;
    d.uds.forEach(u => u.epigrafes.forEach(e => {
      const t = sinAc(e.texto);
      let i = t.indexOf(q), n = 0;
      while (i >= 0 && n < 3) {
        const a = Math.max(0, i - 90), b = Math.min(e.texto.length, i + 190);
        hits.push({ k: m.cod + " · UD " + u.n + " · pág. " + e.pag, t: e.n + " " + e.titulo, b: "…" + e.texto.slice(a, b) + "…", ir: "#/u/" + m.clave + "/" + u.n + "/temario" });
        i = t.indexOf(q, i + q.length); n++;
      }
    }));
  });
  TEMAS.forEach(t => t.c.forEach(s => s.l.forEach(li => {
    if (sinAc(plano(li)).includes(q)) hits.push({ k: t.man + " UD " + t.ud + " · Resumen", t: t.t + " — " + s.h, b: li, ir: "#/u/" + t.man + "/" + t.ud + "/resumen" });
  })));
  FICHAS.forEach(f => {
    if (sinAc(plano(f.q + " " + f.a)).includes(q)) {
      const tm = temaById(f.t);
      hits.push({ k: tm.man + " UD " + tm.ud + " · Ficha", t: plano(f.q), b: f.a, ir: "#/u/" + tm.man + "/" + tm.ud + "/fichas" });
    }
  });
  PREGUNTAS.forEach(p2 => {
    if (sinAc(plano(p2.q + " " + p2.o.join(" ") + " " + p2.w)).includes(q)) {
      const tm = temaById(p2.t);
      hits.push({ k: tm.man + " UD " + tm.ud + " · Test", t: plano(p2.q), b: "<b>" + p2.c.map(i => plano(p2.o[i])).join(" · ") + "</b> — " + p2.w, ir: "#/u/" + tm.man + "/" + tm.ud + "/test" });
    }
  });
  CHULETA.forEach(r => r.l.forEach(li => {
    if (sinAc(plano(li)).includes(q)) hits.push({ k: "Chuleta", t: r.t, b: li, ir: r.man && r.ud ? "#/u/" + r.man + "/" + r.ud + "/chuleta" : "#/chuleta" });
  }));

  if (!hits.length) {
    box.innerHTML = '<p class="empty">Sin resultados para «' + esc(raw) + '».' +
      (Object.keys(CACHE).length < IDX.length ? " Prueba a pulsar «Incluir el temario completo»." : "") + "</p>";
    return;
  }
  const re = new RegExp("(" + raw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
  box.innerHTML = '<p class="hint" style="margin-bottom:12px">' + hits.length + " resultado" + (hits.length > 1 ? "s" : "") +
    (Object.keys(CACHE).length < IDX.length ? " · el temario completo aún no está incluido" : "") + "</p>" +
    hits.slice(0, 60).map(x =>
      '<button class="hit" type="button" data-ir="' + x.ir + '"><div class="hk">' + esc(x.k) + '</div><div class="ht">' +
      esc(x.t).replace(re, "<mark>$1</mark>") + '</div><div class="hb">' + x.b.replace(re, "<mark>$1</mark>") + "</div></button>").join("");
  box.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => ir(b.dataset.ir));
}

/* =========================================================
   LA SESION DE HOY
   Arma sola lo que toca: repaso vencido, lo fallado y algo nuevo.
   Elegir que estudiar es tiempo que no se estudia.
   ========================================================= */
function vistaHoy() {
  cabecera("Estudio", "Estudiar hoy");
  const p = $("vista");

  const fichas = pendientesHoy();
  const falladas = PREGUNTAS.map((q, i) => Object.assign({}, q, { i })).filter(q => S.wrong.includes(q.i));
  const sinLeer = unidades()
    .map(u => ({ u, faltan: u.epis.filter(e => !S.epi[epiKey(u.man, u.ud, e.n)]).length }))
    .filter(x => x.faltan)
    .sort((a, b) => a.faltan - b.faltan);
  const siguiente = sinLeer[0];
  const r = S.racha || { dias: 0, ultimo: "" };
  const vivaHoy = r.ultimo === hoyClave() || r.ultimo === hoyISO(-1);
  const racha = vivaHoy ? r.dias : 0;

  const minutos = Math.round(Math.min(fichas.length, 20) * 0.5 + Math.min(falladas.length, 10) * 0.6 + 8);

  let h = '<div class="hoy-cab">' +
    "<div><h2>Tu sesión de hoy</h2>" +
    '<p class="lead" style="margin:6px 0 0">Unos <b>' + minutos + " minutos</b>. No hace falta que decidas nada: " +
    "empieza por arriba y baja.</p></div>" +
    '<div class="racha' + (racha >= 3 ? " viva" : "") + '"><b>' + racha + "</b><span>" +
    (racha === 1 ? "día seguido" : "días seguidos") + "</span></div></div>";

  h += '<ol class="plan">';

  h += tareaHoy(1, fichas.length > 0,
    "Repasar " + Math.min(fichas.length, 20) + " fichas",
    fichas.length
      ? "Son las que hoy toca repasar según cuándo las acertaste por última vez. Es el paso que más fija."
      : "Hoy no vence ninguna ficha. Si quieres adelantar, entra igual y repasa al azar.",
    fichas.length ? "#/hoy/fichas" : "", "Empezar");

  h += tareaHoy(2, falladas.length > 0,
    falladas.length ? "Volver a tus " + Math.min(falladas.length, 15) + " falladas" : "No tienes falladas pendientes",
    falladas.length
      ? "Repasa solo lo que has fallado. Una pregunta sale de la lista en cuanto la aciertas."
      : "Cuando falles alguna pregunta aparecerá aquí para que vuelvas a ella.",
    falladas.length ? "#/falladas" : "", "Repasar");

  h += siguiente
    ? tareaHoy(3, true, "Leer algo nuevo: " + esc(siguiente.u.titulo),
      "Te faltan " + siguiente.faltan + " epígrafes de esta unidad, y es la que tienes más cerca de terminar. " +
      "Con uno o dos al día llegas.",
      "#/u/" + siguiente.u.man + "/" + siguiente.u.ud + "/temario", "Abrir")
    : tareaHoy(3, false, "Has leído todo el temario", "Ya no queda ningún epígrafe por leer.", "", "");

  h += "</ol>";

  h += '<div class="metodo"><h3>Por qué en este orden</h3><ul>' +
    "<li><b>Primero lo vencido</b>: el repaso pierde casi todo su valor si se hace tarde.</li>" +
    "<li><b>Después lo fallado</b>: es donde está tu nota, no en lo que ya te sale.</li>" +
    "<li><b>Al final lo nuevo</b>: con la cabeza ya caliente y sin la excusa de haber leído mucho.</li>" +
    "<li><b>Todos los días, aunque sean diez minutos.</b> La racha vale más que la sesión larga del domingo.</li>" +
    "</ul></div>";

  p.innerHTML = h;
  p.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => ir(b.dataset.ir));
}

function tareaHoy(n, activa, titulo, texto, destino, etiqueta) {
  return '<li class="paso' + (activa ? "" : " done") + '">' +
    '<span class="pn">' + (activa ? n : "&#10003;") + "</span>" +
    "<div><h4>" + titulo + "</h4><p>" + texto + "</p></div>" +
    (destino ? '<button class="btn' + (n === 1 ? "" : " ghost") + '" type="button" data-ir="' + destino + '">' + etiqueta + "</button>" : "") +
    "</li>";
}

/* el repaso del dia, con todas las fichas que vencen, sin importar la unidad */
function vistaHoyFichas() {
  cabecera("Estudiar hoy", "Repaso del día");
  $("vista").innerHTML = '<div id="panel" class="panel-uni"></div>';
  panelFichas({ man: null, ud: null, lista: FICHAS });
}

/* =========================================================
   INSCRIPCION
   ========================================================= */
const euros = c => (c / 100).toLocaleString("es-ES", { style: "currency", currency: "EUR" });

function vistaInscripcion() {
  cabecera("Cuenta", "Inscripción");
  const p = $("vista");
  if (PAGO.acceso) {
    p.innerHTML = '<div class="tarjeta-perfil" style="max-width:520px"><h3>Ya tienes acceso</h3>' +
      '<p class="ayuda">Tu cuenta puede usar todo el material. No hay nada que pagar.</p>' +
      '<button class="btn" type="button" data-ir="#/">Ir al panel</button></div>';
    p.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => ir(b.dataset.ir));
    return;
  }

  p.innerHTML =
    '<section class="inscripcion">' +
    '<div class="ins-precio"><b>' + euros(PAGO.precio) + "</b><span>pago único</span></div>" +
    "<h2>Acceso completo, para siempre</h2>" +
    '<p class="lead">Un solo pago. Sin cuota mensual, sin renovaciones y sin que caduque. ' +
    "Entras desde cualquier dispositivo con tu usuario y tu progreso te sigue.</p>" +
    '<ul class="ins-lista">' +
    "<li><b>El temario íntegro</b> de los ocho manuales, unidad por unidad</li>" +
    "<li><b>Lectura en voz alta</b> de cualquier epígrafe o de la unidad entera</li>" +
    "<li><b>Fichas con repaso espaciado</b>, que te devuelven cada una el día que toca</li>" +
    "<li><b>Banco de preguntas</b> con corrección y explicación, incluidos los tests oficiales</li>" +
    "<li><b>Exámenes cronometrados</b> por unidad y del certificado completo</li>" +
    "<li><b>Simulacro de examen oral</b> con guion y autoevaluación</li>" +
    "<li><b>Chuletas</b> de las listas y las cifras que caen</li>" +
    "</ul>" +
    '<div class="bar"><button class="btn" id="pagar" type="button">Inscribirme por ' + euros(PAGO.precio) + "</button>" +
    '<span class="aviso-linea" id="pagoMsg"></span></div>' +
    '<p class="ins-nota">El cobro lo gestiona <b>Stripe</b>. Esta página no ve ni guarda los datos de tu tarjeta. ' +
    "Al inscribirte solicitas el acceso inmediato al contenido digital y aceptas que, una vez dado, " +
    "decae el derecho de desistimiento de catorce días.</p>" +
    "</section>";

  $("pagar").onclick = async () => {
    const b = $("pagar"), msg = $("pagoMsg");
    b.disabled = true; msg.textContent = "abriendo la pasarela…"; msg.className = "aviso-linea";
    try {
      const r = await fetch(CONFIG.SYNC_URL + "/pago/sesion", { method: "POST", headers: conSesion() });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "No se pudo abrir la pasarela.");
      location.href = d.url;
    } catch (e) {
      msg.textContent = e.message; msg.className = "aviso-linea mal";
      b.disabled = false;
    }
  };
}

/* vuelta desde Stripe: el cobro lo confirma el webhook, no esta pagina */
function vistaPagoHecho() {
  cabecera("Cuenta", "Pago recibido");
  $("vista").innerHTML =
    '<div class="tarjeta-perfil" style="max-width:520px"><h3>Gracias</h3>' +
    '<p class="ayuda">Estamos confirmando el pago con Stripe. Suele tardar unos segundos. ' +
    "En cuanto quede confirmado, el material se abre solo.</p>" +
    '<div class="bar"><button class="btn" id="comprobar" type="button">Comprobar ahora</button>' +
    '<span class="aviso-linea" id="compMsg"></span></div></div>';
  const intenta = async (avisa) => {
    await cargaEstadoPago();
    if (PAGO.acceso) { CONTENIDO = false; IDX = []; await boot(); ir("#/"); return true; }
    if (avisa) $("compMsg").textContent = "todavía no consta. Espera unos segundos y vuelve a probar.";
    return false;
  };
  $("comprobar").onclick = () => intenta(true);
  let intentos = 0;
  const reloj = setInterval(async () => {
    if (++intentos > 10 || await intenta(false)) clearInterval(reloj);
  }, 3000);
}

/* =========================================================
   MI PERFIL
   ========================================================= */
const AVATAR_MAX = 60000;

/* recorta al cuadrado, reduce y comprime hasta que quepa */
function preparaAvatar(fichero) {
  return new Promise((resolve, reject) => {
    if (!/^image\//.test(fichero.type)) return reject(new Error("Eso no es una imagen."));
    if (fichero.size > 12 * 1024 * 1024) return reject(new Error("La imagen pesa demasiado. Prueba con una menor de 12 MB."));
    const lector = new FileReader();
    lector.onerror = () => reject(new Error("No se pudo leer el fichero."));
    lector.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("No se pudo abrir la imagen."));
      img.onload = () => {
        const lado = Math.min(img.width, img.height);
        const sx = (img.width - lado) / 2, sy = (img.height - lado) / 2;
        for (const [px, calidad] of [[192, .85], [160, .8], [128, .75], [96, .7]]) {
          const c = document.createElement("canvas");
          c.width = c.height = px;
          const g = c.getContext("2d");
          g.imageSmoothingQuality = "high";
          g.drawImage(img, sx, sy, lado, lado, 0, 0, px, px);
          let url = c.toDataURL("image/webp", calidad);
          if (!/^data:image\/webp/.test(url)) url = c.toDataURL("image/jpeg", calidad);
          if (url.length <= AVATAR_MAX) return resolve(url);
        }
        reject(new Error("No se ha podido comprimir esa imagen lo suficiente."));
      };
      img.src = lector.result;
    };
    lector.readAsDataURL(fichero);
  });
}

async function guardaPerfil(cambios) {
  const r = await fetch(CONFIG.SYNC_URL + "/perfil", {
    method: "PUT", headers: conSesion({ "Content-Type": "application/json" }),
    body: JSON.stringify(cambios)
  });
  const d = await r.json().catch(() => ({}));
  if (r.status === 401) { caduca(); throw new Error("Sesión caducada."); }
  if (!r.ok) throw new Error(d.error || "No se pudo guardar.");
  PERFIL.nombre = d.nombre; PERFIL.avatar = d.avatar;
  pintaIdentidad();
  return d;
}

function descargaProgreso() {
  const datos = JSON.stringify({ usuario: USUARIO, exportado: new Date().toISOString(), progreso: JSON.parse(cuerpoProgreso()) }, null, 1);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([datos], { type: "application/json" }));
  a.download = "progreso-sea029-" + (USUARIO || "cuenta") + ".json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

function vistaPerfil() {
  cabecera("Cuenta", "Mi perfil");
  const p = $("vista");
  if (!SESION) { p.innerHTML = '<p class="empty">Esta sección necesita una cuenta. Ahora mismo estás con un token de estudio.</p>'; return; }

  const us = unidades();
  const completas = us.filter(u => progresoUD(u.man, u.ud) === 100).length;
  const fichasOk = FICHAS.filter(f => (S.box[fKey(f)] || 0) >= 2).length;

  let h = '<div class="perfil">';

  /* identidad */
  h += '<section class="tarjeta-perfil"><h3>Identidad</h3>' +
    '<p class="ayuda">Así apareces en la barra lateral. El nombre de usuario con el que entras no cambia.</p>' +
    '<div class="identidad">' +
    '<div class="foto" id="fotoPrev">' + (PERFIL.avatar
      ? '<img src="' + esc(PERFIL.avatar) + '" alt="Tu avatar">'
      : '<span>' + esc((PERFIL.nombre || USUARIO).slice(0, 1)) + "</span>") + "</div>" +
    '<div class="foto-acc">' +
    '<input type="file" id="fotoIn" accept="image/png,image/jpeg,image/webp" hidden>' +
    '<button class="btn ghost chico" id="fotoBtn" type="button">Cambiar avatar</button>' +
    (PERFIL.avatar ? '<button class="btn ghost chico" id="fotoQuita" type="button">Quitar</button>' : "") +
    '<span class="ayuda">PNG, JPG o WebP. Se recorta en cuadrado y se reduce sola.</span>' +
    '<span class="aviso-linea" id="fotoMsg"></span></div></div>' +
    '<div class="campo"><label for="nombreIn">Nombre visible</label>' +
    '<input id="nombreIn" type="text" maxlength="40" placeholder="' + esc(USUARIO) + '" value="' + esc(PERFIL.nombre) + '"></div>' +
    '<div class="fila-acc"><button class="btn" id="guardaNombre" type="button">Guardar</button>' +
    '<span class="aviso-linea" id="nombreMsg"></span></div>' +
    '<dl class="datos"><div><dt>Usuario</dt><dd class="mono">' + esc(USUARIO) + "</dd></div>" +
    "<div><dt>Cuenta creada</dt><dd>" + fecha(PERFIL.creado) + "</dd></div>" +
    "<div><dt>Última conexión</dt><dd>" + fecha(PERFIL.visto, true) + "</dd></div>" +
    "<div><dt>Inscripción</dt><dd>" +
    (PAGO.pagado ? '<span class="etiqueta activo">Pagada</span> ' + fecha(PAGO.fecha)
      : PAGO.acceso ? '<span class="etiqueta activo">Acceso libre</span>'
        : '<span class="etiqueta susp">Pendiente</span>') + "</dd></div></dl></section>";

  /* seguridad */
  h += '<section class="tarjeta-perfil"><h3>Contraseña</h3>' +
    '<p class="ayuda">Al cambiarla se cierran las sesiones abiertas en otros dispositivos. En este sigues dentro.</p>' +
    '<div class="campo"><label for="claveAct">Contraseña actual</label><input id="claveAct" type="password" autocomplete="current-password"></div>' +
    '<div class="campo"><label for="claveNue">Contraseña nueva</label><input id="claveNue" type="password" autocomplete="new-password" placeholder="mínimo 8 caracteres"></div>' +
    '<div class="campo"><label for="claveRep">Repite la nueva</label><input id="claveRep" type="password" autocomplete="new-password"></div>' +
    '<div class="fila-acc"><button class="btn" id="cambiaClave" type="button">Cambiar contraseña</button>' +
    '<span class="aviso-linea" id="claveMsg"></span></div></section>';

  /* sesiones y datos */
  h += '<section class="tarjeta-perfil"><h3>Sesiones y datos</h3>' +
    '<p class="ayuda">Si has entrado en un ordenador prestado, ciérralas todas desde aquí.</p>' +
    '<div class="fila-acc"><button class="btn ghost" id="cerrarTodas" type="button">Cerrar el resto de sesiones</button>' +
    '<button class="btn ghost" id="bajarDatos" type="button">Descargar mi progreso</button>' +
    '<span class="aviso-linea" id="sesMsg"></span></div>' +
    '<dl class="datos"><div><dt>Epígrafes leídos</dt><dd class="mono">' + hechosEpi() + " / " + totalEpi() + "</dd></div>" +
    '<div><dt>Fichas dominadas</dt><dd class="mono">' + fichasOk + " / " + FICHAS.length + "</dd></div>" +
    '<div><dt>Unidades al 100 %</dt><dd class="mono">' + completas + " / " + us.length + "</dd></div>" +
    '<div><dt>Preguntas falladas</dt><dd class="mono">' + S.wrong.length + "</dd></div></dl></section>";

  /* baja */
  if (!ADMIN) {
    h += '<section class="tarjeta-perfil peligrosa"><h3>Darse de baja</h3>' +
      '<p class="ayuda">Se borra la cuenta y todo tu progreso. No se puede deshacer y el nombre de usuario queda libre.</p>' +
      '<div class="fila-acc"><button class="btn peligro" id="darBaja" type="button">Borrar mi cuenta</button></div></section>';
  }

  h += "</div>";
  p.innerHTML = h;

  /* --- avatar --- */
  const fotoIn = $("fotoIn");
  $("fotoBtn").onclick = () => fotoIn.click();
  fotoIn.onchange = async () => {
    const f = fotoIn.files && fotoIn.files[0];
    if (!f) return;
    const msg = $("fotoMsg");
    msg.textContent = "preparando la imagen…"; msg.className = "aviso-linea";
    try {
      const url = await preparaAvatar(f);
      await guardaPerfil({ avatar: url });
      vistaPerfil();
    } catch (e) {
      msg.textContent = e.message; msg.className = "aviso-linea mal";
    }
    fotoIn.value = "";
  };
  const quita = $("fotoQuita");
  if (quita) quita.onclick = async () => {
    try { await guardaPerfil({ avatar: "" }); vistaPerfil(); }
    catch (e) { $("fotoMsg").textContent = e.message; $("fotoMsg").className = "aviso-linea mal"; }
  };

  /* --- nombre --- */
  $("guardaNombre").onclick = async () => {
    const msg = $("nombreMsg");
    msg.textContent = "guardando…"; msg.className = "aviso-linea";
    try {
      await guardaPerfil({ nombre: $("nombreIn").value });
      msg.textContent = "guardado"; msg.className = "aviso-linea ok";
    } catch (e) { msg.textContent = e.message; msg.className = "aviso-linea mal"; }
  };

  /* --- contraseña --- */
  $("cambiaClave").onclick = async () => {
    const msg = $("claveMsg"), act = $("claveAct").value, nue = $("claveNue").value, rep = $("claveRep").value;
    msg.className = "aviso-linea mal";
    if (!act) { msg.textContent = "Escribe tu contraseña actual."; return; }
    if (nue.length < 8) { msg.textContent = "La nueva necesita al menos 8 caracteres."; return; }
    if (nue !== rep) { msg.textContent = "Las dos contraseñas nuevas no coinciden."; return; }
    if (nue === act) { msg.textContent = "La nueva es igual que la actual."; return; }
    msg.textContent = "cambiando…"; msg.className = "aviso-linea";
    try {
      const r = await fetch(CONFIG.SYNC_URL + "/clave", {
        method: "POST", headers: conSesion({ "Content-Type": "application/json" }),
        body: JSON.stringify({ actual: act, nueva: nue })
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "No se pudo cambiar.");
      $("claveAct").value = $("claveNue").value = $("claveRep").value = "";
      msg.textContent = "contraseña cambiada"; msg.className = "aviso-linea ok";
    } catch (e) { msg.textContent = e.message; msg.className = "aviso-linea mal"; }
  };

  /* --- sesiones y descarga --- */
  $("cerrarTodas").onclick = () => confirma(
    "Cerrar el resto de sesiones",
    "Se cerrará la sesión en cualquier otro dispositivo donde hayas entrado. En este te quedas.",
    "Cerrar las demás", false, async () => {
      const msg = $("sesMsg");
      try {
        const r = await fetch(CONFIG.SYNC_URL + "/cerrar-todas", { method: "POST", headers: conSesion() });
        if (!r.ok) throw new Error("No se pudo completar.");
        msg.textContent = "sesiones cerradas"; msg.className = "aviso-linea ok";
      } catch (e) { msg.textContent = e.message; msg.className = "aviso-linea mal"; }
    });
  $("bajarDatos").onclick = descargaProgreso;

  /* --- baja --- */
  const baja = $("darBaja");
  if (baja) baja.onclick = () => pideClaveYBorra();
}

function pideClaveYBorra() {
  const capa = document.createElement("div");
  capa.className = "modal";
  capa.innerHTML = '<div class="modal-card"><h3>Borrar mi cuenta</h3>' +
    "<p>Se elimina la cuenta y todo el progreso: epígrafes, fichas, notas y falladas. No se puede deshacer. " +
    "Escribe tu contraseña para confirmarlo.</p>" +
    '<div class="campo"><label for="bajaClave">Contraseña</label><input id="bajaClave" type="password" autocomplete="current-password"></div>' +
    '<p class="aviso-linea mal" id="bajaMsg"></p>' +
    '<div class="fila"><button class="btn ghost" data-x="no" type="button">Cancelar</button>' +
    '<button class="btn peligro" data-x="si" type="button">Borrar mi cuenta</button></div></div>';
  document.body.appendChild(capa);
  const cierra = () => capa.remove();
  capa.querySelector('[data-x="no"]').onclick = cierra;
  capa.onclick = e => { if (e.target === capa) cierra(); };
  $("bajaClave").focus();
  capa.querySelector('[data-x="si"]').onclick = async () => {
    const msg = $("bajaMsg");
    msg.textContent = "borrando…";
    try {
      const r = await fetch(CONFIG.SYNC_URL + "/baja", {
        method: "POST", headers: conSesion({ "Content-Type": "application/json" }),
        body: JSON.stringify({ clave: $("bajaClave").value })
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "No se pudo borrar.");
      cierra();
      lsDel(KSES); lsDel(KUSR);
      SESION = null; USUARIO = null; ADMIN = false;
      S = norma({});
      abrePuerta("Tu cuenta se ha borrado.");
    } catch (e) { msg.textContent = e.message; }
  };
}

/* =========================================================
   PANEL DE ADMINISTRACION
   ========================================================= */
const fecha = (ms, conHora) => {
  if (!ms) return "—";
  const d = new Date(ms);
  const dias = Math.floor((new Date() - d) / 86400000);
  const hora = () => d.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  if (!conHora) return d.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "2-digit" });
  if (dias === 0) return "hoy, " + hora();
  if (dias === 1) return "ayer, " + hora();
  if (dias < 30) return "hace " + dias + " días";
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "2-digit" });
};

async function vistaAdmin() {
  cabecera("Administración", "Usuarios");
  const p = $("vista");
  if (!ADMIN) { p.innerHTML = '<p class="empty">Esta sección es solo para la cuenta de administración.</p>'; return; }
  p.innerHTML = '<p class="empty">Cargando usuarios…</p>';
  let d;
  try {
    const r = await fetch(CONFIG.SYNC_URL + "/admin/usuarios", { headers: conSesion() });
    if (r.status === 401) { caduca(); return; }
    d = await r.json();
    if (!r.ok) throw new Error(d.error || "No se pudo cargar");
  } catch (e) {
    p.innerHTML = '<p class="empty">' + esc(e.message) + "</p>"; return;
  }

  const us = d.usuarios || [];
  const activos = us.filter(u => !u.suspendido).length;
  const semana = us.filter(u => u.visto && Date.now() - u.visto < 7 * 86400000).length;
  const epis = us.reduce((a, u) => a + u.progreso.epi, 0);

  let h = '<div class="resumen">' +
    kpi(us.length, "Cuentas", true) +
    kpi(activos, "Activas") +
    kpi(semana, "Vistas esta semana") +
    kpi(epis, "Epígrafes leídos entre todos") +
    "</div>";

  h += '<div class="tabla-caja"><table class="usuarios"><thead><tr>' +
    "<th>Usuario</th><th>Alta</th><th>Conexión</th><th>Actividad</th>" +
    "<th>Epígrafes</th><th>Fichas</th><th>Notas</th><th>Inscripción</th><th>Estado</th><th></th>" +
    "</tr></thead><tbody>";

  us.forEach(u => {
    const pr = u.progreso;
    h += '<tr class="' + (u.suspendido ? "susp" : "") + '">' +
      '<td><div class="quien"><span class="av' + (u.avatar ? " con-foto" : "") + '">' +
      (u.avatar ? '<img src="' + esc(u.avatar) + '" alt="">' : esc(u.usuario.slice(0, 1))) + "</span>" +
      "<b>" + esc(u.usuario) + "</b>" +
      (u.nombre ? '<span class="alias">' + esc(u.nombre) + "</span>" : "") + "</div></td>" +
      '<td class="num">' + fecha(u.creado) + "</td>" +
      '<td class="num">' + fecha(u.visto, true) + "</td>" +
      '<td class="num">' + fecha(pr.actividad, true) + "</td>" +
      '<td class="num">' + pr.epi + "</td>" +
      '<td class="num">' + pr.fichas + "</td>" +
      '<td class="num" title="Mejor test / mejor examen">' +
      (pr.mejor != null ? pr.mejor + " %" : "—") + " · " + (pr.examen != null ? pr.examen + " %" : "—") + "</td>" +
      "<td>" + (u.admin ? '<span class="etiqueta admin">—</span>'
        : u.pagado ? '<span class="etiqueta activo" title="' + fecha(u.pagadoEl, true) + '">Pagada</span>'
          : '<span class="etiqueta susp">No</span>') + "</td>" +
      "<td>" + (u.admin ? '<span class="etiqueta admin">Admin</span>'
        : u.suspendido ? '<span class="etiqueta susp">Suspendida</span>'
          : '<span class="etiqueta activo">Activa</span>') + "</td>" +
      '<td><div class="acc-fila">' +
      (u.admin ? '<span class="hint">—</span>' :
        '<button class="btn ghost chico" data-acc="acceso" data-u="' + esc(u.usuario) + '" data-v="' + (!u.pagado) + '">' +
        (u.pagado ? "Quitar acceso" : "Dar acceso") + "</button>" +
        '<button class="btn ghost chico" data-acc="susp" data-u="' + esc(u.usuario) + '" data-v="' + (!u.suspendido) + '">' +
        (u.suspendido ? "Reactivar" : "Suspender") + "</button>" +
        '<button class="btn peligro chico" data-acc="borrar" data-u="' + esc(u.usuario) + '">Borrar</button>') +
      "</div></td></tr>";
  });
  h += "</tbody></table></div>";
  h += '<p class="hint" style="margin-top:14px">La suspensión cierra al momento todas las sesiones abiertas de esa cuenta. Borrar elimina la cuenta y su progreso, y no se puede deshacer.</p>';

  p.innerHTML = h;
  p.querySelectorAll("[data-acc]").forEach(b => b.onclick = () => {
    const u = b.dataset.u;
    if (b.dataset.acc === "acceso") {
      const dar = b.dataset.v === "true";
      confirma(dar ? "Dar acceso a " + u : "Quitar el acceso a " + u,
        dar ? "Podrá usar todo el material sin haber pagado. Útil para invitaciones o incidencias con un cobro."
          : "Dejará de poder abrir el temario hasta que se inscriba.",
        dar ? "Dar acceso" : "Quitar", !dar,
        () => accionAdmin("/admin/acceso", { usuario: u, acceso: dar }));
    } else if (b.dataset.acc === "susp") {
      const activar = b.dataset.v === "true";
      confirma(activar ? "Suspender a " + u : "Reactivar a " + u,
        activar ? "Se cerrarán sus sesiones y no podrá entrar hasta que lo reactives. Su progreso se conserva."
          : "Volverá a poder entrar con su usuario y contraseña.",
        activar ? "Suspender" : "Reactivar", activar,
        () => accionAdmin("/admin/suspender", { usuario: u, suspendido: activar }));
    } else {
      confirma("Borrar a " + u,
        "Se elimina la cuenta y todo su progreso. Esta acción no se puede deshacer.",
        "Borrar", true,
        () => accionAdmin("/admin/borrar", { usuario: u }));
    }
  });
}

async function accionAdmin(ruta, cuerpo) {
  try {
    const r = await fetch(CONFIG.SYNC_URL + ruta, {
      method: "POST", headers: conSesion({ "Content-Type": "application/json" }), body: JSON.stringify(cuerpo)
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(d.error || "No se pudo completar.");
    vistaAdmin();
  } catch (e) { alert(e.message); }
}

function confirma(titulo, texto, etiqueta, peligro, alAceptar) {
  const capa = document.createElement("div");
  capa.className = "modal";
  capa.innerHTML = '<div class="modal-card"><h3>' + esc(titulo) + "</h3><p>" + esc(texto) + "</p>" +
    '<div class="fila"><button class="btn ghost" data-x="no" type="button">Cancelar</button>' +
    '<button class="btn' + (peligro ? " peligro" : "") + '" data-x="si" type="button">' + esc(etiqueta) + "</button></div></div>";
  document.body.appendChild(capa);
  const cierra = () => capa.remove();
  capa.querySelector('[data-x="no"]').onclick = cierra;
  capa.querySelector('[data-x="si"]').onclick = () => { cierra(); alAceptar(); };
  capa.onclick = e => { if (e.target === capa) cierra(); };
  capa.querySelector('[data-x="si"]').focus();
}

/* =========================================================
   PUERTA
   ========================================================= */
function abrePuerta(mensaje) {
  $("gate").hidden = false;
  $("gateErr").textContent = mensaje || "";
  $("gatePass").value = "";
  const u = $("gateUser");
  u.focus();
  if (mensaje) u.select();
}
function pintaModo() {
  const registro = modoGate === "registro";
  $("gateTitulo").textContent = registro ? "Crea tu cuenta" : "Entra en tu cuenta";
  $("gateTexto").textContent = registro
    ? "Elige un usuario y una contraseña. Tu progreso queda guardado en la cuenta y lo recuperas desde cualquier dispositivo."
    : "Tu progreso —epígrafes leídos, fichas dominadas, notas y preguntas falladas— se guarda en tu cuenta, no en este navegador. Entra con los mismos datos en el móvil y sigues donde lo dejaste.";
  $("gateGo").textContent = registro ? "Crear cuenta" : "Entrar";
  $("gateOtro").textContent = registro ? "Ya tengo cuenta" : "Crear una cuenta";
  $("gatePass").setAttribute("autocomplete", registro ? "new-password" : "current-password");
  $("gatePista").hidden = !registro;
  $("gateErr").textContent = "";
  document.querySelectorAll("#gateModo button").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.m === modoGate)));
}
async function envia() {
  const err = $("gateErr");
  const usuario = $("gateUser").value.trim().toLowerCase();
  const clave = $("gatePass").value;
  if (!USUARIO_RE.test(usuario)) {
    err.textContent = "El usuario: entre 3 y 32 caracteres, en minúsculas, sin espacios.";
    $("gateUser").focus(); return;
  }
  if (modoGate === "registro" && clave.length < 8) {
    err.textContent = "La contraseña necesita al menos 8 caracteres.";
    $("gatePass").focus(); return;
  }
  if (!clave) { err.textContent = "Escribe tu contraseña."; $("gatePass").focus(); return; }

  err.textContent = "";
  const boton = $("gateGo"), texto = boton.textContent;
  boton.disabled = true; boton.textContent = "Un momento…";
  try {
    const r = await fetch(CONFIG.SYNC_URL + (modoGate === "registro" ? "/registro" : "/entrar"), {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, clave })
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) { err.textContent = d.error || "No se ha podido completar. Inténtalo de nuevo."; return; }
    SESION = d.sesion; USUARIO = d.usuario; ADMIN = !!d.admin;
    lsSet(KSES, SESION); lsSet(KUSR, USUARIO);
    PERFIL = { nombre: "", avatar: "", creado: null, visto: null };
    await cargaPerfil();
    await cargaEstadoPago();
    $("gatePass").value = "";
    $("gate").hidden = true;
    await unlock(USUARIO);
  } catch (e) {
    err.textContent = "No hay conexión con el servicio de cuentas.";
  } finally {
    boton.disabled = false; boton.textContent = texto;
  }
}

async function importaToken(token) {
  const r = await fetch(CONFIG.SYNC_URL + "/importar", {
    method: "POST", headers: conSesion({ "Content-Type": "application/json" }),
    body: JSON.stringify({ token })
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || "No se pudo importar.");
  const remoto = await pull();
  if (hasData(remoto)) { S = norma(remoto); save(); }
  return true;
}

/* =========================================================
   ARRANQUE
   ========================================================= */
async function boot() {
  try {
    await cargaContenido();
    if (!IDX.length) IDX = await pideMaterial("/manual/indice");
  } catch (e) {
    if (!SESION && !TOKEN) return;              // la sesion ha caducado
    if (e.pago) { pintaNav(); vistaInscripcion(); return; }
    $("vista").innerHTML = '<p class="empty">No se ha podido cargar el material. ' +
      "Comprueba tu conexión y vuelve a entrar.</p>";
    return;
  }
  updHud();
  pinta();
  pintaIdentidad();
}
async function servicioTieneCuentas() {
  try {
    const r = await fetch(CONFIG.SYNC_URL + "/");
    return !!(await r.json()).cuentas;
  } catch (e) { return false; }
}
async function cargaPerfil() {
  try {
    const r = await fetch(CONFIG.SYNC_URL + "/perfil", { headers: conSesion() });
    if (r.status === 401) { caduca(); return; }
    const d = await r.json();
    ADMIN = !!d.admin;
    PERFIL = { nombre: d.nombre || "", avatar: d.avatar || "", creado: d.creado, visto: d.visto };
  } catch (e) {}
}

(async function start() {
  $("outBtn").onclick = lock;
  $("themeBtn").onclick = () => {
    const r = document.documentElement, cur = r.getAttribute("data-theme");
    const dark = cur ? cur === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
    r.setAttribute("data-theme", dark ? "light" : "dark");
    lsSet("sea029:tema", dark ? "light" : "dark");
  };
  const temaGuardado = lsGet("sea029:tema");
  if (temaGuardado) document.documentElement.setAttribute("data-theme", temaGuardado);

  if (lsGet("sea029:lateral") === "0") $("app").dataset.lat = "0";
  pintaLateral();
  addEventListener("resize", pintaLateral);

  $("hambBtn").onclick = () => {
    const app = $("app");
    if (anchaHay()) { plegable(app.dataset.lat === "0"); return; }
    if (app.dataset.menu === "1") { cierraMenu(); return; }
    app.dataset.menu = "1";
    const v = document.createElement("div");
    v.className = "velo";
    v.onclick = cierraMenu;
    app.appendChild(v);
  };
  ["gateUser", "gatePass"].forEach(id =>
    $(id).addEventListener("keydown", e => { if (e.key === "Enter") $("gateGo").click(); }));

  CUENTAS = await servicioTieneCuentas();

  $("gateGo").onclick = envia;
  $("gateOtro").onclick = () => { modoGate = modoGate === "registro" ? "entrar" : "registro"; pintaModo(); $("gateUser").focus(); };
  document.querySelectorAll("#gateModo button").forEach(b => b.onclick = () => { modoGate = b.dataset.m; pintaModo(); $("gateUser").focus(); });
  pintaModo();

  const ses = lsGet(KSES), usr = lsGet(KUSR);
  if (ses && usr) {
    SESION = ses; USUARIO = usr;
    await cargaPerfil();
    await cargaEstadoPago();
    if (!SESION) return;
    $("gate").hidden = true;
    await unlock(usr);
  } else abrePuerta("");
})();
