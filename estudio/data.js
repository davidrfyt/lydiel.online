/* =========================================================
   SEA029 Vigilancia y Seguridad Privada — datos de estudio
   Contenido extraido de los resumenes del temario.
   ========================================================= */

const MODULOS = [
  { id: "mf0080", cod: "MF0080_2", nombre: "Vigilancia y protección en seguridad privada", horas: 270 },
  { id: "mf0081", cod: "MF0081_2", nombre: "Protección de personas", horas: 100 },
  { id: "mf0082", cod: "MF0082_2", nombre: "Explosivos y objetos valiosos", horas: 60 },
  { id: "mf0272", cod: "MF0272_2", nombre: "Primeros auxilios", horas: 60 }
];

/* ---------------------------------------------------------
   TEMARIO
   --------------------------------------------------------- */
const TEMAS = [

/* ============ MF0080 ============ */
{
  id: "t01", mod: "mf0080", n: 1, t: "La central de alarmas",
  c: [
    { h: "Definición y funciones", l: [
      "Núcleo operativo de los sistemas de seguridad: <b>recibe, verifica y gestiona</b> las señales de los dispositivos de detección.",
      "<b>Recepción</b> de señales de las instalaciones conectadas.",
      "<b>Verificación</b> de la veracidad de las alarmas.",
      "<b>Activación de protocolos</b> de respuesta, incluida la comunicación con las Fuerzas y Cuerpos de Seguridad y con los usuarios autorizados."
    ]},
    { h: "Tipología de señales", l: [
      "<b>Intrusión</b>: entrada no autorizada en recinto protegido.",
      "<b>Atraco o pánico</b>: activada por el usuario en emergencia.",
      "<b>Incendio</b>: detectores térmicos o de humo.",
      "<b>Fallos técnicos</b>: corte de energía, fallo del sistema, sabotaje.",
      "<b>Supervisión</b>: información periódica que confirma el funcionamiento.",
      "<b>Acceso</b>: procedentes de los sistemas de control de accesos."
    ]},
    { h: "Elementos que la componen", l: [
      "<b>Recepción de señales</b>: equipos electrónicos que reciben y traducen.",
      "<b>Software de gestión</b>: interpreta y prioriza los eventos.",
      "<b>Operadores</b>: personal capacitado que atiende y activa protocolos.",
      "<b>Bases de datos</b>: clientes, instalaciones y personas autorizadas.",
      "<b>Medios de comunicación</b>: teléfono, radio, redes IP, GSM, GPRS."
    ]},
    { h: "Normativa y obligaciones", l: [
      "<b>Ley 5/2014</b> de Seguridad Privada; <b>RD 2364/1994</b> (Reglamento de Seguridad Privada); Orden <b>INT/316/2011</b>; instrucciones técnicas de la Dirección General de la Policía.",
      "Estar <b>autorizadas por el Ministerio del Interior</b>.",
      "Instalaciones con medidas de seguridad física y electrónica adecuadas.",
      "<b>Grabaciones de audio y vídeo</b> durante la gestión de alarmas.",
      "Plantilla suficiente y cualificada.",
      "Realizar <b>verificación efectiva</b> de las señales antes de avisar a las autoridades."
    ]},
    { h: "Verificación y actuación", l: [
      "<b>Secuencial</b>: análisis de varias señales distintas.",
      "<b>Por audio o vídeo</b>: escucha o visualización remota del lugar.",
      "<b>Llamada telefónica</b> al cliente para confirmar o descartar.",
      "Confirmada la alarma: activar el protocolo de intervención, notificar a las Fuerzas de Seguridad o servicios de emergencia, contactar al cliente según la lista de autorizados y <b>registrar toda la actuación</b>."
    ]}
  ]
},
{
  id: "t02", mod: "mf0080", n: 2, t: "Medios de protección",
  c: [
    { h: "Concepto y división", l: [
      "Dispositivos, sistemas y elementos, físicos o electrónicos, que permiten <b>prevenir, detectar o actuar</b> ante una amenaza.",
      "Se dividen en <b>pasivos</b> y <b>activos</b>."
    ]},
    { h: "Medios pasivos", l: [
      "<b>No requieren</b> intervención humana ni mecanismos electrónicos.",
      "Función: <b>retardar, disuadir o impedir</b> la intrusión o el daño.",
      "Ejemplos: muros, vallas, cerramientos, puertas blindadas, cristales de seguridad, rejas, persianas metálicas, candados y cierres mecánicos."
    ]},
    { h: "Medios activos", l: [
      "Requieren <b>energía o intervención humana</b>. Función: detectar, alertar y actuar.",
      "<b>Detección</b>: detectores de movimiento, vibración, rotura de cristales, humo y calor; sensores perimetrales, volumétricos y sísmicos.",
      "<b>Alarma</b>: sirenas acústicas, señales luminosas, pulsadores de pánico.",
      "<b>Comunicaciones</b>: transmisores telefónicos, radio, IP, GPRS, GSM.",
      "<b>Intervención</b>: control de accesos, videovigilancia, inhibidores, nebulizadores de niebla activa."
    ]},
    { h: "Clasificación por función", l: [
      "<b>Disuasivos</b>: impiden o desincentivan el ataque (carteles, iluminación, cámaras visibles).",
      "<b>Retardadores</b>: frenan o retrasan el acceso (cerraduras, rejas).",
      "<b>Detectores</b>: señalan la presencia del riesgo (sensores).",
      "<b>Alarmas</b>: informan o avisan del peligro (sirenas, comunicaciones).",
      "<b>Actuadores</b>: permiten responder al riesgo (niebla de seguridad, bloqueo de puertas)."
    ]},
    { h: "Videovigilancia y sistemas combinados", l: [
      "CCTV: cámaras analógicas o IP, grabadores digitales, monitores y software de gestión. Permite <b>ver, grabar y verificar en tiempo real</b>.",
      "Control de accesos: tarjetas, huellas, reconocimiento facial o códigos; tornos, barreras y puertas automáticas. Aporta <b>prevención y trazabilidad</b>.",
      "Los sistemas modernos <b>combinan pasivos y activos</b>, coordinados desde una central de alarmas o puesto de control.",
      "Normativa: Ley 5/2014, reglamentos técnicos y certificaciones <b>UNE o EN</b>."
    ]}
  ]
},
{
  id: "t03", mod: "mf0080", n: 3, t: "Técnicas y medios de control de accesos",
  c: [
    { h: "Definición y objetivo", l: [
      "Conjunto de procedimientos y dispositivos técnicos para <b>autorizar, restringir o registrar</b> la entrada o salida de personas, vehículos u objetos en zonas protegidas.",
      "Objetivo: garantizar la seguridad física y operativa de instalaciones sensibles."
    ]},
    { h: "Tipos de control", l: [
      "<b>Físico</b>: supervisión directa del personal de seguridad, verificación de documentos, inspección de pertenencias, control manual de vehículos.",
      "<b>Técnico o electrónico</b>: tarjetas de proximidad o magnéticas, teclados de código PIN, sistemas biométricos (huella, iris, facial), lectores de matrículas y RFID."
    ]},
    { h: "Verificación de identidades", l: [
      "Verificación visual de documentos oficiales.",
      "Registro de visitantes, manual o digital.",
      "Acreditación previa y uso de credenciales.",
      "Dispositivos electrónicos: tarjetas, biometría.",
      "Confirmación con sistemas centralizados en tiempo real."
    ]},
    { h: "Medios mecánicos y electrónicos", l: [
      "<b>Mecánicos</b>: cerraduras, llaves, candados, portones manuales.",
      "<b>Electromecánicos</b>: cerraduras eléctricas, imanes, puertas automáticas, torniquetes.",
      "<b>Electrónicos</b>: lectores de tarjetas, sistemas biométricos, controladores de acceso conectados a red."
    ]},
    { h: "Zonificación y registro", l: [
      "Zonas <b>públicas</b>, <b>restringidas</b> y <b>críticas</b>; las críticas requieren <b>doble autenticación</b>.",
      "El registro de entradas y salidas puede ser manual (libros de visitas), electrónico o integrado con videovigilancia y alarmas.",
      "El registro garantiza <b>trazabilidad</b> y permite auditorías.",
      "Normativa: Ley 5/2014 y protección de datos conforme al <b>RGPD y la LOPDGDD</b>."
    ]}
  ]
},
{
  id: "t04", mod: "mf0080", n: 4, t: "Manejo de armas y medidas de seguridad",
  c: [
    { h: "Normativa y armas autorizadas", l: [
      "Los vigilantes pueden portar armas <b>solo en servicios autorizados por el Ministerio del Interior</b>.",
      "Normativa básica: <b>Reglamento de Armas (RD 137/1993)</b>, Ley 5/2014 e instrucciones de la Dirección General de la Policía sobre formación, asignación y custodia.",
      "Armas autorizadas: <b>armas cortas, pistolas semiautomáticas del calibre 9 mm parabellum</b>.",
      "En casos especiales y con autorización expresa: <b>escopetas de repetición</b>."
    ]},
    { h: "Las cuatro reglas de manipulación segura", l: [
      "Tratar siempre el arma <b>como si estuviera cargada</b>.",
      "<b>No apuntar</b> a nadie si no es estrictamente necesario.",
      "<b>No poner el dedo en el gatillo</b> hasta que se decida disparar.",
      "Conocer y <b>comprobar el estado del arma</b> antes y después del servicio.",
      "Se practican además técnicas de desenfunde, enfunde, recarga y encare."
    ]},
    { h: "Prácticas de tiro y custodia", l: [
      "Prácticas periódicas: <b>mínimo una vez al semestre</b>, en galerías homologadas.",
      "Se evalúa puntería, control del arma y simulación de situaciones reales. Es <b>obligatorio acudir</b> cuando cita la empresa o el centro de formación.",
      "Custodia en <b>armeros homologados</b>, en la sede de la empresa o el puesto de servicio.",
      "<b>Prohibido llevarse el arma fuera del servicio</b>. Medidas especiales en transporte, limpieza y almacenamiento."
    ]},
    { h: "Uso del arma y responsabilidad", l: [
      "Solo se justifica en <b>legítima defensa o estado de necesidad</b>.",
      "Cuando exista una agresión <b>real, actual e inminente</b>.",
      "Con <b>proporcionalidad, congruencia y oportunidad</b>, evitando daños innecesarios.",
      "Medidas complementarias: chaleco antibalas en servicios de riesgo, fundas antihurto y de sujeción rígida, protocolos de respuesta armada y coordinación con las FCS.",
      "El mal uso conlleva sanciones administrativas y <b>pérdida de la habilitación</b>, responsabilidad penal y civil, y daño a la imagen del sector."
    ]}
  ]
},
{
  id: "t05", mod: "mf0080", n: 5, t: "La preparación física",
  c: [
    { h: "Por qué importa", l: [
      "Mejora la <b>capacidad de respuesta</b> ante situaciones de riesgo.",
      "Previene lesiones y fatiga.",
      "Mantiene el <b>autocontrol</b> y la eficacia operativa.",
      "Aumenta la autoestima y la confianza."
    ]},
    { h: "Condiciones físicas básicas", l: [
      "<b>Resistencia</b>: mantener un esfuerzo durante un tiempo prolongado.",
      "<b>Fuerza</b>: oponerse o vencer una resistencia.",
      "<b>Velocidad</b>: realizar acciones en el menor tiempo posible.",
      "<b>Flexibilidad</b>: mover una articulación en todo su rango."
    ]},
    { h: "Condiciones físicas complementarias", l: [
      "<b>Coordinación</b>: control de los movimientos.",
      "<b>Equilibrio</b>: mantener el cuerpo estable.",
      "<b>Agilidad</b>: cambios rápidos de posición o dirección.",
      "<b>Reacción</b>: tiempo que se tarda en responder a un estímulo."
    ]},
    { h: "Entrenamiento", l: [
      "Debe ser <b>planificado, progresivo, variado y adaptado</b> al individuo.",
      "<b>Calentamiento</b>: prepara el cuerpo para el ejercicio.",
      "<b>Fase principal</b>: se entrena la cualidad física deseada.",
      "<b>Vuelta a la calma</b>: baja la intensidad de forma gradual.",
      "Frecuencia de <b>3 a 5 días por semana</b>, con duración e intensidad adecuadas y revisión médica si procede."
    ]},
    { h: "Alimentación, descanso y lesiones", l: [
      "Dieta equilibrada e hidratación constante antes, durante y después. Evitar comidas copiosas antes de entrenar.",
      "Dormir <b>al menos 7-8 horas</b> diarias y respetar los descansos entre sesiones.",
      "Prevenir lesiones: buen calentamiento, ropa y calzado adecuados, técnica correcta y consulta profesional ante molestias persistentes.",
      "Psicología: motivación, constancia, disciplina, gestión del estrés y autoconfianza."
    ]}
  ]
},
{
  id: "t06", mod: "mf0080", n: 6, t: "Fundamentos de seguridad",
  c: [
    { h: "Planes de emergencia y evacuación", l: [
      "Conjunto de medidas para actuar ante situaciones imprevistas que dañen a personas, instalaciones o medio ambiente.",
      "La <b>Ley de Prevención de Riesgos Laborales</b> obliga a evaluar riesgos y adoptar medidas de primeros auxilios, evacuación y lucha contra incendios.",
      "<b>Plan de actuación</b>: incluye evacuación y medidas para proteger instalaciones.",
      "<b>Plan de evacuación</b>: traslado ordenado a zonas seguras.",
      "<b>PEI</b>, Plan de Emergencia Interior: medidas internas de la empresa.",
      "<b>PEE</b>, Plan de Emergencia Exterior: coordinación entre varias empresas y organismos públicos."
    ]},
    { h: "Equipos de actuación en emergencias", l: [
      "<b>EPI</b>: equipo de primera intervención; todos deberían tener formación básica.",
      "<b>ESI</b>: equipo de segunda intervención, como bomberos internos de la empresa.",
      "<b>EPA</b>: equipo de primeros auxilios.",
      "<b>EAE</b>: equipo de alarma y evacuación; dirige y verifica la evacuación."
    ]},
    { h: "Artefactos explosivos y NRBQ", l: [
      "El plan incluye: análisis de riesgos, evaluación de vulnerabilidad, información del entorno, procedimientos operativos, evaluación de daños y recuperación.",
      "Ante amenaza: <b>no manipular</b> objetos sospechosos, avisar a Guardia Civil o Policía, evacuar, mantener la calma y alejarse.",
      "En caso de explosión: cubrirse y alejarse <b>más de 300 metros</b>, o protegerse tras objetos sólidos.",
      "Ante agentes <b>NRBQ</b> (nucleares, radiológicos, biológicos o químicos): cerrar puertas y ventanas, cubrirse, no tocar objetos contaminados y esperar instrucciones oficiales."
    ]},
    { h: "Colaboración con las FCS", l: [
      "<b>Cuerpo Nacional de Policía</b>: proyecto <b>RED AZUL</b>, colaboración recíproca con la seguridad privada.",
      "<b>Guardia Civil</b>: programa <b>COOPERA</b>, intercambio de información operativa en vigilancia, tráfico, armas y medio ambiente."
    ]},
    { h: "Sistema integral de seguridad", l: [
      "<b>Medios humanos</b>: vigilantes y fuerzas del orden.",
      "<b>Medios técnicos pasivos</b>: puertas, rejas, barreras físicas.",
      "<b>Medios técnicos activos</b>: detectores, señalizadores, CCTV.",
      "<b>Medios institucionales</b>: normativa y planes oficiales (Ley 5/2014, RD 2364/1994, Ley Orgánica 2/1986)."
    ]},
    { h: "Teoría esférica, zonas y áreas", l: [
      "Seguridad dispuesta en <b>capas concéntricas</b> en torno al objeto o persona protegida.",
      "<b>Seguridad inmediata</b>: contacto directo (puertas blindadas, escoltas).",
      "<b>Seguridad próxima</b>: vigilancia cercana al objetivo (CCTV, vigilantes estáticos).",
      "<b>Seguridad lejana</b>: perímetro externo, control de accesos, vigilancia a distancia.",
      "<b>Zona</b> es el conjunto general del entorno: <b>controlada</b> (vigilable directamente) y <b>restringida</b> (acceso limitado).",
      "<b>Área</b> son las partes internas más críticas: área crítica, de exclusión, de influencia y protegida."
    ]},
    { h: "Autoprotección personal", l: [
      "<b>Trabajo</b>: variar rutinas, observar el entorno, disponer de alarmas silenciosas.",
      "<b>Domicilio</b>: cambiar horarios, observar antes de entrar o salir.",
      "<b>Desplazamientos</b>: cambiar rutas, revisar el vehículo, no recoger desconocidos.",
      "<b>Otros lugares</b>: estar alerta y no revelar información personal ni profesional."
    ]},
    { h: "Prevención de Riesgos Laborales", l: [
      "Regulada por la <b>Ley 31/1995</b>.",
      "Actúa mediante evaluación de riesgos, formación, medidas de emergencia y coordinación empresarial.",
      "<b>Derechos del trabajador</b>: protección eficaz, formación, consulta y vigilancia de la salud.",
      "<b>Obligaciones del empresario</b>: integrar la PRL en todos los niveles y <b>no repercutir el coste al trabajador</b>.",
      "<b>Obligaciones del trabajador</b>: usar correctamente los equipos, seguir instrucciones y colaborar.",
      "Órganos: <b>Delegados de Prevención</b> según tamaño de la empresa y <b>Comités de Seguridad y Salud</b>, de representación conjunta."
    ]}
  ]
},
{
  id: "t07", mod: "mf0080", n: 7, t: "Medidas de protección y control de accesos",
  c: [
    { h: "Concepto y tipos de seguridad", l: [
      "Seguridad: estado deseado en el que los riesgos están <b>identificados y controlados</b>; implica prevención de incidentes y protección de personas, bienes e información.",
      "<b>Seguridad física</b>: protección contra accesos no autorizados mediante barreras, estructuras o presencia humana.",
      "<b>Seguridad lógica o informática</b>: protección de datos y sistemas.",
      "<b>Seguridad procedimental</b>: medidas administrativas, protocolos y normativas."
    ]},
    { h: "Principios de la protección física", l: [
      "<b>Defensa en profundidad</b>: capas sucesivas de seguridad.",
      "<b>Zonificación</b>: áreas con distinto nivel de seguridad.",
      "<b>Redundancia</b>: duplicidad de los medios críticos.",
      "<b>Tiempo de reacción</b>: retardar el acceso no autorizado hasta la intervención de las fuerzas de seguridad."
    ]},
    { h: "Barreras físicas", l: [
      "<b>Perimetrales</b>: vallas, muros, cercas electrificadas, zanjas. Delimitan el perímetro y retrasan el acceso.",
      "<b>Estructurales</b>: puertas, portones, cristales de seguridad, compuertas.",
      "<b>Interiores</b>: puertas de seguridad, torniquetes, esclusas."
    ]},
    { h: "Análisis de riesgos", l: [
      "Finalidad: evaluar amenazas, vulnerabilidades y consecuencias; determinar el nivel de riesgo y priorizar medidas.",
      "Etapas: <b>1)</b> identificación de activos a proteger, <b>2)</b> evaluación de amenazas y vulnerabilidades, <b>3)</b> análisis de impacto, <b>4)</b> propuesta de medidas de mitigación."
    ]},
    { h: "Medidas organizativas", l: [
      "Políticas de seguridad y normas internas de acceso y circulación.",
      "Formación del personal.",
      "Simulacros y planes de contingencia.",
      "Coordinación entre seguridad privada y cuerpos de seguridad del Estado, y con otros departamentos internos."
    ]}
  ]
},

/* ============ MF0081 — UF2676 ============ */
{
  id: "t08", mod: "mf0081", n: 1, t: "UF2676 · La protección integral",
  c: [
    { h: "Conceptos y técnicas", l: [
      "<b>Seguridad privada</b>: forma en que los agentes privados contribuyen a reducir riesgos; seguridad <b>adicional</b> a la pública, <b>complementaria y subordinada</b> a ella.",
      "<b>Protección</b>: acción y efecto de proteger. Sistema de medidas aplicables en función de lo que se requiera proteger. Más específico que seguridad.",
      "<b>Integral</b>: cubre todos los aspectos, esfera profesional y personal; contempla dinámica y estática.",
      "<b>Dinámica</b>: dispositivo para proteger en los <b>desplazamientos</b> o el traslado de un objeto.",
      "<b>Estática</b>: dispositivo para custodiar en un <b>lugar fijo</b>."
    ]},
    { h: "Habilitación (art. 28 Ley 5/2014)", l: [
      "<b>Mayor de edad</b> (18 años), capacidad física y aptitud psicológica, nacionalidad UE/EEE o tercer Estado con convenio, formación previa.",
      "<b>Carecer de antecedentes penales</b> por delitos dolosos.",
      "No sancionado <b>2 años</b> (grave) ni <b>4 años</b> (muy grave); no separado de FCS o FFAA en <b>2 años</b>; no condenado por intromisión ilegítima en <b>5 años</b>.",
      "Habilita la <b>Dirección General de la Policía</b>, excepto guardas rurales, que corresponde a la <b>Guardia Civil</b>.",
      "La pérdida de un requisito <b>extingue</b> la habilitación y cancela de oficio la inscripción en el Registro Nacional."
    ]},
    { h: "Principios de actuación", l: [
      "Legalidad, integridad, protección, dignidad, corrección.",
      "<b>Congruencia</b>: medidas proporcionadas y adecuadas <b>a los riesgos</b>.",
      "<b>Proporcionalidad</b>: en el uso de las <b>técnicas y medios</b> de defensa e investigación.",
      "Reserva profesional y colaboración con las Fuerzas y Cuerpos de Seguridad."
    ]},
    { h: "Riesgos y protección integral", l: [
      "<b>Peligro</b>: acción o condición con potencial de producir daño. Se detecta asignando valores a la <b>posibilidad</b> y la <b>seriedad</b> en escala numérica.",
      "Riesgos: <b>naturales</b>, <b>tecnológicos</b>, <b>por accidente</b> y <b>por malas acciones o comportamiento de personas</b>.",
      "La protección integral se fundamenta en la <b>prevención</b> (evitar el suceso) y la <b>protección</b> (neutralizar el suceso ya acontecido).",
      "Medidas de seguridad de la Ley 5/2014: <b>física, electrónica, informática, organizativa y personal</b>."
    ]},
    { h: "Teorías de la protección dinámica", l: [
      "<b>Teoría esférica</b>: espacio contenido en una esfera cuyo centro es el protegido; tres planos: <b>aéreo, superficial y subterráneo</b>.",
      "<b>Círculos concéntricos</b>: <b>1º</b> escolta personal (cubrir, proteger y evacuar), <b>2º</b> puestos de seguridad (protegido en su campo de observación), <b>3º</b> patrullas móviles y grupos de información (no vigilan al protegido).",
      "Escalones o niveles: <b>puestos de vigilancia</b>, <b>puestos de revisión y control</b> y <b>puestos especiales de seguridad</b>.",
      "<b>Cuartos seguros</b>: acceso rápido y fácil, buenas comunicaciones, capacidad de defensa, estar limitado y facilidad para primeros auxilios."
    ]},
    { h: "Protección en movimiento y estática", l: [
      "Secuencia ante agresión: <b>avisar</b> (tipo, agresor y dirección), <b>cobertura</b> (reducir superficie de blanco y silueta), <b>evacuación</b> al lugar seguro preestablecido y <b>neutralizar</b> yendo al arma, no al cuerpo.",
      "Cápsulas de protección: recomendable de <b>1 a 5 miembros</b>.",
      "Escaleras: el protegido va pegado a la <b>pared</b>; el resto forma círculo. Ascensor: el protegido siempre con un escolta y el resto sube por las escaleras.",
      "<b>Líneas de control</b>: dos escoltas delante y dos detrás, observando <b>las manos</b>.",
      "Protección estática: se divide en <b>interior</b> y <b>exterior</b>. <b>Avanzada</b>: requisar el lugar antes de la entrada del protegido."
    ]}
  ]
},
{
  id: "t09", mod: "mf0081", n: 2, t: "UF2676 · Actuación en vehículos",
  c: [
    { h: "El vehículo de seguridad", l: [
      "Cómodo, con <b>aire acondicionado</b> (permite el cierre total ante ataque con gas), seguro y rápido, completamente <b>blindado</b> (carrocería, cristales, bajos y neumáticos) y con buena relación potencia/peso.",
      "<b>Sistema de bloqueo</b>: corta la inyección de combustible y acciona alarma acústica y luminosa, con retardo de <b>2 minutos como máximo</b>.",
      "<b>Rejilla metálica</b> en el interior del tubo del depósito.",
      "<b>Sistema de protección del depósito</b> de combustible.",
      "<b>Cierre especial de la caja</b> mediante candado o cerradura de seguridad."
    ]},
    { h: "Conductor y requisa", l: [
      "Entrenamiento de <b>conducción de alta seguridad</b>; conocer el vehículo y su mecánica y los itinerarios programados y alternativos.",
      "Factores: <b>límites personales</b> (reacción, concentración, reflejos), <b>del vehículo</b> (características técnicas) y <b>externos</b> (pavimento, tráfico, meteorología).",
      "Revisión <b>diaria</b>. Requisa exterior sistemática y preestablecida, requisa interior (asientos, bandeja trasera, guantera) y por último motor y maletero.",
      "Apoyo con perros adiestrados, espejos especiales o detectores de explosivos."
    ]},
    { h: "Conducción evasiva", l: [
      "<b>Ofensiva</b>: aprovecha peso, potencia y velocidad para afrontar el ataque de forma activa, llegando a <b>colisionar</b>.",
      "<b>Defensiva</b>: <b>evita colisionar</b>, variando la trayectoria con un giro de <b>180 grados</b>.",
      "Maniobras: <b>en Y</b>, <b>vuelta corta</b>, <b>California</b> (freno de mano, derrape) y <b>giro en J</b>.",
      "La <b>Y</b> y la <b>California</b> se usan solo cuando <b>no hay tiempo</b> para reaccionar.",
      "Circular por el <b>carril medio o más próximo a la calzada</b> para poder maniobrar."
    ]},
    { h: "Normas de conducción", l: [
      "Cristales subidos y puertas aseguradas.",
      "<b>No recoger ni auxiliar a extraños</b>.",
      "Vías amplias y bien iluminadas.",
      "Detenerse <b>solo</b> ante fuerza pública identificada con su placa.",
      "Revisar el vehículo antes del trayecto y no bajar al protegido hasta comprobar que no hay peligro.",
      "Rutas aleatorias previamente estudiadas; varios escoltas viajan en <b>vehículos separados y en caravana</b>."
    ]},
    { h: "Caravanas e itinerarios", l: [
      "<b>Caravana</b>: mínimo el coche del protegido y el de los escoltas. <b>Informales</b> (itinerario no público) y <b>formales</b> (conocido por todos).",
      "Coches: <b>piloto</b> (equipo + Policía local), <b>VIP</b> (protegido, acompañantes y Jefe del Equipo), <b>adicional</b> (repuesto del VIP) y <b>escolta</b>.",
      "Posiciones: 1 escolta <b>detrás</b>; 2 escoltas <b>uno delante y otro detrás</b>; 3 escoltas <b>uno delante y dos detrás</b>.",
      "Itinerarios: <b>principal</b>, <b>alternativo</b>, <b>de evacuación</b> (centro de urgencia o asistencial) y <b>de fuga</b> (puntos seguros elegidos de antemano).",
      "El estudio lo hacen los escoltas antes de la salida y se revisa <b>cada 5 meses</b>.",
      "Valores éticos: espíritu de servicio, conciencia de grupo, honor, disciplina consciente, excelencia en las labores y respeto legal."
    ]}
  ]
},

/* ============ MF0082 ============ */
{
  id: "t10", mod: "mf0082", n: 1, t: "Aspectos jurídicos del vigilante de explosivos",
  c: [
    { h: "Naturaleza y protección jurídica", l: [
      "Profesional legalmente habilitado que garantiza la protección de personas, bienes e instalaciones donde se manejen explosivos o materiales peligrosos.",
      "Tiene condición de <b>agente de la autoridad</b> según la Ley 5/2014, lo que implica <b>mayor protección penal</b> frente a agresiones.",
      "La jurisprudencia del Tribunal Supremo (<b>STS 4778/2013</b>) le reconoce también la condición de <b>funcionario público</b> a efectos de responsabilidad penal."
    ]},
    { h: "Funciones (art. 32 Ley 5/2014)", l: [
      "Vigilancia y protección de bienes y personas.",
      "Controles de acceso de personas, vehículos y mercancías, <b>sin retención de documentación</b>.",
      "Prevención y oposición a actos delictivos o infracciones administrativas.",
      "Detención de infractores y entrega a las autoridades competentes, <b>sin interrogatorios</b>.",
      "Protección del transporte de valores, obras de arte y explosivos.",
      "Verificación de señales de alarma.",
      "Vigilancia de almacenamiento, transporte y custodia de explosivos, <b>exclusivamente por empresas de seguridad y con uniforme reglado</b>."
    ]},
    { h: "Normativa aplicable", l: [
      "<b>Reglamento de Explosivos, RD 130/2017</b>.",
      "<b>Reglamento de artículos pirotécnicos y cartuchería, RD 989/2015</b> (sustituye al RD 563/2010).",
      "Reglamento de Minas.",
      "Reglamento Nacional de Transporte de Mercancías Peligrosas."
    ]},
    { h: "Instrucciones Técnicas Complementarias", l: [
      "<b>ITC nº 1</b>, medidas de seguridad en instalaciones: toda fábrica, taller o depósito debe tener aprobado un <b>plan de seguridad</b> elaborado por empresa de seguridad autorizada. Cubre seguridad humana (vigilantes, turnos, puestos) y física (cercados, puertas, protección electrónica, conexión con Guardia Civil). Cabe sustituir vigilancia humana por sistemas electrónicos previa autorización.",
      "<b>ITC nº 9</b>, solicitudes de autorización para fábricas: memoria técnica y jurídica, descripción de instalaciones y procesos, análisis de impacto ambiental, planos y presupuesto.",
      "<b>ITC nº 12</b>, prevención de accidentes graves: inspirada en la <b>Directiva 2012/18/UE (Seveso III)</b>. Obliga a política de prevención, Plan de Emergencia Interior o de Autoprotección, participación de trabajadores y subcontratas, coordinación entre empresas (RD 171/2004) y <b>revisión del plan cada 3 años como máximo</b>.",
      "<b>ITC nº 22</b>, clasificación por <b>grupos de compatibilidad (A a S)</b> según tipo de materia, dispositivos de seguridad y riesgo particular."
    ]},
    { h: "Transporte de explosivos", l: [
      "Afecta a cualquier medio: carretera, ferrocarril, fluvial, aéreo y marítimo.",
      "Requiere <b>Plan de Seguridad previo</b>, con aviso a la Guardia Civil.",
      "<b>Dotación mínima de vigilantes de explosivos</b> por vehículo, vagón o embarcación.",
      "Enlaces de comunicación entre vehículos, empresa de seguridad y Guardia Civil.",
      "Posible <b>escolta armada adicional de la Guardia Civil</b>.",
      "<b>Registro obligatorio de incidencias</b> en la guía de circulación."
    ]},
    { h: "Pirotecnia y cartuchería (RD 989/2015)", l: [
      "Categorías por uso: <b>F1</b> muy baja peligrosidad (interiores), <b>F2</b> baja (exteriores controlados), <b>F3</b> media (zonas amplias), <b>F4</b> alta (uso profesional).",
      "Teatro: <b>T1</b> baja peligrosidad y <b>T2</b> uso exclusivo por expertos.",
      "Otros usos: <b>P1</b> baja peligrosidad y <b>P2</b> uso exclusivo por expertos.",
      "Exclusiones: uso no comercial por Fuerzas Armadas o de Seguridad, cartuchería de juguetes (<b>menos de 0,3 g de pólvora</b>) y artificios de uso propio sin comercialización."
    ]}
  ]
},
{
  id: "t11", mod: "mf0082", n: 2, t: "Protección de fondos y objetos valiosos",
  c: [
    { h: "Objetivo y normativa", l: [
      "Garantizar la seguridad en <b>transporte, manipulación, custodia y almacenamiento</b> de efectivo, objetos valiosos, obras de arte, joyas y documentos confidenciales.",
      "<b>Ley 5/2014</b> de Seguridad Privada.",
      "<b>RD 2364/1994</b>, Reglamento de Seguridad Privada.",
      "<b>Orden INT/314/2011</b>, sobre empresas de seguridad."
    ]},
    { h: "Medios", l: [
      "<b>Humanos</b>: vigilantes de seguridad habilitados, escoltas privados y personal de transporte de fondos con formación específica.",
      "<b>Materiales</b>: vehículos blindados con compartimentos separados, localizadores GPS y sistemas de cierre; contenedores y maletines de seguridad antirrobo e ignífugos.",
      "<b>Tecnológicos</b>: CCTV, alarmas, detectores de movimiento, control de accesos, geolocalización y comunicación."
    ]},
    { h: "Procedimientos por fases", l: [
      "<b>Recogida</b>: verificación de identidades, control de accesos y documentación específica.",
      "<b>Transporte</b>: rutas seguras, escolta si es necesario y comunicación continua con la central.",
      "<b>Entrega y custodia</b>: firma de documentos de recepción, cámaras acorazadas y registro documental.",
      "Planificación: <b>variación de rutas y horarios</b>, evaluación de riesgos en los puntos de recogida y entrega y coordinación con las FCS."
    ]},
    { h: "Instalaciones y situaciones de riesgo", l: [
      "Instalaciones: cámaras acorazadas certificadas, control de accesos biométrico o con tarjetas, vigilancia <b>24/7</b> y alarmas conectadas con la central.",
      "<b>Atracos</b>: <b>sin resistencia</b>, priorizando la integridad física.",
      "<b>Secuestros o coacciones</b>: mantener la calma y seguir los protocolos de comunicación.",
      "<b>Incidentes técnicos</b>: aviso inmediato a la central, <b>no manipular por cuenta propia</b>."
    ]}
  ]
},
{
  id: "t12", mod: "mf0082", n: 3, t: "Técnicas de protección y defensa",
  c: [
    { h: "Principios de la protección personal", l: [
      "Prevenir agresiones, atentados o secuestros.",
      "Garantizar la seguridad física del protegido.",
      "Asegurar la continuidad de su actividad sin interferencias.",
      "Factores clave: <b>discreción</b> y vigilancia constante, conocimiento de la rutina y evaluación de riesgos, y <b>capacidad de anticipación</b>."
    ]},
    { h: "Clases y formación", l: [
      "<b>Estática</b>: desde un puesto fijo; impedir accesos no autorizados y observar el entorno.",
      "<b>Dinámica</b>: en movimiento, acompañando al protegido; requiere anticipación y formación táctica.",
      "Cualidades del escolta: disciplina, discreción, vigilancia activa y capacidad de reacción; dominio de primeros auxilios, defensa personal, tiro y conducción evasiva; buen estado físico y psicológico.",
      "Coordinación: trabajo en equipo, sincronización y comunicación por señales visuales, auditivas o radio."
    ]},
    { h: "Desplazamientos", l: [
      "<b>A pie</b>: formación en <b>diamante</b> o <b>triángulo invertido</b>, con el protegido en el centro; escoltas en posiciones delantera, trasera y laterales; cambios de formación ante multitudes, esquinas o puertas.",
      "<b>En vehículo</b>: vehículo principal con el protegido y vehículos de escolta delante y detrás, con control de ruta y tácticas de evasión ante ataque o seguimiento."
    ]},
    { h: "Defensa personal y armamento", l: [
      "Principios del uso de la fuerza: <b>proporcionalidad, necesidad y oportunidad</b>; minimizar el daño al agresor y a terceros; <b>neutralizar, no agredir</b>.",
      "Técnicas: inmovilizaciones, desarmes, bloqueos, evasión; uso de tonfa o defensa extensible; defensa contra armas blancas o contundentes.",
      "Arma corta reglamentaria, de uso exclusivo ante amenaza real, conforme a la normativa de seguridad privada.",
      "Equipo: chalecos antibalas, guantes anticorte, linterna táctica, emisora, grilletes y botiquín."
    ]},
    { h: "Intervención y psicología", l: [
      "Ante agresión: <b>aislar</b> al protegido del riesgo, <b>neutralizar o disuadir</b> al agresor y <b>evacuar</b> a lugar seguro.",
      "Tras el incidente: activar el plan de contingencia, notificar a las autoridades y <b>redactar informe detallado</b>.",
      "Factores emocionales: gestión del estrés, autocontrol, actuar bajo presión y empatía sin perder objetividad.",
      "Perfil del agresor: conocer conductas previas al ataque y detectar señales de alerta (miradas, gestos, movimientos)."
    ]}
  ]
},
{
  id: "t13", mod: "mf0082", n: 4, t: "Clasificación de los explosivos y medidas de seguridad",
  c: [
    { h: "Concepto", l: [
      "Sustancia o mezcla que, ante un estímulo adecuado (calor, fricción, impacto, chispa), reacciona violentamente <b>liberando gases, calor y presión</b>."
    ]},
    { h: "Clasificaciones", l: [
      "<b>Por aplicación</b>: civiles (minería, canteras, obra pública: dinamita, ANFO), militares y pirotécnicos.",
      "<b>Por velocidad de reacción</b>: <b>deflagrantes</b>, liberan energía lentamente (pólvora negra), y <b>detonantes</b>, reacción instantánea con onda supersónica (nitroglicerina).",
      "<b>Por estado físico</b>: sólidos (TNT, dinamita), líquidos (nitroglicerina) y gaseosos (mezcla oxígeno-acetileno).",
      "<b>Por sensibilidad</b>: <b>primarios</b> muy sensibles (fulminato de mercurio), <b>secundarios</b> que necesitan iniciación previa (TNT, ANFO) y <b>terciarios</b> insensibles sin iniciador potente."
    ]},
    { h: "Clasificación ADR — Clase 1", l: [
      "<b>1.1</b>: riesgo de explosión en masa (TNT).",
      "<b>1.2</b>: proyección, sin explosión en masa.",
      "<b>1.3</b>: incendio y ligera onda de presión.",
      "<b>1.4</b>: riesgo menor, explosión localizada.",
      "<b>1.5</b>: explosivos muy insensibles (ANFO).",
      "<b>1.6</b>: objetos extremadamente insensibles (detonadores electrónicos)."
    ]},
    { h: "Etiquetado y señalización", l: [
      "<b>Paneles naranjas</b> con números de identificación ONU y tipo de riesgo.",
      "Etiquetas de peligro: la <b>Clase 1</b> es de color <b>naranja</b> con símbolo de explosión.",
      "Códigos ONU identifican sustancias concretas; por ejemplo <b>ONU 0081 = TNT</b>."
    ]},
    { h: "Medidas de seguridad", l: [
      "<b>Generales</b>: formación específica, EPIs (gafas, guantes, calzado antiestático) y eliminación de fuentes de ignición, incluida la electricidad estática.",
      "<b>Almacenamiento</b>: recintos ventilados, secos y aislados; separación por compatibilidad; sistemas contra incendios.",
      "<b>Transporte</b>: vehículos autorizados y señalizados, escolta según normativa y plan de seguridad del transporte.",
      "<b>Uso</b>: verificación del material, procedimientos estrictos de carga y voladura, control de acceso y distancias de seguridad.",
      "<b>Compatibilidad</b>: grupos de la A a la S. Ejemplo: no mezclar iniciadores (<b>grupo B</b>) con explosivos detonantes (<b>grupo D</b>)."
    ]}
  ]
},

/* ============ MF0272 ============ */
{
  id: "t14", mod: "mf0272", n: 1, t: "Primeros auxilios: conceptos y soporte vital básico",
  c: [
    { h: "Conceptos y objetivos", l: [
      "<b>Primeros auxilios</b>: atención inmediata y temporal a una persona accidentada o con enfermedad súbita antes de la llegada de profesionales.",
      "Objetivos: <b>conservar la vida</b>, <b>evitar el agravamiento</b> y <b>favorecer la recuperación</b>."
    ]},
    { h: "Conducta PAS", l: [
      "<b>Proteger</b>: asegurar el lugar del accidente.",
      "<b>Avisar</b>: llamar al <b>112</b> o a los servicios de emergencia.",
      "<b>Socorrer</b>: actuar según conocimientos hasta que llegue la ayuda."
    ]},
    { h: "Valoración inicial", l: [
      "<b>Conciencia</b>: ¿responde a estímulos?",
      "<b>Respiración</b>: ¿respira con normalidad?",
      "<b>Pulso</b>: comprobar si hay circulación.",
      "Inconsciente y <b>no respira</b>: <b>RCP</b>.",
      "Inconsciente y <b>sí respira</b>: <b>posición lateral de seguridad (PLS)</b>."
    ]},
    { h: "RCP básica en adultos", l: [
      "<b>30 compresiones</b> torácicas de <b>5-6 cm</b> de profundidad.",
      "<b>2 insuflaciones</b>.",
      "Ritmo <b>30:2</b>.",
      "Frecuencia de <b>100-120 compresiones por minuto</b>."
    ]},
    { h: "Obstrucción de la vía aérea", l: [
      "<b>Leve</b>: animar a toser.",
      "<b>Grave</b> (no puede hablar ni respirar): <b>maniobra de Heimlich</b>.",
      "<b>Lactantes</b>: <b>5 golpes interescapulares</b> más <b>5 compresiones torácicas</b>."
    ]},
    { h: "Hemorragias, quemaduras y shock", l: [
      "Hemorragias: externa, interna y exteriorizada. Actuación: <b>presión directa</b>, elevación del miembro y vendaje compresivo.",
      "Quemaduras: <b>1º grado</b> superficial, <b>2º grado</b> con ampollas, <b>3º grado</b> afecta tejidos profundos. Enfriar con agua tibia <b>10-15 minutos</b>, <b>no romper ampollas</b> y cubrir con paño limpio.",
      "Shock: piel pálida, sudor frío, pulso débil y confusión. Tumbar, <b>elevar las piernas</b>, abrigar y <b>no dar de comer ni beber</b>."
    ]},
    { h: "Emergencias frecuentes y aspectos legales", l: [
      "<b>Epilepsia</b>: proteger de golpes, <b>no introducir objetos en la boca</b>.",
      "<b>Infarto</b>: dolor torácico irradiado; sentar, mantener la calma y avisar.",
      "<b>Hipoglucemia</b>: administrar azúcar si está consciente.",
      "<b>Ictus</b>: parálisis facial, dificultad para hablar y pérdida de fuerza; avisar al 112.",
      "Botiquín básico: guantes, gasas estériles, vendas, esparadrapo, tijeras, termómetro, suero fisiológico, antiséptico, mantas térmicas y apósitos.",
      "Legal: actuar <b>de buena fe</b>, dentro de los propios conocimientos, <b>sin abandonar a la víctima</b> y respetando su intimidad y dignidad."
    ]}
  ]
},
{
  id: "t15", mod: "mf0272", n: 2, t: "Atención sanitaria en lesiones: valoración ABCDE",
  c: [
    { h: "Protocolo ABCDE", l: [
      "<b>A</b> (Airway): vía aérea con <b>control cervical</b>; collarín si hay sospecha de trauma.",
      "<b>B</b> (Breathing): respiración y ventilación; frecuencia, profundidad y uso de musculatura accesoria; oxigenoterapia si procede.",
      "<b>C</b> (Circulation): circulación y <b>control de hemorragias</b>; pulso, presión arterial y relleno capilar.",
      "<b>D</b> (Disability): estado neurológico mediante la <b>Escala de Glasgow</b>.",
      "<b>E</b> (Exposure): exposición completa para detectar otras lesiones y <b>prevenir la hipotermia</b>."
    ]},
    { h: "Tipos de lesiones", l: [
      "<b>Heridas abiertas</b>: incisas, punzantes, contusas, laceradas y abrasiones.",
      "<b>Contusiones y hematomas</b>: traumatismos cerrados con daño tisular.",
      "<b>Fracturas</b>: cerradas o abiertas. Signos: dolor, deformidad, edema e impotencia funcional.",
      "<b>Luxaciones y esguinces</b>: separación o distensión articular.",
      "<b>Lesiones musculares</b>: contractura, distensión y rotura fibrilar.",
      "<b>Lesiones medulares</b>: riesgo de parálisis; inmovilizar.",
      "<b>Lesiones torácicas y abdominales</b>: posible compromiso vital oculto."
    ]},
    { h: "Traumatismo craneoencefálico (Glasgow)", l: [
      "<b>Leve</b>: Glasgow <b>14-15</b>.",
      "<b>Moderado</b>: Glasgow <b>9-13</b>.",
      "<b>Grave</b>: Glasgow <b>8 o menos</b>."
    ]},
    { h: "Quemaduras y congelaciones", l: [
      "<b>Grado 1</b>: epidérmica. <b>Grado 2</b>: dérmica parcial. <b>Grado 3</b>: afecta todos los tejidos.",
      "Zonas críticas: <b>cara, cuello, genitales, manos y pies</b>.",
      "Superficie afectada: se valora con la <b>regla de los 9</b>.",
      "Congelaciones: palidez, ampollas y necrosis."
    ]},
    { h: "Actuaciones generales", l: [
      "Control inmediato de hemorragias: presión directa y <b>torniquete si es necesario</b>.",
      "Evaluación del nivel de consciencia y valoración constante de signos vitales.",
      "Inmovilización del área afectada.",
      "Prevención del shock: <b>posición de Trendelenburg si no hay trauma craneal</b>.",
      "Claves: <b>evaluar antes de actuar</b>, proteger siempre la columna vertebral, controlar sangrados antes de movilizar, no infravalorar lesiones internas y registrar y comunicar todo lo recogido."
    ]}
  ]
},
{
  id: "t16", mod: "mf0272", n: 3, t: "Inmovilización, movilización y transporte sanitario",
  c: [
    { h: "Materiales de inmovilización", l: [
      "<b>Collarín cervical</b>.",
      "<b>Férulas</b>.",
      "<b>Camilla cuchara</b>.",
      "<b>Tablero espinal</b>.",
      "<b>Colchón de vacío</b>."
    ]},
    { h: "Técnica y precauciones", l: [
      "Técnica <b>PAS</b>: Proteger al paciente y al entorno, Avisar al 112 y Socorrer según prioridad.",
      "<b>Evitar manipulaciones innecesarias</b>.",
      "No mover al paciente sin inmovilizar primero.",
      "Priorizar la vida antes que la lesión."
    ]},
    { h: "Transporte sanitario", l: [
      "<b>Urgente</b>: riesgo vital inmediato, traslado inmediato con soporte.",
      "<b>Diferido</b>: paciente estabilizado que requiere atención sin urgencia extrema.",
      "Criterios: <b>estabilidad hemodinámica</b>, tipo de lesión y distancia al centro médico.",
      "Cuidados durante el traslado: monitorización, oxigenoterapia y control del dolor.",
      "Usar lenguaje claro, registrar todo lo actuado y cooperar con los demás profesionales."
    ]}
  ]
}
];

