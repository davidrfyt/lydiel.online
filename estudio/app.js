"use strict";
/* =========================================================
   SEA029 — plataforma de estudio
   Navegacion en dos niveles: indice de unidades -> unidad.
   Dentro de cada unidad esta todo su material.
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
let TOKEN = null;                       // solo si el servicio no tiene cuentas
let CUENTAS = null;                     // lo dice el servicio al arrancar
let modoGate = "entrar";
let S = { done: {}, epi: {}, best: null, wrong: [], box: {}, examBest: null, uBest: {} };
let pushTimer = null;

let IDX = [];                 // indice de manuales
const CACHE = {};             // manuales ya descargados

const $ = id => document.getElementById(id);
const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const lsDel = k => { try { localStorage.removeItem(k); } catch (e) {} };
const slotKey = () => "sea029:p:" + (USUARIO || TOKEN);
const remoteKey = () => TOKEN + CONFIG.SUFIJO;
const conSesion = extra => Object.assign({ Authorization: "Bearer " + SESION }, extra || {});

function setSync(state, txt) {
  const b = $("syncBadge"); if (!b) return;
  b.dataset.s = state; $("syncTxt").textContent = txt;
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
  box: S.box, examBest: S.examBest, uBest: S.uBest
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
  } catch (e) { setSync("err", "sin conexion"); }
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
  SESION = null; USUARIO = null;
  abrePuerta("Tu sesión ha caducado. Entra otra vez.");
}
const hasData = o => !!o && ((o.done && Object.keys(o.done).length) || (o.epi && Object.keys(o.epi).length) ||
  o.best || (o.wrong && o.wrong.length) || (o.box && Object.keys(o.box).length));
const norma = o => ({
  done: o.done || {}, epi: o.epi || {}, best: o.best || null, wrong: o.wrong || [],
  box: o.box || {}, examBest: o.examBest || null, uBest: o.uBest || {}
});

async function unlock(quien) {
  $("whoChip").textContent = quien;
  $("whoChip").title = (SESION ? "Cuenta: " : "Token de estudio: ") + quien;

  let local = null;
  try { const raw = lsGet(slotKey()); if (raw) local = JSON.parse(raw); } catch (e) {}

  if (CONFIG.SYNC_URL) {
    setSync("wait", "conectando");
    const remoto = await pull();
    if (!SESION && !TOKEN) return;          // la sesion caduco mientras cargaba
    if (hasData(remoto)) { S = norma(remoto); setSync("ok", "sincronizado"); }
    else if (hasData(local)) { S = norma(local); await push(); }
    else { S = norma({}); setSync(remoto === null ? "err" : "ok", remoto === null ? "sin conexion" : "sincronizado"); }
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
  if (SESION) {
    try { await fetch(CONFIG.SYNC_URL + "/salir", { method: "POST", headers: conSesion() }); } catch (e) {}
  }
  lsDel(KSES); lsDel(KUSR); lsDel(TKEY);
  SESION = null; USUARIO = null; TOKEN = null;
  S = norma({});
  abrePuerta("");
}

/* ---------------- utilidades ---------------- */
const temaById = id => TEMAS.find(t => t.id === id);
const modById = id => MODULOS.find(m => m.id === id);
const manById = clave => IDX.find(m => m.clave === clave);
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const plano = h => String(h).replace(/<[^>]*>/g, "");
const sinAc = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const epiKey = (clave, un, en) => clave + "|" + un + "|" + en;
const uKey = (man, ud) => man + "|" + ud;
const fKey = f => f.t + ":" + FICHAS.indexOf(f);

/* material que cuelga de cada unidad */
const temasDe = (man, ud) => TEMAS.filter(t => t.man === man && t.ud === ud);
function idsDe(man, ud) { return temasDe(man, ud).map(t => t.id); }
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
function unidad(man, ud) { return unidades().find(u => u.man === man && u.ud === +ud); }

function epiHechos(man, ud) {
  const u = unidad(man, ud); if (!u) return 0;
  return u.epis.filter(e => S.epi[epiKey(man, ud, e.n)]).length;
}
function fichasDominadas(man, ud) {
  return fichasDe(man, ud).filter(f => (S.box[fKey(f)] || 0) >= 2).length;
}

/* progreso de una unidad: media de los tramos con material */
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

function totalEpi() { return IDX.reduce((a, m) => a + m.uds.reduce((b, u) => b + u.epigrafes.length, 0), 0); }
function hechosEpi() { return Object.values(S.epi).filter(Boolean).length; }

function updHud() {
  const tot = totalEpi() || 1, n = hechosEpi();
  const pct = Math.round(n / tot * 100), C = 2 * Math.PI * 27;
  const arc = $("ringArc");
  arc.setAttribute("stroke-dasharray", C.toFixed(1));
  arc.setAttribute("stroke-dashoffset", (C * (1 - pct / 100)).toFixed(1));
  $("ringTxt").textContent = pct + "%";
  $("hudDone").textContent = n + " / " + tot;
}

async function cargaManual(clave) {
  if (CACHE[clave]) return CACHE[clave];
  const r = await fetch("temario/" + clave + ".json");
  if (!r.ok) throw new Error("No se pudo cargar " + clave);
  CACHE[clave] = await r.json();
  return CACHE[clave];
}

