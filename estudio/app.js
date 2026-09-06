"use strict";
/* =========================================================
   SEA029 — plataforma de estudio
   ========================================================= */

const CONFIG = { SYNC_URL: "https://uf2676.entrenadorespokemon.workers.dev", SUFIJO: "-sea029" };

/* ---------------- estado ---------------- */
const TKEY = "sea029:token";
const TOKEN_RE = /^[A-Za-z0-9_-]{6,56}$/;
let TOKEN = null;
let S = { done: {}, epi: {}, best: null, wrong: [], box: {}, examBest: null };
let pushTimer = null;

let IDX = [];                 // indice de manuales
const CACHE = {};             // texto de manuales ya cargados

const $ = id => document.getElementById(id);
const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const lsDel = k => { try { localStorage.removeItem(k); } catch (e) {} };
const slotKey = () => "sea029:p:" + TOKEN;
const remoteKey = () => TOKEN + CONFIG.SUFIJO;

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
async function push() {
  if (!CONFIG.SYNC_URL || !TOKEN) return;
  try {
    const r = await fetch(CONFIG.SYNC_URL + "/p/" + encodeURIComponent(remoteKey()), {
      method: "PUT", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: S.done, epi: S.epi, best: S.best, wrong: S.wrong, box: S.box, examBest: S.examBest })
    });
    if (!r.ok) throw new Error("HTTP " + r.status);
    setSync("ok", "sincronizado");
  } catch (e) { setSync("err", "sin conexion"); }
}
async function pull() {
  if (!CONFIG.SYNC_URL || !TOKEN) return null;
  try {
    const r = await fetch(CONFIG.SYNC_URL + "/p/" + encodeURIComponent(remoteKey()));
    if (!r.ok) throw new Error("HTTP " + r.status);
    return await r.json();
  } catch (e) { return null; }
}
const hasData = o => !!o && ((o.done && Object.keys(o.done).length) || (o.epi && Object.keys(o.epi).length) ||
  o.best || (o.wrong && o.wrong.length) || (o.box && Object.keys(o.box).length));
const norma = o => ({ done: o.done || {}, epi: o.epi || {}, best: o.best || null, wrong: o.wrong || [], box: o.box || {}, examBest: o.examBest || null });