/* ---------------------------------------------------------
   FICHAS
   --------------------------------------------------------- */
const FICHAS = [
{ t:"t01", q:"¿Cuáles son las tres funciones principales de una central de alarmas?", a:"<b>Recibir</b> las señales de las instalaciones conectadas, <b>verificar</b> su veracidad y <b>activar los protocolos</b> de respuesta, incluida la comunicación con las FCS y los usuarios autorizados." },
{ t:"t01", q:"Métodos de verificación de una alarma", a:"<ul><li><b>Secuencial</b>: análisis de varias señales distintas</li><li><b>Por audio o vídeo</b>: escucha o visualización remota</li><li><b>Llamada telefónica</b> al cliente</li></ul>El objetivo es evitar falsas alarmas." },
{ t:"t01", q:"Obligaciones legales de una central de alarmas", a:"Estar <b>autorizada por el Ministerio del Interior</b>, instalaciones con medidas físicas y electrónicas, <b>grabaciones de audio y vídeo</b> durante la gestión, plantilla suficiente y cualificada y <b>verificación efectiva</b> antes de avisar a las autoridades." },
{ t:"t02", q:"Medios pasivos frente a medios activos", a:"<b>Pasivos</b>: no requieren energía ni intervención humana; retardan, disuaden o impiden (muros, rejas, puertas blindadas).<br><b>Activos</b>: requieren energía o intervención; detectan, alertan y actúan (sensores, sirenas, CCTV)." },
{ t:"t02", q:"Las cinco funciones de los medios de protección", a:"<b>Disuasivos</b> (carteles, iluminación) · <b>Retardadores</b> (cerraduras, rejas) · <b>Detectores</b> (sensores) · <b>Alarmas</b> (sirenas) · <b>Actuadores</b> (niebla de seguridad, bloqueo de puertas)." },
{ t:"t03", q:"Fases del control de accesos", a:"<b>Identificación</b> (visual, documental o electrónica), <b>verificación de la autorización</b>, <b>registro</b> de entrada y salida y <b>control de objetos</b> o pertenencias." },
{ t:"t03", q:"Zonificación por niveles de seguridad", a:"<b>Zona pública</b>: sin restricciones.<br><b>Zona restringida</b>: acceso limitado a personal autorizado.<br><b>Zona crítica</b>: acceso muy limitado y vigilancia reforzada; requiere <b>doble autenticación</b>." },
{ t:"t04", q:"¿Qué armas puede portar un vigilante de seguridad?", a:"<b>Armas cortas: pistolas semiautomáticas del calibre 9 mm parabellum</b>. En casos especiales y con autorización expresa, <b>escopetas de repetición</b>. Solo en servicios autorizados por el Ministerio del Interior." },
{ t:"t04", q:"Las cuatro reglas de manipulación segura del arma", a:"<ol><li>Tratarla siempre como si estuviera <b>cargada</b></li><li><b>No apuntar</b> a nadie salvo necesidad estricta</li><li><b>Dedo fuera del gatillo</b> hasta decidir disparar</li><li><b>Comprobar el estado</b> antes y después del servicio</li></ol>" },
{ t:"t04", q:"¿Cada cuánto son obligatorias las prácticas de tiro?", a:"<b>Mínimo una vez al semestre</b>, en galerías homologadas. Es obligatorio acudir cuando cita la empresa o el centro de formación." },
{ t:"t04", q:"¿Cuándo se justifica el uso del arma?", a:"En <b>legítima defensa o estado de necesidad</b>, ante una agresión <b>real, actual e inminente</b>, y siempre con <b>proporcionalidad, congruencia y oportunidad</b>." },
{ t:"t04", q:"¿Dónde se custodia el arma?", a:"En <b>armeros homologados</b>, en la sede de la empresa o el puesto de servicio. Está <b>prohibido llevarse el arma fuera del servicio</b>." },
{ t:"t05", q:"Condiciones físicas básicas frente a complementarias", a:"<b>Básicas</b>: resistencia, fuerza, velocidad y flexibilidad.<br><b>Complementarias</b>: coordinación, equilibrio, agilidad y reacción." },
{ t:"t05", q:"Las tres fases del entrenamiento", a:"<b>Calentamiento</b> (prepara el cuerpo), <b>fase principal</b> (se entrena la cualidad deseada) y <b>vuelta a la calma</b> (baja la intensidad de forma gradual). Frecuencia de <b>3 a 5 días por semana</b>." },
{ t:"t06", q:"Los cuatro equipos de emergencia", a:"<b>EPI</b>: primera intervención.<br><b>ESI</b>: segunda intervención, como bomberos internos.<br><b>EPA</b>: primeros auxilios.<br><b>EAE</b>: alarma y evacuación." },
{ t:"t06", q:"PEI frente a PEE", a:"<b>PEI</b>, Plan de Emergencia <b>Interior</b>: medidas internas de la empresa.<br><b>PEE</b>, Plan de Emergencia <b>Exterior</b>: coordinación entre varias empresas y organismos públicos." },
{ t:"t06", q:"RED AZUL y COOPERA", a:"<b>RED AZUL</b>: proyecto del <b>Cuerpo Nacional de Policía</b> de colaboración recíproca con la seguridad privada.<br><b>COOPERA</b>: programa de la <b>Guardia Civil</b> para intercambio de información operativa." },
{ t:"t06", q:"Ante una explosión, ¿a qué distancia hay que alejarse?", a:"<b>Más de 300 metros</b>, o protegerse detrás de objetos sólidos. Nunca manipular objetos sospechosos: avisar a Guardia Civil o Policía." },
{ t:"t06", q:"Las tres capas de la teoría esférica de la seguridad", a:"<b>Inmediata</b>: contacto directo (puertas blindadas, escoltas).<br><b>Próxima</b>: vigilancia cercana (CCTV, vigilantes estáticos).<br><b>Lejana</b>: perímetro externo, control de accesos, vigilancia a distancia." },
{ t:"t06", q:"Zona frente a área", a:"<b>Zona</b>: conjunto general del entorno a proteger; puede ser <b>controlada</b> o <b>restringida</b>.<br><b>Área</b>: las partes internas más críticas; crítica, de exclusión, de influencia y protegida." },
{ t:"t06", q:"¿Qué ley regula la Prevención de Riesgos Laborales?", a:"La <b>Ley 31/1995</b>. Obligación del empresario de integrar la PRL en todos los niveles y <b>no repercutir el coste al trabajador</b>." },
{ t:"t07", q:"Los cuatro principios de la protección física", a:"<b>Defensa en profundidad</b> (capas sucesivas), <b>zonificación</b> (áreas por nivel), <b>redundancia</b> (duplicidad de medios críticos) y <b>tiempo de reacción</b> (retardar hasta la intervención)." },
{ t:"t07", q:"Etapas del análisis de riesgos", a:"<ol><li>Identificación de <b>activos</b> a proteger</li><li>Evaluación de <b>amenazas y vulnerabilidades</b></li><li>Análisis de <b>impacto</b></li><li>Propuesta de <b>medidas de mitigación</b></li></ol>" },
{ t:"t07", q:"Tipos de barreras físicas", a:"<b>Perimetrales</b>: vallas, muros, cercas electrificadas, zanjas.<br><b>Estructurales</b>: puertas, portones, cristales de seguridad.<br><b>Interiores</b>: puertas de seguridad, torniquetes, esclusas." },
{ t:"t08", q:"Las tres técnicas de protección de personas", a:"<b>Integral</b> (esfera profesional y personal), <b>dinámica</b> (desplazamientos) y <b>estática</b> (lugar fijo)." },
{ t:"t08", q:"Congruencia frente a proporcionalidad", a:"<b>Congruencia</b>: medidas proporcionadas y adecuadas <b>a los riesgos</b>.<br><b>Proporcionalidad</b>: en el uso de las <b>técnicas y medios</b> de defensa e investigación." },
{ t:"t08", q:"Los tres círculos concéntricos", a:"<b>1º</b> escolta personal: cubrir, proteger y evacuar.<br><b>2º</b> puestos de seguridad: protegido dentro de su campo de observación.<br><b>3º</b> patrullas móviles y grupos de información: no vigilan al protegido." },
{ t:"t08", q:"Plazos de la habilitación (art. 28)", a:"<b>18 años</b> de edad mínima · <b>2 años</b> sin sanción grave · <b>4 años</b> sin sanción muy grave · <b>2 años</b> desde la separación del servicio en FCS o FFAA · <b>5 años</b> sin condena por intromisión ilegítima." },
{ t:"t08", q:"Secuencia ante una agresión", a:"<b>1.</b> Avisar (tipo de agresión, agresor y dirección) · <b>2.</b> Cobertura (reducir superficie de blanco y silueta) · <b>3.</b> Evacuación al lugar seguro preestablecido · <b>4.</b> Neutralizar, yendo <b>al arma</b> y no al cuerpo." },
{ t:"t09", q:"Retardo máximo del sistema de bloqueo del vehículo", a:"<b>2 minutos como máximo</b> entre activación y acción. Corta la inyección de combustible y acciona alarma acústica y luminosa." },
{ t:"t09", q:"Conducción ofensiva frente a defensiva", a:"<b>Ofensiva</b>: aprovecha peso, potencia y velocidad para afrontar el ataque de forma activa, llegando a <b>colisionar</b>.<br><b>Defensiva</b>: <b>evita colisionar</b>, variando la trayectoria con un giro de <b>180 grados</b>." },
{ t:"t09", q:"Posición de los coches de escolta", a:"<b>1 escolta</b>: detrás del VIP.<br><b>2 escoltas</b>: uno delante y otro detrás.<br><b>3 escoltas</b>: uno delante y dos detrás." },
{ t:"t09", q:"Los cuatro tipos de itinerario", a:"<b>Principal</b> · <b>Alternativo</b> · <b>De evacuación</b> (centro de urgencia o asistencial) · <b>De fuga</b> (puntos seguros elegidos de antemano). Se revisan <b>cada 5 meses</b>." },
{ t:"t10", q:"¿Qué condición jurídica tiene el vigilante de explosivos?", a:"<b>Agente de la autoridad</b> según la Ley 5/2014, con mayor protección penal. La <b>STS 4778/2013</b> le reconoce también condición de <b>funcionario público</b> a efectos de responsabilidad penal." },
{ t:"t10", q:"Dos límites de las funciones del vigilante (art. 32)", a:"Puede hacer controles de acceso <b>sin retener documentación</b> y puede detener infractores para entregarlos a la autoridad, pero <b>sin realizar interrogatorios</b>." },
{ t:"t10", q:"¿Qué regula el RD 130/2017 y el RD 989/2015?", a:"<b>RD 130/2017</b>: Reglamento de <b>Explosivos</b>.<br><b>RD 989/2015</b>: artículos <b>pirotécnicos y cartuchería</b> (sustituye al RD 563/2010)." },
{ t:"t10", q:"ITC nº 12 y la revisión del plan", a:"Prevención de accidentes graves, inspirada en la <b>Directiva 2012/18/UE (Seveso III)</b>. Obliga a Plan de Emergencia Interior o de Autoprotección, con <b>revisión cada 3 años como máximo</b>." },
{ t:"t10", q:"Categorías de artículos pirotécnicos por uso", a:"<b>F1</b> muy baja (interiores) · <b>F2</b> baja (exteriores controlados) · <b>F3</b> media (zonas amplias) · <b>F4</b> alta (profesional).<br>Teatro: <b>T1</b> y <b>T2</b>. Otros usos: <b>P1</b> y <b>P2</b>." },
{ t:"t11", q:"¿Cómo se actúa ante un atraco en transporte de fondos?", a:"<b>Sin resistencia</b>, priorizando la <b>integridad física</b>. Ante incidentes técnicos: aviso inmediato a la central y <b>no manipular por cuenta propia</b>." },
{ t:"t11", q:"Normativa de la protección de fondos", a:"<b>Ley 5/2014</b> de Seguridad Privada, <b>RD 2364/1994</b> (Reglamento de Seguridad Privada) y <b>Orden INT/314/2011</b> sobre empresas de seguridad." },
{ t:"t12", q:"Formaciones de protección a pie", a:"En <b>diamante</b> o en <b>triángulo invertido</b>, con el protegido en el centro y escoltas en posición delantera, trasera y laterales. La formación cambia ante multitudes, esquinas o puertas." },
{ t:"t12", q:"Principios del uso de la fuerza en defensa personal", a:"<b>Proporcionalidad, necesidad y oportunidad</b>. Minimizar el daño al agresor y a terceros. Defensa sin ánimo ofensivo: <b>neutralizar, no agredir</b>." },
{ t:"t12", q:"Actuación ante una agresión al protegido", a:"<b>Aislar</b> al protegido del riesgo, <b>neutralizar o disuadir</b> al agresor y <b>evacuar</b> a lugar seguro. Después: plan de contingencia, notificación a autoridades e <b>informe detallado</b>." },
{ t:"t13", q:"Deflagrantes frente a detonantes", a:"<b>Deflagrantes</b>: liberan la energía lentamente (pólvora negra).<br><b>Detonantes</b>: reacción instantánea con onda explosiva <b>supersónica</b> (nitroglicerina)." },
{ t:"t13", q:"Explosivos por sensibilidad", a:"<b>Primarios</b>: muy sensibles, son iniciadores (fulminato de mercurio).<br><b>Secundarios</b>: necesitan iniciación previa (TNT, ANFO).<br><b>Terciarios</b>: insensibles sin iniciador potente." },
{ t:"t13", q:"Divisiones ADR de la Clase 1", a:"<b>1.1</b> explosión en masa (TNT) · <b>1.2</b> proyección · <b>1.3</b> incendio y ligera onda · <b>1.4</b> riesgo menor · <b>1.5</b> muy insensibles (ANFO) · <b>1.6</b> extremadamente insensibles." },
{ t:"t13", q:"¿Qué código ONU corresponde al TNT?", a:"<b>ONU 0081</b>. La Clase 1 se señaliza con etiqueta <b>naranja</b> con símbolo de explosión y paneles naranjas con el número ONU y el tipo de riesgo." },
{ t:"t13", q:"Grupos de compatibilidad", a:"De la <b>A a la S</b>. Ejemplo típico de incompatibilidad: no mezclar <b>iniciadores (grupo B)</b> con <b>explosivos detonantes (grupo D)</b>." },
{ t:"t14", q:"Los tres objetivos de los primeros auxilios", a:"<b>Conservar la vida</b>, <b>evitar el agravamiento</b> y <b>favorecer la recuperación</b>." },
{ t:"t14", q:"Conducta PAS", a:"<b>P</b>roteger el lugar del accidente · <b>A</b>visar al <b>112</b> · <b>S</b>ocorrer según los propios conocimientos hasta que llegue la ayuda." },
{ t:"t14", q:"Parámetros de la RCP en adultos", a:"<b>30 compresiones</b> de <b>5-6 cm</b> de profundidad y <b>2 insuflaciones</b>. Ritmo <b>30:2</b>, a <b>100-120 compresiones por minuto</b>." },
{ t:"t14", q:"Inconsciente: ¿RCP o PLS?", a:"Inconsciente y <b>no respira</b>: <b>RCP</b>.<br>Inconsciente y <b>sí respira</b>: <b>posición lateral de seguridad</b>." },
{ t:"t14", q:"Obstrucción de vía aérea en lactantes", a:"<b>5 golpes interescapulares</b> seguidos de <b>5 compresiones torácicas</b>. En adulto con obstrucción grave: <b>maniobra de Heimlich</b>; si es leve, animar a toser." },
{ t:"t14", q:"Actuación ante quemaduras", a:"Enfriar con <b>agua tibia 10-15 minutos</b>, <b>no romper las ampollas</b> y cubrir con paño limpio. Grados: 1º superficial, 2º con ampollas, 3º afecta tejidos profundos." },
{ t:"t14", q:"Actuación ante shock", a:"Tumbar a la persona, <b>elevar las piernas</b>, abrigar y <b>no dar de comer ni beber</b>. Síntomas: piel pálida, sudor frío, pulso débil y confusión." },
{ t:"t15", q:"El protocolo ABCDE", a:"<b>A</b> vía aérea con control cervical · <b>B</b> respiración y ventilación · <b>C</b> circulación y control de hemorragias · <b>D</b> estado neurológico (Glasgow) · <b>E</b> exposición y control ambiental." },
{ t:"t15", q:"Clasificación del TCE por Glasgow", a:"<b>Leve</b>: 14-15 · <b>Moderado</b>: 9-13 · <b>Grave</b>: 8 o menos." },
{ t:"t15", q:"¿Cómo se calcula la superficie quemada?", a:"Con la <b>regla de los 9</b>. Zonas críticas: <b>cara, cuello, genitales, manos y pies</b>." },
{ t:"t15", q:"¿Cuándo se usa la posición de Trendelenburg?", a:"Para prevenir el shock, <b>siempre que no haya trauma craneal</b>." },
{ t:"t16", q:"Materiales de inmovilización", a:"<b>Collarín cervical</b>, <b>férulas</b>, <b>camilla cuchara</b>, <b>tablero espinal</b> y <b>colchón de vacío</b>." },
{ t:"t16", q:"Transporte urgente frente a diferido", a:"<b>Urgente</b>: riesgo vital inmediato, traslado inmediato con soporte.<br><b>Diferido</b>: paciente estabilizado que requiere atención sin urgencia extrema.<br>Criterios: estabilidad hemodinámica, tipo de lesión y distancia al centro." }
];