/* =========================================================
   RUTAS
   #/                     indice de unidades
   #/u/<manual>/<ud>[/<seccion>]
   #/buscar  #/examen  #/chuleta  #/falladas
   ========================================================= */
function ir(hash) { location.hash = hash; }

function ruta() {
  const h = (location.hash || "#/").replace(/^#/, "");
  const p = h.split("/").filter(Boolean);
  if (!p.length) return { vista: "indice" };
  if (p[0] === "u" && p[1] && p[2]) return { vista: "unidad", man: p[1], ud: +p[2], sec: p[3] || "plan" };
  return { vista: p[0] };
}

function pinta() {
  const r = ruta();
  window.scrollTo({ top: 0, behavior: "instant" });
  if (r.vista === "unidad") return vistaUnidad(r);
  if (r.vista === "buscar") return vistaBuscar();
  if (r.vista === "examen") return vistaExamenGeneral();
  if (r.vista === "chuleta") return vistaChuletaGeneral();
  if (r.vista === "falladas") return vistaFalladas();
  return vistaIndice();
}
window.addEventListener("hashchange", () => { if (SESION || TOKEN) pinta(); });

/* =========================================================
   NIVEL 0 — indice de unidades
   ========================================================= */
let filtroMod = "";

function vistaIndice() {
  const p = $("vista");
  const us = unidades();
  const conMaterial = us.filter(u => temasDe(u.man, u.ud).length).length;

  let h = '<section class="intro"><div class="intro-rail">Índice general</div><div>' +
    "<h2>Elige la unidad que vas a estudiar</h2>" +
    "<p>Cada unidad reúne su temario, su resumen, sus fichas, su test, su examen, su examen oral y su chuleta. " +
    "El plan de estudio de la unidad te dice en qué orden usarlos.</p></div></section>";

  h += '<div class="tools">' +
    herramienta("buscar", "Buscar", "En todo el material a la vez", "&#9906;") +
    herramienta("examen", "Examen general", EX_N + " preguntas · " + EX_MIN + " min", "&#9202;") +
    herramienta("chuleta", "Chuleta completa", CHULETA.length + " bloques de memoria", "&#9776;") +
    herramienta("falladas", "Mis falladas", S.wrong.length + " preguntas pendientes", "&#8635;") +
    "</div>";

  const viejo = lsGet(TKEY);
  if (SESION && viejo && !hasData(S)) {
    h += '<div class="why" id="traer" style="margin-bottom:26px">Tienes progreso guardado con el token antiguo ' +
      "<b>" + esc(viejo) + '</b>. <button class="link" id="traerBtn" type="button">Traerlo a esta cuenta</button>' +
      ' <span class="hint" id="traerMsg"></span></div>';
  }

  h += '<div class="bar"><span class="hint">Módulo</span>' +
    '<button class="chip" data-f="" aria-pressed="' + (filtroMod === "" ? "true" : "false") + '">Todos</button>';
  MODULOS.forEach(m => h += '<button class="chip" data-f="' + m.id + '" aria-pressed="' +
    (filtroMod === m.id ? "true" : "false") + '">' + m.cod + "</button>");
  h += '<span class="spacer"></span><span class="hint">' + conMaterial + " de " + us.length +
    " unidades con material de repaso</span></div>";

  IDX.forEach(m => {
    if (filtroMod && filtroMod !== m.mod) return;
    const eps = m.uds.reduce((a, u) => a + u.epigrafes.length, 0);
    const d = m.uds.reduce((a, u) => a + u.epigrafes.filter(e => S.epi[epiKey(m.clave, u.n, e.n)]).length, 0);
    h += '<div class="man-head"><span class="k">' + esc(m.cod) + '</span><h3>' + esc(m.nombre) + "</h3>" +
      '<span class="hint">' + d + " / " + eps + " epígrafes leídos</span></div>";
    h += '<div class="uds">';
    m.uds.forEach(u => h += tarjetaUD(m, u));
    h += "</div>";
  });

  p.innerHTML = h;
  p.querySelectorAll("[data-f]").forEach(c => c.onclick = () => { filtroMod = c.dataset.f; vistaIndice(); });
  p.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => ir(b.dataset.ir));
  const tb = $("traerBtn");
  if (tb) tb.onclick = async () => {
    tb.disabled = true;
    $("traerMsg").textContent = "importando…";
    try {
      await importaToken(lsGet(TKEY));
      lsDel(TKEY);
      updHud(); vistaIndice();
    } catch (e) {
      $("traerMsg").textContent = e.message;
      tb.disabled = false;
    }
  };
}

function herramienta(id, t, sub, ico) {
  return '<button class="tool" type="button" data-ir="#/' + id + '">' +
    '<span class="ico" aria-hidden="true">' + ico + "</span>" +
    '<span class="tt">' + t + '</span><span class="ts">' + sub + "</span></button>";
}

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

  const num = String(ud).padStart(2, "0");
  return '<button class="ud-card' + (pct === 100 ? " completa" : "") + '" type="button" data-ir="#/u/' + man + "/" + ud + '">' +
    (pct === 100 ? '<span class="sello">Superada</span>' : "") +
    '<div class="ud-top"><span class="num">UD ' + num + "</span>" +
    (nT ? "" : '<span class="tag">solo temario</span>') +
    '<span class="pct">' + pct + "%</span></div>" +
    "<h4>" + esc(u.titulo) + "</h4>" +
    '<div class="barp"><i style="width:' + pct + '%"></i></div>' +
    '<div class="ud-meta">' + partes.join(" · ") + "</div></button>";
}

