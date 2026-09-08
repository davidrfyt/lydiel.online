"use strict";
/* =========================================================
   Ilustraciones de unidad. Trazo sobre lienzo de 48x48,
   sin relleno: heredan el color del modulo.
   ========================================================= */

const TRAZOS = {
  balanza: '<path d="M24 8v32M14 40h20M24 12l-13 4M24 12l13 4"/><path d="M11 16 5 28h12L11 16Z"/><path d="M37 16 31 28h12L37 16Z"/>',
  ley: '<rect x="10" y="6" width="28" height="36" rx="3"/><path d="M17 16h14M17 23h14M17 30h9"/>',
  juzgado: '<path d="M6 20 24 8l18 12M9 20v18M39 20v18M6 42h36M17 26v10M24 26v10M31 26v10"/>',
  esposas: '<circle cx="13" cy="31" r="8"/><circle cx="35" cy="31" r="8"/><path d="M21 31h6"/><path d="M13 23V13a5 5 0 0 1 10 0M35 23V13a5 5 0 0 0-10 0"/>',
  identidad: '<rect x="6" y="11" width="36" height="26" rx="3"/><circle cx="18" cy="22" r="4.5"/><path d="M11 32c1.6-3.4 4.1-5 7-5s5.4 1.6 7 5M29 19h8M29 25h8M29 31h5"/>',
  huella: '<path d="M24 6c-7.7 0-14 6.3-14 14v6M38 20c0-4.6-2.2-8.6-5.6-11.2M14 32c0 4-1 7-2 10M31 42c1.3-4.4 2-9 2-13.6V20a9 9 0 0 0-18 0v6.5M24 42V20"/>',
  mente: '<path d="M32 41v-6a13 13 0 1 0-19-11.6L9 30l4 1.5V36a4 4 0 0 0 4 4h4"/><path d="M25 14a5 5 0 0 0-4 8c1 1.2 1.4 2 1.4 3.4V27h5v-1.6c0-1.4.4-2.2 1.4-3.4a5 5 0 0 0-3.8-8Z"/>',
  etica: '<path d="M24 5 8 12v11c0 10 6.8 17.7 16 20 9.2-2.3 16-10 16-20V12L24 5Z"/><path d="m17 24 5 5 10-11"/>',
  alarma: '<rect x="5" y="10" width="38" height="24" rx="3"/><path d="M5 28h38M17 40h14M24 34v6"/><circle cx="13" cy="18" r="2.5"/><path d="M21 16h14M21 22h9"/>',
  barrera: '<path d="M8 42V16M8 20h30l-4 6h-26"/><circle cx="8" cy="12" r="3.5"/><path d="M20 42h22M28 34h14M28 34v8M42 34v8"/>',
  accesos: '<rect x="7" y="8" width="18" height="32" rx="2"/><path d="M19 24h.01"/><path d="M31 16h10v16H31M31 24h8M36 20l4 4-4 4"/>',
  arma: '<path d="M6 18h26l4 6h6v6h-8l-3 5h-9l-2-5H12a6 6 0 0 1-6-6v-6Z"/><path d="M17 30l-4 10M23 24h6"/>',
  municion: '<path d="M14 10c-2.8 2.6-4 6.6-4 10s1.2 7.4 4 10h10c2.8-2.6 4-6.6 4-10s-1.2-7.4-4-10H14Z"/><path d="M10 30h18v8H10zM12 38v4M26 38v4M14 15h10"/>',
  diana: '<circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="10.5"/><circle cx="24" cy="24" r="4"/><path d="M24 3v6M24 39v6M3 24h6M39 24h6"/>',
  fisico: '<rect x="4" y="19" width="6" height="10" rx="1.5"/><rect x="38" y="19" width="6" height="10" rx="1.5"/><rect x="11" y="15" width="7" height="18" rx="2"/><rect x="30" y="15" width="7" height="18" rx="2"/><path d="M18 24h12"/>',
  plano: '<rect x="6" y="9" width="36" height="30" rx="2"/><path d="M6 20h12v19M30 9v11h12M18 28h12"/>',
  furgon: '<path d="M4 14h22v18H4zM26 20h8l6 6v6h-14z"/><circle cx="13" cy="36" r="4"/><circle cx="33" cy="36" r="4"/><path d="M17 36h12M9 20h8v6H9z"/>',
  documento: '<path d="M12 5h16l9 9v29H12z"/><path d="M28 5v9h9M18 24h13M18 31h13M18 17h6"/>',
  sanitario: '<path d="M8 13h32v26H8z" /><path d="M24 20v12M18 26h12M8 13l4-6h24l4 6"/>',
  corazon: '<path d="M24 40S7 30 7 19a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 11-17 21-17 21Z"/><path d="M13 24h7l3-6 4 12 3-6h5"/>',
  camilla: '<path d="M6 24h36M10 24v12M38 24v12M6 24l6-9h24l6 9"/><circle cx="14" cy="40" r="3"/><circle cx="34" cy="40" r="3"/>',
  explosivo: '<circle cx="21" cy="29" r="12"/><path d="M30 20l5-5M35 15l1-5M35 15l5-1M30 10l1 4M40 20l-4-1"/><path d="M16 25a6 6 0 0 1 5-4"/>',
  antena: '<path d="M24 20v22M14 28h20"/><circle cx="24" cy="16" r="3"/><path d="M15 16a9 9 0 0 1 3-6.6M33 16a9 9 0 0 0-3-6.6M9 16a15 15 0 0 1 5-11M39 16a15 15 0 0 0-5-11"/>',
  ordenador: '<rect x="5" y="9" width="38" height="24" rx="2"/><path d="M14 40h20M20 33l-1 7M28 33l1 7M13 17h8M13 23h14"/>',
  extintor: '<path d="M17 16h12v26H17zM20 16v-4h6v4M29 20h6v-6a3 3 0 0 0-3-3h-3"/><path d="M20 24h6M17 34h12"/>',
  proteccion: '<circle cx="24" cy="14" r="6"/><path d="M13 40c0-6.6 4.9-11 11-11s11 4.4 11 11"/><path d="M24 5 8 10v9M24 5l16 5v9"/>',
  vehiculo: '<path d="M7 30 10 20a4 4 0 0 1 4-3h20a4 4 0 0 1 4 3l3 10v6H7v-6Z"/><circle cx="15" cy="36" r="3.5"/><circle cx="33" cy="36" r="3.5"/><path d="M11 24h26M20 17v7M28 17v7"/>',
  ronda: '<circle cx="21" cy="21" r="13"/><path d="m31 31 11 11"/><path d="M21 15v6l4 3"/>',
  general: '<rect x="7" y="7" width="15" height="15" rx="2"/><rect x="26" y="7" width="15" height="15" rx="2"/><rect x="7" y="26" width="15" height="15" rx="2"/><rect x="26" y="26" width="15" height="15" rx="2"/>',
};