/* ---------------------------------------------------------
   PREGUNTAS DE TEST
   c = índices correctos. Más de uno = respuesta múltiple.
   --------------------------------------------------------- */
const PREGUNTAS = [
/* t01 */
{ t:"t01", q:"¿Cuál es la función nuclear de una central de alarmas?", o:["Instalar los sistemas de seguridad en casa del cliente","Recibir, verificar y gestionar las señales de los dispositivos de detección","Sustituir a las Fuerzas y Cuerpos de Seguridad en la intervención"], c:[1], w:"Es el núcleo operativo: recibe, verifica y activa los protocolos de respuesta." },
{ t:"t01", q:"¿Qué señal se activa por el propio usuario ante una emergencia?", o:["Señal de supervisión","Señal de atraco o pánico","Señal de acceso"], c:[1], w:"La de supervisión es información periódica automática; la de acceso procede del control de accesos." },
{ t:"t01", q:"Señala obligaciones legales de una central de alarmas:", o:["Estar autorizada por el Ministerio del Interior","Grabar audio y vídeo durante la gestión de alarmas","Verificar efectivamente las señales antes de avisar a las autoridades"], c:[0,1,2], w:"Las tres, además de contar con instalaciones adecuadas y plantilla suficiente y cualificada." },
{ t:"t01", q:"La verificación secuencial consiste en:", o:["Llamar al cliente dos veces seguidas","Analizar varias señales distintas","Escuchar el audio del lugar protegido"], c:[1], w:"La escucha remota es la verificación por audio o vídeo; la llamada es la verificación telefónica." },
{ t:"t01", q:"¿Qué norma, además de la Ley 5/2014, regula las centrales de alarmas?", o:["RD 2364/1994, Reglamento de Seguridad Privada","RD 137/1993, Reglamento de Armas","RD 130/2017, Reglamento de Explosivos"], c:[0], w:"También la Orden INT/316/2011 y las instrucciones técnicas de la Dirección General de la Policía." },
/* t02 */
{ t:"t02", q:"Los medios de protección pasivos se caracterizan porque:", o:["Detectan y alertan de la intrusión","No requieren energía ni intervención humana y retardan, disuaden o impiden","Permiten responder activamente al riesgo"], c:[1], w:"Muros, vallas, puertas blindadas, rejas y cierres mecánicos." },
{ t:"t02", q:"¿Cuáles son medios activos?", o:["Detectores de movimiento y sensores volumétricos","Sirenas acústicas y pulsadores de pánico","Cristales de seguridad y candados"], c:[0,1], w:"Los cristales de seguridad y los candados son medios pasivos." },
{ t:"t02", q:"Una cerradura o una reja, por su función, es un medio:", o:["Disuasivo","Retardador","Actuador"], c:[1], w:"Frena o retrasa el acceso. Los actuadores permiten responder (niebla de seguridad, bloqueo de puertas)." },
{ t:"t02", q:"La niebla de seguridad y el bloqueo de puertas son medios:", o:["Detectores","Alarmas","Actuadores"], c:[2], w:"Permiten responder al riesgo una vez detectado." },
{ t:"t02", q:"¿Qué certificaciones técnicas deben cumplir estos sistemas?", o:["Certificaciones UNE o EN","Certificación ISO 27001 exclusivamente","Ninguna, basta la Ley 5/2014"], c:[0], w:"Junto con la Ley 5/2014 y la normativa específica de instalación, uso y mantenimiento." },
/* t03 */
{ t:"t03", q:"¿Cuál es el objetivo principal del control de accesos?", o:["Registrar el horario laboral de los empleados","Autorizar, restringir o registrar entradas y salidas en zonas protegidas","Sustituir las barreras físicas perimetrales"], c:[1], w:"Garantiza la seguridad física y operativa de instalaciones sensibles." },
{ t:"t03", q:"Un torniquete o una puerta automática con imanes es un medio:", o:["Mecánico","Electromecánico","Electrónico"], c:[1], w:"Los mecánicos son cerraduras, llaves y candados; los electrónicos, lectores y biometría en red." },
{ t:"t03", q:"¿Qué zona requiere doble autenticación?", o:["Zona pública","Zona restringida","Zona crítica"], c:[2], w:"Es la de acceso más limitado y vigilancia reforzada." },
{ t:"t03", q:"El registro de entradas y salidas sirve para:", o:["Garantizar trazabilidad y permitir auditorías","Sustituir la videovigilancia","Evitar la identificación visual de los visitantes"], c:[0], w:"Puede ser manual, electrónico o integrado con videovigilancia y alarmas." },
{ t:"t03", q:"¿Qué normativa de datos afecta al control de accesos?", o:["RGPD y LOPDGDD","Solo la Ley 5/2014","Reglamento de Armas"], c:[0], w:"Los registros contienen datos personales y quedan sujetos a la normativa de protección de datos." },
/* t04 */
{ t:"t04", q:"¿Qué arma corta está autorizada al vigilante de seguridad?", o:["Revólver del calibre 38 especial","Pistola semiautomática del calibre 9 mm parabellum","Cualquier arma corta de categoría 1ª"], c:[1], w:"En casos especiales y con autorización expresa, también escopetas de repetición." },
{ t:"t04", q:"Señala reglas de manipulación segura del arma:", o:["Tratarla siempre como si estuviera cargada","Mantener el dedo fuera del gatillo hasta decidir disparar","Comprobar su estado antes y después del servicio"], c:[0,1,2], w:"La cuarta es no apuntar a nadie salvo necesidad estricta." },
{ t:"t04", q:"Frecuencia mínima de las prácticas de tiro:", o:["Una vez al mes","Una vez al semestre","Una vez al año"], c:[1], w:"En galerías homologadas, y es obligatorio acudir cuando cita la empresa o el centro de formación." },
{ t:"t04", q:"Sobre la custodia del arma es correcto que:", o:["Puede llevarse a casa si el servicio termina de noche","Se guarda en armeros homologados y está prohibido sacarla del servicio","La custodia corresponde al propio vigilante"], c:[1], w:"Los armeros están en la sede de la empresa o en el puesto de servicio." },
{ t:"t04", q:"El uso del arma solo se justifica ante una agresión:", o:["Real, actual e inminente","Verbal y reiterada","Probable en las próximas horas"], c:[0], w:"Y siempre en legítima defensa o estado de necesidad, con proporcionalidad, congruencia y oportunidad." },
{ t:"t04", q:"¿Qué consecuencias puede tener el mal uso del arma?", o:["Sanciones administrativas y pérdida de la habilitación","Responsabilidad penal y civil","Únicamente una amonestación interna de la empresa"], c:[0,1], w:"Además del daño a la imagen del sector y el riesgo para la seguridad colectiva." },
/* t05 */
{ t:"t05", q:"¿Cuáles son condiciones físicas básicas?", o:["Resistencia y fuerza","Velocidad y flexibilidad","Coordinación y equilibrio"], c:[0,1], w:"Coordinación, equilibrio, agilidad y reacción son condiciones complementarias." },
{ t:"t05", q:"La capacidad de mover una articulación en todo su rango es:", o:["Agilidad","Flexibilidad","Coordinación"], c:[1], w:"La agilidad es el cambio rápido de posición o dirección." },
{ t:"t05", q:"Frecuencia semanal recomendada de entrenamiento:", o:["1-2 días","3-5 días","6-7 días"], c:[1], w:"Con duración e intensidad adecuadas y revisión médica si es necesario." },
{ t:"t05", q:"¿Cuántas horas de sueño diarias se recomiendan?", o:["5-6 horas","7-8 horas","9-10 horas"], c:[1], w:"Además de respetar los tiempos de descanso entre sesiones para evitar el sobreentrenamiento." },
{ t:"t05", q:"La fase que baja gradualmente la intensidad al terminar es:", o:["El calentamiento","La fase principal","La vuelta a la calma"], c:[2], w:"Permite la recuperación tras el esfuerzo." },
/* t06 */
{ t:"t06", q:"¿Qué equipo actúa como bomberos internos de la empresa?", o:["EPI","ESI","EAE"], c:[1], w:"EPI es primera intervención, EPA primeros auxilios y EAE alarma y evacuación." },
{ t:"t06", q:"El equipo encargado de dirigir y verificar la evacuación es:", o:["EPA","EAE","ESI"], c:[1], w:"Equipo de Alarma y Evacuación." },
{ t:"t06", q:"El PEE es el plan de emergencia:", o:["Interior, de medidas internas de la empresa","Exterior, de coordinación entre empresas y organismos públicos","Específico de evacuación de un edificio"], c:[1], w:"El PEI es el Plan de Emergencia Interior." },
{ t:"t06", q:"Ante una explosión hay que alejarse:", o:["Más de 100 metros","Más de 300 metros","Más de 1000 metros"], c:[1], w:"O protegerse detrás de objetos sólidos." },
{ t:"t06", q:"RED AZUL es un proyecto de:", o:["El Cuerpo Nacional de Policía","La Guardia Civil","El Ministerio de Defensa"], c:[0], w:"COOPERA es el programa equivalente de la Guardia Civil." },
{ t:"t06", q:"¿Qué siglas designan los agentes nucleares, radiológicos, biológicos o químicos?", o:["NRBQ","NBQR","QBRN"], c:[0], w:"Ante ellos: cerrar puertas y ventanas, cubrirse, no tocar objetos contaminados y esperar instrucciones oficiales." },
{ t:"t06", q:"En la teoría esférica de la seguridad, los escoltas y las puertas blindadas están en la capa:", o:["Inmediata","Próxima","Lejana"], c:[0], w:"La próxima es vigilancia cercana (CCTV, vigilantes estáticos) y la lejana el perímetro externo." },
{ t:"t06", q:"El área crítica y el área de exclusión son subdivisiones de:", o:["La zona","El área","El perímetro"], c:[1], w:"La zona es el conjunto general del entorno: controlada o restringida. El área son las partes internas más críticas." },
{ t:"t06", q:"¿Qué ley regula la Prevención de Riesgos Laborales?", o:["Ley 31/1995","Ley 5/2014","Ley Orgánica 2/1986"], c:[0], w:"La Ley 5/2014 es de Seguridad Privada y la LO 2/1986 de Fuerzas y Cuerpos de Seguridad." },
{ t:"t06", q:"Sobre el coste de las medidas de PRL:", o:["Se reparte entre empresa y trabajador","No puede repercutirse en modo alguno sobre el trabajador","Lo asume la mutua en su totalidad"], c:[1], w:"Es una obligación del empresario, junto con integrar la PRL en todos los niveles de la empresa." },
/* t07 */
{ t:"t07", q:"La protección de datos y sistemas corresponde a la seguridad:", o:["Física","Lógica o informática","Procedimental"], c:[1], w:"La procedimental son medidas administrativas, protocolos y normativas." },
{ t:"t07", q:"El principio de duplicar los medios críticos se denomina:", o:["Defensa en profundidad","Redundancia","Zonificación"], c:[1], w:"La defensa en profundidad son capas sucesivas; la zonificación, áreas con distinto nivel." },
{ t:"t07", q:"El objetivo del principio de tiempo de reacción es:", o:["Detectar la intrusión lo antes posible","Retardar el acceso no autorizado hasta la intervención de las fuerzas de seguridad","Reducir el número de vigilantes necesarios"], c:[1], w:"Por eso las barreras se diseñan para retrasar, no solo para impedir." },
{ t:"t07", q:"Primera etapa del análisis de riesgos:", o:["Análisis de impacto","Identificación de los activos a proteger","Propuesta de medidas de mitigación"], c:[1], w:"Después: evaluación de amenazas y vulnerabilidades, análisis de impacto y propuesta de medidas." },
{ t:"t07", q:"Las cercas electrificadas y las zanjas son barreras:", o:["Perimetrales","Estructurales","Interiores"], c:[0], w:"Las estructurales son puertas y cristales de seguridad; las interiores, torniquetes y esclusas." },
/* t08 */
{ t:"t08", q:"La seguridad privada respecto de la pública es:", o:["Independiente","Complementaria y subordinada","Sustitutiva"], c:[1], w:"Así lo establece el artículo 1 de la Ley 5/2014." },
{ t:"t08", q:"¿Qué principio implica aplicar medidas proporcionadas a los riesgos?", o:["Proporcionalidad","Congruencia","Corrección"], c:[1], w:"La proporcionalidad se refiere al uso de las técnicas y medios de defensa e investigación." },
{ t:"t08", q:"¿Quién habilita a los guardas rurales?", o:["La Dirección General de la Policía","La Dirección General de la Guardia Civil","El órgano autonómico competente"], c:[1], w:"El resto del personal de seguridad privada lo habilita la Dirección General de la Policía." },
{ t:"t08", q:"Plazo sin haber sido sancionado por infracción muy grave:", o:["2 años","4 años","5 años"], c:[1], w:"2 años para la grave y 5 años sin condena por intromisión ilegítima." },
{ t:"t08", q:"La teoría esférica de la protección actúa en los planos:", o:["Aéreo, superficial y subterráneo","Interior, intermedio y exterior","Frontal, lateral y posterior"], c:[0], w:"El centro de la esfera es la persona protegida." },
{ t:"t08", q:"En el tercer círculo concéntrico se sitúan:", o:["El escolta personal","Los puestos de seguridad","Las patrullas móviles y grupos de información"], c:[2], w:"No controlan ni vigilan al protegido, pero están dentro del dispositivo por si ocurre una desgracia." },
{ t:"t08", q:"El objetivo de la cobertura corporal es:", o:["Trasladar al protegido a un lugar seguro","Disminuir la superficie de blanco y la silueta del protegido","Neutralizar al agresor"], c:[1], w:"El traslado es la evacuación; la neutralización llega después, y solo con el protegido a salvo." },
{ t:"t08", q:"Al neutralizar al agresor hay que ir:", o:["Hacia su cuerpo","Hacia su arma, colocándose delante del agresor","Hacia su vehículo de huida"], c:[1], w:"Así se corta la línea directa con el protegido." },
{ t:"t08", q:"Un cuarto seguro debe reunir:", o:["Acceso rápido y fácil y buenas comunicaciones","Capacidad de defensa y estar limitado","Amplitud y acceso libre al público"], c:[0,1], w:"También facilidad para prestar los primeros auxilios." },
/* t09 */
{ t:"t09", q:"¿Por qué debe llevar aire acondicionado el vehículo de seguridad?", o:["Por comodidad del protegido","Para permitir el cierre total ante un ataque con gas","Para refrigerar el blindaje"], c:[1], w:"Es un requisito de seguridad, no de confort." },
{ t:"t09", q:"Aspectos exigidos al vehículo de seguridad:", o:["Sistema de bloqueo que corta la inyección de combustible","Rejilla metálica en el interior del tubo del depósito","Televisiones en todos los asientos"], c:[0,1], w:"También sistema de protección del depósito y cierre especial de la caja con candado o cerradura de seguridad." },
{ t:"t09", q:"La conducción que evita colisionar variando la trayectoria con un giro de 180 grados es:", o:["Ofensiva","Defensiva","Agresiva"], c:[1], w:"La ofensiva aprovecha peso, potencia y velocidad y llega a colisionar." },
{ t:"t09", q:"¿Qué maniobra emplea el freno de mano para derrapar?", o:["Maniobra en Y","Maniobra California","Giro en J"], c:[1], w:"Se gira el volante hacia la izquierda ayudándose del freno de mano." },
{ t:"t09", q:"Con dos coches de escolta, la disposición es:", o:["Ambos delante del VIP","Uno delante y otro detrás del VIP","Ambos detrás del VIP"], c:[1], w:"Con uno va detrás; con tres, uno delante y dos detrás." },
{ t:"t09", q:"¿Dónde viaja el jefe de seguridad de la cápsula?", o:["Detrás, junto al protegido","Delante, al lado del conductor","En el coche escolta"], c:[1], w:"Detrás van el protegido y sus acompañantes." },
{ t:"t09", q:"El itinerario que lleva a puntos seguros elegidos de antemano es el:", o:["De evacuación","De fuga","Alternativo"], c:[1], w:"El de evacuación lleva a un centro de urgencia o asistencial previamente programado." },
{ t:"t09", q:"¿Cada cuánto se revisan los itinerarios?", o:["Cada 5 semanas","Cada 5 meses","Cada año"], c:[1], w:"El estudio lo realizan los escoltas con anterioridad a la salida." },
/* t10 */
{ t:"t10", q:"El vigilante de explosivos tiene la condición de:", o:["Agente de la autoridad","Funcionario de carrera","Autoridad pública plena"], c:[0], w:"La STS 4778/2013 le reconoce además la condición de funcionario público a efectos de responsabilidad penal." },
{ t:"t10", q:"En los controles de acceso, el vigilante:", o:["Puede retener la documentación mientras dure la visita","No puede retener la documentación","Debe fotocopiar siempre el documento"], c:[1], w:"Igualmente, puede detener infractores pero sin realizar interrogatorios." },
{ t:"t10", q:"El Reglamento de Explosivos es el:", o:["RD 130/2017","RD 989/2015","RD 137/1993"], c:[0], w:"El RD 989/2015 regula pirotecnia y cartuchería; el RD 137/1993 es el Reglamento de Armas." },
{ t:"t10", q:"La ITC nº 1 exige que toda fábrica, taller o depósito tenga:", o:["Un seguro de responsabilidad civil","Un plan de seguridad elaborado por empresa de seguridad autorizada","Una licencia municipal de actividad"], c:[1], w:"Cubre seguridad humana (vigilantes, turnos, puestos) y física (cercados, puertas, conexión con Guardia Civil)." },
{ t:"t10", q:"La ITC nº 12 se inspira en:", o:["La Directiva 2012/18/UE, Seveso III","El Acuerdo ADR","El RGPD"], c:[0], w:"Obliga al Plan de Emergencia Interior o de Autoprotección, con revisión cada 3 años como máximo." },
{ t:"t10", q:"Periodicidad máxima de revisión del plan de la ITC nº 12:", o:["1 año","3 años","5 años"], c:[1], w:"Con participación de trabajadores y subcontratas y coordinación entre empresas conforme al RD 171/2004." },
{ t:"t10", q:"La ITC nº 22 clasifica los explosivos por:", o:["Grupos de compatibilidad de la A a la S","Divisiones 1.1 a 1.6","Categorías F, T y P"], c:[0], w:"Las divisiones 1.1 a 1.6 son de la clasificación ADR; F, T y P son categorías pirotécnicas." },
{ t:"t10", q:"El transporte de explosivos requiere:", o:["Plan de Seguridad previo con aviso a la Guardia Civil","Dotación mínima de vigilantes por vehículo, vagón o embarcación","Registro de incidencias en la guía de circulación"], c:[0,1,2], w:"Puede añadirse escolta armada de la Guardia Civil y son obligatorios los enlaces de comunicación." },
{ t:"t10", q:"La categoría pirotécnica de alta peligrosidad y uso profesional es:", o:["F2","F3","F4"], c:[2], w:"F1 muy baja en interiores, F2 baja en exteriores controlados y F3 media en zonas amplias." },
{ t:"t10", q:"Queda excluida del RD 989/2015 la cartuchería de juguetes con menos de:", o:["0,3 g de pólvora","1 g de pólvora","3 g de pólvora"], c:[0], w:"También el uso no comercial por Fuerzas Armadas o de Seguridad y los artificios de uso propio sin comercialización." },
/* t11 */
{ t:"t11", q:"Ante un atraco durante el transporte de fondos, el personal debe:", o:["Repeler la agresión con el arma reglamentaria","Actuar sin resistencia, priorizando la integridad física","Perseguir a los asaltantes hasta la llegada de la policía"], c:[1], w:"Ante incidentes técnicos: aviso inmediato a la central y no manipular por cuenta propia." },
{ t:"t11", q:"¿Qué orden ministerial regula las empresas de seguridad en esta materia?", o:["Orden INT/314/2011","Orden INT/316/2011","Orden INT/318/2011"], c:[0], w:"La INT/316/2011 se cita respecto de las centrales de alarmas." },
{ t:"t11", q:"Los vehículos blindados de transporte de fondos deben tener:", o:["Compartimentos separados","Localizadores GPS y sistemas de cierre y seguridad","Cristales tintados opacos obligatorios"], c:[0,1], w:"Junto con contenedores y maletines de seguridad antirrobo e ignífugos para el transporte manual." },
{ t:"t11", q:"La planificación de rutas exige:", o:["Repetir siempre la ruta más corta","Variación de rutas y horarios","Publicar el itinerario para coordinar con el cliente"], c:[1], w:"Además de evaluar riesgos en los puntos de recogida y entrega y coordinar con las FCS si procede." },
{ t:"t11", q:"Las instalaciones de custodia deben contar con:", o:["Cámaras acorazadas certificadas","Vigilancia 24/7 y alarmas conectadas con la central","Control de accesos biométrico o con tarjetas"], c:[0,1,2], w:"Las tres son exigencias del tema." },
/* t12 */
{ t:"t12", q:"Las formaciones de protección a pie son:", o:["En columna o en línea","En diamante o triángulo invertido","En cuña o en aspa"], c:[1], w:"El protegido va en el centro y los escoltas en posiciones delantera, trasera y laterales." },
{ t:"t12", q:"Los principios del uso de la fuerza en defensa personal son:", o:["Proporcionalidad, necesidad y oportunidad","Rapidez, contundencia y sorpresa","Disuasión, ataque y retirada"], c:[0], w:"Defensa sin ánimo ofensivo: neutralizar, no agredir, minimizando el daño al agresor y a terceros." },
{ t:"t12", q:"Orden correcto de intervención ante una agresión al protegido:", o:["Neutralizar, aislar y evacuar","Aislar del riesgo, neutralizar o disuadir y evacuar a lugar seguro","Evacuar, informar y neutralizar"], c:[1], w:"Tras el incidente: plan de contingencia, notificación a las autoridades e informe detallado." },
{ t:"t12", q:"Señala equipamiento propio del escolta según el tema:", o:["Chaleco antibalas y guantes anticorte","Linterna táctica, emisora y grilletes","Botiquín de primeros auxilios"], c:[0,1,2], w:"El arma corta reglamentaria se usa exclusivamente ante amenaza real." },
{ t:"t12", q:"En la psicología de la protección es clave:", o:["Empatizar con el protegido sin perder objetividad","Implicarse emocionalmente para anticipar sus decisiones","Delegar la gestión del estrés en el jefe de equipo"], c:[0], w:"Junto con la gestión del estrés, el autocontrol y la detección de señales de alerta en el agresor." },
/* t13 */
{ t:"t13", q:"Un explosivo que libera la energía lentamente es:", o:["Deflagrante","Detonante","Terciario"], c:[0], w:"La pólvora negra es deflagrante; la nitroglicerina, detonante, con onda supersónica." },
{ t:"t13", q:"El fulminato de mercurio es un explosivo:", o:["Primario","Secundario","Terciario"], c:[0], w:"Los primarios son muy sensibles y actúan como iniciadores. TNT y ANFO son secundarios." },
{ t:"t13", q:"¿Qué división ADR corresponde al riesgo de explosión en masa?", o:["1.1","1.3","1.5"], c:[0], w:"La 1.5 son explosivos muy insensibles como el ANFO; la 1.6, objetos extremadamente insensibles." },
{ t:"t13", q:"El ANFO se encuadra en la división ADR:", o:["1.1","1.4","1.5"], c:[2], w:"Explosivos muy insensibles. Como explosivo, es de tipo secundario." },
{ t:"t13", q:"El código ONU 0081 identifica:", o:["El ANFO","El TNT","La nitroglicerina"], c:[1], w:"La Clase 1 se señaliza con etiqueta naranja con símbolo de explosión." },
{ t:"t13", q:"Según su estado físico, la nitroglicerina es un explosivo:", o:["Sólido","Líquido","Gaseoso"], c:[1], w:"Sólidos: TNT y dinamita. Gaseosos: mezcla oxígeno-acetileno." },
{ t:"t13", q:"Ejemplo típico de incompatibilidad en almacenamiento:", o:["No mezclar iniciadores del grupo B con detonantes del grupo D","No mezclar la clase 1.1 con la 1.2","No mezclar categorías F1 y F4"], c:[0], w:"Los grupos de compatibilidad van de la A a la S." },
{ t:"t13", q:"Medidas generales en el manejo de explosivos:", o:["Formación específica del personal","EPIs, incluido calzado antiestático","Eliminación de fuentes de ignición, incluida la electricidad estática"], c:[0,1,2], w:"En almacenamiento: recintos ventilados, secos y aislados, con separación por compatibilidad." },
/* t14 */
{ t:"t14", q:"Los objetivos de los primeros auxilios son:", o:["Conservar la vida","Evitar el agravamiento","Diagnosticar la patología de base"], c:[0,1], w:"El tercero es favorecer la recuperación. El diagnóstico corresponde al personal sanitario." },
{ t:"t14", q:"La conducta PAS significa:", o:["Prevenir, Auxiliar, Sanar","Proteger, Avisar, Socorrer","Preparar, Actuar, Supervisar"], c:[1], w:"Proteger el lugar, avisar al 112 y socorrer según los propios conocimientos." },
{ t:"t14", q:"Persona inconsciente que respira con normalidad:", o:["Iniciar RCP","Colocar en posición lateral de seguridad","Elevar las piernas y abrigar"], c:[1], w:"La RCP se inicia si está inconsciente y no respira." },
{ t:"t14", q:"Relación de compresiones y ventilaciones en la RCP del adulto:", o:["15:2","30:2","5:1"], c:[1], w:"30 compresiones de 5-6 cm y 2 insuflaciones." },
{ t:"t14", q:"Frecuencia de las compresiones torácicas:", o:["60-80 por minuto","100-120 por minuto","140-160 por minuto"], c:[1], w:"Con una profundidad de 5 a 6 cm en el adulto." },
{ t:"t14", q:"Obstrucción grave de la vía aérea en adulto:", o:["Animarle a toser","Maniobra de Heimlich","5 golpes interescapulares y 5 compresiones torácicas"], c:[1], w:"Animar a toser es la respuesta ante obstrucción leve; los 5 y 5, en lactantes." },
{ t:"t14", q:"Actuación correcta ante una quemadura:", o:["Enfriar con agua tibia 10-15 minutos","Romper las ampollas para evitar la infección","Cubrir con un paño limpio"], c:[0,2], w:"Nunca se rompen las ampollas." },
{ t:"t14", q:"Ante un shock hay que:", o:["Sentar a la persona y darle agua","Tumbarla, elevar las piernas, abrigar y no dar de comer ni beber","Provocar el vómito"], c:[1], w:"Síntomas: piel pálida, sudor frío, pulso débil y confusión." },
{ t:"t14", q:"Ante una crisis epiléptica:", o:["Introducir un objeto en la boca para evitar mordeduras","Proteger de los golpes sin introducir nada en la boca","Sujetar con fuerza los miembros"], c:[1], w:"El objetivo es evitar lesiones durante la crisis." },
{ t:"t14", q:"Sobre los aspectos legales de los primeros auxilios:", o:["Hay que actuar de buena fe y dentro de los propios conocimientos","No se puede abandonar a la víctima","Conviene superar los propios conocimientos si nadie más ayuda"], c:[0,1], w:"Se debe respetar además la intimidad y la dignidad de la persona atendida." },
/* t15 */
{ t:"t15", q:"En el protocolo ABCDE, la letra C corresponde a:", o:["Control cervical","Circulación y control de hemorragias","Consciencia"], c:[1], w:"A es vía aérea con control cervical, D estado neurológico y E exposición y control ambiental." },
{ t:"t15", q:"La D del ABCDE se valora con:", o:["La regla de los 9","La Escala de Glasgow","El relleno capilar"], c:[1], w:"La regla de los 9 calcula superficie quemada; el relleno capilar pertenece a la C." },
{ t:"t15", q:"Un TCE con Glasgow de 10 se clasifica como:", o:["Leve","Moderado","Grave"], c:[1], w:"Leve 14-15, moderado 9-13 y grave 8 o menos." },
{ t:"t15", q:"La E del protocolo ABCDE busca además:", o:["Prevenir la hipotermia","Acelerar el traslado","Sedar al paciente"], c:[0], w:"Exposición completa para detectar otras lesiones, controlando la temperatura." },
{ t:"t15", q:"Son zonas críticas en quemaduras:", o:["Cara y cuello","Genitales","Manos y pies"], c:[0,1,2], w:"La superficie afectada se calcula con la regla de los 9." },
{ t:"t15", q:"La posición de Trendelenburg para prevenir el shock:", o:["Se usa siempre","Se usa si no hay trauma craneal","Está contraindicada en toda hemorragia"], c:[1], w:"El trauma craneal la contraindica." },
{ t:"t15", q:"Signos de fractura:", o:["Dolor y deformidad","Edema e impotencia funcional","Fiebre alta inmediata"], c:[0,1], w:"Pueden ser cerradas o abiertas." },
/* t16 */
{ t:"t16", q:"¿Cuál de estos es material de inmovilización?", o:["Colchón de vacío","Torniquete","Mascarilla de oxígeno"], c:[0], w:"También collarín cervical, férulas, camilla cuchara y tablero espinal." },
{ t:"t16", q:"El traslado de un paciente estabilizado que aún requiere atención es:", o:["Urgente","Diferido","Programado electivo"], c:[1], w:"El urgente es el de riesgo vital inmediato, con soporte durante el traslado." },
{ t:"t16", q:"Criterios que determinan el tipo de transporte:", o:["Estabilidad hemodinámica","Tipo de lesión","Distancia al centro médico"], c:[0,1,2], w:"Durante el traslado: monitorización, oxigenoterapia y control del dolor." },
{ t:"t16", q:"Regla básica de movilización:", o:["Movilizar primero y luego inmovilizar","No mover al paciente sin inmovilizar antes","Inmovilizar solo si hay fractura visible"], c:[1], w:"Se prioriza la vida antes que la lesión, y se protege siempre la columna vertebral." }
];

