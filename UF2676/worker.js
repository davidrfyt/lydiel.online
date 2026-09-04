/**
 * UF2676 — almacén de progreso por token
 * Cloudflare Worker + KV
 *
 * Necesita un KV Namespace enlazado con el nombre de variable: PROGRESO
 *
 * Rutas:
 *   GET  /p/<token>   -> devuelve el progreso guardado (o {} si no hay)
 *   PUT  /p/<token>   -> guarda el progreso (cuerpo JSON)
 *   GET  /            -> comprobación de salud
 */

const ORIGENES_PERMITIDOS = [
  "https://lydiel.online",
  "https://www.lydiel.online",
];

const MAX_BYTES = 40000;          // tope de tamaño por token
const TOKEN_RE = /^[A-Za-z0-9_-]{6,64}$/;

export default {
  async fetch(request, env) {
    const origen = request.headers.get("Origin") || "";
    const permitido = ORIGENES_PERMITIDOS.includes(origen);

    const cors = {
      "Access-Control-Allow-Origin": permitido ? origen : ORIGENES_PERMITIDOS[0],
      "Access-Control-Allow-Methods": "GET,PUT,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "") {
      return json({ ok: true, servicio: "uf2676-progreso" }, 200, cors);
    }

    const m = url.pathname.match(/^\/p\/(.+)$/);
    if (!m) return json({ error: "ruta_desconocida" }, 404, cors);

    const token = m[1];
    if (!TOKEN_RE.test(token)) {
      return json({ error: "token_invalido", detalle: "6-64 caracteres: letras, numeros, guion y guion bajo" }, 400, cors);
    }
    const clave = "u:" + token;

    if (request.method === "GET") {
      const v = await env.PROGRESO.get(clave);
      return json(v ? JSON.parse(v) : {}, 200, cors);
    }

    if (request.method === "PUT") {
      const cuerpo = await request.text();
      if (cuerpo.length > MAX_BYTES) {
        return json({ error: "demasiado_grande" }, 413, cors);
      }
      let datos;
      try {
        datos = JSON.parse(cuerpo);
      } catch (e) {
        return json({ error: "json_invalido" }, 400, cors);
      }
      if (typeof datos !== "object" || datos === null || Array.isArray(datos)) {
        return json({ error: "formato_invalido" }, 400, cors);
      }
      datos._guardado = Date.now();
      await env.PROGRESO.put(clave, JSON.stringify(datos));
      return json({ ok: true, guardado: datos._guardado }, 200, cors);
    }

    return json({ error: "metodo_no_permitido" }, 405, cors);
  },
};

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...cors, "Content-Type": "application/json; charset=utf-8" },
  });
}