/* =========================================================
   NIVEL 1 — una unidad
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
  const p = $("vista");

  let h = '<div class="crumb"><button class="volver" type="button" data-ir="#/">&larr; Todas las unidades</button>' +
    '<span class="c-sep">/</span><span class="c-k">' + esc(u.cod) + "</span>" +
    '<span class="c-sep">/</span><span class="c-k">UD' + u.ud + "</span></div>";

  h += '<div class="ud-hero"><div class="k">' + esc(modById(u.mod).cod) + "<br>" + esc(u.cod) +
    " · UD " + String(u.ud).padStart(2, "0") + "</div>" +
    '<div class="cuerpo"><h2>' + esc(u.titulo) + "</h2>" +
    '<p class="sub">' + esc(u.manNombre) + "</p></div>" +
    '<div class="ud-pct"><b>' + progresoUD(r.man, r.ud) + "%</b><span>de la unidad</span></div></div>";

  h += '<nav class="tabs" role="tablist">' + secs.map(([id, t, n]) =>
    '<button class="tab" type="button" role="tab" data-ir="#/u/' + r.man + "/" + r.ud + "/" + id + '"' +
    ' aria-selected="' + (id === sec) + '">' + t + (n ? '<span class="n">' + n + "</span>" : "") + "</button>"
  ).join("") + "</nav>";

  h += '<div id="panel" class="panel-uni"></div>';
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

/* ---------------- plan de estudio ---------------- */
function panelPlan(c) {
  const { man, ud, u } = c;
  const ts = temasDe(man, ud), fs = fichasDe(man, ud), qs = preguntasDe(man, ud), os = oralDe(man, ud);
  const cs = chuletaDe(man, ud);
  const best = S.uBest[uKey(man, ud)];
  const pasos = [];

  pasos.push({
    id: "temario", t: "Leer el temario de la unidad",
    d: "Los " + u.epis.length + " epígrafes del manual, con el texto íntegro. Marca el círculo de cada uno cuando lo entiendas.",
    hecho: epiHechos(man, ud), total: u.epis.length
  });
  if (ts.length) pasos.push({
    id: "resumen", t: "Repasar con el resumen",
    d: "Lo esencial de la unidad en " + ts.length + (ts.length > 1 ? " bloques" : " bloque") + ". Sirve para refrescar sin releer el manual entero.",
    hecho: ts.filter(t => S.done[t.id]).length, total: ts.length
  });
  if (fs.length) pasos.push({
    id: "fichas", t: "Fijar con las fichas",
    d: "Repaso espaciado: la ficha sale de la rotación cuando la aciertas dos veces seguidas. Hazlas en sesiones cortas y repetidas, no de una sentada.",
    hecho: fichasDominadas(man, ud), total: fs.length
  });
  if (qs.length) pasos.push({
    id: "test", t: "Comprobar con el test",
    d: "Corrección inmediata y explicación de cada respuesta. Lo que falles se guarda para repasarlo después.",
    hecho: best ? best.pct : 0, total: 100, sufijo: "%", nota: best ? "Mejor marca: " + best.pct + "%" : "Sin marca todavía"
  });
  if (qs.length >= 10) pasos.push({
    id: "examen", t: "Simular el examen de la unidad",
    d: "Sin corrección hasta el final y con cronómetro. Repítelo hasta pasar del 75 % con holgura.",
    hecho: best && best.examen ? best.examen : 0, total: 100, sufijo: "%"
  });
  if (os.length) pasos.push({
    id: "oral", t: "Responder en voz alta",
    d: "Es lo que vas a hacer delante del tribunal. Responde primero y solo después despliega el guion, ordenado como conviene contestar.",
    hecho: 0, total: 0
  });
  if (cs.length) pasos.push({
    id: "chuleta", t: "La víspera, la chuleta",
    d: "Las listas y las cifras que caen. Si la pregunta empieza por «cuántos» o «cuáles», la respuesta sale de aquí.",
    hecho: 0, total: 0
  });

  let h = '<p class="lead">Este es el orden que funciona: entender, condensar, memorizar, comprobar y decir en voz alta. ' +
    'Puedes saltar entre pasos, pero no te saltes el primero.</p>';

  h += '<ol class="plan">';
  pasos.forEach((s, i) => {
    const pct = s.total ? Math.round(s.hecho / s.total * 100) : null;
    h += '<li class="paso' + (pct === 100 ? " done" : "") + '">' +
      '<span class="pn">' + (i + 1) + "</span>" +
      '<div class="pc"><h4>' + s.t + "</h4><p>" + s.d + "</p>" +
      (pct !== null ? '<div class="barp"><i style="width:' + pct + '%"></i></div>' +
        '<div class="pmeta">' + (s.sufijo ? (s.nota || s.hecho + s.sufijo) : s.hecho + " de " + s.total) + "</div>" : "") +
      "</div>" +
      '<button class="btn ghost" type="button" data-ir="#/u/' + man + "/" + ud + "/" + s.id + '">Ir</button></li>';
  });
  h += "</ol>";

  h += '<div class="metodo"><h3>Cómo estudiar esta unidad</h3><ul>' +
    "<li><b>Sesiones de 25 minutos</b> con 5 de descanso. Más seguido, no más largo.</li>" +
    "<li><b>Espacia los repasos</b>: el mismo día, a los 2 días, a la semana y al mes. Las fichas ya lo hacen por ti.</li>" +
    "<li><b>Responde antes de mirar</b>. El esfuerzo de recordar es lo que fija; releer no fija nada.</li>" +
    "<li><b>Di la respuesta en voz alta</b>. En el examen oral no vale reconocerla, hay que producirla.</li>" +
    "<li><b>Vuelve a lo que fallaste</b>, no a lo que ya te sale. Tienes el botón de falladas en la portada.</li>" +
    "</ul></div>";

  $("panel").innerHTML = h;
  $("panel").querySelectorAll("[data-ir]").forEach(b => b.onclick = () => ir(b.dataset.ir));
}