/* ---------------------------------------------------------
   EXAMEN ORAL
   --------------------------------------------------------- */
const ORAL = [
{ t:"t01", q:"Explíqueme qué es una central de alarmas y cómo se verifica una señal.", p:[
  "Es el <b>núcleo operativo</b> de los sistemas de seguridad: recibe, verifica y gestiona las señales de los dispositivos de detección.",
  "Tipos de señal: <b>intrusión, atraco o pánico, incendio, fallos técnicos, supervisión y acceso</b>.",
  "Verificación, para evitar falsas alarmas: <b>secuencial</b> (varias señales distintas), <b>por audio o vídeo</b> y <b>llamada telefónica</b> al cliente.",
  "Confirmada la alarma: activar el protocolo de intervención, notificar a las FCS o servicios de emergencia, contactar al cliente según la lista de autorizados y <b>registrar toda la actuación</b>.",
  "Cierre: debe estar <b>autorizada por el Ministerio del Interior</b> y grabar audio y vídeo durante la gestión." ] },
{ t:"t02", q:"Diferencie los medios de protección pasivos y activos y clasifíquelos por su función.", p:[
  "<b>Pasivos</b>: no requieren energía ni intervención humana. Retardan, disuaden o impiden: muros, vallas, puertas blindadas, cristales de seguridad, rejas y cierres mecánicos.",
  "<b>Activos</b>: requieren energía o intervención humana. Detectan, alertan y actúan: detectores y sensores, sirenas y pulsadores, comunicaciones y medios de intervención.",
  "Por función: <b>disuasivos</b>, <b>retardadores</b>, <b>detectores</b>, <b>alarmas</b> y <b>actuadores</b>.",
  "Cierre: los sistemas modernos <b>combinan</b> pasivos y activos, coordinados desde una central de alarmas o puesto de control, y deben cumplir certificaciones <b>UNE o EN</b>." ] },
{ t:"t04", q:"Manejo del arma: normativa, reglas de seguridad, prácticas y cuándo puede usarla.", p:[
  "Solo en <b>servicios autorizados por el Ministerio del Interior</b>. Normativa: <b>RD 137/1993</b> Reglamento de Armas y Ley 5/2014.",
  "Arma autorizada: <b>pistola semiautomática del calibre 9 mm parabellum</b>; con autorización expresa, escopeta de repetición.",
  "Cuatro reglas: tratarla como cargada, no apuntar salvo necesidad, dedo fuera del gatillo hasta decidir disparar y comprobar su estado antes y después del servicio.",
  "Prácticas de tiro: <b>mínimo una vez al semestre</b> en galerías homologadas. Custodia en <b>armeros homologados</b>; prohibido sacarla del servicio.",
  "Uso: solo en <b>legítima defensa o estado de necesidad</b>, ante agresión <b>real, actual e inminente</b>, con proporcionalidad, congruencia y oportunidad. El mal uso acarrea sanción, pérdida de habilitación y responsabilidad penal y civil." ] },
{ t:"t06", q:"Describa los planes de emergencia, los equipos de intervención y la colaboración con las FCS.", p:[
  "Plan de emergencia: conjunto de medidas ante situaciones imprevistas que dañen a personas, instalaciones o medio ambiente. Lo exige la <b>Ley de PRL</b>.",
  "Tipos: <b>plan de actuación</b>, <b>plan de evacuación</b>, <b>PEI</b> (interior) y <b>PEE</b> (exterior, con organismos públicos).",
  "Equipos: <b>EPI</b> primera intervención, <b>ESI</b> segunda intervención, <b>EPA</b> primeros auxilios y <b>EAE</b> alarma y evacuación.",
  "Colaboración: <b>RED AZUL</b> con el Cuerpo Nacional de Policía y <b>COOPERA</b> con la Guardia Civil.",
  "Cierre: el sistema integral combina medios <b>humanos, técnicos</b> (pasivos y activos) e <b>institucionales</b>." ] },
{ t:"t08", q:"Desarrolle la teoría de los círculos concéntricos y la secuencia de actuación ante una agresión.", p:[
  "Un círculo rodeado por <b>tres círculos concéntricos</b> en torno al protegido; cada uno actúa dentro de su propio cometido.",
  "<b>1º interior</b>: escolta personal. Misión: cubrir y proteger del ataque y realizar una rápida evacuación.",
  "<b>2º</b>: puestos de seguridad, que mantienen al protegido en su campo de observación. <b>3º</b>: patrullas móviles y grupos de información, que no vigilan al protegido.",
  "Ante agresión: <b>avisar</b> (tipo, agresor, dirección), <b>cobertura</b> (reducir superficie de blanco y silueta), <b>evacuación</b> al lugar seguro preestablecido y <b>neutralizar</b> yendo al arma, no al cuerpo.",
  "Enlazar con la <b>teoría esférica</b>: planos aéreo, superficial y subterráneo." ] },
{ t:"t09", q:"Caravanas, itinerarios y normas de conducción en protección de personas.", p:[
  "<b>Caravana</b>: mínimo coche del protegido y coche de escoltas. <b>Informales</b> (itinerario no público) y <b>formales</b> (conocido por todos).",
  "Coches: <b>piloto</b>, <b>VIP</b>, <b>adicional</b> y <b>escolta</b>. Posiciones: 1 escolta detrás; 2, uno delante y otro detrás; 3, uno delante y dos detrás.",
  "Dentro del VIP: conductor y <b>jefe de seguridad delante</b>; protegido y acompañantes detrás.",
  "Itinerarios: <b>principal, alternativo, de evacuación</b> (centro asistencial) y <b>de fuga</b> (puntos seguros de antemano). Se revisan <b>cada 5 meses</b>.",
  "Normas: cristales subidos, puertas aseguradas, no recoger extraños, detenerse solo ante fuerza pública identificada, revisar el vehículo antes y rutas aleatorias previamente estudiadas." ] },
{ t:"t10", q:"Marco jurídico del vigilante de explosivos: condición, funciones y normativa.", p:[
  "Condición de <b>agente de la autoridad</b> según la Ley 5/2014, con mayor protección penal. La <b>STS 4778/2013</b> añade la condición de funcionario público a efectos de responsabilidad penal.",
  "Funciones del <b>art. 32</b>: vigilancia y protección de bienes y personas, controles de acceso <b>sin retener documentación</b>, prevención de actos delictivos, detención y entrega <b>sin interrogatorios</b>, protección de transportes de valores y explosivos y verificación de señales de alarma.",
  "Normativa: <b>RD 130/2017</b> Reglamento de Explosivos, <b>RD 989/2015</b> pirotecnia y cartuchería, Reglamento de Minas y Reglamento Nacional de Transporte de Mercancías Peligrosas.",
  "ITC clave: <b>nº 1</b> plan de seguridad en instalaciones, <b>nº 9</b> autorización de fábricas, <b>nº 12</b> accidentes graves (Seveso III, revisión cada 3 años) y <b>nº 22</b> grupos de compatibilidad A a S.",
  "Transporte: plan de seguridad previo con aviso a la Guardia Civil, dotación mínima de vigilantes, enlaces de comunicación y registro de incidencias en la guía de circulación." ] },
{ t:"t13", q:"Clasifique los explosivos y explique las medidas de seguridad en su manejo.", p:[
  "<b>Definición</b>: sustancia que ante un estímulo adecuado reacciona violentamente liberando gases, calor y presión.",
  "<b>Por aplicación</b>: civiles, militares y pirotécnicos. <b>Por velocidad</b>: deflagrantes y detonantes. <b>Por estado</b>: sólidos, líquidos y gaseosos. <b>Por sensibilidad</b>: primarios, secundarios y terciarios.",
  "<b>ADR Clase 1</b>: divisiones 1.1 a 1.6, de explosión en masa a objetos extremadamente insensibles. Señalización con paneles naranjas y códigos ONU (TNT = ONU 0081).",
  "Medidas: formación específica, EPIs con calzado antiestático, eliminación de fuentes de ignición; almacenamiento ventilado, seco, aislado y separado por compatibilidad; transporte con vehículo autorizado y plan de seguridad.",
  "<b>Compatibilidad</b>: grupos A a S; no mezclar iniciadores del grupo B con detonantes del grupo D." ] },
{ t:"t14", q:"Actuación ante una persona inconsciente en la vía pública.", p:[
  "Aplico la conducta <b>PAS</b>: <b>proteger</b> el lugar, <b>avisar</b> al 112 y <b>socorrer</b> dentro de mis conocimientos.",
  "Valoración inicial: <b>consciencia</b> (¿responde a estímulos?), <b>respiración</b> (¿respira con normalidad?) y <b>pulso</b>.",
  "Si está inconsciente y <b>respira</b>: <b>posición lateral de seguridad</b> y vigilancia constante.",
  "Si está inconsciente y <b>no respira</b>: <b>RCP</b> — 30 compresiones de 5-6 cm y 2 insuflaciones, ritmo 30:2, a 100-120 por minuto.",
  "Cierre: actuar de buena fe, sin abandonar a la víctima y respetando su intimidad y dignidad." ] },
{ t:"t15", q:"Explique la valoración ABCDE de un paciente lesionado.", p:[
  "<b>A</b>, vía aérea con <b>control cervical</b>: comprobar permeabilidad y colocar collarín si hay sospecha de trauma.",
  "<b>B</b>, respiración: frecuencia, profundidad y uso de musculatura accesoria; oxigenoterapia si procede.",
  "<b>C</b>, circulación: <b>control de hemorragias</b> con presión directa, y valoración de pulso, presión arterial y relleno capilar.",
  "<b>D</b>, estado neurológico con la <b>Escala de Glasgow</b>: TCE leve 14-15, moderado 9-13, grave 8 o menos.",
  "<b>E</b>, exposición completa para detectar otras lesiones, previniendo la <b>hipotermia</b>.",
  "Claves: evaluar antes de actuar, proteger siempre la columna, controlar sangrados antes de movilizar y registrar todo lo actuado." ] }
];

