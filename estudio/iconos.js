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
  fuego: '<path d="M24 42c7 0 12-4.6 12-11 0-8-6-10-6-17-4 2-6 5-6 9-2-1.5-3-3.5-3-6-4 3-9 8-9 14 0 6.4 5 11 12 11Z"/><path d="M24 42c3 0 5-2 5-4.6 0-3.4-3-4.4-3-7.4-2.6 1.6-4 3.8-4 6.4 0 3.2 1 5.6 2 5.6Z"/>',
  humo: '<path d="M12 34a7 7 0 0 1 .8-13.9A9 9 0 0 1 30 17a6.5 6.5 0 0 1 5.6 10.4"/><path d="M10 34h26M13 40h20"/>',
  bie: '<circle cx="24" cy="24" r="16"/><path d="M24 8v8M24 40v-8M8 24h8M40 24h-8"/><path d="M19 24a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"/>',
  rcp: '<path d="M31 41V29a11 11 0 1 0-22 0v12"/><path d="M20 24v-4a6 6 0 0 1 12 0v4"/><path d="M9 34h22M35 18h10M40 13v10"/>',
  pulmon: '<path d="M24 8v18M18 26c0-7-4-10-7-10s-5 3-5 8v8c0 5 3 8 6 8s6-3 6-8v-6ZM30 26c0-7 4-10 7-10s5 3 5 8v8c0 5-3 8-6 8s-6-3-6-8v-6Z"/>',
  venda: '<path d="m10 30 20-20a8.5 8.5 0 0 1 12 12L22 42"/><path d="m17 23 8 8M14 26l8 8M20 20l8 8"/>',
  hueso: '<path d="M16 32 32 16"/><path d="M13 29a4.5 4.5 0 1 0-4-4 4.5 4.5 0 1 0 4 4ZM35 19a4.5 4.5 0 1 0 4 4 4.5 4.5 0 1 0-4-4Z"/>',
  termometro: '<path d="M27 28V11a3.5 3.5 0 0 0-7 0v17a7 7 0 1 0 7 0Z"/><path d="M23.5 18v14"/><path d="M30 14h6M30 20h4"/>',
  agua: '<path d="M24 6s11 13 11 21a11 11 0 0 1-22 0c0-8 11-21 11-21Z"/><path d="M18 28a6 6 0 0 0 6 6"/>',
  toxico: '<path d="M24 6 4 41h40L24 6Z"/><circle cx="24" cy="22" r="4"/><path d="M20.5 25 15 33M27.5 25 33 33M20 20l-6-3M28 20l6-3"/>',
  oxigeno: '<rect x="17" y="14" width="14" height="28" rx="7"/><path d="M21 14v-3h6v3M24 20v10M19.5 25h9"/><path d="M36 20c4 2 4 8 0 10"/>',
  triaje: '<path d="M8 12h20l8 8-8 8H8z"/><path d="M8 34h32"/><path d="M14 18h6M14 22h10"/>',
  camara: '<path d="M6 16h22v12H6z"/><path d="M28 19l10-4v14l-10-4"/><path d="M12 28v6a4 4 0 0 0 8 0"/><circle cx="12" cy="22" r="2"/>',
  cerradura: '<rect x="10" y="20" width="28" height="22" rx="3"/><path d="M16 20v-6a8 8 0 0 1 16 0v6"/><circle cx="24" cy="29" r="3"/><path d="M24 32v5"/>',
  perimetro: '<path d="M8 14v26M18 14v26M28 14v26M38 14v26"/><path d="M4 18h40M4 30h40"/><path d="m8 14 5-5 5 5 5-5 5 5 5-5 5 5"/>',
  ojo: '<path d="M4 24s7-11 20-11 20 11 20 11-7 11-20 11S4 24 4 24Z"/><circle cx="24" cy="24" r="6"/>',
  reloj: '<circle cx="24" cy="25" r="16"/><path d="M24 16v9l6 4M18 5h12"/>',
  rayosx: '<rect x="5" y="16" width="38" height="18" rx="2"/><path d="M14 16v18M34 16v18"/><path d="M20 22h8v6h-8z"/><path d="M5 38h38M9 38v4M39 38v4"/>',
  dinero: '<rect x="5" y="13" width="38" height="22" rx="3"/><circle cx="24" cy="24" r="6"/><path d="M12 20v8M36 20v8"/>',
  ladron: '<circle cx="24" cy="17" r="8"/><path d="M16 16h16"/><path d="M11 41c0-7 5.8-12 13-12s13 5 13 12"/><path d="M20 17h2M26 17h2"/>',
  gas: '<rect x="16" y="14" width="16" height="28" rx="4"/><path d="M20 14v-4h8v4M24 8V5"/><path d="M20 24h8M20 31h8"/>',
  camion: '<path d="M4 14h24v18H4z"/><path d="M28 20h7l5 6v6H28z"/><circle cx="12" cy="36" r="4"/><circle cx="34" cy="36" r="4"/><path d="M11 19h10v6H11z"/>',
  mina: '<path d="M6 40h36"/><path d="M10 40 24 16l14 24"/><path d="m17 28 7-4 7 4"/><path d="M24 8v6"/>',
  peligro: '<path d="M24 6 4 41h40L24 6Z"/><path d="M24 19v10M24 34v.1"/>',
  salida: '<path d="M6 8h20v32H6z"/><path d="M20 24h20M33 17l7 7-7 7"/><circle cx="14" cy="24" r="2"/>',
  escalera: '<path d="M12 42V10M30 42V6"/><path d="M12 36h18M12 29h18M12 22h18M12 15h18"/>',
  candado: '<rect x="11" y="21" width="26" height="20" rx="3"/><path d="M17 21v-5a7 7 0 0 1 14 0v5"/><path d="M24 28v6"/>',
  grupo: '<circle cx="17" cy="17" r="6"/><circle cx="33" cy="19" r="5"/><path d="M7 38c0-6 4.5-10 10-10s10 4 10 10"/><path d="M30 29c5 0 9 3.6 9 9"/>',
  telefono: '<rect x="14" y="5" width="20" height="38" rx="4"/><path d="M21 10h6M24 37h.01"/>',
  europa: '<circle cx="24" cy="24" r="17"/><path d="M24 10.5v3M24 34.5v3M10.5 24h3M34.5 24h3M14.4 14.4l2.2 2.2M31.4 31.4l2.2 2.2M14.4 33.6l2.2-2.2M31.4 16.6l2.2-2.2"/>',
  constitucion: '<path d="M9 40h30M11 18v22M37 18v22M18 18v22M30 18v22"/><path d="M6 18 24 7l18 11"/>',
  placa: '<path d="M24 5 9 11v13c0 9 6.4 16.4 15 19 8.6-2.6 15-10 15-19V11L24 5Z"/><path d="m24 15 2.4 5 5.6.6-4.2 3.8 1.2 5.6L24 27l-5 3 1.2-5.6-4.2-3.8 5.6-.6L24 15Z"/>',
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