/* que dibujo lleva cada unidad didactica */
const DIBUJO_UD = {
  "UF2672|1": "ley", "UF2672|2": "juzgado", "UF2672|3": "balanza", "UF2672|4": "esposas",
  "UF2673|1": "identidad", "UF2673|2": "huella", "UF2673|3": "mente", "UF2673|4": "etica",
  "UF2674|1": "plano", "UF2674|2": "furgon", "UF2674|3": "ronda", "UF2674|4": "documento", "UF2674|5": "sanitario",
  "UF2675|1": "alarma", "UF2675|2": "barrera", "UF2675|3": "accesos", "UF2675|4": "arma", "UF2675|5": "fisico",
  "INSTRUM|1": "antena", "INSTRUM|2": "ordenador", "INSTRUM|3": "extintor", "INSTRUM|4": "municion",
  "UF2676|1": "proteccion", "UF2676|2": "vehiculo",
  "MF0082|1": "ley", "MF0082|2": "accesos", "MF0082|3": "diana", "MF0082|4": "explosivo",
  "MF0272|1": "sanitario", "MF0272|2": "corazon", "MF0272|3": "camilla", "MF0272|4": "proteccion",
};

/* iconos de la barra lateral y de las acciones */
const ICONOS = {
  indice: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  buscar: '<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
  examen: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',
  chuleta: '<path d="M4 5h16M4 10h16M4 15h11M4 20h7"/>',
  falladas: '<path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/>',
  panel: '<path d="M3 20h18M6 20v-7M11 20V7M16 20v-4M21 20V10"/>',
  hoy: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9 15 2 2 4-4"/>',
  perfil: '<circle cx="12" cy="8" r="4"/><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
  volver: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  tema: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/>',
  salir: '<path d="M15 3h3.5A1.5 1.5 0 0 1 20 4.5v15a1.5 1.5 0 0 1-1.5 1.5H15"/><path d="M10 17l-5-5 5-5M5 12h11"/>',
};

function dibujo(clave, ud) {
  const t = TRAZOS[DIBUJO_UD[clave + "|" + ud] || "general"] || TRAZOS.general;
  return '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + t + "</svg>";
}
function icono(nombre, tam) {
  const t = ICONOS[nombre] || ICONOS.indice;
  const s = tam || 18;
  return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" ' +
    'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + t + "</svg>";
}