async function unlock(token) {
  TOKEN = token;
  lsSet(TKEY, token);
  $("whoChip").textContent = token;
  $("whoChip").title = "Token de estudio: " + token;

  let local = null;
  try { const raw = lsGet(slotKey()); if (raw) local = JSON.parse(raw); } catch (e) {}

  if (CONFIG.SYNC_URL) {
    setSync("wait", "conectando");
    const remoto = await pull();
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
function lock() {
  clearTimeout(pushTimer); lsDel(TKEY); TOKEN = null; S = norma({});
  $("gate").hidden = false;
  const i = $("gateInput"); i.value = ""; i.focus();
  $("gateErr").textContent = "";
}

/* ---------------- utilidades ---------------- */
const temaById = id => TEMAS.find(t => t.id === id);
const modById = id => MODULOS.find(m => m.id === id);
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const plano = h => String(h).replace(/<[^>]*>/g, "");
const sinAc = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const epiKey = (clave, un, en) => clave + "|" + un + "|" + en;

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

/* ---------------- pestañas ---------------- */
let TABS = [];
function initTabs() {
  TABS = [["temario", "Temario", totalEpi()], ["resumen", "Resumen", TEMAS.length],
  ["fichas", "Fichas", FICHAS.length], ["test", "Test", PREGUNTAS.length],
  ["examen", "Examen", ""], ["oral", "Oral", ORAL.length],
  ["chuleta", "Chuleta", ""], ["buscar", "Buscar", ""]];
  const el = $("tabs"); el.innerHTML = "";
  TABS.forEach(([id, label, n], i) => {
    const b = document.createElement("button");
    b.className = "tab"; b.type = "button"; b.setAttribute("role", "tab"); b.dataset.t = id;
    b.setAttribute("aria-selected", i === 0 ? "true" : "false");
    b.innerHTML = label + (n ? '<span class="n">' + n + "</span>" : "");
    b.onclick = () => go(id);
    el.appendChild(b);
  });
}
function go(id) {
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", String(t.dataset.t === id)));
  TABS.forEach(([t]) => { const p = $("p-" + t); if (p) p.hidden = (t !== id); });
  if (id === "buscar") { const q = $("q"); if (q) q.focus(); }
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ---------------- TEMARIO completo ---------------- */
let abiertoManual = null, abiertaUD = null;

function renderTemario() {
  const p = $("p-temario");
  let h = '<p class="lead">El temario completo de los manuales, ' + totalEpi() +
    ' epígrafes en ' + IDX.reduce((a, m) => a + m.uds.length, 0) +
    ' unidades didácticas. Pulsa un epígrafe para leerlo y marca el círculo cuando lo domines.</p>';

  h += '<div class="mods">';
  IDX.forEach(m => {
    const eps = m.uds.reduce((a, u) => a + u.epigrafes.length, 0);
    const d = m.uds.reduce((a, u) => a + u.epigrafes.filter(e => S.epi[epiKey(m.clave, u.n, e.n)]).length, 0);
    const pct = eps ? Math.round(d / eps * 100) : 0;
    h += '<button class="mod" type="button" data-man="' + m.clave + '">' +
      '<div class="cod">' + m.cod + '</div><h3>' + esc(m.nombre) + "</h3>" +
      '<div class="barp"><i style="width:' + pct + '%"></i></div>' +
      '<div class="st"><span>' + d + " / " + eps + " epígrafes</span><span>" + pct + "%</span></div></button>";
  });
  h += "</div>";

  h += '<div class="why" style="margin-bottom:18px">La <b>UF2676, Protección de personas</b> (MF0081_2) tiene su propia página con el manual desarrollado: ' +
    '<a href="/UF2676" style="color:inherit"><b>lydiel.online/UF2676</b></a>.</div>';

  h += '<div id="arbol"></div>';
  p.innerHTML = h;
  p.querySelectorAll("[data-man]").forEach(b => b.onclick = () => abreManual(b.dataset.man));
  if (abiertoManual) abreManual(abiertoManual, true);
}

async function abreManual(clave, silencioso) {
  abiertoManual = clave;
  const m = IDX.find(x => x.clave === clave);
  const cont = $("arbol");
  cont.innerHTML = '<p class="empty">Cargando ' + m.cod + "...</p>";
  let datos;
  try { datos = await cargaManual(clave); }
  catch (e) { cont.innerHTML = '<p class="empty">No se pudo cargar el temario de ' + m.cod + ".</p>"; return; }

  let h = '<div class="ud-head"><span class="k">' + m.cod + '</span><h2>' + esc(m.nombre) + "</h2></div>";
  h += '<div class="blocks">';
  datos.uds.forEach(u => {
    const hechos = u.epigrafes.filter(e => S.epi[epiKey(clave, u.n, e.n)]).length;
    const todos = hechos === u.epigrafes.length;
    h += '<article class="block' + (todos ? " done" : "") + '" data-ud="' + u.n + '" data-open="0">' +
      '<button class="bh" type="button"><span class="num">UD' + u.n + '</span>' +
      '<span class="t">' + esc(u.titulo) + "</span>" +
      '<span class="hint" style="white-space:nowrap">' + hechos + "/" + u.epigrafes.length + "</span>" +
      '<span class="caret">&#9656;</span></button><div class="bbody" hidden>' + listaEpi(clave, u) + "</div></article>";
  });
  h += "</div>";
  cont.innerHTML = h;

  cont.querySelectorAll(".block").forEach(bl => {
    bl.querySelector(".bh").onclick = () => {
      const open = bl.dataset.open === "1";
      bl.dataset.open = open ? "0" : "1";
      bl.querySelector(".bbody").hidden = open;
    };
  });
  enlazaEpi(cont, clave, datos);
  if (abiertaUD) {
    const bl = cont.querySelector('[data-ud="' + abiertaUD + '"]');
    if (bl) { bl.dataset.open = "1"; bl.querySelector(".bbody").hidden = false; }
  }
  if (!silencioso) cont.scrollIntoView({ behavior: "smooth", block: "start" });
}

function listaEpi(clave, u) {
  return '<ul class="epis">' + u.epigrafes.map(e => {
    const k = epiKey(clave, u.n, e.n);
    return '<li class="epi' + (S.epi[k] ? " done" : "") + '" data-k="' + esc(k) + '" data-n="' + esc(e.n) + '" data-ud="' + u.n + '">' +
      '<button class="epi-h" type="button">' +
      '<span class="mark" data-act="mark" role="button" tabindex="0" aria-label="Marcar como dominado">&#10003;</span>' +
      '<span class="epi-n">' + esc(e.n) + '</span>' +
      '<span class="epi-t">' + esc(e.titulo) + "</span>" +
      '<span class="epi-m">pág. ' + e.pag + " · " + Math.round(e.chars / 1000) + "k</span></button>" +
      '<div class="epi-b" hidden></div></li>';
  }).join("") + "</ul>";
}

function enlazaEpi(cont, clave, datos) {
  cont.querySelectorAll(".epi").forEach(li => {
    li.querySelector(".epi-h").addEventListener("click", e => {
      const k = li.dataset.k;
      if (e.target.closest('[data-act="mark"]')) {
        S.epi[k] = !S.epi[k];
        li.classList.toggle("done", !!S.epi[k]);
        save(); updHud(); refrescaContadores(cont, clave, datos);
        return;
      }
      const body = li.querySelector(".epi-b");
      if (!body.hidden) { body.hidden = true; return; }
      if (!body.dataset.cargado) {
        const un = +li.dataset.ud, en = li.dataset.n;
        const ud = datos.uds.find(x => x.n === un);
        const ep = ud.epigrafes.find(x => x.n === en);
        body.innerHTML = '<div class="lectura">' + parrafos(ep.texto) + "</div>";
        body.dataset.cargado = "1";
      }
      body.hidden = false;
      abiertaUD = li.dataset.ud;
    });
  });
}
function refrescaContadores(cont, clave, datos) {
  cont.querySelectorAll(".block").forEach(bl => {
    const u = datos.uds.find(x => x.n === +bl.dataset.ud);
    const hechos = u.epigrafes.filter(e => S.epi[epiKey(clave, u.n, e.n)]).length;
    bl.querySelector(".bh .hint").textContent = hechos + "/" + u.epigrafes.length;
    bl.classList.toggle("done", hechos === u.epigrafes.length);
  });
  document.querySelectorAll("#p-temario .mod").forEach(el => {
    const m = IDX.find(x => x.clave === el.dataset.man);
    const eps = m.uds.reduce((a, u) => a + u.epigrafes.length, 0);
    const d = m.uds.reduce((a, u) => a + u.epigrafes.filter(e => S.epi[epiKey(m.clave, u.n, e.n)]).length, 0);
    const pct = eps ? Math.round(d / eps * 100) : 0;
    el.querySelector(".barp i").style.width = pct + "%";
    el.querySelector(".st").innerHTML = "<span>" + d + " / " + eps + " epígrafes</span><span>" + pct + "%</span>";
  });
}
function parrafos(txt) {
  return txt.split("\n").map(l => {
    if (l.startsWith("### ")) return "<h5>" + esc(l.slice(4)) + "</h5>";
    return "<p>" + esc(l) + "</p>";
  }).join("");
}

/* ---------------- RESUMEN (temas condensados) ---------------- */
let filtroMod = "";
function renderResumen() {
  const p = $("p-resumen");
  let h = '<p class="lead">Los ' + TEMAS.length + ' temas condensados: lo esencial de cada bloque para repasar rápido antes del examen. ' +
    'El temario largo está en la pestaña anterior.</p>';
  h += '<div class="bar"><span class="hint">Ver</span>' +
    '<button class="chip" data-f="" aria-pressed="' + (filtroMod === "" ? "true" : "false") + '">Todo</button>';
  MODULOS.forEach(m => h += '<button class="chip" data-f="' + m.id + '" aria-pressed="' + (filtroMod === m.id ? "true" : "false") + '">' + m.cod + "</button>");
  h += '<span class="spacer"></span><button class="btn ghost" id="openAll" type="button">Abrir todo</button>' +
    '<button class="btn ghost" id="closeAll" type="button">Cerrar todo</button></div>';

  MODULOS.forEach(m => {
    if (filtroMod && filtroMod !== m.id) return;
    const ts = TEMAS.filter(t => t.mod === m.id);
    if (!ts.length) return;
    h += '<div class="ud-head"><span class="k">' + m.cod + '</span><h2>' + m.nombre + "</h2></div><div class=\"blocks\">";
    ts.forEach(t => {
      h += '<article class="block' + (S.done[t.id] ? " done" : "") + '" data-id="' + t.id + '" data-open="0">' +
        '<button class="bh" type="button"><span class="num">' + t.n + '</span><span class="t">' + t.t + "</span>" +
        '<span class="mark" data-act="mark" role="button" tabindex="0" aria-label="Marcar">&#10003;</span>' +
        '<span class="caret">&#9656;</span></button><div class="bbody" hidden>';
      t.c.forEach(s => { h += "<h4>" + s.h + "</h4><ul>" + s.l.map(x => "<li>" + x + "</li>").join("") + "</ul>"; });
      h += "</div></article>";
    });
    h += "</div>";
  });
  p.innerHTML = h;
  p.querySelectorAll("[data-f]").forEach(c => c.onclick = () => { filtroMod = c.dataset.f; renderResumen(); });
  p.querySelectorAll(".block").forEach(bl => {
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
  $("openAll").onclick = () => p.querySelectorAll(".block").forEach(b => { b.dataset.open = "1"; b.querySelector(".bbody").hidden = false; });
  $("closeAll").onclick = () => p.querySelectorAll(".block").forEach(b => { b.dataset.open = "0"; b.querySelector(".bbody").hidden = true; });
}

/* ---------------- fichas ---------------- */
let fDeck = [], fIdx = 0, fFiltro = "", fModo = "esp";
const fKey = f => f.t + ":" + FICHAS.indexOf(f);
function buildDeck() {
  let base = FICHAS.filter(f => !fFiltro || temaById(f.t).mod === fFiltro);
  if (fModo === "esp") {
    base = base.slice().sort((a, b) => (S.box[fKey(a)] || 0) - (S.box[fKey(b)] || 0));
    const pend = base.filter(f => (S.box[fKey(f)] || 0) < 2);
    fDeck = pend.length ? pend : base;
  } else fDeck = shuffle(base.slice());
  fIdx = 0;
}
function renderFichas() {
  const p = $("p-fichas");
  let h = '<p class="lead">Pregunta delante, respuesta detrás. En <b>repaso espaciado</b> vuelven antes las que fallas y salen de la rotación las que aciertas dos veces.</p>';
  h += '<div class="bar"><span class="hint">Módulo</span><button class="chip" data-fm="" aria-pressed="true">Todos</button>';
  MODULOS.forEach(m => h += '<button class="chip" data-fm="' + m.id + '" aria-pressed="false">' + m.cod + "</button>");
  h += '</div><div class="bar"><span class="hint">Modo</span>' +
    '<button class="chip" data-md="esp" aria-pressed="true">Repaso espaciado</button>' +
    '<button class="chip" data-md="all" aria-pressed="false">Todas, al azar</button>' +
    '<span class="spacer"></span><span class="hint" id="fStats"></span></div>';
  h += '<div class="deck"><div class="card" id="card" data-flip="0" tabindex="0" role="button" aria-label="Girar ficha"><div class="card-in">' +
    '<div class="face front"><span class="lbl" id="fLbl"></span><div class="q" id="fQ"></div><span class="lbl" style="opacity:.6">Pulsa para ver la respuesta</span></div>' +
    '<div class="face back"><span class="lbl">Respuesta</span><div class="a" id="fA"></div></div></div></div>' +
    '<div class="deck-nav"><button class="btn ghost" id="prev" type="button">&larr;</button>' +
    '<span class="counter" id="fCount"></span>' +
    '<div class="grade"><button class="bad" id="gBad" type="button">La fallé</button>' +
    '<button class="good" id="gGood" type="button">La sé</button></div>' +
    '<button class="btn ghost" id="next" type="button">&rarr;</button></div></div>';
  p.innerHTML = h;
  buildDeck(); paintFicha();
  p.querySelectorAll("[data-fm]").forEach(c => c.onclick = () => {
    fFiltro = c.dataset.fm;
    p.querySelectorAll("[data-fm]").forEach(x => x.setAttribute("aria-pressed", String(x === c)));
    buildDeck(); paintFicha();
  });
  p.querySelectorAll("[data-md]").forEach(c => c.onclick = () => {
    fModo = c.dataset.md;
    p.querySelectorAll("[data-md]").forEach(x => x.setAttribute("aria-pressed", String(x === c)));
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
  if (!f) { $("fQ").textContent = "No quedan fichas con ese filtro."; $("fA").textContent = ""; $("fCount").textContent = "0 / 0"; return; }
  $("card").dataset.flip = "0";
  const tm = temaById(f.t);
  $("fLbl").textContent = modById(tm.mod).cod + " · " + tm.t;
  $("fQ").innerHTML = f.q; $("fA").innerHTML = f.a;
  $("fCount").textContent = (fIdx + 1) + " / " + fDeck.length;
  $("fStats").textContent = FICHAS.filter(x => (S.box[fKey(x)] || 0) >= 2).length + " de " + FICHAS.length + " dominadas";
}
document.addEventListener("keydown", e => {
  const pf = $("p-fichas");
  if (!pf || pf.hidden || !$("gate").hidden) return;
  if (e.key === "ArrowRight" && fDeck.length) { fIdx = (fIdx + 1) % fDeck.length; paintFicha(); }
  if (e.key === "ArrowLeft" && fDeck.length) { fIdx = (fIdx - 1 + fDeck.length) % fDeck.length; paintFicha(); }
});

/* ---------------- test ---------------- */
let tSet = [], tIdx = 0, tSel = [], tAnswered = false, tScore = 0, tFails = [];
let tCfg = { mod: "", len: 10 };
function renderTestHome() {
  const p = $("p-test");
  const best = S.best ? "Mejor marca: <b>" + S.best.pct + "%</b> (" + S.best.hits + "/" + S.best.total + ")" : "Aún sin marca registrada";
  let h = '<p class="lead">Test con corrección inmediata y la explicación del temario. Las de <b>respuesta múltiple</b> vienen marcadas.</p>';
  h += '<div class="bar"><span class="hint">Módulo</span><button class="chip" data-tm="" aria-pressed="true">Todo</button>';
  MODULOS.forEach(m => h += '<button class="chip" data-tm="' + m.id + '" aria-pressed="false">' + m.cod + "</button>");
  h += '</div><div class="bar"><span class="hint">Preguntas</span>' +
    '<button class="chip" data-tl="10" aria-pressed="true">10</button>' +
    '<button class="chip" data-tl="20" aria-pressed="false">20</button>' +
    '<button class="chip" data-tl="999" aria-pressed="false">Todas</button></div>';
  h += '<div class="bar"><button class="btn" id="start" type="button">Empezar test</button>' +
    (S.wrong.length ? '<button class="btn ghost" id="startFails" type="button">Repasar mis ' + S.wrong.length + " falladas</button>" : "") +
    '<span class="spacer"></span><span class="hint">' + best + "</span></div>";
  p.innerHTML = h;
  p.querySelectorAll("[data-tm]").forEach(c => c.onclick = () => { tCfg.mod = c.dataset.tm; p.querySelectorAll("[data-tm]").forEach(x => x.setAttribute("aria-pressed", String(x === c))); });
  p.querySelectorAll("[data-tl]").forEach(c => c.onclick = () => { tCfg.len = +c.dataset.tl; p.querySelectorAll("[data-tl]").forEach(x => x.setAttribute("aria-pressed", String(x === c))); });
  $("start").onclick = () => startTest(null);
  const sf = $("startFails"); if (sf) sf.onclick = () => startTest(S.wrong.slice());
}
function startTest(only) {
  let pool = PREGUNTAS.map((q, i) => Object.assign({}, q, { i }));
  if (only) pool = pool.filter(q => only.includes(q.i));
  else {
    if (tCfg.mod) pool = pool.filter(q => temaById(q.t).mod === tCfg.mod);
    shuffle(pool);
    if (tCfg.len < pool.length) pool = pool.slice(0, tCfg.len);
  }
  if (!pool.length) { renderTestHome(); return; }
  tSet = pool; tIdx = 0; tScore = 0; tFails = []; tSel = []; tAnswered = false;
  paintQ("p-test", false);
}
function paintQ(panel, examen) {
  const p = $(panel), q = tSet[tIdx], multi = q.c.length > 1, tm = temaById(q.t);
  let h = '<div class="progress"><i style="width:' + (tIdx / tSet.length * 100) + '%"></i></div>';
  h += '<div class="qcard"><div class="qmeta">' +
    '<span class="pill">' + modById(tm.mod).cod + "</span>" +
    '<span class="pill">' + esc(tm.t) + "</span>" +
    '<span class="pill">' + (tIdx + 1) + " de " + tSet.length + "</span>" +
    (multi ? '<span class="pill multi">Respuesta múltiple</span>' : "") +
    (examen ? '<span class="pill time" id="clock">--:--</span>' : "") +
    '<span class="spacer"></span><span>Aciertos: ' + tScore + "</span></div>";
  h += '<div class="qtext">' + q.q + '</div><div class="opts" id="opts">';
  q.o.forEach((o, i) => { h += '<button class="opt" type="button" data-i="' + i + '"><span class="k">' + "abcd"[i] + ')</span><span>' + o + "</span></button>"; });
  h += '</div><div id="fb"></div>';
  h += '<div class="bar" style="margin:16px 0 0"><button class="btn" id="check" type="button">Comprobar</button>' +
    '<button class="btn ghost" id="skip" type="button">Saltar</button>' +
    (examen ? '<span class="spacer"></span><button class="btn ghost" id="abort" type="button">Abandonar</button>' : "") + "</div></div>";
  p.innerHTML = h;
  tSel = []; tAnswered = false;
  p.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    if (tAnswered) return;
    const i = +b.dataset.i;
    if (multi) { const k = tSel.indexOf(i); if (k >= 0) tSel.splice(k, 1); else tSel.push(i); b.classList.toggle("sel"); }
    else { tSel = [i]; p.querySelectorAll(".opt").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); }
  });
  $("check").onclick = () => { if (!tAnswered) check(panel, examen); else nextQ(panel, examen); };
  $("skip").onclick = () => { if (!tAnswered) registerFail(q); nextQ(panel, examen); };
  if (examen) { $("abort").onclick = () => endExam(true); tick(); }
}
function check(panel, examen) {
  const q = tSet[tIdx], p = $(panel);
  if (!tSel.length) return;
  tAnswered = true;
  const ok = tSel.length === q.c.length && tSel.every(i => q.c.includes(i));
  p.querySelectorAll(".opt").forEach(b => {
    const i = +b.dataset.i; b.disabled = true; b.classList.remove("sel");
    if (q.c.includes(i)) { b.classList.add("right"); b.querySelector(".k").classList.add("right"); }
    else if (tSel.includes(i)) { b.classList.add("wrong"); b.querySelector(".k").classList.add("wrong"); }
  });
  if (ok) tScore++; else registerFail(q);
  $("fb").innerHTML = '<div class="why"><b>' + (ok ? "Correcto." : "Incorrecto.") + "</b> " + q.w + "</div>";
  $("check").textContent = (tIdx + 1 === tSet.length) ? "Ver resultado" : "Siguiente";
}
function registerFail(q) { tFails.push(q); if (!S.wrong.includes(q.i)) { S.wrong.push(q.i); save(); } }
function nextQ(panel, examen) {
  const q = tSet[tIdx];
  if (tAnswered) {
    const ok = tSel.length === q.c.length && tSel.every(i => q.c.includes(i));
    if (ok) { const k = S.wrong.indexOf(q.i); if (k >= 0) { S.wrong.splice(k, 1); save(); } }
  }
  tIdx++;
  if (tIdx >= tSet.length) { examen ? endExam(false) : resultTest(); }
  else paintQ(panel, examen);
}
function resultTest() {
  const pct = Math.round(tScore / tSet.length * 100);
  if (!S.best || pct > S.best.pct) { S.best = { pct, hits: tScore, total: tSet.length }; save(); }
  $("p-test").innerHTML = resultHTML(pct, "Resultado", false);
  $("again").onclick = renderTestHome;
  const r = $("redo"); if (r) r.onclick = () => startTest(tFails.map(q => q.i));
}
function resultHTML(pct, titulo, examen) {
  let h = '<div class="ud-head"><span class="k">' + titulo + '</span><h2>' + (pct >= 75 ? "Apto" : "A repasar") + "</h2></div>";
  h += '<div class="score">' +
    '<div class="stat"><div class="v">' + pct + '%</div><div class="l">Nota</div></div>' +
    '<div class="stat ok"><div class="v">' + tScore + '</div><div class="l">Aciertos</div></div>' +
    '<div class="stat mal"><div class="v">' + (tSet.length - tScore) + '</div><div class="l">Fallos</div></div>' +
    '<div class="stat"><div class="v">' + S.wrong.length + '</div><div class="l">Falladas pendientes</div></div></div>';
  if (tFails.length) {
    h += '<h3 style="margin:18px 0 8px;font-size:var(--f-md);text-transform:uppercase;letter-spacing:.04em">Lo que has fallado</h3><div class="review">';
    tFails.forEach(q => {
      h += '<div class="rev"><div class="rq">' + q.q + '</div><div class="ra"><b>' +
        q.c.map(i => "abcd"[i] + ") " + plano(q.o[i])).join(" · ") + "</b><br>" + q.w + "</div></div>";
    });
    h += "</div>";
  } else h += '<div class="why">Pleno. Sube el número de preguntas o cambia de módulo.</div>';
  h += '<div class="bar" style="margin-top:20px"><button class="btn" id="again" type="button">' +
    (examen ? "Otro examen" : "Otro test") + "</button>" +
    (tFails.length ? '<button class="btn ghost" id="redo" type="button">Repetir solo las falladas</button>' : "") + "</div>";
  return h;
}

/* ---------------- examen ---------------- */
let exTimer = null, exFin = 0;
const EX_N = 40, EX_MIN = 30;
function renderExamenHome() {
  const b = S.examBest ? "Mejor examen: <b>" + S.examBest.pct + "%</b> · " + S.examBest.fecha : "Aún no has hecho ningún examen";
  $("p-examen").innerHTML = '<p class="lead">Simulacro completo: <b>' + EX_N + " preguntas</b> de todo el certificado en <b>" + EX_MIN +
    " minutos</b>, sin corrección hasta el final. Se aprueba con <b>75%</b>.</p>" +
    '<div class="bar"><button class="btn" id="exStart" type="button">Empezar examen</button>' +
    '<span class="spacer"></span><span class="hint">' + b + "</span></div>" +
    '<div class="why">El cronómetro corre aunque cambies de pestaña. Si se agota, se corrige lo respondido hasta ese momento.</div>';
  $("exStart").onclick = startExam;
}
function startExam() {
  tSet = shuffle(PREGUNTAS.map((q, i) => Object.assign({}, q, { i }))).slice(0, EX_N);
  tIdx = 0; tScore = 0; tFails = []; tSel = []; tAnswered = false;
  exFin = Date.now() + EX_MIN * 60000;
  clearInterval(exTimer); exTimer = setInterval(tick, 1000);
  paintQ("p-examen", true);
}
function tick() {
  const c = $("clock"); if (!c) return;
  const ms = exFin - Date.now();
  if (ms <= 0) { c.textContent = "00:00"; endExam(false); return; }
  const s = Math.floor(ms / 1000);
  c.textContent = String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}
function endExam(abortado) {
  clearInterval(exTimer);
  const pct = Math.round(tScore / tSet.length * 100);
  if (!abortado) {
    const fecha = new Date().toLocaleDateString("es-ES");
    if (!S.examBest || pct > S.examBest.pct) S.examBest = { pct, fecha };
    save();
  }
  $("p-examen").innerHTML = abortado
    ? '<div class="ud-head"><span class="k">Examen</span><h2>Abandonado</h2></div><div class="bar"><button class="btn" id="again" type="button">Empezar de nuevo</button></div>'
    : resultHTML(pct, "Examen", true);
  const a = $("again"); if (a) a.onclick = renderExamenHome;
  const r = $("redo"); if (r) r.onclick = () => { tSet = tFails.slice(); tIdx = 0; tScore = 0; tFails = []; paintQ("p-examen", false); };
}

/* ---------------- oral ---------------- */
function renderOral() {
  let h = '<p class="lead">Lee la pregunta, respóndela en voz alta y luego despliega el guion. Está ordenado como conviene contestar: definición, clasificación, detalle y cierre.</p><div class="oral">';
  ORAL.forEach((o, i) => {
    const tm = temaById(o.t);
    h += '<article class="oq"><button type="button" data-i="' + i + '"><span class="qi">' + String(i + 1).padStart(2, "0") + "</span>" +
      '<span class="qt">' + o.q + '</span><span class="st">' + modById(tm.mod).cod + " · ver guion</span></button>" +
      '<div class="oa" hidden><ul>' + o.p.map(x => "<li>" + x + "</li>").join("") + "</ul></div></article>";
  });
  $("p-oral").innerHTML = h + "</div>";
  $("p-oral").querySelectorAll(".oq > button").forEach(b => b.onclick = () => {
    const a = b.nextElementSibling; a.hidden = !a.hidden;
    const tm = temaById(ORAL[+b.dataset.i].t);
    b.querySelector(".st").textContent = modById(tm.mod).cod + (a.hidden ? " · ver guion" : " · ocultar");
  });
}

/* ---------------- chuleta ---------------- */
function renderChuleta() {
  let h = '<p class="lead">Las listas numeradas y las cifras que caen. Si la pregunta empieza por «cuántos» o «cuáles», la respuesta sale de aquí.</p><div class="grid2">';
  CHULETA.forEach(r => {
    const tag = r.ord ? "ol" : "ul";
    h += '<div class="ref"><h3>' + r.t + '</h3><div class="cnt">' + r.cnt + "</div><" + tag + ">" +
      r.l.map(x => "<li>" + x + "</li>").join("") + "</" + tag + "></div>";
  });
  $("p-chuleta").innerHTML = h + "</div>";
}

/* ---------------- buscador ---------------- */
let cargandoTodo = false;
function renderBuscar() {
  $("p-buscar").innerHTML =
    '<p class="lead">Busca a la vez en el temario completo, los resúmenes, las fichas, las preguntas y la chuleta.</p>' +
    '<div class="bar"><input class="search" id="q" type="search" placeholder="Glasgow, ANFO, detención, balística, armero..." autocomplete="off">' +
    '<button class="btn ghost" id="loadAll" type="button">Incluir temario completo</button></div>' +
    '<div id="hits"><p class="empty">Escribe al menos dos caracteres.</p></div>';
  $("q").addEventListener("input", doSearch);
  $("loadAll").onclick = async () => {
    if (cargandoTodo) return;
    cargandoTodo = true;
    $("loadAll").textContent = "Cargando...";
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
      let i = t.indexOf(q);
      let n = 0;
      while (i >= 0 && n < 3) {
        const a = Math.max(0, i - 90), b = Math.min(e.texto.length, i + 190);
        hits.push({ k: m.cod + " · UD" + u.n + " · pág. " + e.pag, t: e.n + " " + e.titulo, b: "…" + e.texto.slice(a, b) + "…" });
        i = t.indexOf(q, i + q.length); n++;
      }
    }));
  });
  TEMAS.forEach(t => t.c.forEach(s => s.l.forEach(li => {
    if (sinAc(plano(li)).includes(q)) hits.push({ k: modById(t.mod).cod + " · Resumen", t: t.t + " — " + s.h, b: li });
  })));
  FICHAS.forEach(f => {
    if (sinAc(plano(f.q + " " + f.a)).includes(q)) {
      const tm = temaById(f.t);
      hits.push({ k: modById(tm.mod).cod + " · Ficha", t: plano(f.q), b: f.a });
    }
  });
  PREGUNTAS.forEach(p2 => {
    if (sinAc(plano(p2.q + " " + p2.o.join(" ") + " " + p2.w)).includes(q)) {
      const tm = temaById(p2.t);
      hits.push({ k: modById(tm.mod).cod + " · Test", t: plano(p2.q), b: "<b>" + p2.c.map(i => plano(p2.o[i])).join(" · ") + "</b> — " + p2.w });
    }
  });
  CHULETA.forEach(r => r.l.forEach(li => { if (sinAc(plano(li)).includes(q)) hits.push({ k: "Chuleta", t: r.t, b: li }); }));

  if (!hits.length) {
    box.innerHTML = '<p class="empty">Sin resultados para «' + esc(raw) + '».' +
      (Object.keys(CACHE).length < IDX.length ? " Prueba a pulsar «Incluir temario completo»." : "") + "</p>";
    return;
  }
  const re = new RegExp("(" + raw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
  box.innerHTML = '<p class="hint" style="margin-bottom:12px">' + hits.length + " resultado" + (hits.length > 1 ? "s" : "") +
    (Object.keys(CACHE).length < IDX.length ? " · el temario completo aún no está incluido" : "") + "</p>" +
    hits.slice(0, 60).map(x =>
      '<div class="hit"><div class="hk">' + esc(x.k) + '</div><div class="ht">' + esc(x.t).replace(re, "<mark>$1</mark>") +
      '</div><div class="hb">' + x.b.replace(re, "<mark>$1</mark>") + "</div></div>").join("");
}

/* ---------------- puerta e init ---------------- */
function genToken() {
  const a = "abcdefghijkmnpqrstuvwxyz23456789";
  let t = ""; for (let i = 0; i < 14; i++) t += a[Math.floor(Math.random() * a.length)];
  return t.slice(0, 5) + "-" + t.slice(5, 9) + "-" + t.slice(9);
}
function tryUnlock() {
  const i = $("gateInput"), err = $("gateErr"), v = i.value.trim();
  if (!v) { err.textContent = "Escribe un token o genera uno."; i.focus(); return; }
  if (!TOKEN_RE.test(v)) { err.textContent = "Entre 6 y 56 caracteres. Solo letras, números, guion y guion bajo."; i.focus(); return; }
  err.textContent = "";
  $("gateGo").textContent = "Entrando...";
  unlock(v).finally(() => { $("gateGo").textContent = "Entrar"; });
}
async function boot() {
  if (!IDX.length) {
    try { IDX = await (await fetch("temario/indice.json")).json(); }
    catch (e) { IDX = []; }
  }
  initTabs();
  renderTemario(); renderResumen(); renderFichas(); renderTestHome();
  renderExamenHome(); renderOral(); renderChuleta(); renderBuscar(); updHud();
  $("savedNote").textContent = "Progreso guardado en el token " + TOKEN;
}
(function start() {
  $("gateGo").onclick = tryUnlock;
  $("gateInput").addEventListener("keydown", e => { if (e.key === "Enter") tryUnlock(); });
  $("gateGen").onclick = () => { $("gateInput").value = genToken(); $("gateInput").focus(); $("gateErr").textContent = ""; };
  $("outBtn").onclick = lock;
  $("themeBtn").onclick = () => {
    const r = document.documentElement, cur = r.getAttribute("data-theme");
    const dark = cur ? cur === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
    r.setAttribute("data-theme", dark ? "light" : "dark");
  };
  const t = lsGet(TKEY);
  if (t && TOKEN_RE.test(t)) unlock(t);
  else { $("gate").hidden = false; $("gateInput").focus(); }
})();
