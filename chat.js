/* Conversación de contacto de lydiel.online.
   Guía al visitante en tres pasos y envía el resultado por FormSubmit.
   Sin dependencias: si el navegador no ejecuta este archivo, el formulario
   clásico de la sección de contacto sigue funcionando igual. */
(function () {
  "use strict";

  var DESTINO = "https://formsubmit.co/ajax/webmaster@labcore.es";
  var CORREO = "webmaster@labcore.es";

  var MOTIVOS = [
    "Un producto nuevo desde cero",
    "Una web o un rediseño",
    "Automatizar algo con IA",
    "Otra cosa"
  ];

  var respuesta = { motivo: "", detalle: "", nombre: "", correo: "" };
  var paso = 0;
  var enviando = false;
  var abierto = false;
  var lanzador, panel, hilo, pie, previo;

  function el(tag, clase, texto) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto != null) n.textContent = texto;
    return n;
  }

  function construye() {
    lanzador = el("button", "chat-launch");
    lanzador.type = "button";
    lanzador.setAttribute("aria-expanded", "false");
    lanzador.setAttribute("aria-controls", "chat-panel");
    var img = el("img");
    img.src = "lydiel.webp";
    img.alt = "";
    img.width = 40;
    img.height = 40;
    img.decoding = "async";
    lanzador.appendChild(img);
    lanzador.appendChild(el("span", "chat-launch-txt", "Hablemos"));
    lanzador.onclick = alterna;

    panel = el("div", "chat-panel");
    panel.id = "chat-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "false");
    panel.setAttribute("aria-label", "Conversación de contacto");
    panel.hidden = true;

    var cab = el("div", "chat-head");
    var quien = el("div", "chat-who");
    quien.appendChild(el("span", "chat-name", "Lydiel"));
    quien.appendChild(el("span", "chat-rail", "Contacto"));
    cab.appendChild(quien);
    var cerrar = el("button", "chat-x", "×");
    cerrar.type = "button";
    cerrar.setAttribute("aria-label", "Cerrar la conversación");
    cerrar.onclick = alterna;
    cab.appendChild(cerrar);

    hilo = el("div", "chat-thread");
    hilo.setAttribute("aria-live", "polite");
    pie = el("div", "chat-foot");

    panel.appendChild(cab);
    panel.appendChild(hilo);
    panel.appendChild(pie);
    document.body.appendChild(lanzador);
    document.body.appendChild(panel);
  }

  function dice(texto, quien) {
    var b = el("p", "chat-msg " + (quien === "yo" ? "mine" : "theirs"), texto);
    hilo.appendChild(b);
    hilo.scrollTop = hilo.scrollHeight;
    return b;
  }

  function limpiaPie() {
    pie.innerHTML = "";
  }

  function opciones(lista, alElegir) {
    limpiaPie();
    var caja = el("div", "chat-chips");
    lista.forEach(function (t) {
      var b = el("button", "chat-chip", t);
      b.type = "button";
      b.onclick = function () { alElegir(t); };
      caja.appendChild(b);
    });
    pie.appendChild(caja);
  }

  function campo(etiqueta, marcador, tipo, alEnviar) {
    limpiaPie();
    var f = el("form", "chat-form");
    var lab = el("label", "chat-label", etiqueta);
    var id = "chat-in-" + paso;
    lab.htmlFor = id;
    var input = tipo === "area" ? el("textarea", "chat-input") : el("input", "chat-input");
    input.id = id;
    if (tipo !== "area") input.type = tipo;
    input.placeholder = marcador;
    input.required = true;
    if (tipo === "email") input.autocomplete = "email";
    if (tipo === "text") input.autocomplete = "name";
    var env = el("button", "chat-send", "Continuar");
    env.type = "submit";
    f.appendChild(lab);
    f.appendChild(input);
    f.appendChild(env);
    f.onsubmit = function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (!v) return;
      if (tipo === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
        aviso("Ese correo no parece válido. Repásalo, por favor.");
        return;
      }
      alEnviar(v);
    };
    pie.appendChild(f);
    input.focus();
  }

  function aviso(texto) {
    var v = pie.querySelector(".chat-warn");
    if (!v) {
      v = el("p", "chat-warn");
      pie.appendChild(v);
    }
    v.textContent = texto;
  }

  /* ---- guion ---- */

  function arranca() {
    hilo.innerHTML = "";
    limpiaPie();
    respuesta = { motivo: "", detalle: "", nombre: "", correo: "" };
    paso = 0;
    dice("Hola. Soy Lydiel: diseño y programo producto digital.", "ellos");
    dice("Tres preguntas y te contesto por correo. ¿Qué te trae por aquí?", "ellos");
    opciones(MOTIVOS, function (t) {
      respuesta.motivo = t;
      dice(t, "yo");
      paso = 1;
      pideDetalle();
    });
  }

  function pideDetalle() {
    dice("Anotado. Cuéntamelo en una línea: qué quieres conseguir y para cuándo.", "ellos");
    campo("Tu proyecto", "Lo que tienes en mente", "area", function (v) {
      respuesta.detalle = v;
      dice(v, "yo");
      paso = 2;
      pideNombre();
    });
  }

  function pideNombre() {
    dice("Perfecto. ¿Cómo te llamas?", "ellos");
    campo("Nombre", "Tu nombre", "text", function (v) {
      respuesta.nombre = v;
      dice(v, "yo");
      paso = 3;
      pideCorreo();
    });
  }

  function pideCorreo() {
    dice("Encantado, " + respuesta.nombre + ". ¿A qué correo te respondo?", "ellos");
    campo("Correo", "tu@correo.com", "email", function (v) {
      respuesta.correo = v;
      dice(v, "yo");
      paso = 4;
      envia();
    });
  }

  function envia() {
    if (enviando) return;
    enviando = true;
    limpiaPie();
    var cargando = dice("Enviando…", "ellos");

    var cuerpo = {
      _subject: "Conversación desde lydiel.online",
      _template: "table",
      _captcha: "false",
      nombre: respuesta.nombre,
      email: respuesta.correo,
      motivo: respuesta.motivo,
      mensaje: respuesta.detalle,
      origen: "Chat de la portada"
    };

    fetch(DESTINO, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(cuerpo)
    }).then(function (r) {
      if (!r.ok) throw new Error("respuesta " + r.status);
      cargando.remove();
      enviando = false;
      dice("Recibido. Te escribo a " + respuesta.correo + " en menos de 24 horas.", "ellos");
      limpiaPie();
      var caja = el("div", "chat-chips");
      var otra = el("button", "chat-chip", "Escribir otro mensaje");
      otra.type = "button";
      otra.onclick = arranca;
      caja.appendChild(otra);
      pie.appendChild(caja);
    }).catch(function () {
      cargando.remove();
      enviando = false;
      dice("No he podido enviarlo desde aquí. Escríbeme directamente y lo vemos.", "ellos");
      limpiaPie();
      var a = el("a", "chat-send", "Abrir el correo");
      a.href = "mailto:" + CORREO +
        "?subject=" + encodeURIComponent("Contacto desde lydiel.online") +
        "&body=" + encodeURIComponent(
          respuesta.nombre + "\n" + respuesta.motivo + "\n\n" + respuesta.detalle);
      pie.appendChild(a);
    });
  }

  /* ---- apertura ---- */

  function alterna() {
    abierto = !abierto;
    panel.hidden = !abierto;
    lanzador.setAttribute("aria-expanded", String(abierto));
    lanzador.classList.toggle("open", abierto);
    if (abierto) {
      previo = document.activeElement;
      if (!hilo.childNodes.length) arranca();
      var foco = pie.querySelector("button, input, textarea, a");
      if (foco) foco.focus();
    } else if (previo && previo.focus) {
      previo.focus();
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && abierto) alterna();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", construye);
  } else {
    construye();
  }
})();