/* ---------------- temario de la unidad ---------------- */
function tam(e) {
  const n = e.chars != null ? e.chars : (e.texto ? e.texto.length : 0);
  if (!n) return "";
  return " · " + (n >= 1000 ? Math.round(n / 1000) + "k" : n) + " caracteres";
}
function parrafos(txt) {
  return txt.split("\n").map(l => l.startsWith("### ") ? "<h5>" + esc(l.slice(4)) + "</h5>" : "<p>" + esc(l) + "</p>").join("");
}

async function panelTemario(c) {
  const { man, ud } = c;
  const panel = $("panel");
  panel.innerHTML = '<p class="empty">Cargando el temario…</p>';
  let datos;
  try { datos = await cargaManual(man); }
  catch (e) { panel.innerHTML = '<p class="empty">No se pudo cargar el temario de este manual.</p>'; return; }
  const real = datos.uds.find(x => x.n === +ud);
  if (!real) { panel.innerHTML = '<p class="empty">Esta unidad no tiene texto cargado.</p>'; return; }

  let h = '<p class="lead">El texto íntegro del manual. Pulsa un epígrafe para leerlo y el círculo para marcarlo como entendido.</p>';
  h += '<div class="bar"><button class="btn ghost" id="abrirTodo" type="button">Abrir todos</button>' +
    '<button class="btn ghost" id="cerrarTodo" type="button">Cerrar todos</button>' +
    '<span class="spacer"></span><span class="hint" id="epiCont"></span></div>';
  h += '<ul class="epis">' + real.epigrafes.map(e => {
    const k = epiKey(man, ud, e.n);
    return '<li class="epi' + (S.epi[k] ? " done" : "") + '" data-k="' + esc(k) + '" data-n="' + esc(e.n) + '">' +
      '<button class="epi-h" type="button">' +
      '<span class="mark" data-act="mark" role="button" tabindex="0" aria-label="Marcar como entendido">&#10003;</span>' +
      '<span class="epi-n">' + esc(e.n) + "</span>" +
      '<span class="epi-t">' + esc(e.titulo) + "</span>" +
      '<span class="epi-m">pág. ' + e.pag + tam(e) + "</span></button>" +
      '<div class="epi-b" hidden></div></li>';
  }).join("") + "</ul>";
  panel.innerHTML = h;

  const cuenta = () => {
    $("epiCont").textContent = epiHechos(man, ud) + " de " + real.epigrafes.length + " marcados";
  };
  cuenta();

  panel.querySelectorAll(".epi").forEach(li => {
    const cuerpo = li.querySelector(".epi-b");
    const carga = () => {
      if (cuerpo.dataset.cargado) return;
      const ep = real.epigrafes.find(x => x.n === li.dataset.n);
      cuerpo.innerHTML = '<div class="lectura">' + parrafos(ep.texto) + "</div>";
      cuerpo.dataset.cargado = "1";
    };
    li.querySelector(".epi-h").addEventListener("click", e => {
      if (e.target.closest('[data-act="mark"]')) {
        const k = li.dataset.k;
        S.epi[k] = !S.epi[k];
        li.classList.toggle("done", !!S.epi[k]);
        save(); updHud(); cuenta();
        return;
      }
      if (!cuerpo.hidden) { cuerpo.hidden = true; return; }
      carga(); cuerpo.hidden = false;
    });
    li._abrir = () => { carga(); cuerpo.hidden = false; };
    li._cerrar = () => { cuerpo.hidden = true; };
  });
  $("abrirTodo").onclick = () => panel.querySelectorAll(".epi").forEach(li => li._abrir());
  $("cerrarTodo").onclick = () => panel.querySelectorAll(".epi").forEach(li => li._cerrar());
}

/* ---------------- resumen de la unidad ---------------- */
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
  h += "</div>";
  const panel = $("panel");
  panel.innerHTML = h;
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