/* ---------------------------------------------------------
   CHULETA — listas que caen en el examen
   --------------------------------------------------------- */
const CHULETA = [
{ t:"Equipos de emergencia", cnt:"4 equipos", ord:false, l:[
  "<b>EPI</b> — primera intervención","<b>ESI</b> — segunda intervención, bomberos internos","<b>EPA</b> — primeros auxilios","<b>EAE</b> — alarma y evacuación"] },
{ t:"Medios de protección por función", cnt:"5 funciones", ord:false, l:[
  "<b>Disuasivos</b> — carteles, iluminación, cámaras visibles","<b>Retardadores</b> — cerraduras, rejas","<b>Detectores</b> — sensores","<b>Alarmas</b> — sirenas, comunicaciones","<b>Actuadores</b> — niebla de seguridad, bloqueo de puertas"] },
{ t:"Principios de la protección física", cnt:"4 principios", ord:false, l:[
  "<b>Defensa en profundidad</b> — capas sucesivas","<b>Zonificación</b> — áreas por nivel de seguridad","<b>Redundancia</b> — duplicidad de medios críticos","<b>Tiempo de reacción</b> — retardar hasta la intervención"] },
{ t:"Análisis de riesgos", cnt:"4 etapas", ord:true, l:[
  "Identificación de <b>activos</b> a proteger","Evaluación de <b>amenazas y vulnerabilidades</b>","Análisis de <b>impacto</b>","Propuesta de <b>medidas de mitigación</b>"] },
{ t:"Teoría esférica de la seguridad", cnt:"3 capas", ord:true, l:[
  "<b>Inmediata</b> — contacto directo: puertas blindadas, escoltas","<b>Próxima</b> — CCTV, vigilantes estáticos","<b>Lejana</b> — perímetro externo, control de accesos"] },
{ t:"Círculos concéntricos (protección de personas)", cnt:"3 círculos", ord:true, l:[
  "<b>Escolta personal</b> — cubrir, proteger y evacuar","<b>Puestos de seguridad</b> — protegido en su campo de observación","<b>Patrullas móviles y grupos de información</b> — no vigilan al protegido"] },
{ t:"Reglas de manipulación del arma", cnt:"4 reglas", ord:true, l:[
  "Tratarla siempre como si estuviera <b>cargada</b>","<b>No apuntar</b> salvo necesidad estricta","<b>Dedo fuera del gatillo</b> hasta decidir disparar","<b>Comprobar su estado</b> antes y después del servicio"] },
{ t:"Divisiones ADR de la Clase 1", cnt:"6 divisiones", ord:true, l:[
  "<b>1.1</b> explosión en masa (TNT)","<b>1.2</b> proyección, sin explosión en masa","<b>1.3</b> incendio y ligera onda de presión","<b>1.4</b> riesgo menor, explosión localizada","<b>1.5</b> muy insensibles (ANFO)","<b>1.6</b> extremadamente insensibles"] },
{ t:"Categorías pirotécnicas por uso", cnt:"F, T y P", ord:false, l:[
  "<b>F1</b> muy baja peligrosidad — interiores","<b>F2</b> baja — exteriores controlados","<b>F3</b> media — zonas amplias","<b>F4</b> alta — uso profesional","<b>T1 / T2</b> teatro; T2 solo expertos","<b>P1 / P2</b> otros usos; P2 solo expertos"] },
{ t:"Protocolo ABCDE", cnt:"5 pasos", ord:true, l:[
  "<b>A</b> vía aérea con control cervical","<b>B</b> respiración y ventilación","<b>C</b> circulación y control de hemorragias","<b>D</b> estado neurológico (Glasgow)","<b>E</b> exposición y control ambiental"] },
{ t:"Conducta PAS", cnt:"3 pasos", ord:true, l:[
  "<b>Proteger</b> el lugar del accidente","<b>Avisar</b> al 112","<b>Socorrer</b> según los propios conocimientos"] },
{ t:"Itinerarios", cnt:"4 tipos", ord:false, l:[
  "<b>Principal</b>","<b>Alternativo</b>","<b>De evacuación</b> — centro de urgencia o asistencial","<b>De fuga</b> — puntos seguros elegidos de antemano"] },
{ t:"Valores éticos en seguridad", cnt:"6 valores", ord:false, l:[
  "Espíritu de servicio","Conciencia de grupo","Honor","Disciplina consciente","Excelencia en las labores","Respeto legal"] },
{ t:"Cifras que preguntan", cnt:"Números", ord:false, l:[
  "<b>112</b> — teléfono de emergencias","<b>30:2</b> a <b>100-120/min</b>, profundidad <b>5-6 cm</b> — RCP adulto","<b>10-15 min</b> — enfriar una quemadura","<b>14-15 / 9-13 / ≤8</b> — Glasgow leve, moderado, grave","<b>300 m</b> — distancia de alejamiento tras explosión","<b>9 mm parabellum</b> — calibre autorizado","<b>1 semestre</b> — periodicidad de prácticas de tiro","<b>3 años</b> — revisión del plan de la ITC nº 12","<b>2 min</b> — retardo máximo del sistema de bloqueo del vehículo","<b>5 meses</b> — revisión de itinerarios","<b>1 a 5</b> — miembros de una cápsula de protección","<b>7-8 h</b> — sueño diario recomendado","<b>3-5 días</b> — frecuencia semanal de entrenamiento","<b>0,3 g</b> — pólvora máxima en cartuchería de juguete excluida"] },
{ t:"Normas de cabecera", cnt:"Legislación", ord:false, l:[
  "<b>Ley 5/2014</b> — Seguridad Privada","<b>RD 2364/1994</b> — Reglamento de Seguridad Privada","<b>RD 137/1993</b> — Reglamento de Armas","<b>RD 130/2017</b> — Reglamento de Explosivos","<b>RD 989/2015</b> — pirotecnia y cartuchería","<b>Ley 31/1995</b> — Prevención de Riesgos Laborales","<b>LO 2/1986</b> — Fuerzas y Cuerpos de Seguridad","<b>Orden INT/314/2011</b> — empresas de seguridad","<b>Orden INT/316/2011</b> — centrales de alarmas","<b>Directiva 2012/18/UE</b> — Seveso III"] }
];