/* Que dibujo lleva una ficha, segun lo que dice. Se recorre en orden: lo
   mas concreto primero, porque muchas fichas mencionan varias cosas. */
const REGLAS = [
  ["rcp", /reanimaci|rcp\b|compresion|desfibrila|dea\b|parada card|masaje card|boca a boca|cadena de superviv/i],
  ["pulmon", /respiraci|via a[ée]rea|ventilaci|frente-ment[oó]n|at[oó]n|atragant|asfixi|ahogamiento|agonic/i],
  ["venda", /venda|herida|hemorragi|apósito|torniquete|sangr|quemadur|contusi|curar/i],
  ["hueso", /fractur|esguince|luxaci|inmoviliza|f[ée]rula|columna|vertebr|hueso|traumatis/i],
  ["termometro", /hipotermi|golpe de calor|congelaci|temperatura corporal|insolaci|fieb/i],
  ["toxico", /intoxicaci|t[oó]xic|venen|mordedur|picadur|serpiente|monóxido/i],
  ["oxigeno", /ox[ií]geno|oxigenoterapi|mascarilla|bala de ox/i],
  ["triaje", /triaje|clasificaci[oó]n de v[ií]ctimas|cat[aá]strofe|emergencia colectiva|m[uú]ltiples v[ií]ctimas/i],
  ["corazon", /coraz[oó]n|infarto|card[ií]ac|pulso|circulatori|shock|tensi[oó]n arterial/i],
  ["camilla", /camilla|traslado de herid|rautek|movilizaci|evacuaci[oó]n de herid/i],
  ["sanitario", /primeros auxilios|botiqu[ií]n|enfermer[ií]a|112|urgencia sanitari/i],

  ["fuego", /tetraedro|combusti[oó]n|clase de fuego|clases de fuego|comburente|deflagra|arde|inflamab/i],
  ["extintor", /extintor|agente extintor|espuma|polvo (?:abc|bc|polivalente|qu[ií]mico)|co2|di[oó]xido de carbono/i],
  ["bie", /boca de incendio|bie\b|rociador|columna seca|hidrante|manguera/i],
  ["humo", /humo|detector de humo|central de incendio|detecci[oó]n autom[aá]tica/i],
  ["escalera", /evacuaci|punto de reuni|plan de autoprotecci|simulacro|jefe de emergencia/i],
  ["salida", /salida de emergencia|v[ií]a de evacuaci|alumbrado de emergencia/i],

  ["explosivo", /explosiv|detonador|dinamita|anfo|barreno|voladura|polvor[ií]n|pirot[eé]cn|cartucher[ií]a de caza/i],
  ["gas", /gas(?:es)? |butano|propano|bombona|mercanc[ií]a peligrosa|adr\b/i],
  ["mina", /miner[ií]a|mina[s]?\b|artiller[oa]|cantera|explotaci[oó]n/i],
  ["peligro", /panel naranja|etiqueta de peligro|se[nñ]alizaci[oó]n de peligro|clase 1\b/i],
  ["camion", /transporte|carga y descarga|veh[ií]culo de transporte|convoy|itinerario/i],

  ["arma", /arma reglamentaria|rev[oó]lver|escopeta|pistola|fusil|carabina|empu[nñ]adur|desenfund|sistema de disparo/i],
  ["municion", /cartucho|munici[oó]n|vaina|pist[oó]n|p[oó]lvora|calibre|posta/i],
  ["diana", /tiro|bal[ií]stica|punter[ií]a|trayectoria|alza|punto de mira|galer[ií]a/i],

  ["camara", /c[aá]mara|circuito cerrado|videovigilancia|cctv|grabaci[oó]n|im[aá]genes/i],
  ["alarma", /alarma|central receptora|detector|se[nñ]al de intrusi|acuda|falsa alarma/i],
  ["cerradura", /cerradura|puerta blindada|blindaje|caja fuerte|c[aá]mara acorazada|llave/i],
  ["perimetro", /perimetr|cerramiento|valla|muro|ronda|pol[ií]gono|urbanizaci/i],
  ["accesos", /control de acceso|torno|esclusa|acreditaci|identificaci[oó]n de persona/i],
  ["rayosx", /rayos x|arco detector|detector de metales|inspecci[oó]n de equipaje|radiaci[oó]n/i],
  ["dinero", /fondos|efectivo|valores|objetos valiosos|transporte de fondos|atraco/i],
  ["ladron", /hurto|robo|delincuen|agresor|atentado|criminal|delito/i],
  ["ojo", /observaci|vigilancia previa|indicio|descripci[oó]n de persona|memoriza|atenci[oó]n/i],

  ["balanza", /derecho|jur[ií]dic|responsabilidad|penal|civil|sanci[oó]n|infracci[oó]n/i],
  ["ley", /ley \d|ley 5\/2014|reglamento|real decreto|art[ií]culo|normativa|c[oó]digo penal|prevenci[oó]n de riesgos/i],
  ["constitucion", /constituci|derecho fundamental|libertad|cortes|corona|poder judicial/i],
  ["europa", /uni[oó]n europea|europe[oa]|directiva|tratado/i],
  ["placa", /fuerzas y cuerpos|polic[ií]a|guardia civil|agente de la autoridad|autoridad/i],
  ["esposas", /detenci[oó]n|detenido|grillete|cacheo|registro personal/i],
  ["identidad", /tarjeta de identidad profesional|habilitaci|vigilante de seguridad|escolta|funciones del/i],
  ["etica", /deontolog|[ée]tica|principios de actuaci|reserva profesional|congruencia|proporcionalidad/i],
  ["mente", /psicolog|estr[eé]s|miedo|p[aá]nico|autocontrol|emocion|comunicaci[oó]n no verbal/i],
  ["candado", /protecci[oó]n de datos|rgpd|lopd|dato personal|confidencial|contrase[nñ]a/i],
  ["ordenador", /inform[aá]tic|ordenador|sistema operativo|red\b|software|hardware/i],
  ["antena", /radio|emisora|telecomunicaci|frecuencia|indicativo|alfabeto fon[eé]tico/i],
  ["telefono", /tel[eé]fono|llamada|amenaza de bomba|aviso telef/i],
  ["proteccion", /protecci[oó]n de personas|persona protegida|c[ií]rculos conc[eé]ntricos|teor[ií]a esf[eé]rica|escolta/i],
  ["vehiculo", /veh[ií]culo|conducci[oó]n|caravana|blindado/i],
  ["grupo", /p[uú]blico|aglomeraci|multitud|espectador|evento/i],
  ["plano", /plan(?:es)? de (?:emergencia|seguridad)|autoprotecci|instalaci[oó]n|edificio|establecimiento/i],
  ["reloj", /plazo|caduca|periodicidad|cada .{0,12}(?:a[nñ]o|mes|semestre)|horario/i],
  ["fisico", /condici[oó]n f[ií]sica|entrenamiento|resistencia|fuerza|flexibilidad|m[uú]sculo/i],
  ["agua", /agua|ahogamiento|acu[aá]tic|inmersi[oó]n|piscina|mar\b/i],
  // menciones sueltas, ya al final: solo si no ha encajado nada mas concreto
  ["arma", /\barmas?\b|armamento/i],
  ["etica", /seguridad privada/i],
];

/* El texto de la ficha manda; si no encaja nada, el dibujo de su unidad. */
function dibujoFicha(texto, clave, ud) {
  const t = String(texto || "");
  for (const [nombre, re] of REGLAS) {
    if (re.test(t) && TRAZOS[nombre]) return svgTrazo(TRAZOS[nombre]);
  }
  return dibujo(clave, ud);
}

function svgTrazo(t) {
  return '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + t + "</svg>";
}

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
  passkey: '<circle cx="9" cy="9" r="4"/><path d="M13 12h8M18 12v3M21 12v4M2 20c0-3 3.1-5 7-5"/>',
  tema: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/>',
  salir: '<path d="M15 3h3.5A1.5 1.5 0 0 1 20 4.5v15a1.5 1.5 0 0 1-1.5 1.5H15"/><path d="M10 17l-5-5 5-5M5 12h11"/>',
};

function dibujo(clave, ud) {
  return svgTrazo(TRAZOS[DIBUJO_UD[clave + "|" + ud] || "general"] || TRAZOS.general);
}
function icono(nombre, tam) {
  const t = ICONOS[nombre] || ICONOS.indice;
  const s = tam || 18;
  return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" ' +
    'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + t + "</svg>";
}