/* ---------------- fichas de la unidad ---------------- */
let fDeck = [], fIdx = 0, fModo = "esp", fCtx = null;
function buildDeck() {
  let base = fichasDe(fCtx.man, fCtx.ud);
  if (fModo === "esp") {
    base = base.slice().sort((a, b) => (S.box[fKey(a)] || 0) - (S.box[fKey(b)] || 0));
    const pend = base.filter(f => (S.box[fKey(f)] || 0) < 2);
    fDeck = pend.length ? pend : base;
  } else fDeck = shuffle(base.slice());
  fIdx = 0;
}
function panelFichas(c) {
  fCtx = c;
  let h = '<p class="lead">Pregunta delante, respuesta detrás. En <b>repaso espaciado</b> vuelven antes las que fallas y salen de la rotación las que aciertas dos veces.</p>';
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
  const k = fKey(f);
  S.box[k] = ok ? Math.min(2, (S.box[k] || 0) + 1) : 0;
  save();
  if (fDeck.length) { fIdx = (fIdx + 1) % fDeck.length; paintFicha(); }
}
function paintFicha() {
  const f = fDeck[fIdx];
  if (!f) { $("fQ").textContent = "No quedan fichas."; $("fA").textContent = ""; $("fCount").textContent = "0 / 0"; return; }
  $("card").dataset.flip = "0";
  $("fLbl").textContent = temaById(f.t).t;
  $("fQ").innerHTML = f.q; $("fA").innerHTML = f.a;
  $("fCount").textContent = (fIdx + 1) + " / " + fDeck.length;
  const tot = fichasDe(fCtx.man, fCtx.ud).length;
  $("fStats").textContent = fichasDominadas(fCtx.man, fCtx.ud) + " de " + tot + " dominadas";
}
document.addEventListener("keydown", e => {
  if (!$("card") || !fDeck.length || !$("gate").hidden) return;
  if (e.target.matches("input, textarea")) return;
  if (e.key === "ArrowRight") { fIdx = (fIdx + 1) % fDeck.length; paintFicha(); }
  if (e.key === "ArrowLeft") { fIdx = (fIdx - 1 + fDeck.length) % fDeck.length; paintFicha(); }
});

/* =========================================================
   MOTOR DE PREGUNTAS — lo usan el test, el examen de unidad
   y el examen general
   ========================================================= */
let tSet = [], tIdx = 0, tSel = [], tAnswered = false, tScore = 0, tFails = [];
let tCfg = { len: 10, of: "" };
let tCtx = null;          // { man, ud } o null si es general
let exTimer = null, exFin = 0, exMin = 0;
const EX_N = 40, EX_MIN = 30;
const EXU_N = 20, EXU_MIN = 15;

function panelTest(c) {
  tCtx = c;
  const pool = preguntasDe(c.man, c.ud);
  const ofic = pool.filter(q => q.of).length;
  const best = S.uBest[uKey(c.man, c.ud)];
  const mias = pool.filter(q => S.wrong.includes(q.i)).length;

  let h = '<p class="lead">' + pool.length + " preguntas de esta unidad, con corrección inmediata y la explicación del temario. " +
    "Las de <b>respuesta múltiple</b> vienen marcadas.</p>";
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
    (best ? "Mejor marca en la unidad: <b>" + best.pct + "%</b>" : "Aún sin marca en esta unidad") + "</span></div>";

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
    (best && best.examen ? "Mejor examen de la unidad: <b>" + best.examen + "%</b>" : "Aún no lo has hecho") + "</span></div>" +
    '<div class="why">El cronómetro sigue corriendo aunque cambies de pestaña. Si se agota, se corrige lo respondido.</div>';
  $("exStart").onclick = () => arranca(shuffle(pool.slice()).slice(0, n), true, EXU_MIN);
}

function vistaExamenGeneral() {
  tCtx = null;
  const b = S.examBest ? "Mejor examen: <b>" + S.examBest.pct + "%</b> · " + S.examBest.fecha : "Aún no has hecho ningún examen";
  $("vista").innerHTML = cabeceraSuelta("Examen general", "Todo el certificado a la vez") +
    '<div id="panel" class="panel-uni"><p class="lead">Simulacro completo: <b>' + EX_N +
    " preguntas</b> de los cuatro módulos en <b>" + EX_MIN + " minutos</b>, sin corrección hasta el final. Se aprueba con <b>75 %</b>.</p>" +
    '<div class="bar"><button class="btn" id="exStart" type="button">Empezar examen</button>' +
    '<span class="spacer"></span><span class="hint">' + b + "</span></div>" +
    '<div class="why">El cronómetro corre aunque cambies de pestaña. Si se agota, se corrige lo respondido hasta ese momento.</div></div>';
  enlazaVolver();
  $("exStart").onclick = () => arranca(shuffle(PREGUNTAS.map((q, i) => Object.assign({}, q, { i }))).slice(0, EX_N), true, EX_MIN);
}

function vistaFalladas() {
  tCtx = null;
  const pool = PREGUNTAS.map((q, i) => Object.assign({}, q, { i })).filter(q => S.wrong.includes(q.i));
  let h = cabeceraSuelta("Mis falladas", pool.length + " preguntas pendientes de todo el certificado");
  h += '<div id="panel" class="panel-uni">';
  if (!pool.length) {
    h += '<p class="empty">No tienes preguntas falladas pendientes. Aparecen aquí en cuanto falles alguna y salen cuando la aciertas.</p>';
  } else {
    h += '<p class="lead">Repasa solo lo que has fallado. Una pregunta sale de esta lista cuando la aciertas.</p>' +
      '<div class="bar"><button class="btn" id="start" type="button">Repasar las ' + pool.length + "</button></div>";
  }
  h += "</div>";
  $("vista").innerHTML = h;
  enlazaVolver();
  const s = $("start");
  if (s) s.onclick = () => arranca(shuffle(pool.slice()), false, 0);
}

function cabeceraSuelta(t, sub) {
  return '<div class="crumb"><button class="volver" type="button" data-volver="1">&larr; Todas las unidades</button></div>' +
    '<div class="ud-hero"><div class="k">SEA029</div><div class="cuerpo"><h2>' + t + "</h2>" +
    '<p class="sub">' + sub + "</p></div></div>";
}
function enlazaVolver() {
  document.querySelectorAll("[data-volver]").forEach(b => b.onclick = () => ir("#/"));
}

function arranca(set, examen, minutos) {
  if (!set.length) return;
  tSet = set; tIdx = 0; tScore = 0; tFails = []; tSel = []; tAnswered = false;
  clearInterval(exTimer);
  if (examen) {
    exMin = minutos;
    exFin = Date.now() + minutos * 60000;
    exTimer = setInterval(tick, 1000);
  }
  paintQ(examen);
}

function paintQ(examen) {
  const p = $("panel"), q = tSet[tIdx], multi = q.c.length > 1, tm = temaById(q.t);
  let h = '<div class="progress"><i style="width:' + (tIdx / tSet.length * 100) + '%"></i></div>';
  h += '<div class="qcard"><div class="qmeta">' +
    '<span class="pill">' + esc(tm.man) + " UD" + tm.ud + "</span>" +
    '<span class="pill">' + esc(tm.t) + "</span>" +
    '<span class="pill">' + (tIdx + 1) + " de " + tSet.length + "</span>" +
    (q.of ? '<span class="pill of">' + esc(q.of) + "</span>" : "") +
    (multi ? '<span class="pill multi">Respuesta múltiple</span>' : "") +
    (examen ? '<span class="pill time" id="clock">--:--</span>' : "") +
    '<span class="spacer"></span><span>Aciertos: ' + tScore + "</span></div>";
  h += '<div class="qtext">' + q.q + '</div><div class="opts" id="opts">';
  q.o.forEach((o, i) => { h += '<button class="opt" type="button" data-i="' + i + '"><span class="k">' + "abcd"[i] + ')</span><span>' + o + "</span></button>"; });
  h += '</div><div id="fb"></div>';
  h += '<div class="bar" style="margin:16px 0 0"><button class="btn" id="check" type="button">Comprobar</button>' +
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
    ? '<div class="ud-hero"><div class="k">Sesión</div><div class="cuerpo"><h2>Interrumpida · ' + tScore + " de " + hechas + " aciertos</h2></div></div>" +
      '<div class="bar"><button class="btn" id="again" type="button">Volver</button></div>'
    : resultHTML(pct, examen);
  const a = $("again"); if (a) a.onclick = repite;
  const r = $("redo"); if (r) r.onclick = () => arranca(tFails.slice(), false, 0);
  updHud();
}
function repite() {
  const r = ruta();
  if (r.vista === "unidad") vistaUnidad(r); else pinta();
}
function resultHTML(pct, examen) {
  let h = '<div class="ud-hero"><div class="k">' + (examen ? "Examen" : "Test") + '</div><div class="cuerpo"><h2>' +
    (pct >= 75 ? "Apto" : "A repasar") + '</h2></div><div class="ud-pct"><b>' + pct + "%</b><span>nota</span></div></div>";
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
function panelOral(c) {
  const os = oralDe(c.man, c.ud);
  let h = '<p class="lead">Responde en voz alta y solo después despliega el guion. Está ordenado como conviene contestar: definición, clasificación, detalle y cierre.</p><div class="oral">';
  os.forEach((o, i) => {
    h += '<article class="oq"><button type="button" data-i="' + i + '"><span class="qi">' + String(i + 1).padStart(2, "0") + "</span>" +
      '<span class="qt">' + o.q + '</span><span class="st">ver guion</span></button>' +
      '<div class="oa" hidden><ul>' + o.p.map(x => "<li>" + x + "</li>").join("") + "</ul></div></article>";
  });
  const panel = $("panel");
  panel.innerHTML = h + "</div>";
  panel.querySelectorAll(".oq > button").forEach(b => b.onclick = () => {
    const a = b.nextElementSibling; a.hidden = !a.hidden;
    b.querySelector(".st").textContent = a.hidden ? "ver guion" : "ocultar";
  });
}

/* ---------------- chuleta ---------------- */
const CIRC = [
  { n: "1er círculo · interior", who: "Escolta personal", d: "Las personas más próximas al protegido; la distancia depende de la situación concreta. Misión: cubrir y proteger de un ataque y realizar una rápida evacuación a lugar seguro." },
  { n: "2º círculo", who: "Puestos de seguridad", d: "Guardan cierta distancia con el protegido, pero lo mantienen dentro de su campo de observación." },
  { n: "3er círculo", who: "Patrullas móviles y grupos de información", d: "El más alejado. No controlan ni vigilan al protegido, pero están dentro del dispositivo para una posible actuación si ocurriese alguna desgracia." }
];
function conv(cap, cars) {
  return '<div class="conv"><div class="cap">' + cap + "</div>" +
    cars.slice().reverse().map(c => '<div class="car ' + (c === "VIP" ? "vip" : "ve") + '">' + c + "</div>")
      .join('<div class="arrow">&#9650;</div>') + "</div>";
}
function selCirc(i) {
  const c = CIRC[i];
  $("cN").textContent = c.n;
  $("cW").textContent = c.who;
  $("cD").innerHTML = c.d;
  document.querySelectorAll("#cLeg button").forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.c === i)));
}
function diagramaCirculos() {
  return '<div class="diagram"><svg viewBox="0 0 240 240" role="img" aria-label="Diagrama de los tres círculos concéntricos">' +
    '<circle class="d-ring" data-c="2" cx="120" cy="120" r="112" fill="var(--azul-soft)" stroke="var(--azul)" stroke-width="1.5"></circle>' +
    '<circle class="d-ring" data-c="1" cx="120" cy="120" r="80" fill="var(--surface-2)" stroke="var(--azul)" stroke-width="1.5"></circle>' +
    '<circle class="d-ring" data-c="0" cx="120" cy="120" r="48" fill="var(--ambar-soft)" stroke="var(--ambar)" stroke-width="1.5"></circle>' +
    '<circle cx="120" cy="120" r="20" fill="var(--azul)"></circle>' +
    '<text x="120" y="124" text-anchor="middle" fill="var(--surface)" font-family="IBM Plex Mono, monospace" font-size="11">VIP</text>' +
    '<text x="120" y="90" text-anchor="middle" fill="var(--ambar)" font-family="IBM Plex Mono, monospace" font-size="12">1</text>' +
    '<text x="120" y="58" text-anchor="middle" fill="var(--azul)" font-family="IBM Plex Mono, monospace" font-size="12">2</text>' +
    '<text x="120" y="26" text-anchor="middle" fill="var(--azul)" font-family="IBM Plex Mono, monospace" font-size="12">3</text>' +
    '</svg><div class="d-info"><h4 id="cN"></h4><div class="who" id="cW"></div><p id="cD"></p>' +
    '<div class="d-legend" id="cLeg"></div></div></div>';
}
function diagramaCaravana() {
  return '<div class="ref" style="margin-top:16px"><h3>Posición de los coches</h3><div class="cnt">Sentido de la marcha hacia arriba</div><div class="caravana">' +
    conv("1 coche de escolta", ["VIP", "VE"]) +
    conv("2 coches de escolta", ["VE", "VIP", "VE"]) +
    conv("3 coches de escolta", ["VE", "VIP", "VE", "VE"]) + "</div></div>";
}
function panelChuleta(c, lista, destino) {
  const p = destino ? $(destino) : $("panel");
  const esUF2676 = c && c.man === "UF2676";
  let h = '<p class="lead">Las listas numeradas y las cifras que caen. Si la pregunta empieza por «cuántos» o «cuáles», la respuesta sale de aquí.</p>';
  if (esUF2676 && c.ud === 1) h += diagramaCirculos();
  if (esUF2676 && c.ud === 2) h += diagramaCaravana();
  if (!c) { h += diagramaCirculos() + diagramaCaravana(); }

  h += '<div class="grid2" style="margin-top:16px">';
  lista.forEach(r => {
    const tag = r.ord ? "ol" : "ul";
    h += '<div class="ref"><h3>' + r.t + '</h3><div class="cnt">' + r.cnt + "</div><" + tag + ">" +
      r.l.map(x => "<li>" + x + "</li>").join("") + "</" + tag + "></div>";
  });
  h += "</div>";
  if (esUF2676) h += '<div class="aviso" style="margin-top:16px"><b>Fe de erratas del manual.</b> En la página 17 cita «Ley 5/2014, de <s>14</s> de abril». La fecha correcta —y la que repite el propio manual en el resto de páginas— es <b>Ley 5/2014, de 4 de abril, de Seguridad Privada</b>. Si te lo preguntan, di <b>4 de abril</b>.</div>';
  p.innerHTML = h;

  const leg = $("cLeg");
  if (leg) {
    CIRC.forEach((cc, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.dataset.c = i;
      b.innerHTML = '<span class="sw" style="background:' + (i === 0 ? "var(--ambar)" : "var(--azul)") +
        ";opacity:" + (1 - i * 0.3) + '"></span>' + cc.n;
      b.onclick = () => selCirc(i);
      leg.appendChild(b);
    });
    p.querySelectorAll(".d-ring").forEach(r => r.onclick = () => selCirc(+r.dataset.c));
    selCirc(0);
  }
}
function vistaChuletaGeneral() {
  $("vista").innerHTML = cabeceraSuelta("Chuleta completa", CHULETA.length + " bloques de todo el certificado") +
    '<div id="panel" class="panel-uni"></div>';
  enlazaVolver();
  panelChuleta(null, CHULETA, "panel");
}

/* ---------------- buscador ---------------- */
let cargandoTodo = false;
function vistaBuscar() {
  $("vista").innerHTML = cabeceraSuelta("Buscar", "En el temario, los resúmenes, las fichas, las preguntas y la chuleta") +
    '<div id="panel" class="panel-uni">' +
    '<div class="bar"><input class="search" id="q" type="search" placeholder="Glasgow, ANFO, detención, balística, armero…" autocomplete="off">' +
    '<button class="btn ghost" id="loadAll" type="button">Incluir el temario completo</button></div>' +
    '<div id="hits"><p class="empty">Escribe al menos dos caracteres.</p></div></div>';
  enlazaVolver();
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
        hits.push({ k: m.cod + " · UD" + u.n + " · pág. " + e.pag, t: e.n + " " + e.titulo, b: "…" + e.texto.slice(a, b) + "…", ir: "#/u/" + m.clave + "/" + u.n + "/temario" });
        i = t.indexOf(q, i + q.length); n++;
      }
    }));
  });
  TEMAS.forEach(t => t.c.forEach(s => s.l.forEach(li => {
    if (sinAc(plano(li)).includes(q)) hits.push({ k: t.man + " UD" + t.ud + " · Resumen", t: t.t + " — " + s.h, b: li, ir: "#/u/" + t.man + "/" + t.ud + "/resumen" });
  })));
  FICHAS.forEach(f => {
    if (sinAc(plano(f.q + " " + f.a)).includes(q)) {
      const tm = temaById(f.t);
      hits.push({ k: tm.man + " UD" + tm.ud + " · Ficha", t: plano(f.q), b: f.a, ir: "#/u/" + tm.man + "/" + tm.ud + "/fichas" });
    }
  });
  PREGUNTAS.forEach(p2 => {
    if (sinAc(plano(p2.q + " " + p2.o.join(" ") + " " + p2.w)).includes(q)) {
      const tm = temaById(p2.t);
      hits.push({ k: tm.man + " UD" + tm.ud + " · Test", t: plano(p2.q), b: "<b>" + p2.c.map(i => plano(p2.o[i])).join(" · ") + "</b> — " + p2.w, ir: "#/u/" + tm.man + "/" + tm.ud + "/test" });
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
   PUERTA: cuentas de usuario
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

async function envíaGate() {
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
    SESION = d.sesion; USUARIO = d.usuario;
    lsSet(KSES, SESION); lsSet(KUSR, USUARIO);
    $("gatePass").value = "";
    $("gate").hidden = true;
    await unlock(USUARIO);
  } catch (e) {
    err.textContent = "No hay conexión con el servicio de cuentas.";
  } finally {
    boton.disabled = false; boton.textContent = texto;
  }
}

/* ---- puerta antigua, por si el servicio aún no tiene cuentas ---- */
function genToken() {
  const a = "abcdefghijkmnpqrstuvwxyz23456789";
  let t = ""; for (let i = 0; i < 14; i++) t += a[Math.floor(Math.random() * a.length)];
  return t.slice(0, 5) + "-" + t.slice(5, 9) + "-" + t.slice(9);
}
function puertaToken() {
  $("gateModo").hidden = true;
  $("gateTitulo").textContent = "Identifica tu progreso";
  $("gateTexto").textContent = "Escribe tu token de estudio. Tu progreso queda asociado a él, no a este navegador.";
  $("gateUser").parentElement.hidden = true;
  $("gatePass").parentElement.querySelector("label").textContent = "Token";
  $("gatePass").type = "text";
  $("gatePass").placeholder = "p. ej. david-vigilante-2026";
  $("gatePass").setAttribute("autocomplete", "off");
  $("gateGo").textContent = "Entrar";
  $("gateOtro").textContent = "Generar uno al azar";
  $("gateNota").innerHTML = "<b>Esto no es una contraseña.</b> Es la etiqueta de tu progreso. La página es pública: el token identifica, no protege.";
  $("gateOtro").onclick = () => { $("gatePass").value = genToken(); $("gatePass").focus(); };
  $("gateGo").onclick = async () => {
    const v = $("gatePass").value.trim();
    if (!TOKEN_RE.test(v)) { $("gateErr").textContent = "Entre 6 y 56 caracteres. Letras, números, guion y guion bajo."; return; }
    TOKEN = v; lsSet(TKEY, v);
    $("gate").hidden = true;
    await unlock(v);
  };
}

/* ---- traer el progreso de un token antiguo ---- */
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
async function boot() {
  if (!IDX.length) {
    try { IDX = await (await fetch("temario/indice.json")).json(); }
    catch (e) { IDX = []; }
  }
  updHud();
  pinta();
  $("savedNote").textContent = SESION
    ? "Progreso guardado en la cuenta " + USUARIO
    : "Progreso guardado en el token " + TOKEN;
}

async function servicioTieneCuentas() {
  try {
    const r = await fetch(CONFIG.SYNC_URL + "/");
    const d = await r.json();
    return !!d.cuentas;
  } catch (e) { return false; }
}

(async function start() {
  $("outBtn").onclick = lock;
  $("homeBtn").onclick = () => ir("#/");
  $("themeBtn").onclick = () => {
    const r = document.documentElement, cur = r.getAttribute("data-theme");
    const dark = cur ? cur === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
    r.setAttribute("data-theme", dark ? "light" : "dark");
  };
  ["gateUser", "gatePass"].forEach(id =>
    $(id).addEventListener("keydown", e => { if (e.key === "Enter") $("gateGo").click(); }));

  CUENTAS = await servicioTieneCuentas();

  if (!CUENTAS) {
    puertaToken();
    const t = lsGet(TKEY);
    if (t && TOKEN_RE.test(t)) { TOKEN = t; $("gate").hidden = true; await unlock(t); }
    else abrePuerta("");
    return;
  }

  $("gateGo").onclick = envíaGate;
  $("gateOtro").onclick = () => { modoGate = modoGate === "registro" ? "entrar" : "registro"; pintaModo(); $("gateUser").focus(); };
  document.querySelectorAll("#gateModo button").forEach(b => b.onclick = () => { modoGate = b.dataset.m; pintaModo(); $("gateUser").focus(); });
  pintaModo();

  const ses = lsGet(KSES), usr = lsGet(KUSR);
  if (ses && usr) {
    SESION = ses; USUARIO = usr;
    $("gate").hidden = true;
    await unlock(usr);
  } else abrePuerta("");
})();
