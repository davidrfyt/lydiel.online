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
},
/* ============ Módulo instrumental (MF0080) ============ */
{
  id: "t17", mod: "mf0080", n: 10, t: "Comunicaciones: radioteléfono y teléfono",
  c: [
    { h: "Conceptos básicos", l: [
      "<b>Telecomunicación</b>: toda transmisión, emisión o recepción de signos, señales escritas, imágenes, sonidos e informaciones por hilo, radio, medios ópticos u otros sistemas electromagnéticos.",
      "<b>Transmisión</b>: acción de transportar entre dos puntos, directa o indirectamente, información de cualquier naturaleza.",
      "<b>Mensaje</b>: comunicación transmitida a distancia por cualquier medio. Consta de <b>encabezamiento, texto y final</b>.",
      "<b>Telegrama</b>: mensaje transmitido por medios eléctricos u ópticos. <b>Mensaje postal</b>: se remite el texto original.",
      "<b>Señales</b>: mensaje transmitido por medios ópticos o acústicos; debe ser interpretado.",
      "<b>Malla</b>: conjunto de emisoras o radioteléfonos que usan un mismo canal. <b>Red</b>: conjunto de varias mallas.",
      "<b>Estación o equipo</b>: conjunto de aparatos y accesorios, fijo o móvil, que permite utilizar un solo medio de transmisión. Se diferencian por indicativo y número (ej. <i>charli 1</i>).",
      "<b>Frecuencia</b>: número de oscilaciones de un movimiento vibratorio en la unidad de tiempo. Siempre hay una <b>de trabajo</b> y otra <b>de reserva</b> por si falla la primera."
    ]},
    { h: "Estaciones y sistemas de trabajo", l: [
      "<b>Estación directora</b>: responsable del correcto funcionamiento de la malla. Su indicativo suele ser <b>el número más bajo</b> de la malla.",
      "<b>Estaciones secundarias</b>: el resto; sus números son correlativos a partir de la directora.",
      "<b>Correspondencia libre</b>: cada estación transmite cuando el canal está libre.",
      "<b>Correspondencia cronometrada</b>: cada estación transmite a un horario determinado.",
      "<b>Correspondencia mixta</b>: combina las dos anteriores.",
      "<b>Correspondencia dirigida</b>: nadie transmite sin autorización de la directora."
    ]},
    { h: "Sistema básico de comunicación", l: [
      "<b>Fuente</b> — genera la información o el mensaje.",
      "<b>Transmisor</b> — transforma el mensaje en ondas radioeléctricas.",
      "<b>Medio de transmisión</b> — el soporte por el que viaja.",
      "<b>Receptor</b> — recibe la señal y la demodula.",
      "<b>Destino</b> — quien recibe el mensaje.",
      "<b>Canal de transmisión</b> — equipos y medio que transportan la información de la fuente al destino."
    ]},
    { h: "Radioteléfonos", l: [
      "<b>Fijos</b> — instalados en un lugar fijo.",
      "<b>Móviles</b> — en vehículo; se alimentan de sus baterías.",
      "<b>Portátiles</b> — autónomos, con baterías propias y libertad de movimiento.",
      "Componentes del portátil: <b>batería, antena, potenciómetro, silenciador de ruidos, silenciador de frecuencias, altavoz, micrófono y pulsador de emisión</b>.",
      "La batería <b>se descarga más al emitir</b> que al recibir. Comprobar antena conectada y apretada; cambiar la batería con el equipo desconectado."
    ]},
    { h: "Llamada, texto y final", l: [
      "Tipos de llamada: <b>simple</b> (a un solo corresponsal), <b>múltiple</b> (a varios), <b>colectiva</b> (a varios con indicativo común, típica de la directora) y <b>abreviada</b> (cuando no hay duda del destinatario).",
      "El <b>texto</b> debe ser <b>claro, conciso y breve</b> para ocupar el canal el menor tiempo posible.",
      "Final: <b>CAMBIO</b> (se espera respuesta), <b>CORTO</b> (se espera respuesta) y <b>CIERRO</b> (fin de la transmisión, se desconectan estaciones).",
      "<b>Autenticación</b>: medida de seguridad para identificar a una estación como conocida o para acreditar que el mensaje procede de fuente autorizada. Es <b>monodireccional</b>: uno interroga y el otro autentifica.",
      "El sistema oficialmente aceptado por la Dirección General de Telecomunicaciones para deletrear es el <b>alfabeto fonético internacional</b>."
    ]},
    { h: "El teléfono", l: [
      "Reglas de uso: <b>cortesía, ritmo de voz, claridad y dicción, capacidad de escucha, capacidad de respuesta, confianza, organización, concentración, identificación e identidad privada</b> (tratada como reservada).",
      "Aspectos de la voz: <b>entonación, articulación</b> (mensaje comprensible) y <b>elocución</b> (velocidad adecuada sin volverlo ininteligible).",
      "Lenguaje: hablar en presente, situar al interlocutor en el centro de la acción, vocabulario sencillo y <b>no repetir</b> innecesariamente lo ya entendido.",
      "Ante una <b>amenaza de bomba</b>, las tres preguntas clave: <b>dónde está colocado el artefacto, cuándo hará explosión y de qué clase de artefacto se trata</b>."
    ]},
    { h: "Telefonía móvil", l: [
      "<b>Teléfono móvil</b>: dispositivo inalámbrico para acceder a la red de telefonía móvil; su característica principal es la <b>portabilidad</b>.",
      "<b>Lenguaje SMS</b>: acortar palabras, sustituirlas por simbología y suprimir preposiciones.",
      "<b>Internet móvil</b>: páginas diseñadas para móviles (tecnología WAP), con velocidades 3G y 4G.",
      "<b>Smartphone</b>: teléfono construido sobre una plataforma informática móvil, con mayor capacidad de computación y conectividad.",
      "<b>Contaminación electromagnética</b>: la producida por radiaciones del espectro electromagnético de equipos electrónicos, incluidas las antenas de telefonía."
    ]}
  ]
},
{
  id: "t18", mod: "mf0080", n: 11, t: "Informática y ordenadores",
  c: [
    { h: "Tipos de ordenadores", l: [
      "<b>Sistema</b>: conjunto de partes o dispositivos que trabajan coordinadamente para un fin común.",
      "<b>Mainframes</b>: gran ordenador para organismos oficiales; procesa volúmenes elevados a gran velocidad. Muy caros, requieren temperatura especial y mucho personal.",
      "<b>Miniordenadores</b>: gran volumen sin exigir velocidad de cálculo. Aplicaciones muy específicas, sin temperatura especial, para medianas empresas.",
      "<b>Microordenadores</b>: los ordenadores personales o PC.",
      "Tipos de PC: <b>sobremesa</b> (no transportable), <b>workstation</b> (trabajos técnicos y científicos), <b>servidor</b> (provee servicios a otros ordenadores llamados clientes), <b>portátil</b>, <b>PDA</b> (agenda electrónica, sustituida por el smartphone) y <b>tablet PC</b> (pantalla táctil)."
    ]},
    { h: "Las siete operaciones", l: [
      "<b>Entrada de datos</b> — suministrar información al ordenador; lo habitual es el teclado.",
      "<b>Salida de datos</b> — obtener información; lo habitual es la pantalla.",
      "<b>Almacenamiento</b> — copia permanente reutilizable.",
      "<b>Recuperación</b> — leer de nuevo lo contenido en cinta o disco.",
      "<b>Transmisión</b> — transferir información a otro ordenador por una red.",
      "<b>Recepción</b> — recibir información de otro ordenador.",
      "<b>Tratamiento</b> — ordenación, selección, combinación y reclasificación de la información."
    ]},
    { h: "Programa y lenguaje", l: [
      "<b>Programa</b>: conjunto de instrucciones que controlan el funcionamiento de un ordenador.",
      "<b>Lenguaje de programación</b>: conjunto de reglas y símbolos que, combinados, permiten dar órdenes que el ordenador puede interpretar.",
      "Dos niveles: <b>bajo nivel</b> (ceros y unos) y <b>alto nivel</b> (pensado para ingeniería, uso comercial, etc.).",
      "<b>Hardware</b>: dispositivos físicos (CPU, monitor). <b>Software</b>: el conjunto intangible de datos y programas."
    ]},
    { h: "Componentes de un ordenador", l: [
      "<b>CPU (Unidad Central de Procesamiento)</b>: centro nervioso donde se interpreta y procesa la información. La componen <b>unidad de control, memoria y unidad aritmético-lógica (ALU)</b>.",
      "<b>Unidad de control</b>: corazón del ordenador; lee las instrucciones, manipula los datos y supervisa el funcionamiento integral.",
      "<b>ALU</b>: se encarga de las operaciones matemáticas.",
      "<b>RAM</b>: memoria de lectura y escritura; los datos desaparecen al apagar. <b>ROM</b>: solo lectura, no modificable, permanece al apagar.",
      "<b>Periféricos de entrada</b>: transfieren datos del exterior al procesador; el típico es el teclado.",
      "<b>Periféricos de salida</b>: monitor, impresora, plotter, microfilm, altavoces.",
      "<b>Periféricos de almacenamiento</b>: CD-ROM, pendrive, disco duro.",
      "Existen <b>tres clases</b>: de entrada, de salida y de entrada/salida."
    ]},
    { h: "Redes", l: [
      "<b>LAN</b> (red de área local): ordenadores en el mismo edificio.",
      "<b>WAN</b> (red de área amplia): unidades en distintos edificios, ciudades o países.",
      "Características de la red local: <b>aumento de productividad, reducción de costes de equipos, mayor nivel de comunicación y simplicidad de gestión</b>.",
      "Componentes esenciales: <b>tarjetas de red</b> y <b>cableado</b>.",
      "<b>Fileserver</b>: cerebro de la red, imprescindible; asume las funciones de mando.",
      "<b>Printserver</b>: gestiona las tareas de impresión; <b>no es indispensable</b>.",
      "<b>Estación de trabajo</b>: cada ordenador conectado a la red.",
      "Redes públicas conocidas: <b>ARPANET, MINET, MAP, TOP, BITNET</b> e <b>INTERNET</b>."
    ]}
  ]
},
{
  id: "t19", mod: "mf0080", n: 12, t: "Mecanismos de extinción de incendios",
  c: [
    { h: "El fuego y el tetraedro", l: [
      "<b>Fuego</b>: reacción química de oxidación con desprendimiento de calor y luz, en la que intervienen un <b>reductor (combustible)</b> y un <b>comburente (oxidante)</b>.",
      "<b>Tetraedro del fuego</b>: <b>combustible, oxidante (aire), energía de activación (calor) y reacción en cadena</b>. Eliminando cualquiera de los cuatro, el incendio se apaga.",
      "Procedimientos de extinción: <b>eliminación del combustible</b>, <b>refrigeración</b> (absorber el calor), <b>sofocación</b> (aislar del oxígeno) y <b>rotura de la reacción en cadena</b> (inhibición)."
    ]},
    { h: "Clases de fuego", l: [
      "Se clasifican por la <b>naturaleza del material combustible</b>.",
      "<b>Clase A</b> — sólidos con brasa (madera, papel, tejidos).",
      "<b>Clase B</b> — líquidos inflamables y sólidos licuables.",
      "<b>Clase C</b> — gases.",
      "<b>Clase D</b> — metales especiales. Generan <b>temperaturas muy altas</b>, son poco frecuentes y difíciles de extinguir.",
      "<b>Clase E</b> — fuegos en presencia de <b>corriente eléctrica</b>."
    ]},
    { h: "Agentes extintores", l: [
      "<b>Agua</b>: el más abundante y barato; apaga por <b>refrigeración</b>. <b>A chorro</b> (clase A), <b>pulverizada</b> (clase A, aceptable en B salvo líquidos solubles como el alcohol; no actúa en C ni D).",
      "<b>Espuma</b>: burbujas de aire, agua y líquido espumógeno; apaga por <b>sofocación</b> y también enfría.",
      "<b>Espuma química</b> — reacción de dos sustancias, casi en desuso; clase B y aceptable en A.",
      "<b>Espuma física o mecánica</b> — mezcla turbulenta de aire y agua. <b>Baja expansión</b> (B, aceptable A), <b>media expansión</b> (B) — ambas <b>conductoras</b>, no para clase E — y <b>alta expansión</b> (inundación de recintos cerrados, no conductora).",
      "<b>Polvo</b>: bicarbonato sódico o potásico con aditivos; interrumpe la <b>reacción química</b>. <b>Normal</b> (B, C y E, no conductor, no para A), <b>polivalente</b> (todo tipo de fuegos) y <b>especial</b> (solo clase D).",
      "<b>Anhídrido carbónico (CO₂)</b>: gas más pesado que el aire, almacenado licuado a presión; al expandirse genera <b>nieve carbónica</b>. Sofocante excelente.",
      "<b>Sustitutos de halones</b>: los halones están prohibidos por el <b>Protocolo de Montreal de 1987</b> y por la CEE (capa de ozono), salvo usos críticos."
    ]},
    { h: "Extintores", l: [
      "<b>Extintor</b>: aparato que contiene un agente extintor proyectable sobre el fuego por una presión interna.",
      "Por <b>peso</b>: <b>portátiles manuales</b> (≤20 kg), <b>portátiles dorsales</b> (≤30 kg) y <b>sobre ruedas</b> (transportables por remolque).",
      "Por <b>sistema de impulsión</b>: presión auxiliar permanente, presión propia permanente, presión por reacción química, presión auxiliar por botellín y automático.",
      "Por <b>sustancia extintora</b>: de agua, de espuma química, de polvo y de anhídrido carbónico.",
      "La carga se expresa en <b>litros</b> si es agua y en <b>kilogramos</b> si es polvo, espuma o CO₂.",
      "Todos los extintores deben <b>revisarse cada seis meses</b>.",
      "El extintor de <b>espuma química</b> es corrosivo y por su peligrosidad no debe utilizarse."
    ]},
    { h: "Normas de uso", l: [
      "Antes: conocer en qué fuegos puede emplearse y <b>leer la etiqueta de instrucciones</b>; supervisar su estado periódicamente.",
      "Verificar el tipo de incendio y elegir el extintor adecuado; en incendio eléctrico, <b>cortar la electricidad</b>.",
      "<b>No abrir puertas ni ventanas.</b> Apurar el alcance del agente extintor.",
      "Atacar el incendio <b>en la misma dirección de su desplazamiento</b>, de espaldas al viento, y dirigir el chorro <b>a la base de las llamas</b>.",
      "Con extintores de CO₂, <b>no tocar las partes metálicas de la boquilla</b>: producen quemaduras por frío.",
      "Si se inflaman las ropas: <b>no correr</b>, rodar por el suelo y envolverse en una manta."
    ]},
    { h: "Redes de agua, BIE y sistemas especiales", l: [
      "<b>Redes de agua</b>: conducen el agente a presión hasta puntos estratégicos; son el <b>segundo escalón</b> de la lucha contra incendios, tras los extintores portátiles.",
      "<b>Hidrantes</b>: accesos de agua en vía urbana a nivel rasante, situados a <b>menos de 100 m</b> de cualquier punto de las fachadas.",
      "<b>Columna seca</b>: uso exclusivo del servicio de extinción; parte de la fachada y discurre por la escalera con bocas en cada planta.",
      "<b>BIE (bocas de incendio equipadas)</b>: medio de <b>primera intervención</b> en el interior de edificios, alimentado por red de agua a presión. Elementos: <b>manguera, válvula de conexión con manómetro, soporte o devanadera y lanza</b>. Mantener alrededor una zona libre de obstáculos.",
      "<b>Sistemas especiales</b>: rociadores automáticos (sprinklers), agua pulverizada, polvo seco, anhídrido carbónico, gases sustitutivos de los halones y espuma física. Los <b>sprinklers</b> tienen una eficacia del <b>96 %</b>."
    ]},
    { h: "Plan de emergencia y evacuación", l: [
      "El plan de emergencia debe incluir como mínimo: <b>planos actualizados del edificio</b>, <b>normas de actuación de los ocupantes</b> y <b>documentos del equipo de seguridad contra incendios</b>.",
      "Ante un incendio: notificar cuanto antes al responsable de seguridad (características, lugar), <b>no usar ascensores</b>, palpar las puertas antes de abrirlas y aislar el incendio evitando su propagación.",
      "<b>Vías de evacuación</b>: <b>horizontales y verticales</b>. Los locales con riesgo deben tener <b>dos salidas como mínimo, en puntos opuestos</b>.",
      "<b>Fases de la evacuación</b>: detección, notificación, alarma y evacuación.",
      "Dirige la evacuación el <b>Jefe de Emergencia</b> del edificio o local si no hay otra persona encargada.",
      "Normas: no perder la calma, advertir con serenidad, informar a quien no se haya enterado, <b>no recoger el coche del aparcamiento</b> y seguir las indicaciones del equipo de seguridad.",
      "Los <b>simulacros</b> sirven para familiarizar al personal con los extintores e inculcar serenidad y disciplina; <b>no</b> para hacer mantenimiento de los agentes extintores."
    ]}
  ]
},
{
  id: "t20", mod: "mf0080", n: 13, t: "Armas de fuego: clasificación y categorías",
  c: [
    { h: "Concepto y clases de arma", l: [
      "<b>Arma</b>: cualquier instrumento, máquina o aparato empleado para el ataque o la defensa.",
      "<b>Armas blancas</b>: se utilizan con la mano. <b>De punta</b> (estiletes) y <b>de punta y corte</b> (machetes, navajas).",
      "<b>Armas arrojadizas</b>: se lanzan con la mano (piedras, dardos, flechas).",
      "<b>Armas de fuego</b>: usan la pólvora como elemento de proyección, lanzando un proyectil a gran velocidad por un tubo llamado cañón.",
      "Definición legal (RD 976/2001, que modifica el <b>Reglamento de Armas RD 137/1993</b>): toda arma portátil que tenga cañón y que lance, esté concebida para lanzar o pueda transformarse fácilmente para lanzar un perdigón, bala o proyectil por la acción de un combustible proyector."
    ]},
    { h: "Por el sistema de disparo", l: [
      "<b>De repetición</b>: el arma se recarga después de cada disparo, con intervención manual del tirador.",
      "<b>Semiautomáticas</b>: tras cada disparo se recargan automáticamente, pero <b>solo se efectúa un disparo</b> por cada accionamiento del disparador.",
      "<b>Automáticas</b>: se recargan automáticamente y realizan <b>varios disparos</b> mientras el disparador siga pulsado. Su tenencia y uso están <b>prohibidos a particulares</b> en todo caso."
    ]},
    { h: "Por el ánima del cañón", l: [
      "<b>Cañón liso</b>: sin rayas ni estrías. Puede ser <b>cilíndrico</b> (ánima cilíndrica en toda su longitud) o <b>de choque</b> (ánima cónica que se estrecha hacia la boca de fuego).",
      "La escopeta de <b>cañón cilíndrico dispersa el perdigón y agrupa las postas</b>; la de <b>choque agrupa el perdigón y dispersa las postas</b>.",
      "Las armas de ánima lisa tienen <b>alcance máximo 300 m</b> y <b>alcance eficaz 60 m</b>, con gran seguridad de tiro a corta distancia y elevada potencia.",
      "<b>Cañón estriado</b>: hendiduras que imprimen al proyectil un movimiento de rotación sobre su eje, dándole dirección y estabilidad.",
      "Características del estriado: <b>inclinación, forma, número y dimensiones</b> (anchura y profundidad).",
      "<b>Paso constante o rayado helicoidal</b> — armas portátiles, menor rozamiento. <b>Paso progresivo o parabólico</b> — piezas de artillería.",
      "La inclinación puede ser a la derecha (<b>dextrorsum</b>) o a la izquierda (<b>sinistrorsum</b>) y se mide por el <b>paso de la hélice</b>.",
      "El <b>número de estrías</b> varía entre <b>3 y 8</b>, menor cuanto menor sea el calibre. Las estrías tienen más anchura que los campos y la profundidad es la mínima indispensable."
    ]},
    { h: "Por la longitud del cañón", l: [
      "<b>Armas cortas</b>: cañón <b>no superior a 30 cm</b> o longitud total <b>no superior a 60 cm</b>. Se disparan con una sola mano y sin apoyo.",
      "<b>Pistolas</b>: armas cortas semiautomáticas y en algún caso automáticas.",
      "<b>Revólveres</b>: armas cortas con sistema giratorio de repetición. Alcance eficaz de unos <b>25 m</b> en calibre 38 con cañón de 4 pulgadas.",
      "<b>Armas largas</b>: cañón superior a 30 cm o longitud total superior a 60 cm. Se apoyan en el hombro y se manejan con las dos manos: fusiles, rifles y escopetas."
    ]},
    { h: "Armas de guerra y prohibidas", l: [
      "Son <b>armas de guerra</b>, prohibidas a particulares: las de <b>calibre igual o superior a 20 mm</b>; las de calibre inferior consideradas de guerra por el <b>Ministerio de Defensa</b>; las <b>automáticas</b> y sus municiones; y bombas, misiles, cohetes, torpedos, minas y granadas.",
      "<b>Totalmente prohibidas</b>: armas de fuego en el interior de bastones; disimuladas bajo cualquier objeto; imitaciones transformables en verdaderas; Flobert de más de 6 mm; armas sustancialmente modificadas; bastones estoque, puñales, cuchillos estriados o acanalados y navajas automáticas; armas de fuego combinadas con armas blancas; defensas de alambre o plomo, llaves de pugilato, tiragomas; armas largas con culata para alojar pistolas; y <b>navajas no automáticas de hoja de más de 11 cm</b>.",
      "<b>Prohibidas a particulares</b>: semiautomáticas de más de 5 cartuchos (incluida recámara), de culatín plegable o empuñadura tipo pistola; <b>sprays</b> y aerosoles tóxicos o corrosivos (algunos permitidos a adultos para defensa personal); defensas eléctricas o de goma; <b>silenciadores</b>; munición <b>dum-dum</b> o de punta hueca; municiones perforantes, explosivas o incendiarias; e imitaciones que induzcan a engaño."
    ]},
    { h: "Las siete categorías del Reglamento de Armas", l: [
      "<b>1.ª</b> — armas de fuego <b>cortas</b>: pistolas y revólveres.",
      "<b>2.ª 1</b> — armas de fuego largas <b>para vigilancia y guardería</b>, con cartuchería metálica apta para arma corta de calibre 6,35; 7,65; 9 mm corto; 9 mm parabellum o 9 mm largo. <b>2.ª 2</b> — armas largas rayadas para caza mayor.",
      "<b>3.ª 1</b> — armas largas rayadas para <b>tiro deportivo</b>. <b>3.ª 2</b> — <b>escopetas</b> y demás armas de ánima lisa, o con rayas para facilitar el plomeo. <b>3.ª 3</b> — armas accionadas por aire u otro gas comprimido.",
      "<b>4.ª 1</b> — carabinas y pistolas de tiro semiautomático y de repetición y revólveres de doble acción accionados por aire o gas comprimido. <b>4.ª 2</b> — carabinas y pistolas de un solo tiro y revólveres de acción simple accionados por aire o gas.",
      "<b>5.ª</b> — armas blancas no prohibidas, y cuchillos o machetes militares o su imitación.",
      "<b>6.ª</b> — armas de fuego <b>antiguas o históricas</b> y sus reproducciones, en especial las anteriores al <b>1 de enero de 1890</b>.",
      "<b>7.ª</b> — 1 anestésicas; 2 <b>ballestas</b>; 3 sistema <b>Flobert</b>; 4 arcos, lanzalíneas y fusiles de pesca submarina; 5 <b>revólveres y pistolas detonadoras</b> y pistolas lanzabengalas."
    ]},
    { h: "Armas reglamentarias del personal de seguridad", l: [
      "<b>Orden INT/318/2011</b>. El <b>vigilante de seguridad</b> usa el <b>revólver del 38 especial de cuatro pulgadas</b>.",
      "Con arma larga, la <b>escopeta de repetición del calibre 12/70</b> con cartuchos de <b>12 postas en taco contenedor</b>.",
      "El <b>escolta privado</b> usa la <b>pistola semiautomática de 9 mm Parabellum</b>.",
      "Los <b>guardas rurales</b> usan armas rayadas de repetición con cartuchería metálica apta para arma corta: 6,35; 7,65; 9 mm corto; 9 mm parabellum; 9 mm largo; 22 LR; 22 Magnum; 38 especial y 357 Magnum.",
      "Cuando el servicio desaconseje las armas rayadas, la empresa puede pedir a la <b>Dirección General de la Guardia Civil</b> autorización para el revólver del 38 o la escopeta del 12.",
      "<b>Elementos comunes</b> de toda arma de fuego: <b>cañón, recámara, cargador, elementos de puntería y seguros</b>."
    ]}
  ]
},
{
  id: "t21", mod: "mf0080", n: 14, t: "Armas reglamentarias: revólver, pistola, escopeta y carabina",
  c: [
    { h: "El revólver 38 especial de 4 pulgadas", l: [
      "Arma de <b>acción manual de recámaras múltiples giratorias</b>, clasificada como <b>arma de repetición</b>. Dispara en <b>simple y doble acción</b>.",
      "Alcance eficaz <b>25 m</b> · peso sin munición <b>715 g</b> · <b>6 estrías dextrógiras</b> · calibre <b>38 pulgadas</b> (equivale a 9 mm) · cañón <b>4 pulgadas</b> · capacidad del cilindro <b>6 cartuchos</b>.",
      "<b>Tres partes fundamentales: cañón, armazón y cilindro.</b>",
      "<b>Cañón</b>: conduce y estabiliza el proyectil. Seis estrías y seis campos dextrorsum; velocidad inicial <b>250 m/s</b> y giro superior a <b>2.500 revoluciones por minuto</b>.",
      "<b>Armazón</b>: elemento de sostén. Empuñadura, arco guardamonte, <b>orejetas</b> (evitan que los cartuchos salgan de las recámaras), tope lateral del cilindro, alojamiento del cilindro, alojamiento del soporte basculante y caja plana de mecanismos.",
      "<b>Cilindro</b>: seis recámaras, un <b>taladro central</b> por el que pasa la barra del extractor, seis ranuras exteriores para aligerar peso y seis hendiduras posteriores para el diente del tope. El <b>soporte basculante en forma de L</b> une el grupo cilindro con el armazón.",
      "El cilindro <b>bascula hacia la izquierda</b> por gravedad para la extracción."
    ]},
    { h: "Mecanismos del revólver", l: [
      "<b>Puntería</b>: punto de mira en el canal de la punta del cañón y <b>alza micrométrica</b> regulable en derivación y elevación.",
      "<b>Alimentación</b>: el tambor con sus recámaras y la corona dentada. En cada disparo el cilindro <b>gira 60°</b>.",
      "<b>Repetición</b>: presenta sucesivamente las recámaras cargadas frente al cañón.",
      "<b>Disparo</b>: interviene el disparador, con <b>cabeza, cuerpo y cola</b>. En <b>simple acción</b> se lleva el martillo atrás con la mano; en <b>doble acción</b> basta apretar la cola del disparador, y es la pieza <b>levante</b> la que lleva el martillo hacia atrás. La doble acción da la <b>máxima rapidez</b> de tiro.",
      "<b>Percusión</b>: martillo percutor, aguja percutora y disparador. El <b>anillo regulador</b> gradúa la presión del muelle real. La aguja asoma por el <b>orificio del grano del fogón</b>.",
      "<b>Extracción</b>: saca las vainas. Tres tipos de revólver según la apertura: de <b>obturador lateral</b>, de <b>cilindro basculante</b> y de <b>apertura superior</b>. En este mecanismo está la <b>cabeza estrellada</b> del cilindro.",
      "<b>Seguridad</b>: el seguro por <b>interposición de masas</b> impide el disparo accidental.",
      "<b>Guarniciones</b>: complementan el arma sin ser imprescindibles (las cachas). <b>Respetos</b>: elementos exteriores que la mantienen en condiciones de uso (baqueta, destornillador). <b>Freno de boca</b>: reduce el ángulo de elevación del disparo."
    ]},
    { h: "La pistola de 9 mm Parabellum", l: [
      "Arma corta <b>semiautomática</b> que aprovecha los gases del disparo y la energía acumulada en el <b>muelle recuperador</b> al comprimirse por el retroceso de la corredera.",
      "Grupo de <b>cañón y cierres móviles</b>; dispara en <b>simple y doble acción</b>; cargador de <b>15 cartuchos</b>; armazón de aleación ligera; se desmonta sin herramientas.",
      "Partes: <b>armazón, bastidor de mecanismos, corredera o cerrojo y cañón</b>.",
      "<b>Armazón</b>: aloja y enlaza todos los mecanismos. La <b>corredera</b> va montada <b>sobre el armazón</b>, sujeta por canales-guía, y aloja puntería, extracción, seguridad, automatismo, cierre y percusión.",
      "<b>Cañón</b>: recámara, ánima y <b>anclajes</b> (de cadeneta o rampa), que lo sujetan al armazón facilitando el basculado y el retroceso de la corredera. Suele llevar <b>seis estrías dextrorsum</b>.",
      "Mecanismos: <b>automatismo, cierre, alimentación, disparo, percusión, extracción, expulsión y seguridad</b>.",
      "El <b>macizo trasero de la corredera</b> es el cerrojo: cierra la recámara y empuja los cartuchos del cargador; pertenece al mecanismo de <b>alimentación</b>.",
      "La <b>uña extractora</b> está en la <b>corredera</b>. La <b>espina de retenida</b> mantiene la corredera atrás al consumirse el último cartucho.",
      "El <b>seguro</b> atraviesa lateralmente la parte trasera de la corredera, oculta y bloquea la aguja percutora y permite el tiro en seco sin dañarla."
    ]},
    { h: "La escopeta de émbolo 12/70", l: [
      "Arma larga reglamentaria del vigilante de seguridad. Calibre <b>12</b>, <b>ánima lisa</b>, <b>5 cartuchos en depósito</b> (más uno en recámara), cañón de <b>350 mm</b>, de <b>repetición</b>, alcance máximo <b>300 m</b> y eficaz <b>60 m</b>.",
      "Funciona por <b>corredera o pumping</b> y admite cualquier munición. Doble seguro, <b>manual y automático</b>. Con bocacha adecuada lanza botes de humo o pelotas de goma.",
      "Seis grupos: <b>cañón, carcasa, cerrojo, disparo, asta y culata</b>.",
      "<b>Grupo carcasa</b>: aloja el cerrojo y lleva roscado el <b>tubo depósito</b>. <b>Leva de cierre</b> (retiene los cartuchos), <b>leva comando</b> (libera el transportador) y <b>leva auxiliar</b> (retiene el resto mientras uno pasa a la recámara).",
      "<b>Grupo cerrojo</b>: cerrojo, <b>grapón</b>, carro, percutor y extractor.",
      "<b>Grupo disparo</b>: <b>transportador</b>, <b>serpentín</b>, disparador y biela, leva del seguro automático y seguro manual.",
      "<b>Mecanismo de cierre</b>: cerrojo, grapón, carro, culata del cañón y asta de armamento.",
      "Seguridad: en el <b>campo de tiro</b>, descargada, con la ventana del cajón de mecanismos <b>abierta</b> y el seguro puesto; para <b>almacenaje</b>, descargada, ventana <b>cerrada</b> y gatillo bloqueado. Se transporta con la boca de fuego hacia arriba, por encima de la cabeza del más alto del grupo."
    ]},
    { h: "La carabina", l: [
      "Arma <b>rayada de repetición</b> con <b>cerrojo tipo Máuser</b>, preparada para <b>9 mm Parabellum</b> y admite visor telescópico. Es el arma reglamentaria de los <b>guardas particulares de campo</b>.",
      "Partes: <b>cañón, cajón de los mecanismos y culata</b>, con mecanismos de alimentación, cierre, percusión, bloqueo, disparo, seguro y elementos de puntería.",
      "<b>Cañón</b>: seis estrías dextrógiras; punto de mira en cola de milano y alza atornillada.",
      "<b>Alimentación</b>: cargador con muelle y <b>elevador</b> en forma de teja, más el soporte guía del cargador.",
      "<b>Cierre</b>: cerrojo (aloja percutor y muelle) y <b>cabeza del cerrojo</b>, que bloquea el arma obturando la recámara y traslada el cartucho a la recámara; lleva la aguja percutora y el extractor.",
      "<b>Bloqueo</b>: al encajarse el brazo lateral del cerrojo en el cajón de mecanismos; la ventana inferior impide que la retenida suelte el percutor hasta que el cerrojo ha girado del todo, <b>evitando el disparo con la recámara abierta</b>.",
      "Puntería: miras abiertas de fábrica, punto de mira fijo y <b>alza regulable</b>."
    ]}
  ]
},
{
  id: "t22", mod: "mf0080", n: 15, t: "Munición, balística y precisión del tiro",
  c: [
    { h: "El cartucho", l: [
      "<b>Munición</b>: la carga de las armas de fuego. <b>Cartucho</b>: unidad organizada que reúne en un solo cuerpo los factores esenciales de un disparo. Es <b>sólido, sensible, impermeable y económico</b>.",
      "<b>Cartucho metálico</b> (cuatro elementos): <b>vaina, pistón, carga de proyección (pólvora) y bala</b>.",
      "<b>Cartucho semimetálico</b> (escopeta): añade el <b>taco</b>; culote metálico y resto de la vaina no metálico. Componentes: vaina, pistón, pólvora, taco, tapa y proyectiles.",
      "El <b>taco</b> sella la cámara de gas, mantiene los gases fuera del haz de perdigones, evita dispersiones y <b>actúa de refrigerante</b> impidiendo que los perdigones se deformen o se suelden."
    ]},
    { h: "La vaina", l: [
      "Recipiente tubular que contiene la pólvora y lleva en su base el pistón con el fulminante. Resistente, elástica, dura y resistente a corrosión y calor.",
      "En armas de <b>cañón liso</b> la vaina es de <b>cartón con culote de latón</b>; en las de <b>cañón estriado</b>, de <b>latón</b>. En tiro deportivo de pequeño calibre con sistema Flobert, de cobre.",
      "Tres partes: <b>boca</b> (anterior), <b>cuerpo</b> (intermedia) y <b>culote</b> (posterior o cabeza), sobre el que actúa la uña extractora."
    ]},
    { h: "Sistemas de percusión y pistón", l: [
      "<b>Lefaucheux</b>: la cápsula va dentro de la vaina y se acciona por una varilla que sobresale. En desuso.",
      "<b>Flobert</b>: reborde posterior hueco con el fulminante; se inflama al golpear en cualquier punto del reborde. Solo se usó en tiro deportivo, calibres 22 y 6 mm.",
      "<b>Sistema central</b>: el fulminante va en una cápsula alojada en el <b>centro del culote</b>. Es el usado actualmente en casi todas las armas.",
      "<b>Pistón o cápsula iniciadora</b>: enciende la pólvora. Lleva un <b>yunque</b> y unos orificios llamados <b>oídos o chimeneas</b>.",
      "<b>Pistón Berdan</b>: el yunque es <b>solidario al culote</b> de la vaina y tiene <b>dos oídos</b>. <b>Pistón Bóxer</b>: el yunque va <b>metido a presión en la cápsula</b> y tiene <b>un solo oído</b>; permite recargar vainas, por lo que es más económico.",
      "<b>Fulminante</b> actual: <b>trinitrorresorcinato de plomo</b> con aditivos y <b>tetraceno</b> como estabilizador; más sensible y potente que el antiguo fulminato de plomo."
    ]},
    { h: "Carga de proyección", l: [
      "Se emplea <b>pólvora</b>. La antigua pólvora negra daba muchos inconvenientes.",
      "Hoy se usan las <b>pólvoras piroxiladas, blancas o sin humo</b>: no dejan residuos en el ánima, <b>deflagran progresivamente</b>, originan menos presión en la recámara, dan más velocidad al proyectil y no producen humo.",
      "La pólvora <b>deflagra</b>: se quema con gran rapidez sin explosionar."
    ]},
    { h: "Las balas", l: [
      "Componentes de la bala: <b>cuerpo, culote y punta u ojiva</b>.",
      "<b>Tres tipos normales</b>: <b>de plomo</b> (90 % plomo, 5 % estaño, 5 % antimonio; revólver y calibre 22 deportivo), <b>blindadas</b> (plomo blando con forro metálico de cobre, latón o cuproníquel) y <b>semiblindadas</b> (plomo parcialmente recubierto; de <b>punta blanda</b> o de <b>punta dura</b>).",
      "Otros tipos: <b>perforadoras</b> (punta de acero macizo), <b>trazadoras</b> (dejan rastro luminoso), <b>incendiarias</b>, <b>expansivas o de punta hueca</b>, <b>explosivas</b> (carga de pólvora y cápsula fulminante en la ojiva) y <b>dum-dum</b> (trituran el canal de penetración).",
      "<b>Forma</b>: esférica para ánima lisa (no cabecea); alargada para cañón rayado (menos resistencia al aire a igualdad de peso). <b>Longitud</b>: cuatro o cinco veces su calibre.",
      "<b>Trazado</b>: <b>cuerpo o forzamiento</b> (cilíndrico, de diámetro mayor que el calibre del arma) y <b>ojiva</b> (calibre decreciente para no tocar el rayado).",
      "<b>Calibre real</b>: se mide entre <b>dos crestas</b> diametralmente opuestas del estriado. <b>Calibre nominal</b>: entre <b>dos surcos</b> opuestos; coincide con el diámetro de la bala.",
      "Con cañones de <b>ánima lisa</b> se pueden disparar <b>postas, perdigones y balas</b>."
    ]},
    { h: "Puntería y precisión", l: [
      "<b>Puntería</b>: encarar los elementos de puntería del arma —<b>alza, punto de mira y eje del cañón</b>— de modo que la inclinación y dirección correspondan a la distancia y situación del blanco.",
      "<b>Precisión</b>: al disparar repetidas veces en idénticas condiciones, los impactos no caen en el mismo punto sino que se distribuyen alrededor de uno, con mayor densidad cerca de él. Ese fenómeno se llama <b>dispersión</b>."
    ]}
  ]
},
/* ============ UF2676 · Protección de personas (MF0081) ============ */
{
  id: "t23", mod: "mf0081", n: 1, t: "UF2676 · Seguridad, seguridad privada y protección",
  c: [
    { h: "Conceptos", l: [
      "<b>Seguridad</b>: no es solo un valor jurídico, normativo o político; también es un <b>valor social</b>. Pilar de la sociedad, base de la libertad y la igualdad.",
      "<b>Seguridad privada</b>: forma en que los <b>agentes privados</b> contribuyen a reducir riesgos. Ofrecen seguridad <b>adicional</b> a la que provee la seguridad pública. Es medida de <b>anticipación y prevención</b>.",
      "<b>Protección</b>: acción y efecto de proteger. Sistema diseñado e integrado por <b>medidas aplicables en función de lo que se requiera proteger</b>. Término <b>más específico</b> que seguridad."
    ]},
    { h: "Encaje constitucional", l: [
      "Art. <b>149.1.29ª</b> CE: competencia exclusiva del Estado en seguridad pública.",
      "Art. <b>104</b> CE: misión de las Fuerzas y Cuerpos de Seguridad, bajo dependencia del Gobierno: proteger el libre ejercicio de derechos y libertades y garantizar la seguridad ciudadana.",
      "Las actividades de seguridad privada son <b>complementarias y subordinadas</b> respecto de la seguridad pública."
    ]},
    { h: "Nivel de seguridad", l: [
      "Depende de la <b>eficiencia de las medidas</b> y de <b>factores externos o internos</b> de la zona donde el hombre desarrolla su actividad."
    ]}
  ]
},
{
  id: "t24", mod: "mf0081", n: 2, t: "UF2676 · Personal de seguridad privada y habilitación",
  c: [
    { h: "Quién puede ejercer (Ley 5/2014)", l: [
      "Vigilantes de seguridad y su especialidad de <b>vigilantes de explosivos</b>.",
      "<b>Escoltas privados</b>.",
      "Guardas rurales y sus especialidades: guardas de caza y guardapescas marítimos.",
      "Jefes de seguridad, directores de seguridad y detectives privados."
    ]},
    { h: "Habilitación", l: [
      "La otorga el <b>Ministerio del Interior</b>; la tarjeta de identidad profesional es el <b>documento público de acreditación</b>.",
      "Habilita la <b>Dirección General de la Policía</b>, <b>excepto</b> guardas rurales y sus especialidades → <b>Dirección General de la Guardia Civil</b>.",
      "Solo se ejercen las funciones para las que se esté habilitado.",
      "La <b>pérdida de un requisito</b> extingue la habilitación y cancela de oficio la inscripción en el Registro Nacional."
    ]},
    { h: "Requisitos generales (art. 28)", l: [
      "<b>Mayor de edad</b> (18 años cumplidos al presentarse a las pruebas).",
      "<b>Capacidad física</b> y <b>aptitud psicológica</b>.",
      "<b>Nacionalidad</b> de un Estado de la UE, del EEE, o de un tercer Estado con convenio con España.",
      "Poseer la <b>formación previa</b> requerida.",
      "<b>Carecer de antecedentes penales</b> por delitos dolosos.",
      "No haber sido sancionado en los <b>2 años</b> anteriores por infracción <b>grave</b>, ni en los <b>4 años</b> por <b>muy grave</b>, en materia de seguridad privada.",
      "No haber sido <b>separado del servicio</b> en las FCS o FFAA en los <b>2 años</b> anteriores.",
      "No haber sido <b>condenado</b> por intromisión ilegítima en honor, intimidad, propia imagen o secreto de las comunicaciones en los <b>5 años</b> anteriores.",
      "Superar las <b>pruebas de comprobación</b> que establezca el Ministerio del Interior."
    ]}
  ]
},
{
  id: "t25", mod: "mf0081", n: 3, t: "UF2676 · Principios básicos de actuación",
  c: [
    { h: "Los nueve principios", l: [
      "<b>Legalidad</b>: solo medios y acciones conforme al ordenamiento jurídico vigente.",
      "<b>Integridad</b>: cumplir diligentemente los deberes, oponiéndose a todo acto de corrupción.",
      "<b>Protección</b>: desarrollar efectivamente sus responsabilidades, sin inhibición ante hechos ilícitos o peligrosos.",
      "<b>Dignidad</b> en el ejercicio de sus funciones.",
      "<b>Corrección</b>: conducta irreprochable, evitando abuso, arbitrariedad o violencia.",
      "<b>Congruencia</b>: medidas <b>proporcionadas y adecuadas a los riesgos</b>.",
      "<b>Proporcionalidad</b> en el uso de las técnicas y medios de defensa e investigación.",
      "<b>Reserva profesional</b> sobre los hechos que conozca.",
      "<b>Colaboración</b> con las FCS, observando las instrucciones policiales concretas."
    ]},
    { h: "Ojo en el examen", l: [
      "<b>Congruencia</b> = medidas proporcionadas <b>a los riesgos</b>. <b>Proporcionalidad</b> = uso de <b>técnicas y medios</b> de defensa. Se confunden siempre."
    ]}
  ]
},
{
  id: "t26", mod: "mf0081", n: 4, t: "UF2676 · Técnicas y fundamentos de la protección",
  c: [
    { h: "Las tres técnicas", l: [
      "<b>Integral</b>: cobertura en <b>todos los aspectos</b> de la persona, esfera profesional <b>y</b> personal. Contempla la dinámica y la estática.",
      "<b>Dinámica</b>: dispositivo organizado para proteger a una persona <b>en sus desplazamientos</b>, o en el traslado de un objeto.",
      "<b>Estática</b>: dispositivo organizado para custodiar a una persona en un <b>lugar fijo</b>."
    ]},
    { h: "Fundamentos", l: [
      "Crear una <b>zona de seguridad</b>: reduce el porcentaje de peligros y transmite sensación de seguridad y tranquilidad.",
      "Proteger <b>sin juzgar</b> a la persona y <b>sin implicarse emocionalmente</b>, para no reducir la efectividad.",
      "<b>Anticipación a los riesgos</b>: la previsión es el principal factor de eficacia.",
      "Medidas preventivas: <b>eliminar</b> los riesgos, <b>anticiparse</b> al agresor previniendo su acción, y <b>ensayar y evaluar</b> el plan de seguridad."
    ]},
    { h: "Causas que justifican la protección", l: [
      "Políticas, ideológicas, psicológicas, religiosas, raciales, personales y <b>monetarias o económicas</b>."
    ]}
  ]
},
{
  id: "t27", mod: "mf0081", n: 5, t: "UF2676 · Fuentes de peligro y gestión de riesgos",
  c: [
    { h: "Peligro", l: [
      "Situación —<b>acción o condición</b>— que ostenta el <b>potencial de producir un daño</b> sobre una persona o cosa.",
      "Forma más común y efectiva de detectarlo: asignar valores a la <b>posibilidad</b> y a la <b>seriedad</b> mediante una <b>escala numérica</b>; los más serios reciben los valores más altos."
    ]},
    { h: "Clasificación de riesgos", l: [
      "<b>Naturales</b>: inundaciones, rayos, incendios, terremotos.",
      "<b>Tecnológicos</b>: fallos en instalaciones, interrupción eléctrica o de agua, fuego, explosión de equipos.",
      "<b>Por accidente</b>: heridas a personas o daños en algún edificio.",
      "<b>Por malas acciones o comportamiento de personas</b>: intrusión, asalto, robo, amenaza de bomba, atentados, vandalismo, disturbios civiles y huelgas."
    ]},
    { h: "Medidas ante cualquier riesgo", l: [
      "Organizar y coordinar el <b>sistema interno de seguridad</b> mediante manuales que designen funciones y responsabilidades.",
      "Implantar <b>barreras físicas</b> suficientes.",
      "Instalar <b>sistemas de alarma</b> en domicilio y lugar de trabajo.",
      "<b>Detectores automáticos</b> contra incendios que avisen a los servicios de extinción.",
      "Contar con un <b>equipo bien formado y equipado</b>.",
      "Buscar el <b>equilibrio</b>: alto riesgo → movimiento formal protocolario; riesgo bajo → movimientos más informales."
    ]}
  ]
},
{
  id: "t28", mod: "mf0081", n: 6, t: "UF2676 · La protección integral y las medidas de la Ley 5/2014",
  c: [
    { h: "Protección integral", l: [
      "Servicio cuyo objetivo es un <b>entorno seguro</b> mediante un dispositivo que <b>neutralice</b> los peligros; debe ser <b>preventivo y disuasorio</b>, y permitir controlar y reaccionar mediante <b>neutralización, cobertura y evacuación</b>.",
      "Se extiende a la esfera <b>profesional y personal</b>, y cada una se cubre desde la protección dinámica y la estática.",
      "Se fundamenta en <b>dos aspectos</b>: <b>la prevención</b> (actuaciones para evitar un suceso) y <b>la protección</b> (actuaciones para neutralizar el suceso <b>ya acontecido</b>, con medios humanos y técnicos, para salvar la vida)."
    ]},
    { h: "Medidas de seguridad de la Ley 5/2014", l: [
      "<b>Física</b>: impedir o dificultar el acceso mediante barreras físicas.",
      "<b>Electrónica</b>: detectar o advertir amenazas mediante dispositivos electrónicos.",
      "<b>Informática</b>: integridad, confidencialidad y disponibilidad de los sistemas de información.",
      "<b>Organizativa</b>: planificación de cometidos y funciones; p. ej. departamentos de seguridad y planes de seguridad.",
      "<b>Personal</b>: prestación de servicios de seguridad distintos de los anteriores.",
      "Las medidas cuentan con evaluación de organismos de certificación acreditados y tienen <b>vigencia indefinida</b>, salvo deterioro o nueva instalación."
    ]}
  ]
},
{
  id: "t29", mod: "mf0081", n: 7, t: "UF2676 · Protección dinámica: teoría esférica y círculos concéntricos",
  c: [
    { h: "Teoría esférica", l: [
      "Consiste en abrir un <b>espacio contenido en una esfera</b> cuyo <b>centro es la persona protegida</b>.",
      "Planifica las acciones en <b>tres planos</b>: <b>aéreo</b>, <b>superficial</b> y <b>subterráneo</b>."
    ]},
    { h: "Teoría de los círculos concéntricos", l: [
      "Un círculo rodeado por <b>tres círculos concéntricos</b> en torno al protegido; cada uno presta servicio dentro de la esfera de su propio cometido. Sirve de base para un <b>dispositivo de seguridad integral</b>.",
      "<b>1er círculo (interior)</b>: <b>escolta personal</b>. Las personas más próximas. Misión: <b>cubrir y proteger</b> del ataque y realizar una <b>rápida evacuación</b> a lugar seguro. La distancia depende de la situación concreta.",
      "<b>2º círculo</b>: <b>puestos de seguridad</b>. Guardan cierta distancia pero mantienen al protegido <b>dentro de su campo de observación</b>.",
      "<b>3er círculo</b>: <b>patrullas móviles y grupos de información</b>. <b>No controlan ni vigilan</b> al protegido, pero están dentro del dispositivo por si ocurriera una desgracia."
    ]}
  ]
},
{
  id: "t30", mod: "mf0081", n: 8, t: "UF2676 · Escalones, niveles de seguridad y evaluación",
  c: [
    { h: "Tres niveles o escalones", l: [
      "<b>Puestos de vigilancia</b>: observar una zona específica; fijos o móviles. Funciones: observar el área señalada, observar a las personas del perímetro y <b>comunicar cualquier novedad o sospecha a un superior</b>.",
      "<b>Puestos de revisión y control</b>: hacen de <b>filtro</b> hacia un área restringida. Funciones: controlar el área restringida, no permitir entrada a personas, vehículos u objetos no autorizados o amenazantes, y seleccionar al personal que puede entrar.",
      "<b>Puestos especiales de seguridad</b>: se asignan al miembro con una <b>función específica</b> dentro del dispositivo."
    ]},
    { h: "Evaluación de dispositivos", l: [
      "Valorar los <b>factores internos y externos</b> que afecten a la operatividad del agente.",
      "Estudio de los riesgos según su <b>gravedad</b> (magnitud del daño) y su <b>probabilidad</b>.",
      "Estudio del entorno: estudio de la ciudad, reconocimiento de la zona e itinerarios viables, <b>cuartos seguros</b> y <b>centros de asistencia</b>.",
      "<b>Cuartos seguros</b>: acceso rápido y fácil, buenas comunicaciones, capacidad de defensa, estar limitado y facilidad para prestar primeros auxilios.",
      "<b>Centros de asistencia</b>: conocer horarios, medios materiales y cercanía (hospitales, centros de salud, puestos de la Cruz Roja)."
    ]}
  ]
},
{
  id: "t31", mod: "mf0081", n: 9, t: "UF2676 · Coordinación con el Departamento de Seguridad y con las FCS",
  c: [
    { h: "Planes de seguridad", l: [
      "Se elaboran <b>conjuntamente</b> con el departamento de seguridad; comprenden todas las medidas frente a cualquier riesgo, <b>real o imaginario</b>.",
      "<b>Temporales</b>: actividades <b>no habituales</b> (p. ej. un viaje); los escoltas se coordinan con el departamento de seguridad del lugar de destino.",
      "<b>Permanentes</b>: recorridos habituales; coordinación <b>más protocolizada</b> y evaluación constante.",
      "En crisis o emergencia las acciones deben estar <b>totalmente coordinadas</b>: el público entra en crisis e histeria y dificulta el dispositivo."
    ]},
    { h: "Artículos de coordinación (Ley 5/2014)", l: [
      "<b>Art. 14</b>: colaboración profesional. Comunicar a las FCS, <b>tan pronto como sea posible</b>, circunstancias relevantes y hechos delictivos, poniendo a su disposición presuntos delincuentes, instrumentos, efectos y pruebas.",
      "<b>Art. 15</b>: acceso a la información por las FCS. Cesiones de datos y acceso a los sistemas en <b>tiempo real</b> cuando sea necesario para prevenir un <b>peligro real</b> para la seguridad pública o reprimir infracciones penales.",
      "<b>Art. 16</b>: coordinación y participación. Se constituyen <b>comisiones mixtas</b> de seguridad privada (nacionales, autonómicas o provinciales), con carácter <b>consultivo y de colaboración</b>.",
      "Las FCS pueden facilitar información para la evaluación de riesgos; si contiene <b>datos personales</b>, solo en caso de <b>peligro real</b> o para evitar infracciones penales."
    ]},
    { h: "Estructura de la Ley 5/2014", l: [
      "Art. 1 Objeto · 2 Definiciones · 3 Ámbito de aplicación · 4 Fines · 5 Actividades de seguridad privada · 6 Actividades compatibles · 7 Actividades excluidas · 8 Principios rectores · 9 Contratación y comunicación de servicios · 10 Prohibiciones · 11 Registro Nacional de Seguridad Privada.",
      "<b>Fines</b> (art. 4): <b>satisfacer</b> las necesidades legítimas de los usuarios, <b>contribuir</b> a garantizar la seguridad pública y <b>complementar</b> el monopolio de la seguridad del Estado.",
      "<b>Actividades excluidas</b> (art. 7): la <b>autoprotección</b>, sin contraprestación ni servicio a terceros."
    ]}
  ]
},
{
  id: "t32", mod: "mf0081", n: 10, t: "UF2676 · Técnicas de protección en movimiento",
  c: [
    { h: "Secuencia ante una agresión", l: [
      "<b>1. Avisar del ataque</b>: especificar el <b>tipo de agresión</b>, el <b>agresor</b> y la <b>dirección</b> por la que viene. Se avisa a los compañeros por cualquier medio (walkie talkie o señales).",
      "<b>2. Cobertura</b> corporal: su objetivo es <b>disminuir la superficie de blanco y la silueta</b> del protegido.",
      "<b>3. Evacuación</b>: traslado y alejamiento rápido del lugar de peligro a otro <b>de seguridad previamente establecido</b>. Ningún agente realizará otra maniobra que no sea cubrir o evacuar.",
      "<b>4. Neutralizar</b>: solo una vez puesto a salvo el protegido. Ir <b>lo más rápido posible hacia el arma</b> del atacante y <b>no hacia el cuerpo</b>, colocándose <b>delante del agresor</b> para cortar la línea directa con el protegido.",
      "El <b>desplazamiento a pie</b> es de mucho riesgo por el enlentecimiento de la cobertura y la evacuación.",
      "<b>Cápsulas de protección</b>: sin regla fija, es recomendable que estén formadas por <b>1 a 5 miembros</b>."
    ]},
    { h: "Edificios, escaleras y ascensores", l: [
      "<b>Edificios</b>: inspección completa <b>antes</b> de la llegada, localizando una habitación utilizable como <b>espacio de seguridad</b>.",
      "<b>Escaleras</b>: el protegido va <b>lo más cerca posible de la pared</b>, el escolta próximo a él y el resto alrededor <b>formando un círculo</b>. Las <b>mecánicas</b> son más peligrosas por los espacios abiertos a ambos lados.",
      "<b>Ascensores</b>: entrañan bastante peligro; revisión minuciosa del <b>espacio, hueco entre ascensor y techo, cables y maquinaria</b>. El protegido va <b>siempre acompañado de un escolta</b>; el resto del equipo <b>sube por las escaleras</b> y controla la salida."
    ]},
    { h: "Líneas de recibimiento y de control", l: [
      "<b>Recibimiento</b>: control previo de la zona. La personalidad ocupa <b>posición fija</b> y el escolta se sitúa <b>tras ella</b>; el resto en distintos puntos de la sala y <b>uno en la entrada</b> del local.",
      "<b>Líneas de control</b>: <b>dos escoltas delante y dos detrás</b> del protegido; todos observan y controlan <b>las manos</b> de quienes saludan. Con multitud, puestos a lo largo del tramo con equipos ópticos que retransmiten amenazas y vigilan paquetes y personas sospechosas.",
      "<b>Evacuaciones</b>: operaciones <b>anticipadamente diseñadas</b> con pasos estandarizados. Se establece un <b>jefe</b>, que se sitúa <b>más próximo</b> a la persona a evacuar y la guía; el resto abre camino o conduce al protegido al vehículo."
    ]}
  ]
},
{
  id: "t33", mod: "mf0081", n: 11, t: "UF2676 · Protección estática y coordinación de servicios",
  c: [
    { h: "Protección estática", l: [
      "Dispositivo organizado para custodiar a una persona en un <b>lugar fijo</b>: lugar de trabajo o residencia <b>habitual u ocasional</b>.",
      "Se planifica con la <b>teoría simplificada de los círculos concéntricos</b>: el espacio se divide únicamente en <b>interior y exterior</b>.",
      "<b>Interior</b>: habitaciones, escaleras, ascensores, puertas de entrada, patios, sótanos, terrazas.",
      "<b>Exterior</b>: la <b>periferia</b> del inmueble; características del barrio y de sus habitantes, lugares desde los que se puede observar el edificio y puntos donde ocultar explosivos (<b>papeleras o buzones</b>).",
      "Reglas generales: <b>identificar</b> a quienes accedan hasta la persona, <b>controlar al servicio doméstico</b> y <b>comprobar todo paquete o correo</b> que llegue."
    ]},
    { h: "Coordinación de servicios", l: [
      "El número de servicios depende del <b>riesgo de agresión</b> existente.",
      "Cuando hay varios equipos (domicilio, trabajo…), la coordinación la realiza la <b>sala de operaciones</b> u órgano que reciba y analice la información de ambos.",
      "Los jefes de cada servicio deben mantener contacto e información <b>continua y recíproca</b> con el coordinador.",
      "<b>Avanzada</b>: acción de <b>requisar el lugar</b> por un miembro del equipo <b>antes de la entrada</b> del protegido en lugares no explorados. Misión: <b>obtener información del destino y establecer un perímetro de seguridad</b>."
    ]}
  ]
},
{
  id: "t34", mod: "mf0081", n: 12, t: "UF2676 · Características del vehículo de seguridad",
  c: [
    { h: "Condiciones que debe reunir", l: [
      "<b>Cómodo</b>: capacidad para el invitado, el conductor y un miembro del equipo de seguridad.",
      "<b>Aire acondicionado</b>: permite el <b>cierre total</b> si se ataca con algún tipo de gas.",
      "<b>Seguro y rápido</b>, para circular por todo tipo de carreteras.",
      "Completamente <b>blindado</b>: carrocería, cristales, bajos y neumáticos.",
      "Suficiente <b>potencia</b>, manteniendo buena <b>relación potencia/peso</b>.",
      "En grandes dispositivos, <b>otro vehículo para los escoltas</b> de características similares, con buen sistema de comunicación entre ambos y acceso/abandono fácil."
    ]},
    { h: "Aspectos exigidos (Real Decreto)", l: [
      "<b>Sistema de bloqueo</b>: accionado directa (pulsador) o indirectamente (apertura de puertas), <b>corta la inyección de combustible</b> y acciona <b>alarma acústica y luminosa</b>. Retardo entre activación y acción de <b>2 minutos como máximo</b>.",
      "<b>Rejilla metálica</b> en el interior del tubo del depósito de combustible, para impedir la introducción de elementos extraños.",
      "<b>Sistema de protección del depósito</b> de combustible.",
      "<b>Cierre especial de la caja</b> mediante candado o cerradura de seguridad."
    ]}
  ]
},
{
  id: "t35", mod: "mf0081", n: 13, t: "UF2676 · El conductor y la requisa del vehículo",
  c: [
    { h: "Características del conductor", l: [
      "Debe haber recibido <b>entrenamiento de conducción de alta seguridad</b>. A veces es uno de los propios escoltas.",
      "Conocimientos exigidos: conocer <b>a la perfección el vehículo</b> —posibilidades, rendimiento y mecánica— y conocer los <b>itinerarios programados y alternativos</b>.",
      "Factores que condicionan la conducción: <b>límites personales</b> (capacidad de reacción, concentración, reflejos), <b>límites del vehículo</b> (características técnicas) y <b>límites externos</b> (pavimento, tráfico, meteorología)."
    ]},
    { h: "Cápsulas de seguridad sobre vehículos", l: [
      "Revisión <b>diaria</b> del vehículo para controlar que no haya manipulaciones, sabotajes o trampas ocultas.",
      "<b>Requisa exterior</b>: completa, <b>sistemática y preestablecida</b>. Se buscan artefactos adosados y manipulaciones de cables, cerraduras, líquidos…",
      "<b>Requisa interior</b>: asientos, bandeja trasera, guantera.",
      "Por último se revisan <b>motor y maletero</b>.",
      "La realiza el <b>equipo de seguridad con ayuda del conductor</b>, apoyándose en <b>perros adiestrados, espejos especiales o detectores de explosivos</b>."
    ]}
  ]
},
{
  id: "t36", mod: "mf0081", n: 14, t: "UF2676 · Conducción evasiva y maniobras",
  c: [
    { h: "Conducción evasiva", l: [
      "Busca <b>llegar lo más rápido posible al destino evitando las situaciones de peligro</b>, consiguiendo mejor rendimiento del vehículo. Su finalidad es la <b>destreza y pericia</b> para evitar emboscadas y evadirse con una simple maniobra.",
      "<b>Ofensiva</b>: aprovechar <b>peso, potencia y velocidad</b> para afrontar el ataque de <b>forma activa</b>, llegando a <b>colisionar</b> con el obstáculo.",
      "<b>Defensiva</b>: <b>evitar colisionar</b> con vehículos o materiales; varía la trayectoria mediante un <b>giro de 180 grados</b>."
    ]},
    { h: "Las cuatro maniobras", l: [
      "<b>Maniobra en Y</b>: giro de 180º en la calzada; se reduce velocidad, se gira el volante del lado derecho al izquierdo, se echa marcha atrás y se vuelve a girar para invertir el sentido.",
      "<b>Vuelta corta</b>: parecida; primero se <b>para el vehículo</b> y el giro se hace <b>marcha atrás</b>.",
      "<b>California</b>: giro con el volante <b>hacia la izquierda</b> ayudándose del <b>freno de mano</b>, que hace <b>derrapar</b> el coche.",
      "<b>Giro en J</b>: se mantiene el sentido de dirección pero se cambia el de la marcha: iniciar <b>marcha atrás</b> a cierta velocidad, girar rápido, frenar bloqueando las ruedas delanteras y engranar la primera para salir hacia adelante.",
      "La maniobra en <b>Y</b> y la <b>California</b> se usan <b>solo cuando no hay tiempo suficiente para reaccionar</b>.",
      "Ante <b>barricadas</b>, si el vehículo tiene mayor envergadura y potencia, se puede <b>embestir</b> a uno de los otros vehículos. Conviene circular por el <b>carril medio o más próximo a la calzada</b> para poder maniobrar."
    ]}
  ]
},
{
  id: "t37", mod: "mf0081", n: 15, t: "UF2676 · Normas de seguridad en la conducción",
  c: [
    { h: "Reglas básicas", l: [
      "Mantener los <b>cristales subidos</b> y las <b>puertas aseguradas</b>.",
      "<b>No recoger ni auxiliar a extraños</b>.",
      "Conducir por <b>vías amplias y bien iluminadas</b>, identificando personas u objetos sospechosos.",
      "Detenerse <b>solo</b> ante un miembro de la fuerza pública <b>previamente identificado mostrando su placa</b>.",
      "<b>Revisar el vehículo antes</b> de comenzar el trayecto.",
      "<b>No bajar del coche al protegido</b> hasta comprobar que no corre ningún peligro.",
      "Realizar <b>rutas aleatorias previamente estudiadas</b>.",
      "Con varios escoltas en el operativo, viajar en <b>vehículos separados y en caravana</b>."
    ]}
  ]
},
{
  id: "t38", mod: "mf0081", n: 16, t: "UF2676 · Caravanas: clasificación y posiciones",
  c: [
    { h: "Concepto", l: [
      "<b>Caravana</b>: conjunto de vehículos utilizados para desplazar a la persona protegida y a todo su personal de seguridad. <b>Cuantos más vehículos, más complicada y problemática</b>.",
      "Mínimo para considerarla caravana: el <b>coche del protegido</b> y el <b>coche de los escoltas</b>."
    ]},
    { h: "Clasificación (según conocimiento del itinerario)", l: [
      "<b>Informales</b>: el itinerario <b>no es de dominio público</b>; solo lo conocen el protegido y su equipo de seguridad.",
      "<b>Formales</b>: el itinerario es <b>conocido por todos</b>."
    ]},
    { h: "Tipos de vehículo", l: [
      "<b>Coche piloto</b>: viaja el equipo de seguridad y un <b>Policía local</b>.",
      "<b>Coche VIP</b>: el protegido, sus acompañantes y el <b>Jefe del Equipo de seguridad</b>.",
      "<b>Coche adicional</b>: mismas prestaciones que el VIP; se usa <b>si el coche VIP se estropea</b>.",
      "<b>Coche escolta</b>: el resto de componentes del equipo."
    ]},
    { h: "Posiciones", l: [
      "<b>1 coche de escolta</b>: el VE va <b>detrás</b> del VIP.",
      "<b>2 coches de escolta</b>: <b>uno delante y otro detrás</b> del VIP.",
      "<b>3 coches de escolta</b>: uno <b>delante</b> y <b>dos detrás</b>.",
      "Dentro del coche del protegido: el <b>jefe de seguridad delante, al lado del conductor</b>; el protegido y los acompañantes <b>detrás</b>. El resto de escoltas en otro vehículo <b>justo detrás</b>."
    ]}
  ]
},
{
  id: "t39", mod: "mf0081", n: 17, t: "UF2676 · Itinerarios",
  c: [
    { h: "Definición y clases", l: [
      "<b>Itinerario</b>: ruta o recorrido con <b>dirección y descripción concreta</b> que permite llegar hasta el lugar deseado; se busca el <b>más seguro</b>.",
      "<b>Principal</b>: el elegido para un desplazamiento determinado tras estudiar el resto de caminos; <b>no es siempre el mismo</b> (mañana puede ser alternativo).",
      "<b>Alternativo</b>: los que pueden <b>sustituir al principal</b> si este no pudiera usarse.",
      "<b>De evacuación</b>: variante del principal para acudir a un <b>centro de urgencia o asistencial</b> previamente programado, en la mayor brevedad.",
      "<b>De fuga</b>: variación del principal o del alternativo para dirigirse a <b>puntos seguros elegidos de antemano</b>."
    ]},
    { h: "Puntos de peligro urbanos", l: [
      "Llegada y salida del itinerario, <b>semáforos</b> (paradas peligrosas por posible intrusión), pasos de peatones, tráfico, obras en la vía, vehículos aparcados o <b>en doble fila</b> sospechosos y contenedores.",
      "Establecer <b>puntos seguros</b> a lo largo del itinerario y tener preestablecidos los <b>centros asistenciales</b>."
    ]},
    { h: "Estudio por tramos", l: [
      "Aspectos: <b>nombre y anchura de la calle</b>, carriles, aceras, bordillos y suelo, y <b>posibilidad de realizar maniobras</b>.",
      "Lo realizan <b>los escoltas con anterioridad a la salida</b> y debe <b>revisarse cada 5 meses</b> según el grado de peligrosidad."
    ]}
  ]
},
{
  id: "t40", mod: "mf0081", n: 18, t: "UF2676 · Funciones, medios y entorno del escolta",
  c: [
    { h: "El escolta", l: [
      "Profesional de la seguridad —<b>pública o privada</b>— especializado en la <b>protección de personalidades</b>. Debe pertenecer a las FCS del Estado o a una empresa de seguridad privada.",
      "Función principal: <b>proteger a las personas</b>; debe estar mentalizado para el ataque con arma de fuego y su dedicación ha de ser <b>plena</b>. Los escoltas privados <b>pueden llevar armas de fuego</b>.",
      "<b>Guardaespaldas</b>: persona <b>no profesional y no habilitada</b> contratada por un particular; <b>no puede portar armas</b> ni realizar las funciones propias del escolta."
    ]},
    { h: "Habilidades y competencias (Mora, 2008)", l: [
      "<b>Prácticas</b>: mantenimiento físico, entrenamiento habitual en defensa personal policial, tácticas policiales, conducción ofensiva-evasiva policial, capacidad de asunción de responsabilidades, fuerza y equilibrio mental.",
      "<b>Teóricas</b>: detección de explosivos, primeros auxilios, conocimientos culturales y protocolarios.",
      "<b>Perceptivas</b>: capacidad de relación con el entorno, eficacia en la observación y capacidad de rememoración y retentiva."
    ]},
    { h: "Medios y vestuario", l: [
      "Prendas cómodas y <b>calzado antideslizante</b>; gafas de sol o de vista con <b>montura y cristales orgánicos</b>.",
      "<b>Chaleco antibalas</b>: absorbe el impacto de balas al torso y esquirlas de explosiones; con <b>placas metálicas o cerámicas</b> protege también de disparos de fusil.",
      "<b>Spray defensivo de gel</b>, <b>navaja</b>, <b>preservativos</b> (taponar de forma aséptica heridas de bala evitando la hemorragia).",
      "<b>Bastón extensible corto</b>, <b>inhibidores de frecuencia</b> (impiden la transmisión radioeléctrica emitiendo mayor potencia que el emisor).",
      "<b>Kubotán</b>: cilindro de metal, plástico o madera de unos <b>14 cm</b> y 1,5 de grosor; estabiliza el puño, se aplica en puntos de presión o da ventaja sobre muñecas y dedos.",
      "<b>Armas semiautomáticas</b> de gran poder de munición, colocadas de forma discreta y de rápida extracción. <b>Vehículos blindados</b>.",
      "Comunicación entre escoltas: <b>intercomunicadores</b> y <b>Código Fonético Internacional</b>."
    ]},
    { h: "Relación con el entorno", l: [
      "El <b>entorno</b> abarca al propio protegido, su familia, su círculo de amistades, el personal que trabaje para él, el público y la <b>prensa</b>.",
      "Conocer costumbres y personalidad del protegido, y su círculo de amigos y familia, con la <b>mayor discreción posible</b>: los ataques suelen ir dirigidos hacia ellos.",
      "Con la prensa y el resto de personas, actitud <b>más firme y controlada</b>; el escolta permanece <b>correcto y en un segundo plano</b> para no dar mala prensa al protegido."
    ]}
  ]
},
{
  id: "t41", mod: "mf0081", n: 19, t: "UF2676 · Valores éticos en seguridad",
  c: [
    { h: "Los seis valores", l: [
      "<b>Espíritu de servicio</b>: encaminar los esfuerzos al mantenimiento del orden y la seguridad del protegido.",
      "<b>Conciencia de grupo</b>: cooperación, coordinación y solidaridad entre compañeros y con otras entidades públicas y privadas.",
      "<b>Honor</b>: orgullo de ostentar el uniforme que los identifica; responsabilidad con el servicio y con la población.",
      "<b>Disciplina consciente</b>: respetar las directrices de los superiores, normas y protocolos. Con varios escoltas siempre habrá un <b>Jefe de Seguridad</b> por encima.",
      "<b>Excelencia en las labores</b>: no cometer ni tolerar actos de corrupción; atender con respeto, cortesía, eficiencia y eficacia.",
      "<b>Respeto legal</b>: comunicar toda irregularidad legal a los organismos competentes, actuando bajo los principios de <b>racionalidad y proporcionalidad</b>."
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
{ t:"t16", q:"Transporte urgente frente a diferido", a:"<b>Urgente</b>: riesgo vital inmediato, traslado inmediato con soporte.<br><b>Diferido</b>: paciente estabilizado que requiere atención sin urgencia extrema.<br>Criterios: estabilidad hemodinámica, tipo de lesión y distancia al centro." },
/* ===== Módulo instrumental ===== */
{ t:"t17", q:"Partes de un mensaje y palabras de final", a:"Un mensaje consta de <b>encabezamiento, texto y final</b>.<br>Final: <b>CAMBIO</b> y <b>CORTO</b> esperan respuesta; <b>CIERRO</b> termina la transmisión desconectando estaciones." },
{ t:"t17", q:"Malla, red, estación directora y secundarias", a:"<b>Malla</b>: emisoras que usan un mismo canal. <b>Red</b>: conjunto de mallas.<br><b>Directora</b>: responsable del funcionamiento de la malla; su indicativo es <b>el número más bajo</b>. <b>Secundarias</b>: el resto, con números correlativos." },
{ t:"t17", q:"Los cuatro sistemas de trabajo", a:"<b>Libre</b> — se transmite cuando el canal está libre.<br><b>Cronometrada</b> — cada estación a su horario.<br><b>Mixta</b> — combinación de las dos.<br><b>Dirigida</b> — no se transmite sin autorización de la directora." },
{ t:"t17", q:"Los seis elementos del sistema básico de comunicación", a:"<b>Fuente · Transmisor · Medio de transmisión · Receptor · Destino · Canal de transmisión</b>." },
{ t:"t17", q:"Los cuatro tipos de llamada", a:"<b>Simple</b> (un corresponsal) · <b>Múltiple</b> (varios) · <b>Colectiva</b> (varios con indicativo común, típica de la directora) · <b>Abreviada</b> (cuando no hay duda del destinatario)." },
{ t:"t17", q:"Tres preguntas clave ante una amenaza de bomba", a:"<b>Dónde</b> está colocado el artefacto · <b>Cuándo</b> hará explosión · <b>De qué clase</b> de artefacto se trata." },
{ t:"t17", q:"Los tres aspectos de la voz al teléfono", a:"<b>Entonación</b> · <b>Articulación</b> (que el mensaje sea comprensible) · <b>Elocución</b> (velocidad adecuada sin volverlo ininteligible)." },
{ t:"t18", q:"Las siete operaciones de un ordenador", a:"<b>Entrada</b> · <b>Salida</b> · <b>Almacenamiento</b> · <b>Recuperación</b> · <b>Transmisión</b> · <b>Recepción</b> · <b>Tratamiento</b>." },
{ t:"t18", q:"Componentes de la CPU", a:"<b>Unidad de control</b> (corazón del ordenador), <b>memoria</b> y <b>unidad aritmético-lógica o ALU</b>.<br>El disco duro, la placa base y las lectoras no forman parte de la CPU." },
{ t:"t18", q:"RAM frente a ROM", a:"<b>RAM</b>: lectura y escritura; los datos desaparecen al apagar.<br><b>ROM</b>: solo lectura; no se modifica y permanece al apagar." },
{ t:"t18", q:"Las tres clases de periféricos", a:"<b>De entrada</b> (teclado, ratón, webcam, escáner, micrófono), <b>de salida</b> (monitor, impresora, altavoces, plotter) y <b>de entrada/salida</b> (disco duro, pendrive, pantalla táctil)." },
{ t:"t18", q:"Fileserver y printserver", a:"<b>Fileserver</b>: cerebro de la red, asume las funciones de mando. <b>Es imprescindible</b>.<br><b>Printserver</b>: gestiona las tareas de impresión. <b>No es indispensable</b>." },
{ t:"t19", q:"El tetraedro del fuego", a:"<b>Combustible</b> (reductor) · <b>Oxidante</b> o comburente (aire) · <b>Energía de activación</b> (calor) · <b>Reacción en cadena</b>.<br>Eliminando cualquiera de los cuatro, el incendio se apaga." },
{ t:"t19", q:"Los cuatro procedimientos de extinción", a:"<b>Eliminación</b> del combustible · <b>Refrigeración</b> (absorber el calor) · <b>Sofocación</b> (aislar del oxígeno) · <b>Rotura de la reacción en cadena</b> (inhibición)." },
{ t:"t19", q:"Clases de fuego", a:"<b>A</b> sólidos con brasa · <b>B</b> líquidos inflamables · <b>C</b> gases · <b>D</b> metales especiales (temperaturas muy altas, difícil extinción) · <b>E</b> en presencia de corriente eléctrica." },
{ t:"t19", q:"Los tres tipos de polvo químico seco", a:"<b>Normal</b> — clases B, C y E (no conductor); no para la A.<br><b>Polivalente</b> — todo tipo de fuegos.<br><b>Especial</b> — solo clase D." },
{ t:"t19", q:"Clasificación de los extintores por peso", a:"<b>Portátiles manuales</b> hasta <b>20 kg</b> · <b>Portátiles dorsales</b> hasta <b>30 kg</b> · <b>Sobre ruedas</b>, transportables por remolque.<br>Todos se revisan <b>cada seis meses</b>." },
{ t:"t19", q:"Elementos de una BIE", a:"<b>Manguera</b> · <b>Válvula de conexión</b> con manómetro · <b>Soporte o devanadera</b> · <b>Lanza</b>.<br>Son medio de <b>primera intervención</b>; alrededor debe haber zona libre de obstáculos." },
{ t:"t19", q:"Escalones de la lucha contra incendios", a:"<b>1.º</b> extintores portátiles · <b>2.º</b> redes de agua y BIE · <b>3.º</b> sistemas especiales y bomberos.<br>Los <b>hidrantes</b> están a menos de <b>100 m</b> de cualquier punto de las fachadas y los <b>sprinklers</b> tienen un <b>96 %</b> de eficacia." },
{ t:"t19", q:"Las cuatro fases de la evacuación", a:"<b>Detección</b> → <b>Notificación</b> → <b>Alarma</b> → <b>Evacuación</b>.<br>La dirige el <b>Jefe de Emergencia</b>. Vías <b>horizontales y verticales</b>; mínimo <b>dos salidas en puntos opuestos</b>." },
{ t:"t20", q:"Sistema de disparo: repetición, semiautomática y automática", a:"<b>Repetición</b>: se recarga tras cada disparo con intervención manual.<br><b>Semiautomática</b>: se recarga sola, <b>un disparo</b> por accionamiento.<br><b>Automática</b>: dispara mientras se mantenga pulsado el disparador. <b>Prohibida a particulares en todo caso</b>." },
{ t:"t20", q:"Arma corta y arma larga", a:"<b>Corta</b>: cañón <b>≤ 30 cm</b> o longitud total <b>≤ 60 cm</b>. Pistolas y revólveres.<br><b>Larga</b>: cañón > 30 cm o longitud total > 60 cm. Fusiles, rifles y escopetas." },
{ t:"t20", q:"Escopeta cilíndrica frente a escopeta de choque", a:"<b>Cañón cilíndrico</b>: <b>dispersa el perdigón y agrupa las postas</b>.<br><b>Cañón de choque</b>: <b>agrupa el perdigón y dispersa las postas</b>.<br>Ánima lisa: alcance máximo <b>300 m</b>, eficaz <b>60 m</b>." },
{ t:"t20", q:"Las siete categorías de armas", a:"<b>1.ª</b> cortas · <b>2.ª1</b> largas de vigilancia y guardería · <b>3.ª1</b> largas rayadas deportivas, <b>3.ª2</b> escopetas y ánima lisa · <b>4.ª</b> aire comprimido · <b>5.ª</b> armas blancas no prohibidas · <b>6.ª</b> históricas (anteriores a <b>1890</b>) · <b>7.ª</b> anestésicas, ballestas, Flobert, arcos y detonadoras." },
{ t:"t20", q:"Armas reglamentarias del personal de seguridad", a:"<b>Vigilante de seguridad</b>: revólver <b>38 especial 4\"</b>; con arma larga, escopeta <b>12/70</b> con cartuchos de <b>12 postas en taco contenedor</b>.<br><b>Escolta privado</b>: pistola <b>9 mm Parabellum</b>.<br><b>Guarda rural</b>: armas rayadas de repetición. Norma: <b>Orden INT/318/2011</b>." },
{ t:"t21", q:"Datos del revólver 38 especial de 4 pulgadas", a:"Alcance eficaz <b>25 m</b> · peso <b>715 g</b> · <b>6 estrías dextrógiras</b> · cilindro de <b>6 cartuchos</b> · velocidad inicial <b>250 m/s</b> · el cilindro gira <b>60°</b> por disparo y bascula a la <b>izquierda</b>." },
{ t:"t21", q:"Las tres partes del revólver", a:"<b>Cañón</b> (conduce y estabiliza el proyectil), <b>armazón</b> (sostén de todas las piezas, lleva las orejetas) y <b>cilindro</b> (seis recámaras y taladro central para la barra del extractor)." },
{ t:"t21", q:"Simple acción frente a doble acción", a:"<b>Simple acción</b>: se lleva el martillo atrás con la mano; el disparador solo lo suelta.<br><b>Doble acción</b>: basta apretar la cola del disparador; la pieza <b>levante</b> monta el martillo. Da la <b>máxima rapidez</b> de tiro." },
{ t:"t21", q:"Partes y mecanismos de la pistola de 9 mm", a:"Partes: <b>armazón, bastidor de mecanismos, corredera y cañón</b>.<br>Mecanismos: <b>automatismo, cierre, alimentación, disparo, percusión, extracción, expulsión y seguridad</b>.<br>Cargador de <b>15 cartuchos</b>; la <b>uña extractora</b> va en la corredera." },
{ t:"t21", q:"Características de la escopeta 12/70", a:"Calibre <b>12</b> · <b>ánima lisa</b> · <b>5 cartuchos</b> en depósito (+1 en recámara) · cañón <b>350 mm</b> · de <b>repetición</b> por corredera o <i>pumping</i> · alcance máximo <b>300 m</b>, eficaz <b>60 m</b> · doble seguro, manual y automático." },
{ t:"t21", q:"Seguridad con la escopeta", a:"<b>En el campo de tiro</b>: descargada, ventana del cajón de mecanismos <b>abierta</b> y seguro puesto.<br><b>Para almacenaje</b>: descargada, ventana <b>cerrada</b> y gatillo bloqueado.<br>Se transporta con la boca de fuego <b>hacia arriba</b>, por encima de la cabeza del más alto del grupo." },
{ t:"t21", q:"La carabina", a:"Arma <b>rayada de repetición</b> con <b>cerrojo tipo Máuser</b>, calibre <b>9 mm Parabellum</b>, para <b>guardas particulares de campo</b>. Partes: cañón, cajón de mecanismos y culata. <b>No tiene corredera</b>." },
{ t:"t22", q:"Partes del cartucho metálico y del semimetálico", a:"<b>Metálico</b>: vaina, pistón, carga de proyección (pólvora) y bala.<br><b>Semimetálico</b> (escopeta): añade el <b>taco</b>, que sella la cámara de gas y actúa de <b>refrigerante</b> evitando que los perdigones se deformen o suelden." },
{ t:"t22", q:"Las tres partes de la vaina", a:"<b>Boca</b> (anterior) · <b>Cuerpo</b> (intermedia) · <b>Culote</b> (posterior; sobre él actúa la uña extractora).<br>Cañón liso: cartón con culote de latón. Cañón estriado: latón." },
{ t:"t22", q:"Pistón Berdan frente a pistón Bóxer", a:"<b>Berdan</b>: el yunque es <b>solidario al culote</b> de la vaina; <b>dos oídos</b>.<br><b>Bóxer</b>: el yunque va <b>a presión en la cápsula</b>; <b>un solo oído</b>. Permite recargar vainas, por lo que es más económico." },
{ t:"t22", q:"Los tres sistemas de percusión", a:"<b>Lefaucheux</b> — cápsula interior accionada por una varilla; en desuso.<br><b>Flobert</b> — fulminante en el reborde hueco; solo calibres 22 y 6 mm deportivos.<br><b>Central</b> — cápsula en el centro del culote; el usado hoy en casi todas las armas." },
{ t:"t22", q:"Los tres tipos normales de bala", a:"<b>De plomo</b> (90 % plomo, 5 % estaño, 5 % antimonio) · <b>Blindadas</b> (plomo con forro metálico) · <b>Semiblindadas</b> (recubrimiento parcial, de punta blanda o punta dura).<br>Componentes de la bala: <b>cuerpo, culote y punta u ojiva</b>." },
{ t:"t22", q:"Calibre real y calibre nominal", a:"<b>Real</b>: se mide entre <b>dos crestas</b> diametralmente opuestas del estriado.<br><b>Nominal</b>: entre <b>dos surcos</b> opuestos; coincide con el diámetro de la bala." },
{ t:"t22", q:"Puntería, precisión y dispersión", a:"<b>Puntería</b>: encarar alza, punto de mira y eje del cañón según la distancia y situación del blanco.<br><b>Dispersión</b>: los impactos se distribuyen alrededor de un punto, con mayor densidad cerca de él, aun en idénticas condiciones de tiro." },
/* ===== UF2676 ===== */
{ t:"t23", q:"¿Qué es la seguridad privada?", a:"La forma en que los <b>agentes privados</b> contribuyen a la reducción de posibles riesgos, ofreciendo una seguridad <b>adicional</b> más allá de la que provee la seguridad pública. Es una medida de <b>anticipación y prevención</b>." },
{ t:"t23", q:"Protección vs. seguridad", a:"La <b>protección</b> es la acción y efecto de proteger: un sistema integrado por medidas aplicables en función de lo que se quiera proteger. Es un término <b>más específico</b> que seguridad, porque busca aplicar medidas concretas." },
{ t:"t26", q:"Las tres técnicas de protección", a:"<ul><li><b>Integral</b>: cubre esfera profesional y personal (incluye dinámica y estática)</li><li><b>Dinámica</b>: protege en los desplazamientos</li><li><b>Estática</b>: custodia en un lugar fijo</li></ul>" },
{ t:"t24", q:"Requisitos de habilitación: los plazos que caen en el examen", a:"<ul><li><b>18</b> años (mayor de edad)</li><li>No sancionado: <b>2</b> años (grave) / <b>4</b> años (muy grave)</li><li>No separado de FCS o FFAA: <b>2</b> años</li><li>No condenado por intromisión ilegítima: <b>5</b> años</li></ul>" },
{ t:"t24", q:"¿Quién habilita al personal de seguridad privada?", a:"La <b>Dirección General de la Policía</b>, <b>excepto</b> los guardas rurales y sus especialidades, que corresponden a la <b>Dirección General de la Guardia Civil</b>. La habilita el Ministerio del Interior mediante tarjeta de identidad profesional." },
{ t:"t25", q:"Congruencia vs. proporcionalidad", a:"<b>Congruencia</b>: aplicar medidas de seguridad e investigación <b>proporcionadas y adecuadas a los riesgos</b>.<br><b>Proporcionalidad</b>: en el uso de las <b>técnicas y medios</b> de defensa e investigación." },
{ t:"t25", q:"Los 9 principios básicos de actuación", a:"Legalidad · Integridad · Protección · Dignidad · Corrección · Congruencia · Proporcionalidad · Reserva profesional · Colaboración con las FCS." },
{ t:"t27", q:"¿Qué es el peligro y cómo se mide?", a:"Situación —<b>acción o condición</b>— con potencial de producir un daño sobre una persona o cosa. Se detecta asignando valores a la <b>posibilidad</b> y a la <b>seriedad</b> mediante una <b>escala numérica</b>: a los más serios, los valores más altos." },
{ t:"t27", q:"Clasificación de riesgos", a:"<ul><li><b>Naturales</b>: inundaciones, rayos, incendios, terremotos</li><li><b>Tecnológicos</b>: fallos de instalaciones, corte eléctrico o de agua, fuego, explosión de equipos</li><li><b>Por accidente</b></li><li><b>Por malas acciones o comportamiento de personas</b>: intrusión, asalto, robo, amenaza de bomba, atentados, vandalismo, disturbios, huelgas</li></ul>" },
{ t:"t28", q:"Los dos pilares de la protección integral", a:"<b>Prevención</b>: actuaciones para <b>evitar</b> un suceso.<br><b>Protección</b>: actuaciones para <b>neutralizar el suceso ya acontecido</b>, con medios humanos y técnicos, con el fin de salvar la vida." },
{ t:"t28", q:"Las 5 medidas de seguridad de la Ley 5/2014", a:"<b>Física</b> (barreras) · <b>Electrónica</b> (detección) · <b>Informática</b> (integridad, confidencialidad y disponibilidad) · <b>Organizativa</b> (planificación, departamentos y planes) · <b>Personal</b>." },
{ t:"t29", q:"Teoría esférica de la protección", a:"Abrir un <b>espacio contenido en una esfera</b> cuyo <b>centro es la persona protegida</b>. Planifica la actuación en <b>tres planos</b>: <b>aéreo</b>, <b>superficial</b> y <b>subterráneo</b>." },
{ t:"t29", q:"Los tres círculos concéntricos", a:"<ul><li><b>1º (interior)</b>: escolta personal → cubrir, proteger y evacuar</li><li><b>2º</b>: puestos de seguridad → mantienen al protegido en su campo de observación</li><li><b>3º</b>: patrullas móviles y grupos de información → no vigilan al protegido</li></ul>" },
{ t:"t30", q:"Los 3 escalones o niveles de seguridad", a:"<b>Puestos de vigilancia</b> (observar y comunicar) · <b>Puestos de revisión y control</b> (filtro de acceso a área restringida) · <b>Puestos especiales de seguridad</b> (función específica dentro del dispositivo)." },
{ t:"t30", q:"¿Qué debe tener un cuarto seguro?", a:"Acceso <b>rápido y fácil</b>, buenas <b>comunicaciones</b>, <b>capacidad de defensa</b>, estar <b>limitado</b> y facilidad para prestar <b>primeros auxilios</b>." },
{ t:"t31", q:"Planes de seguridad temporales vs. permanentes", a:"<b>Temporales</b>: actividades no habituales, como un viaje; hay que coordinarse con el departamento de seguridad del lugar de destino.<br><b>Permanentes</b>: recorridos habituales; coordinación <b>más protocolizada</b> y evaluación constante." },
{ t:"t32", q:"Secuencia de actuación ante una agresión", a:"<b>1.</b> Avisar del ataque (tipo de agresión, agresor y dirección) · <b>2.</b> Cobertura (reducir superficie de blanco y silueta) · <b>3.</b> Evacuación al lugar seguro preestablecido · <b>4.</b> Neutralizar: ir <b>al arma</b>, no al cuerpo, situándose delante del agresor." },
{ t:"t32", q:"¿De cuántos miembros consta una cápsula de protección?", a:"No hay regla fija, pero es recomendable que esté formada de <b>uno a cinco miembros</b>." },
{ t:"t32", q:"Protección en escaleras y ascensores", a:"<b>Escaleras</b>: el protegido lo más cerca posible de la <b>pared</b>, el escolta próximo y el resto formando un <b>círculo</b>. Las mecánicas son más peligrosas.<br><b>Ascensor</b>: revisar espacio, hueco entre ascensor y techo, cables y maquinaria; el protegido va siempre con un escolta y el resto <b>sube por las escaleras</b>." },
{ t:"t32", q:"Líneas de control: colocación", a:"<b>Dos escoltas delante y dos detrás</b> del protegido, observando y controlando <b>las manos</b> de las personas que saludan." },
{ t:"t33", q:"Protección estática: interior y exterior", a:"<b>Interior</b>: habitaciones, escaleras, ascensores, puertas de entrada, patios, sótanos, terrazas.<br><b>Exterior</b>: periferia del inmueble, barrio y sus habitantes, puntos de observación y lugares donde ocultar explosivos (papeleras, buzones)." },
{ t:"t33", q:"¿Qué es una avanzada?", a:"La acción de <b>requisar el lugar</b> por un miembro del equipo <b>antes de la entrada</b> del protegido en lugares no explorados. Su misión: obtener información del destino y <b>establecer un perímetro de seguridad</b>." },
{ t:"t34", q:"Aspectos exigidos a un vehículo de seguridad (RD)", a:"<ul><li><b>Sistema de bloqueo</b> que corta la inyección de combustible + alarma acústica y luminosa (retardo máx. <b>2 minutos</b>)</li><li><b>Rejilla metálica</b> en el tubo del depósito</li><li>Sistema de <b>protección del depósito</b></li><li><b>Cierre especial de la caja</b>: candado o cerradura de seguridad</li></ul>" },
{ t:"t34", q:"¿Por qué debe llevar aire acondicionado el vehículo?", a:"Para permitir el <b>cierre total</b> del vehículo si fuese atacado con algún tipo de <b>gas</b>." },
{ t:"t35", q:"Factores que condicionan la conducción", a:"<b>Límites personales</b> (reacción, concentración, reflejos) · <b>Límites del vehículo</b> (características técnicas) · <b>Límites externos</b> (pavimento, tráfico, meteorología)." },
{ t:"t35", q:"Requisa del vehículo: orden", a:"<b>Exterior</b> (sistemática y preestablecida: artefactos adosados, cables, cerraduras, líquidos) → <b>interior</b> (asientos, bandeja trasera, guantera) → <b>motor y maletero</b>. Con perros adiestrados, espejos especiales o detectores de explosivos." },
{ t:"t36", q:"Conducción ofensiva vs. defensiva", a:"<b>Ofensiva</b>: aprovechar peso, potencia y velocidad para afrontar el ataque de forma <b>activa</b>, llegando a <b>colisionar</b>.<br><b>Defensiva</b>: <b>evitar colisionar</b>, variando la trayectoria mediante un <b>giro de 180º</b>." },
{ t:"t36", q:"Las 4 maniobras evasivas", a:"<b>En Y</b> (giro de 180º con marcha atrás intermedia) · <b>Vuelta corta</b> (se para el coche y se gira marcha atrás) · <b>California</b> (volante a la izquierda + freno de mano → derrape) · <b>Giro en J</b> (marcha atrás y giro de 180º para salir hacia delante)." },
{ t:"t36", q:"¿Qué maniobras se usan solo si no hay tiempo para reaccionar?", a:"La maniobra en <b>Y</b> y la <b>California</b>." },
{ t:"t38", q:"¿Cuándo hay caravana y cómo se clasifica?", a:"Hay caravana con, como mínimo, el <b>coche del protegido</b> y el <b>coche de los escoltas</b>.<br><b>Informales</b>: itinerario solo conocido por protegido y equipo.<br><b>Formales</b>: itinerario conocido por todos." },
{ t:"t38", q:"Los cuatro tipos de coche", a:"<b>Piloto</b> (equipo de seguridad + Policía local) · <b>VIP</b> (protegido, acompañantes y Jefe del Equipo) · <b>Adicional</b> (mismas prestaciones que el VIP, por si se estropea) · <b>Escolta</b> (resto del equipo)." },
{ t:"t38", q:"Posición de los coches de escolta", a:"<b>1 escolta</b>: detrás del VIP. <b>2 escoltas</b>: uno delante y otro detrás. <b>3 escoltas</b>: uno delante y dos detrás." },
{ t:"t38", q:"Ubicación dentro del coche del protegido", a:"<b>Conductor</b> y, a su lado, el <b>Jefe de seguridad</b> de la cápsula, delante. <b>Detrás</b>: el protegido y sus acompañantes. El resto de escoltas, en otro vehículo justo detrás." },
{ t:"t39", q:"Los cuatro tipos de itinerario", a:"<b>Principal</b> (el elegido tras estudiar el resto) · <b>Alternativo</b> (sustituye al principal) · <b>De evacuación</b> (a un centro de urgencia o asistencial) · <b>De fuga</b> (a puntos seguros elegidos de antemano)." },
{ t:"t39", q:"¿Cada cuánto se revisan los itinerarios?", a:"Cada <b>5 meses</b>. El estudio lo realizan <b>los escoltas con anterioridad a la salida</b>, valorando el grado de peligrosidad." },
{ t:"t39", q:"Puntos de peligro urbanos", a:"Llegada y salida del itinerario, <b>semáforos</b>, pasos de peatones, tráfico, obras en la vía, vehículos aparcados o en <b>doble fila</b> sospechosos y contenedores." },
{ t:"t40", q:"Escolta vs. guardaespaldas", a:"El <b>escolta</b> es un profesional habilitado, de seguridad pública o privada, y <b>puede portar armas de fuego</b>. El <b>guardaespaldas</b> es una persona <b>no profesional ni habilitada</b> contratada por un particular: <b>no puede portar armas</b> ni ejercer funciones de escolta." },
{ t:"t40", q:"El kubotán", a:"Arma de defensa personal: cilindro de metal, plástico o madera de unos <b>14 cm</b> y 1,5 de grosor. Usos: <b>estabilizar el puño</b>, aplicarlo en <b>puntos de presión</b> y ganar ventaja sobre <b>muñecas o dedos</b> del atacante." },
{ t:"t40", q:"¿Para qué llevan preservativos los escoltas?", a:"Para <b>taponar de forma aséptica heridas de bala</b>, evitando la hemorragia." },
{ t:"t40", q:"¿Cómo se comunican los escoltas de un dispositivo?", a:"Mediante <b>intercomunicadores</b> y usando el <b>Código Fonético Internacional</b>." },
{ t:"t41", q:"Los 6 valores éticos en seguridad", a:"Espíritu de servicio · Conciencia de grupo · Honor · Disciplina consciente · Excelencia en las labores · Respeto legal." },
{ t:"t40", q:"¿Qué abarca el entorno del protegido?", a:"A <b>él mismo</b>, su <b>familia</b>, su <b>círculo de amistades</b>, el <b>personal</b> que trabaje para él, el <b>público</b> en general y la <b>prensa</b> si es un personaje público." }
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
{ t:"t16", q:"Regla básica de movilización:", o:["Movilizar primero y luego inmovilizar","No mover al paciente sin inmovilizar antes","Inmovilizar solo si hay fractura visible"], c:[1], w:"Se prioriza la vida antes que la lesión, y se protege siempre la columna vertebral." },
/* ===== Test oficial del módulo instrumental — extinción de incendios ===== */
{ t:"t19", of:"Oficial 1", q:"¿Qué elementos son necesarios que coexistan para que se desarrolle un incendio?", o:["Combustible, oxidante, comburente y reductor","Combustible, oxidante, energía de activación y reacción en cadena","Combustible, oxidante, carburante y comburente"], c:[1], w:"Es el tetraedro del fuego. Eliminando cualquiera de los cuatro, el incendio se apaga." },
{ t:"t19", of:"Oficial 2", q:"Los fuegos capaces de generar temperaturas muy altas, no muy frecuentes y con dificultad para su extinción son los considerados:", o:["Clase D","Clase A","Clase E"], c:[0], w:"Clase D: metales especiales. La clase A son sólidos y la E, fuegos con corriente eléctrica." },
{ t:"t19", of:"Oficial 3", q:"¿Cuáles son los agentes extintores frecuentes utilizados?", o:["Espuma, aire, agua, sustituto de halones y anhídrido carbónico","Agua, espuma, sustituto de los halones, polvo y anhídrido carbónico","Agua, espuma, sustituto de halones, polvo y anhídrido carbónico"], c:[2], w:"Solución oficial C. Las opciones b y c difieren solo en la redacción; el aire de la opción a no es agente extintor." },
{ t:"t19", of:"Oficial 4", q:"Dentro de las espumas convencionales, ¿de qué clases pueden ser?", o:["Química y de baja expansión","Mecánica y de media expansión","Física y química"], c:[2], w:"Las convencionales son química y física o mecánica. Baja, media y alta expansión son subtipos de la física." },
{ t:"t19", of:"Oficial 5", q:"Indique la opción INCORRECTA sobre el polvo seco:", o:["No lo usaremos sobre máquinas y equipos delicados","Utilizado junto con espuma proporciona mayor sofocación sobre el incendio","Un polvo no debe ser tóxico, abrasivo ni conductor de la electricidad"], c:[1], w:"El polvo y la espuma son incompatibles: el polvo rompe la manta de espuma." },
{ t:"t19", of:"Oficial 6", q:"Indique la opción CORRECTA. El dióxido de carbono es un gas más pesado que el aire y también:", o:["No se puede aplicar sobre incendios de clase E por su humedad y baja temperatura, que lo hacen conductor","También le llaman sofocante o nieve carbónica","Es un agente extintor desarrollado para apagar específicamente los fuegos de clase D"], c:[1], w:"Al expandirse produce nieve carbónica. El agente específico de la clase D es el polvo especial." },
{ t:"t19", of:"Oficial 7", q:"¿En qué tipo de incendios se emplean con mayor eficacia los halones?", o:["Los halones están prohibidos por la CEE por el deterioro de la capa de ozono, salvo para usos críticos","Para los de clase A, al extinguir el fuego por inhibición","Para los de clase C, evitando que se produzca una reacción en cadena"], c:[0], w:"Protocolo de Montreal de 1987. Hoy se emplean sustitutos de los halones." },
{ t:"t19", of:"Oficial 8", q:"¿En qué medida se expresa la carga del agente extintor?", o:["Si es agua se expresará en litros","Si es espuma se expresará en kg","Si es dióxido de carbono se expresará en kg/m³"], c:[2], w:"Solución oficial C. Regla práctica: agua en litros y el resto de agentes en kilogramos." },
{ t:"t19", of:"Oficial 9", q:"¿Qué clasificación tendrán los extintores en función de su peso?", o:["Portátiles, manuales y sobre ruedas","Manuales, dorsales y sobre ruedas","Portátiles manuales, sobre ruedas y portátiles dorsales"], c:[2], w:"Manuales hasta 20 kg, dorsales hasta 30 kg y sobre ruedas por remolque." },
{ t:"t19", of:"Oficial 10", q:"¿Qué clasificación tendrán los extintores en función de su sistema de impulsión?", o:["Presión propia permanente, presión por reacción química, presión auxiliar por botellín y automático","Presión auxiliar por botellín, presión permanente, presión continua, presión auxiliar por botellín y automático","Presión auxiliar por botellín, presión auxiliar permanente, presión propia permanente, presión por reacción química y automático"], c:[2], w:"Son cinco sistemas de impulsión, no cuatro." },
{ t:"t19", of:"Oficial 11", q:"¿Qué clasificación tendrán los extintores en función de la sustancia extintora?", o:["Extintor de agua, de espuma química, de polvo y de anhídrido carbónico","Extintor de polvo, de agua, de dióxido de carbono y de anhídrido carbónico","Extintor de agua, de espuma química, de aire y de anhídrido carbónico"], c:[0], w:"Dióxido de carbono y anhídrido carbónico son lo mismo; el aire no es agente extintor." },
{ t:"t19", of:"Oficial 12", q:"Un extintor cuya sustancia es corrosiva y por su peligrosidad no debe utilizarse es el:", o:["Extintor de agua","Extintor de anhídrido carbónico","Extintor de espuma química"], c:[2], w:"La espuma química es corrosiva y está prácticamente en desuso." },
{ t:"t19", of:"Oficial 13", q:"Señale la opción INCORRECTA. Los simulacros de incendio tendrán por objeto:", o:["Familiarizar al personal en el uso de extintores","Efectuar al mismo tiempo operaciones de mantenimiento de los agentes extintores","Inculcar al personal serenidad y disciplina para obrar acertada y eficazmente"], c:[1], w:"El mantenimiento es una operación independiente; no se hace durante el simulacro." },
{ t:"t19", of:"Oficial 14", q:"Con anterioridad al uso de un extintor:", o:["Conocer en qué tipo de fuegos puede emplearse y leer su etiqueta de instrucciones","Abrir puertas y ventanas para ventilar el local","Dirigir el chorro a la parte alta de las llamas"], c:[0], w:"No deben abrirse puertas ni ventanas y el chorro se dirige a la base de las llamas." },
{ t:"t19", of:"Oficial 15", q:"En el momento de la extinción del incendio, indique la opción INCORRECTA:", o:["Dirigir el chorro en zigzag apagando por franjas de arriba hacia abajo para evitar salpicado de brasas","Si se inflaman las ropas, no correr; rodar por el suelo y envolverse en una manta o abrigo","El incendio se atacará en la misma dirección de su desplazamiento, desde su comienzo y de espaldas al viento"], c:[0], w:"El chorro se dirige a la base de las llamas, no de arriba hacia abajo." },
{ t:"t19", of:"Oficial 16", q:"¿Cuál de estas afirmaciones es la más correcta?", o:["Al detectar un incendio y si su clase lo permite, utilizaré la red de agua, que es el 2.º escalón de la lucha extintora","La respuesta anterior es correcta, pero previamente intentaré dominar el incendio con los extintores portátiles","Las BIE se encontrarán a menos de 100 m de cualquier punto de las fachadas"], c:[1], w:"Los extintores portátiles son el primer escalón; la red de agua, el segundo. Los 100 m corresponden a los hidrantes, no a las BIE." },
{ t:"t19", of:"Oficial 17", q:"En cuanto al uso de las BIE, indique la opción correcta:", o:["Se mantendrá alrededor de cada BIE una zona libre de obstáculos que permita su acceso y maniobrabilidad","Desenrollar la manguera con un fuerte tirón, alejándose rápidamente de la BIE","En las BIE de espuma, en incendios de líquidos se aplicará la espuma directamente"], c:[0], w:"Solución oficial A. La manguera se despliega por completo antes de abrir la válvula." },
{ t:"t19", of:"Oficial 18", q:"En los sistemas especiales de extinción, ¿cuál es su clasificación?", o:["Rociadores automáticos (sprinklers), agua pulverizada, polvo seco, anhídrido carbónico, gases sustitutivos de los halones y espuma física","Rociadores automáticos, agua a chorro, agua pulverizada, polvo seco, anhídrido carbónico y espuma física","Rociadores automáticos, agua pulverizada, polvo seco, anhídrido carbónico, dióxido de carbono y espuma química"], c:[0], w:"Seis sistemas. La opción c duplica el CO₂ y la b incluye agua a chorro, que no es sistema especial." },
{ t:"t19", of:"Oficial 19", q:"¿Cuál de los sistemas especiales tiene una eficacia del 96 %?", o:["Sistema de espuma física","Sistema de rociadores automáticos o sprinklers","Sistema de gases sustitutivos de los halones por inundación total"], c:[1], w:"Los sprinklers son el sistema especial más eficaz." },
{ t:"t19", of:"Oficial 20", q:"¿Qué aspectos, como mínimo, debe incluir el Plan de Emergencia contra incendios?", o:["Planos actualizados del edificio, normas de actuación de los ocupantes y documentos del equipo de seguridad contra incendios","Evacuación de zona de peligro, planos actualizados del edificio y normas generales a seguir","Planos actualizados del edificio, normas generales a seguir e instrucciones del equipo de seguridad contra incendios"], c:[0], w:"Los tres mínimos: planos, normas de actuación de los ocupantes y documentos del equipo de seguridad." },
{ t:"t19", of:"Oficial 21", q:"Indique la INCORRECTA respecto a la actuación ante un incendio:", o:["Notificar cuanto antes el incendio a un responsable de seguridad, con características del fuego y lugar","Actuar rápidamente para evacuar a las personas porque prima su seguridad sobre el pánico que se pueda generar","No usar ascensores y palpar las puertas antes de abrirlas; si está caliente buscar otra. Aislar el incendio"], c:[1], w:"La evacuación se ordena y dirige según el plan; la precipitación genera el pánico que se quiere evitar." },
{ t:"t19", of:"Oficial 22", q:"Respecto a la evacuación de un local o edificio:", o:["Seguir las indicaciones del equipo de seguridad y la señalización contra incendios, y ayudar en las labores auxiliares que requieran los bomberos","Si se inflaman las ropas, correr hasta la BIE más próxima para apagarlas con agua","Si hay humo, buscar la puerta de salida más cercana y evacuar al personal"], c:[0], w:"Con las ropas en llamas no se corre: se rueda por el suelo." },
{ t:"t19", of:"Oficial 23", q:"Las vías de evacuación de un local o edificio son:", o:["Vías de pasillos, puertas y escaleras","Vías horizontales y vías verticales","Vías de evacuación protegida y no protegida"], c:[1], w:"Horizontales (pasillos) y verticales (escaleras)." },
{ t:"t19", of:"Oficial 24", q:"¿Cuántas salidas deben tener como mínimo los locales con riesgo de incendio?", o:["Dos y ubicadas en puntos opuestos","Tres como mínimo, para el paso de un número mayor de personas","Dos como mínimo, verticales en relación a la vía de evacuación"], c:[0], w:"Dos salidas en puntos opuestos, para que un foco no bloquee las dos." },
{ t:"t19", of:"Oficial 25", q:"¿Quién asumirá la dirección de la evacuación si no existe otra persona encargada?", o:["El vigilante de seguridad","Siempre el Director del Plan de Autoprotección","El Jefe de Emergencia del edificio o local"], c:[2], w:"El Jefe de Emergencia dirige la evacuación." },
{ t:"t19", of:"Oficial 26", q:"En las normas a seguir en la evacuación, indique la INCORRECTA:", o:["Sin perder la calma, advertir con serenidad al resto de personas la necesidad de abandonar el local","Informar de la presencia de otras personas en lugares donde pueda no haber llegado la noticia del incendio","No recoger el coche del aparcamiento salvo indicación en contra del equipo de seguridad","Tener siempre prevista una vía de evacuación por si el incendio es de envergadura y hay que evacuar"], c:[3], w:"Solución oficial D: la vía de evacuación está prevista en el plan de antemano, no se improvisa según la envergadura." },
/* ===== Test oficial — comunicaciones ===== */
{ t:"t17", of:"Oficial 27", q:"A la estación responsable del correcto funcionamiento de la malla, cuyo indicativo es el más bajo, se la denomina:", o:["Estación secundaria","Estación directora","Estación de trabajo o de reserva"], c:[1], w:"Las secundarias llevan números correlativos a partir de la directora." },
{ t:"t17", of:"Oficial 28", q:"¿Qué elementos indispensables debe tener todo sistema de telecomunicación?", o:["Fuente, transmisor, medio de transmisión, receptor, destino y canal de transmisión","Fuente, transmisor, sistema de trabajo, receptor, destino y canal de transmisión","Fuente, transmisor, medio de transmisión, receptor y canal de transmisión"], c:[0], w:"El sistema de trabajo no es un elemento y el destino no puede faltar." },
{ t:"t17", of:"Oficial 29", q:"¿Cuáles son los componentes básicos de un teléfono portátil?", o:["Batería, antena, silenciador de ruidos, silenciador de frecuencias, potenciómetro, altavoz y micrófono","Batería, antena, potenciómetro, silenciador de ruidos, silenciador de frecuencias, altavoz, micrófono y pulsador de emisión","Fuente de alimentación, transmisor, medio de transmisión, antena, silenciador de frecuencias, micrófono y pulsador de emisión"], c:[1], w:"La lista completa incluye el pulsador de emisión." },
{ t:"t17", of:"Oficial 30", q:"Al poner en funcionamiento el radiotransmisor, indique la opción INCORRECTA:", o:["Cerciorarse de que la antena está conectada y apretada","Al reemplazar la batería, hacerlo siempre con el radiotransmisor desconectado","Al encenderlo, comprobar de inmediato el funcionamiento conectando con la emisora base u otro corresponsal"], c:[2], w:"No se ocupa el canal solo para probar: la comprobación se hace según el sistema de trabajo de la malla." },
{ t:"t17", of:"Oficial 31", q:"¿Cuándo es mayor la descarga de la batería del radiotransmisor?", o:["Al recibir, por eso hay que tener el volumen lo más bajo posible","Al emitir","Cuando se enciende con el volumen y el nivel de ruidos demasiado alto"], c:[1], w:"Emitir consume mucho más que recibir." },
{ t:"t17", of:"Oficial 32", q:"¿Cuáles son los tipos de llamadas que existen?", o:["Simple, colectiva, abreviada y múltiple","Simple, compuesta, múltiple y abreviada","Simple, colectiva, resumida y múltiple"], c:[0], w:"No existen ni la compuesta ni la resumida." },
{ t:"t17", of:"Oficial 33", q:"¿Cuáles serán las principales características del texto de un mensaje?", o:["Que sea conciso, breve y corto","Que sea conciso y breve","Que sea claro, conciso y breve"], c:[2], w:"Las tres: claro, conciso y breve, para ocupar el canal el menor tiempo posible." },
{ t:"t17", of:"Oficial 34", q:"¿Cómo se llama el sistema oficialmente aceptado por la Dirección General de Telecomunicaciones?", o:["Sistema Oficial Internacional","Alfabeto fonético internacional","Sistema Alfabético Internacional"], c:[1], w:"Alfa, Bravo, Charlie… Se usa para deletrear sin ambigüedad." },
{ t:"t17", of:"Oficial 36", q:"Sobre la autenticidad en las comunicaciones, indique la opción INCORRECTA:", o:["Es una medida de seguridad y será siempre monodireccional: solo uno interroga y el otro autentifica","La autentificación será siempre mutua","Es una medida de seguridad para identificar a una estación como conocida o acreditar que el mensaje tiene procedencia autorizada"], c:[1], w:"La autenticación es monodireccional, no mutua." },
{ t:"t17", of:"Oficial 37", q:"¿Cuál de estas reglas NO pertenece al correcto uso del teléfono?", o:["Cortesía, ritmo de voz, claridad y dicción, capacidad de escucha, confianza, organización, concentración e identificación","Cortesía, ritmo de voz, claridad y dicción, capacidad de escucha, capacidad de respuesta, confianza, organización, concentración, identificación e identidad privada","Cortesía, ritmo de voz, capacidad de escucha, capacidad de respuesta, confianza, organización, concentración, identificación e identidad privada"], c:[1], w:"Solución oficial B. La lista completa del manual es la que aparece en esa opción; la pregunta busca la que no encaja como respuesta." },
{ t:"t17", of:"Oficial 38", q:"¿Qué aspectos se distinguen en la voz como componente de la comunicación telefónica?", o:["Entonación, articulación y elocución","Entonación, articulación y concisión","Articulación, brevedad y concisión"], c:[0], w:"Articulación = mensaje comprensible; elocución = velocidad adecuada." },
{ t:"t17", of:"Oficial 39", q:"Sobre el lenguaje para conseguir el éxito de la transmisión, indique la INCORRECTA:", o:["Hablaremos siempre en presente, situando al interlocutor en el centro de la acción y con vocabulario sencillo","Utilizaremos un vocabulario que nuestro interlocutor pueda entender perfectamente","Repetiremos palabras y frases aunque el interlocutor haya quedado enterado, lo que da mayor seguridad"], c:[2], w:"Repetir lo ya entendido alarga la comunicación sin aportar nada." },
{ t:"t17", of:"Oficial 40", q:"Recibe en un control de accesos una llamada de amenaza de bomba. ¿Qué tres preguntas clave debe hacer?", o:["Dónde está colocado el artefacto, cuándo hará explosión y de qué clase de artefacto se trata","Qué tamaño tiene el artefacto, por qué lo puso y qué explosivo lleva","Dónde está colocado, de qué clase de artefacto se trata y qué tamaño tiene"], c:[0], w:"Dónde, cuándo y qué clase: lo que permite acotar la zona y decidir la evacuación." },
/* ===== Test oficial — informática ===== */
{ t:"t18", of:"Oficial 41", q:"¿Cómo se llama el ordenador que, formando parte de una red local o de internet, provee servicios a otras computadoras llamadas clientes?", o:["Ordenador PC de sobremesa","Workstation","Servidor"], c:[2], w:"La workstation es un sobremesa para trabajos técnicos y científicos." },
{ t:"t18", of:"Oficial 42", q:"¿Qué tipo de operaciones pueden realizar los ordenadores?", o:["Entrada de datos, salida de datos, recuperación, almacenamiento, transmisión, recepción y tratamiento","Entrada de datos, salida de datos, almacenamiento, transmisión, recepción y tratamiento","Entrada de datos, salida de datos, recuperación, almacenamiento, recepción y tratamiento"], c:[0], w:"Son siete operaciones; las otras opciones omiten la recuperación o la transmisión." },
{ t:"t18", of:"Oficial 43", q:"¿Qué diferencia hay entre un programa y un lenguaje?", o:["El programa es el conjunto de instrucciones que controlan el ordenador; el lenguaje de programación es el conjunto de reglas y símbolos que permiten darle órdenes","Es lo mismo: dos formas de llamar al conjunto de instrucciones","El programa es el lenguaje de bajo nivel y el lenguaje es el lenguaje máquina"], c:[0], w:"Programa = instrucciones. Lenguaje = reglas y símbolos para escribirlas." },
{ t:"t18", of:"Oficial 44", q:"¿Cuáles son los componentes principales de la CPU?", o:["Unidad de control, memoria, disco duro, microprocesador y placa base","Unidad de control, memoria, disco duro, placa base y lectora de CD/DVD","Unidad de control, memoria y unidad aritmético-lógica o ALU"], c:[2], w:"Disco duro, placa base y lectoras son periféricos o componentes externos a la CPU." },
{ t:"t18", of:"Oficial 45", q:"¿Cuáles son los tipos de memoria que existen?", o:["Memoria de lectura y escritura o RAM, memoria de solo lectura o ROM y memoria caché","RAM, ROM, memoria caché y memoria de disco duro","RAM, ROM, memoria caché, memoria de disco duro y la almacenable en un pendrive"], c:[0], w:"El disco duro y el pendrive son almacenamiento, no memoria del sistema." },
{ t:"t18", of:"Oficial 46", q:"¿Cuántos tipos de periféricos existen?", o:["De entrada, de salida y de escritura","De entrada, de salida y de entrada/salida","De entrada y de salida"], c:[1], w:"Tres clases: entrada, salida y entrada/salida (disco duro, pendrive, pantalla táctil)." },
{ t:"t18", of:"Oficial 47", q:"¿Cuál es la diferencia entre hardware y software?", o:["Hardware es el lenguaje de programación y software son los programas","Hardware son los dispositivos físicos, como la CPU o el monitor, y software es todo el conjunto intangible de datos y programas","Hardware es un programa que adapta el lenguaje máquina y software son programas como Word, Excel o PowerPoint"], c:[1], w:"Físico frente a intangible." },
{ t:"t18", of:"Oficial 48", q:"Dentro de los periféricos de SALIDA, diga cuál de estas opciones es la INCORRECTA:", o:["Monitor, impresora, escáner, altavoces, lectora de CD","Monitor, impresora, altavoces, lectora de CD, lectora de DVD","Impresora, monitor, altavoces, lectora de CD"], c:[0], w:"El escáner es un periférico de entrada." },
{ t:"t18", of:"Oficial 49", q:"Dentro de los periféricos de ENTRADA, diga cuál de estas opciones es la INCORRECTA:", o:["Teclado, ratón, pendrive, disco duro","Monitor, webcam, teclado, ratón","Pendrive, ratón, webcam, micrófono"], c:[1], w:"El monitor es un periférico de salida." },
{ t:"t18", of:"Oficial 50", q:"Dentro de los periféricos de ENTRADA Y SALIDA, diga cuál es la CORRECTA:", o:["Teclado, ratón, altavoces, impresora","Monitor, webcam, teclado, ratón","Disco duro, pendrive, pantalla táctil"], c:[2], w:"Los de entrada/salida escriben y leen: disco duro, pendrive y pantalla táctil." },
/* ===== Cuestionario oficial de armamento y tiro ===== */
{ t:"t22", of:"Armas 1", q:"¿Qué diferencia hay entre una bala y un cartucho?", o:["Es lo mismo, son formas distintas de hablar del mismo elemento","El cartucho es la munición de escopeta y la bala la del arma corta","El cartucho contiene la pólvora y la bala es el proyectil que sale disparado"], c:[2], w:"El cartucho es el conjunto: vaina, pistón, pólvora y bala." },
{ t:"t20", of:"Armas 2", q:"¿Cuáles son las principales partes de un arma para su estudio?", o:["Cañón, seguros, cargador, disparador, martillo y elementos de puntería","Seguros, cañón, recámara, cargador, ánima y elementos de puntería","Elementos de puntería, cañón, cargador, cerrojo, corredera, seguros, recámara y ánima"], c:[1], w:"Elementos comunes: cañón, recámara, cargador, elementos de puntería y seguros." },
{ t:"t20", of:"Armas 3", q:"¿Cómo se llama la parte del arma donde, alojado el cartucho y una vez acerrojada y alimentada, se produce el disparo?", o:["Cañón e interiormente su ánima","Recámara","Cargador"], c:[1], w:"La recámara es donde se aloja el cartucho en el momento del disparo." },
{ t:"t20", of:"Armas 4", q:"Por su velocidad de tiro, ¿cómo se llama el arma que, tras la primera carga y accionamiento del disparador, realiza todas las operaciones siguientes mientras el disparador esté pulsado?", o:["Repetición","Automáticas","Semiautomáticas"], c:[1], w:"La semiautomática solo dispara una vez por cada accionamiento." },
{ t:"t20", of:"Armas 5", q:"¿Se pueden tener armas automáticas de las categorías 2.ª2 y 3.ª2 cuya capacidad de carga sea inferior a cinco cartuchos incluido el de la recámara?", o:["Sí, porque no supera los cinco cartuchos de capacidad","No, porque no soy funcionario especialmente habilitado","No, en ningún caso"], c:[2], w:"Las armas automáticas son de guerra: prohibidas a particulares en todo caso." },
{ t:"t20", of:"Armas 6", q:"Según la clasificación por su ánima, ¿cómo se clasifican las armas de fuego?", o:["Lisas y estriadas","Estriadas y a dextrorsum","Lisas y a sinistrorsum"], c:[0], w:"Dextrorsum y sinistrorsum son sentidos del rayado, no clases de ánima." },
{ t:"t20", of:"Armas 7", q:"Las armas de calibre igual o superior a 20 mm están prohibidas, pero ¿puede un arma de calibre inferior ser de guerra y por tanto estar prohibida?", o:["No, nunca; solo las de calibre igual o superior a 20 mm","No, porque entonces toda arma inferior a 20 mm estaría prohibida","Sí, si así lo considera el Ministerio de Defensa o si el arma se modifica sustancialmente sin autorización"], c:[2], w:"El Ministerio de Defensa puede declarar de guerra armas de calibre inferior." },
{ t:"t20", of:"Armas 8", q:"¿Qué medidas debe tener un arma para ser considerada corta?", o:["Longitud total máxima de 30 cm y cañón menor de 60 cm","Cañón de 30 cm como máximo o longitud total del arma de 60 cm","Cañón de 30 cm como máximo o longitud total del arma de 70 cm"], c:[1], w:"Cañón ≤ 30 cm o longitud total ≤ 60 cm." },
{ t:"t20", of:"Armas 9", q:"Registra el bolso de un joven que ha hurtado un reproductor y encuentra un spray de defensa personal. Su actuación podría ser:", o:["Retirárselo automáticamente y entregarlo a las FCS porque el Reglamento de Armas los prohíbe","Actuar así y además preguntar dónde lo compró para decírselo a las FCS","Comprobar el spray, mirar las normas sanitarias y, si el joven es mayor de edad, podrá portarlo"], c:[2], w:"Algunos sprays de defensa están permitidos a mayores de edad si cumplen la normativa sanitaria." },
{ t:"t20", of:"Armas 10", q:"¿A qué categoría pertenece el revólver del 38 especial de 4 pulgadas?", o:["3.ª2","2.ª1","1.ª"], c:[2], w:"Primera categoría: armas de fuego cortas (pistolas y revólveres)." },
{ t:"t20", of:"Armas 11", q:"¿A qué categoría pertenece la carabina del calibre 5,6 (22 americano)?", o:["3.ª2","4.ª1","3.ª1"], c:[2], w:"3.ª1: armas largas rayadas para tiro deportivo." },
{ t:"t20", of:"Armas 12", q:"¿En qué categoría se encuadra una escopeta de ánima lisa o con rayas para facilitar el plomeo?", o:["3.ª2","3.ª1","4.ª1"], c:[0], w:"3.ª2: escopetas y demás armas de ánima lisa." },
{ t:"t20", of:"Armas 13", q:"¿En qué categoría se encuadra la escopeta 12/70 de émbolo utilizada por el vigilante de seguridad?", o:["3.ª2","2.ª1","2.ª2"], c:[1], w:"2.ª1: armas largas para vigilancia y guardería." },
{ t:"t20", of:"Armas 14", q:"¿A qué categoría pertenece un revólver detonador?", o:["7.ª6","4.ª2","1.ª"], c:[0], w:"Séptima categoría. El manual lo sitúa en el apartado de revólveres y pistolas detonadoras y lanzabengalas; la solución oficial marca la única opción de 7.ª." },
{ t:"t20", of:"Armas 15", q:"¿A qué categoría pertenece una ballesta?", o:["3.ª2","2.ª1","2.ª2"], c:[0], w:"Atención: la ballesta es 7.ª2, pero el enunciado oficial no ofrece esa opción y la solución dada es la A. Recuerde el dato correcto: ballesta = categoría 7.ª2." },
{ t:"t20", of:"Armas 16", q:"¿Cuál de estas afirmaciones es del todo correcta?", o:["El vigilante de seguridad de servicio utilizará el revólver del 38 especial de 4\" y la escopeta del 12/70 cuando esté autorizado para armas largas","La anterior es correcta, pero en la escopeta 12/70 los cartuchos serán de 12 postas en un taco contenedor","La b no es correcta porque las postas están prohibidas"], c:[1], w:"La Orden INT/318/2011 concreta los cartuchos de 12 postas en taco contenedor." },
{ t:"t20", of:"Armas 17", q:"¿Cuál será el arma reglamentaria que utilizará el escolta privado?", o:["Carabina del calibre 9 mm parabellum","Revólver del 38","Pistola semiautomática de 9 mm parabellum"], c:[2], w:"El revólver del 38 es del vigilante; la pistola de 9 mm, del escolta." },
{ t:"t20", of:"Armas 18", q:"Escopetas y carabinas serán siempre:", o:["Armas largas","De cañón estriado","Armas de defensa"], c:[0], w:"La escopeta es de ánima lisa, así que no siempre son estriadas." },
{ t:"t21", of:"Armas 19", q:"Si en el revólver del 38 accionamos el disparador sin haber desplazado el martillo percutor, lo estamos utilizando:", o:["Simple acción","Doble acción","En repetición"], c:[1], w:"En doble acción el propio disparador monta y suelta el martillo." },
{ t:"t21", of:"Armas 20", q:"¿Cuántas estrías tiene el ánima del revólver del 38 especial de 4 pulgadas?", o:["Seis","Cuatro a dextrorsum","Ninguna de las anteriores"], c:[0], w:"Seis estrías y seis campos, en sentido dextrorsum." },
{ t:"t21", of:"Armas 21", q:"¿Cuál de estas afirmaciones es la más correcta sobre el revólver del 38 especial de 4\"?", o:["Su cilindro tiene cinco depósitos para la munición","Su cilindro tiene cinco depósitos de munición y una recámara cuando se alinea con el cañón","Su cilindro tiene 6 depósitos de munición para las balas"], c:[1], w:"El cilindro aloja seis cartuchos; la solución oficial recoge el matiz de que el alojamiento alineado con el cañón pasa a llamarse recámara." },
{ t:"t21", of:"Armas 22", q:"¿Cuáles son las partes fundamentales del revólver del 38 especial de 4\"?", o:["Armazón, cañón y cilindro","Tambor, cañón y cilindro","Cañón, cilindro y disparador"], c:[0], w:"Tres partes: cañón, armazón y cilindro." },
{ t:"t21", of:"Armas 23", q:"¿Dónde se encuentra la barra del extractor en el revólver del 38?", o:["En la parte superior del cilindro","En un taladro central en el cilindro","En su parte inferior"], c:[1], w:"El taladro central del cilindro aloja la barra del extractor y el eje de giro." },
{ t:"t21", of:"Armas 24", q:"Las piezas que impiden que los cartuchos salgan de sus depósitos y obstaculicen el giro del cilindro son:", o:["Las orejetas","El bulón","Los topes del cilindro"], c:[0], w:"Las orejetas forman parte del armazón." },
{ t:"t20", of:"Armas 25", q:"El arma reglamentaria del vigilante de seguridad para los diferentes servicios puede ser:", o:["Revólver del 38 de cuatro pulgadas y la escopeta 12/70","Revólver del 38 de cuatro pulgadas y pistola de 9 mm","Revólver del 38 y carabina de distintos calibres"], c:[0], w:"La pistola es del escolta y la carabina, del guarda rural." },
{ t:"t21", of:"Armas 26", q:"En el revólver del 38, ¿qué misión tiene la pieza denominada levante?", o:["Empujar el martillo a su posición más retrasada cuando se dispara en doble acción","Levantar la biela del disparador para producir el disparo","Abatir el martillo cuando se dispara en doble acción"], c:[0], w:"El levante monta el martillo al accionar el disparador en doble acción." },
{ t:"t21", of:"Armas 27", q:"En el revólver del 38, la interposición de masas ¿a qué mecanismo corresponde?", o:["Al de percusión","Al de seguridad","Al de disparo"], c:[1], w:"El seguro por interposición de masas impide el disparo accidental." },
{ t:"t21", of:"Armas 28", q:"En el revólver del 38, para conseguir la máxima rapidez en la ejecución del disparo emplearemos:", o:["Doble acción","Municionar todos los cartuchos y además llevar uno en recámara","Simple acción"], c:[0], w:"La doble acción dispara sin montar previamente el martillo." },
{ t:"t21", of:"Armas 29", q:"Al extraer las vainas del revólver tras el tiro, ¿hacia qué lado cae el cilindro?", o:["Hacia el derecho, tras presionar el pestillo y por gravedad","Simplemente hacia el izquierdo, por gravedad","Depende de si durante el disparo hubo algún atasco"], c:[1], w:"El cilindro bascula a la izquierda." },
{ t:"t21", of:"Armas 30", q:"¿Puede la pistola semiautomática de 9 mm parabellum funcionar, igual que el revólver, en simple o doble acción?", o:["Solo en simple acción, pues tiene corredera, de la que carece el revólver","En simple acción, pues su sistema de seguridad le impide la doble acción","En ambas acciones"], c:[2], w:"Dispara en simple y en doble acción." },
{ t:"t21", of:"Armas 31", q:"¿Qué une el soporte basculante en forma de L del revólver del 38?", o:["Une el cilindro y lo fija a la barra del extractor para que no caiga","Une el grupo cilindro y el armazón","Une el cilindro al cañón para que pueda cerrarse y alinearse a la boca de fuego"], c:[1], w:"El soporte basculante enlaza el grupo cilindro con el armazón." },
{ t:"t21", of:"Armas 32", q:"¿De qué tres partes se compone el disparador?", o:["Cabeza, cuerpo y cola","Cuerpo, cola y biela basculante del disparador","Cabeza, cuerpo y base"], c:[0], w:"Cabeza, cuerpo y cola." },
{ t:"t21", of:"Armas 33", q:"¿Cómo se llama el orificio por donde asoma la aguja percutora cuando el martillo la golpea?", o:["Orificio de la ventana del cuerpo del armazón","Orificio del bulón de cierre","Orificio del grano del fogón"], c:[2], w:"El grano del fogón." },
{ t:"t21", of:"Armas 34", q:"¿A qué pieza está unida la pieza denominada levante?", o:["Al disparador, ya que al presionarlo amartilla el arma y acciona la doble acción","Al martillo","Al armazón, y dentro de este al disparador en un extremo y al martillo en el otro"], c:[1], w:"Solución oficial B: el levante actúa sobre el martillo." },
{ t:"t21", of:"Armas 35", q:"¿De qué partes se compone el martillo percutor?", o:["Cabeza, cuerpo y cola","Cuerpo, cabeza y base","Cabeza, cuerpo y diente de disparo"], c:[1], w:"Solución oficial B. Ojo: cabeza, cuerpo y cola es el disparador." },
{ t:"t21", of:"Armas 36", q:"¿En qué mecanismo del revólver del 38 se encuentra la cabeza estrellada del cilindro?", o:["En el mecanismo de extracción","En el mecanismo de fijación del cilindro","En el mecanismo de municionamiento"], c:[0], w:"La cabeza estrellada empuja las vainas hacia fuera." },
{ t:"t20", of:"Armas 37", q:"¿A qué categoría pertenece la pistola de 9 mm parabellum de los escoltas privados?", o:["A la 2.ª1, ya que se encuadra en vigilancia y guardería","A la 1.ª, porque es un arma corta","A la 4.ª1, ya que es semiautomática y de doble acción"], c:[1], w:"Primera categoría: todas las armas cortas." },
{ t:"t21", of:"Armas 38", q:"¿En qué partes se divide la pistola semiautomática de 9 mm parabellum?", o:["Armazón, corredera, cañón y mecanismos","Corredera, armazón, cañón y cargador","Corredera, cañón, armazón y automatismos"], c:[0], w:"Armazón, bastidor de mecanismos, corredera y cañón, más sus mecanismos." },
{ t:"t21", of:"Armas 39", q:"En la pistola de 9 mm, ¿dónde va montada la corredera?", o:["Sobre el cañón, para facilitar la extracción de las vainas en el retroceso","Sobre los mecanismos, activando con su movimiento todos los automatismos","Sobre el armazón o armadura, sujeta por unos canales que facilitan el movimiento"], c:[2], w:"Va guiada por los canales del armazón." },
{ t:"t21", of:"Armas 40", q:"¿De qué partes se compone el cañón de la pistola de 9 mm?", o:["Recámara, ánima y anclajes","Recámara, ánima, anclajes y elementos de puntería","Recámara, anclajes, ánima y muelle recuperador"], c:[0], w:"Los elementos de puntería van en la corredera y el muelle recuperador es del mecanismo de automatismo." },
{ t:"t21", of:"Armas 41", q:"¿Qué función tienen los anclajes de cadeneta o rampa del cañón de la pistola de 9 mm?", o:["Que se sujeten a la corredera para que no salga despedida por la fuerza de los gases","Que se sujeten a la parte superior del cargador facilitando el acceso de los cartuchos","Que se sujeten al armazón, facilitando el basculado y el movimiento de retroceso de la corredera"], c:[2], w:"Sujetan el cañón al armazón y permiten su basculado." },
{ t:"t21", of:"Armas 42", q:"El macizo posterior rayado de la corredera de la pistola de 9 mm, con el que se monta el arma llevándola a su recorrido máximo, ¿a qué mecanismo pertenece?", o:["Al mecanismo de alimentación","Al mecanismo de disparo","Al mecanismo de automatismo"], c:[0], w:"El macizo trasero de la corredera es el cerrojo: cierra la recámara y empuja los cartuchos." },
{ t:"t21", of:"Armas 43", q:"¿Cuántas estrías dextrorsum tiene el ánima de la pistola de 9 mm, aunque varíe según modelos?", o:["Seis","Cinco, para facilitar el giro en el sentido de las agujas del reloj","Cinco, para facilitar el giro en sentido contrario a las agujas del reloj"], c:[0], w:"Seis estrías dextrorsum." },
{ t:"t21", of:"Armas 44", q:"¿Cómo se llama la pieza cuya misión es mantener la recámara cerrada en el disparo y evitar la fuga de gases?", o:["La zona de aguja percutora o grano de fogón","El cartucho siguiente al que ya está en recámara","La corredera"], c:[2], w:"El macizo trasero de la corredera actúa de cerrojo." },
{ t:"t21", of:"Armas 45", q:"¿Dónde se encuentra la uña extractora de la pistola de 9 mm?", o:["En la corredera","En el armazón, junto a la recámara","En el armazón, encima y en la parte posterior de las guías de la corredera"], c:[0], w:"El extractor va en la corredera; el expulsor, en el bastidor de mecanismos." },
{ t:"t20", of:"Armas 46", q:"¿A qué categoría pertenece la escopeta de émbolo del calibre 12/70, de repetición, para vigilantes de seguridad?", o:["A la 3.ª, ya que es una escopeta y puede usarse para vigilancia y guardería","A la 2.ª1, ya que es para vigilancia y guardería","A la 2.ª2, ya que es arma de fuego larga y rayada no clasificada como de guerra"], c:[1], w:"Las armas largas de vigilancia y guardería son 2.ª1." },
{ t:"t21", of:"Armas 47", q:"¿Qué capacidad de cartuchos tiene la escopeta de émbolo del calibre 12/70?", o:["Tres cartuchos en el cargador y uno más en la recámara","Cinco cartuchos en el depósito de munición y uno más en la recámara","Cuatro en el depósito de munición y uno más en la recámara"], c:[1], w:"Cinco en el tubo depósito más uno en recámara." },
{ t:"t21", of:"Armas 48", q:"¿Cuáles son las principales partes de la escopeta de émbolo del calibre 12/70?", o:["Culata, cañón, caja de mecanismos y depósito de munición","Cañón, culata, caja de mecanismos y cargador","Caja de mecanismos, culata, cañón, depósito de munición y corredera"], c:[1], w:"Solución oficial B. El manual desglosa seis grupos: cañón, carcasa, cerrojo, disparo, asta y culata." },
{ t:"t20", of:"Armas 49", q:"¿A qué categoría pertenece la carabina de repetición por cerrojo, calibre 5,6 mm y 9 mm parabellum, para guardas de campo?", o:["A la 3.ª2, ya que son escopetas","A la 2.ª1, ya que son para vigilancia y guardería","A la 4.ª1, donde se encuadran las carabinas"], c:[1], w:"Como arma larga de guardería, 2.ª1." },
{ t:"t21", of:"Armas 50", q:"En la carabina de repetición del calibre 5,6 mm para guardería de campo, ¿dónde va montada la corredera?", o:["Sobre el cañón, para facilitar la extracción de las vainas y el alojamiento manual del cartucho","Sobre los mecanismos, activando con su movimiento todos los automatismos","Ninguna de las anteriores es correcta"], c:[2], w:"La carabina funciona por cerrojo tipo Máuser: no tiene corredera." },
{ t:"t22", of:"Armas 51", q:"El cartucho con culote metálico y el resto de la vaina no metálico, apto para armas de ánima lisa, se denomina:", o:["Cartucho de escopeta para caza","Cartucho semimetálico","Cartucho metálico","Cartucho ordinario"], c:[1], w:"Semimetálico: es el de escopeta y añade el taco." },
{ t:"t22", of:"Armas 52", q:"Los componentes de un cartucho metálico son:", o:["Vaina, pistón, carga de proyección y perdigones o postas","Vaina, pistón, carga de proyección y bala","Vaina, pistón, pólvora, taco y bala","Vaina, pistón, pólvora, taco y bala o perdigones"], c:[1], w:"Cuatro elementos. El taco solo aparece en el semimetálico." },
{ t:"t22", of:"Armas 53", q:"¿Cómo se llama la parte posterior de la vaina, sobre la que actúa la uña extractora?", o:["Cuerpo de la vaina","Vaina abotellada","Boca de la vaina","Culote de la vaina"], c:[3], w:"Boca (anterior), cuerpo (intermedia) y culote (posterior)." },
{ t:"t22", of:"Armas 54", q:"Señale cuál de las siguientes vainas posee el yunque incorporado:", o:["Bóxer","Tetrinox","Berdan","Culote reforzado"], c:[2], w:"En el Berdan el yunque es solidario al culote de la vaina; en el Bóxer va en la cápsula." },
{ t:"t22", of:"Armas 55", q:"El pistón Bóxer tiene:", o:["3 oídos","2 oídos","1 oído","No tiene oídos, sino un yunque metálico"], c:[2], w:"Bóxer: un oído. Berdan: dos." },
{ t:"t22", of:"Armas 56", q:"Los componentes de una bala son:", o:["Cuerpo, culote y punta u ojiva","Cuerpo, vaina, culote y punta u ojiva","Reforzamiento, cuerpo, culote, punta y ojiva","Cuerpo, vaina, culote, taco, carga de proyección y punta u ojiva"], c:[0], w:"La vaina y la pólvora son del cartucho, no de la bala." },
{ t:"t22", of:"Armas 57", q:"¿De qué tres tipos pueden ser las balas?", o:["Blindadas, semiblindadas, de plomo o de latón","Blindadas, semiblindadas y de plomo","Semiblindadas, blindadas, metálicas y semimetálicas","Para arma larga rayada y para arma de ánima lisa"], c:[1], w:"Tres tipos normales: de plomo, blindadas y semiblindadas." },
{ t:"t22", of:"Armas 58", q:"Los componentes de un cartucho semimetálico son:", o:["Cuerpo, culote, punta u ojiva","Vaina, pistón, pólvora, taco, tapa y proyectiles","Cuerpo, culote, perdigones, vaina y pólvora","Vaina, pistón, pólvora y perdigones"], c:[1], w:"Añade el taco y la tapa respecto al metálico." },
{ t:"t22", of:"Armas 59", q:"¿Cómo se llama el elemento que impide que los perdigones se fundan, deformen o suelden por la temperatura de los gases?", o:["La vaina, que actúa de refrigerante","El taco, que actúa como refrigerante","El pistón, que separa la pólvora de los perdigones","La tapa, que al separarse deja entrar aire que refrigera los perdigones"], c:[1], w:"El taco sella la cámara de gas y actúa de refrigerante." },
{ t:"t22", of:"Armas 60", q:"¿Qué tipo de proyectiles se pueden disparar con cañones de ánima lisa?", o:["Perdigones, postas y proyectiles de cañón estriado","Perdigones y balas solamente","Postas, perdigones y balas","Postas, balas, perdigones y bolas de goma para antidisturbios"], c:[2], w:"Postas, perdigones y balas." },
/* ===== UF2676 · incluye las autoevaluaciones del manual ===== */
{ t:"t24", q:"¿Qué requisitos son necesarios para la habilitación de profesionales de la seguridad privada?", o:["Formación previa","Ser ciudadano del mundo","Carecer de antecedentes penales"], c:[0,2], w:"Art. 28 de la Ley 5/2014. La nacionalidad exigida es la de un Estado de la UE, del EEE o de un tercer Estado con convenio: no vale «ciudadano del mundo».", of:"Autoevaluación UD1 · 1" },
{ t:"t25", q:"¿Qué principio de actuación implica la aplicación de las medidas de seguridad y de investigación de manera proporcionada a los riesgos?", o:["Corrección","Proporcionalidad","Congruencia"], c:[2], w:"<b>Congruencia</b> = medidas adecuadas y proporcionadas <b>a los riesgos</b>. La <b>proporcionalidad</b> se refiere al uso de las técnicas y medios de defensa.", of:"Autoevaluación UD1 · 2" },
{ t:"t29", q:"¿Qué teoría consiste en abrir un espacio contenido en una esfera cuyo centro sería la persona protegida?", o:["Teoría esférica de la protección","Teoría de los círculos concéntricos","Teoría estática de la protección"], c:[0], w:"La teoría esférica actúa en tres planos: aéreo, superficial y subterráneo.", of:"Autoevaluación UD1 · 3" },
{ t:"t23", q:"Completa: «La ______ es un sistema integrado por medidas aplicables en función de lo que se quiera proteger».", o:["Seguridad","Protección","Actuación"], c:[1], w:"La protección es más específica que la seguridad: aplica medidas concretas para garantizarla.", of:"Autoevaluación UD1 · 4" },
{ t:"t32", q:"«La evacuación tiene el objetivo de disminuir la superficie de blanco y silueta del protegido».", o:["Verdadero","Falso"], c:[1], w:"Falso: ese es el objetivo de la <b>cobertura</b> corporal. La evacuación es el traslado y alejamiento rápido a un lugar de seguridad previamente establecido.", of:"Autoevaluación UD1 · 5" },
{ t:"t34", q:"¿Con qué aspectos debe contar un vehículo de seguridad?", o:["Sistema de bloqueo","Televisiones en todos sus asientos","Rejilla metálica en el interior del tubo del combustible"], c:[0,2], w:"También: sistema de protección del depósito y cierre especial de la caja con candado o cerradura de seguridad.", of:"Autoevaluación UD2 · 1" },
{ t:"t36", q:"Completa: «La conducción ______ tiene por objetivo evitar colisionar con vehículos o materiales, evitando así los obstáculos».", o:["Ofensiva","Defensiva","Agresiva"], c:[1], w:"La defensiva evita la colisión variando la trayectoria con un giro de 180º. La ofensiva sí llega a colisionar.", of:"Autoevaluación UD2 · 2" },
{ t:"t37", q:"Indica una de las normas de seguridad a seguir en la conducción de vehículos:", o:["Mantener los cristales bajados","Auxiliar a personas que lo necesiten","Revisar el vehículo antes del trayecto"], c:[2], w:"Los cristales van <b>subidos</b> y las puertas aseguradas, y <b>no</b> se recoge ni auxilia a extraños.", of:"Autoevaluación UD2 · 3" },
{ t:"t38", q:"¿En qué posición se sitúan los coches de escolta respecto al coche VIP cuando hay dos coches de escolta?", o:["Ambos por delante del coche VIP","Uno delante y otro detrás del coche VIP","Ambos detrás del coche VIP"], c:[1], w:"Con 1 escolta va detrás; con 2, uno delante y otro detrás; con 3, uno delante y dos detrás.", of:"Autoevaluación UD2 · 4" },
{ t:"t39", q:"«El itinerario de evacuación nos permite dirigirnos a uno de los puntos seguros elegidos de antemano».", o:["Verdadero","Falso"], c:[1], w:"Falso: eso es el itinerario <b>de fuga</b>. El de evacuación lleva a un centro de urgencia o asistencial previamente programado.", of:"Autoevaluación UD2 · 5" },
{ t:"t24", q:"Según la Ley 5/2014, ¿quién habilita a los guardas rurales?", o:["La Dirección General de la Policía","La Dirección General de la Guardia Civil","El órgano autonómico competente"], c:[1], w:"Todo el personal lo habilita la DG de la Policía <b>excepto</b> guardas rurales y sus especialidades (guardas de caza y guardapescas marítimos)." },
{ t:"t24", q:"¿Cuánto tiempo debe haber transcurrido sin haber sido sancionado por una infracción MUY GRAVE en materia de seguridad privada?", o:["2 años","4 años","5 años"], c:[1], w:"2 años para infracción grave y 4 años para muy grave. No confundir con los 5 años por condena por intromisión ilegítima." },
{ t:"t24", q:"¿Qué ocurre si el personal habilitado pierde alguno de los requisitos?", o:["Se suspende la habilitación durante 6 meses","Se extingue la habilitación y se cancela de oficio la inscripción en el Registro Nacional","Debe repetir únicamente las pruebas psicotécnicas"], c:[1], w:"La pérdida de un requisito produce la extinción de la habilitación y la cancelación de oficio de la inscripción." },
{ t:"t31", q:"¿Cuáles de estos son personal de seguridad privada según la Ley 5/2014?", o:["Escoltas privados","Detectives privados","Porteros y conserjes"], c:[0,1], w:"Porteros, conserjes y personal auxiliar análogo realizan funciones de información y control de accesos, <b>fuera</b> del ámbito de la ley (art. 6, actividades compatibles)." },
{ t:"t23", q:"La actividad de seguridad privada respecto de la seguridad pública es:", o:["Independiente y autónoma","Complementaria y subordinada","Sustitutiva en zonas rurales"], c:[1], w:"Art. 1 de la Ley 5/2014: todas estas actividades tienen consideración de complementarias y subordinadas respecto de la seguridad pública." },
{ t:"t31", q:"Los fines de la seguridad privada según el art. 4 de la Ley 5/2014 son:", o:["Satisfacer las necesidades legítimas de los usuarios","Contribuir a garantizar la seguridad pública","Complementar el monopolio de la seguridad del Estado"], c:[0,1,2], w:"Los tres. El tercero integra funcionalmente sus medios como recurso externo de la seguridad pública." },
{ t:"t31", q:"¿Qué actividad queda EXCLUIDA del ámbito de la Ley 5/2014?", o:["La autoprotección sin contraprestación ni servicio a terceros","La investigación privada","El acompañamiento y defensa de personas físicas determinadas"], c:[0], w:"Art. 7: las actuaciones de autoprotección, dirigidas al entorno personal o patrimonial propio y sin contraprestación." },
{ t:"t26", q:"¿Qué técnica de protección abarca tanto la esfera profesional como la personal del protegido?", o:["Dinámica","Estática","Integral"], c:[2], w:"La protección integral contempla tanto la dinámica como la estática, y cubre todos los aspectos de la persona." },
{ t:"t26", q:"Uno de los principales fundamentos de la protección es:", o:["La anticipación a los riesgos","La implicación emocional con el protegido","La improvisación ante el ataque"], c:[0], w:"La previsión es uno de los principales factores de eficacia. Además, hay que proteger sin juzgar y <b>sin implicarse emocionalmente</b>." },
{ t:"t26", q:"Señala medidas preventivas recomendables según el manual:", o:["Eliminar los riesgos","Anticiparse al agresor previniendo su posible acción","Ensayar y evaluar el plan de seguridad"], c:[0,1,2], w:"Las tres son las medidas preventivas que cita el manual dentro de los fundamentos de la protección." },
{ t:"t26", q:"¿Cuál de estas NO es una causa que justifique la protección de una persona según el manual?", o:["Causas religiosas","Causas deportivas","Causas monetarias o económicas"], c:[1], w:"Las causas son: políticas, ideológicas, psicológicas, religiosas, raciales, personales y monetarias o económicas." },
{ t:"t27", q:"«Intrusión de extraños, asalto, robo, amenaza de bomba, vandalismo o huelgas» son riesgos:", o:["Tecnológicos","Por accidente","Por malas acciones o comportamiento de personas"], c:[2], w:"Los tecnológicos son fallos de instalaciones, corte eléctrico o de agua, fuego y explosión de equipos." },
{ t:"t27", q:"¿Cómo se detecta de forma más común y efectiva que un peligro provoque daños concretos?", o:["Asignando valores numéricos a la posibilidad y a la seriedad del peligro","Consultando el histórico de incidentes del barrio","Preguntando al protegido su percepción de riesgo"], c:[0], w:"Escala numérica: a los peligros más serios, los valores más altos." },
{ t:"t28", q:"La protección integral se fundamenta en dos aspectos principales:", o:["La prevención y la protección","La cobertura y la evacuación","La vigilancia y el control"], c:[0], w:"Prevención = evitar el suceso. Protección = neutralizar el suceso ya acontecido para salvar la vida." },
{ t:"t28", q:"Las medidas orientadas a detectar o advertir una amenaza mediante dispositivos son medidas de seguridad:", o:["Física","Electrónica","Organizativa"], c:[1], w:"Física = barreras. Organizativa = planificación de funciones, departamentos y planes de seguridad." },
{ t:"t28", q:"La creación y funcionamiento de departamentos de seguridad y la elaboración de planes de seguridad son medidas de seguridad:", o:["Personal","Informática","Organizativa"], c:[2], w:"La organizativa se dirige a evitar amenazas mediante disposición, programación o planificación de cometidos y funciones." },
{ t:"t29", q:"En la teoría esférica, los tres planos de actuación son:", o:["Aéreo, superficial y subterráneo","Interior, intermedio y exterior","Frontal, lateral y posterior"], c:[0], w:"El centro de la esfera es la persona protegida." },
{ t:"t29", q:"¿Quién ocupa el primer círculo en la teoría de los círculos concéntricos?", o:["Los puestos de seguridad","El escolta personal","Las patrullas móviles"], c:[1], w:"1º escolta personal (cubrir, proteger y evacuar); 2º puestos de seguridad; 3º patrullas móviles y grupos de información." },
{ t:"t29", q:"En el tercer círculo concéntrico se sitúan dispositivos que:", o:["Vigilan permanentemente al protegido","No controlan ni vigilan al protegido pero están para una posible actuación","Sustituyen al escolta personal en los relevos"], c:[1], w:"Son las patrullas móviles y grupos de información, el círculo más alejado." },
{ t:"t30", q:"La misión principal del escolta del primer círculo es:", o:["Cubrir y proteger del ataque y realizar una rápida evacuación","Filtrar el acceso al área restringida","Observar el perímetro e informar al superior"], c:[0], w:"El filtro de acceso corresponde a los puestos de revisión y control; la observación del perímetro, a los puestos de vigilancia." },
{ t:"t30", q:"¿Qué puesto supone realizar un filtro entre las personas que intentan acceder a un área restringida?", o:["Puestos de vigilancia","Puestos de revisión y control","Puestos especiales de seguridad"], c:[1], w:"Identifican a personas, vehículos u objetos y seleccionan quién entra en el área de seguridad." },
{ t:"t30", q:"El estudio de los riesgos en la evaluación del dispositivo se hace en función de:", o:["Su gravedad (magnitud del daño) y la probabilidad de que sucedan","El coste económico de las medidas","El número de escoltas disponibles"], c:[0], w:"Además se estudia el entorno: ciudad, zona, itinerarios, cuartos seguros y centros de asistencia." },
{ t:"t30", q:"Un cuarto seguro debe reunir:", o:["Acceso rápido y fácil y buenas comunicaciones","Capacidad de defensa y estar limitado","Ser un espacio amplio y abierto al público"], c:[0,1], w:"También facilidad para prestar los primeros auxilios. Nunca abierto al público." },
{ t:"t31", q:"Un plan de seguridad temporal se realiza cuando:", o:["La persona realiza actividades no habituales, como un viaje","Se trata de los recorridos habituales del protegido","Se produce un cambio de escolta"], c:[0], w:"En los permanentes (recorridos habituales) la coordinación es más protocolizada." },
{ t:"t31", q:"El art. 14 de la Ley 5/2014 regula:", o:["La colaboración profesional con las FCS","El acceso a la información por las FCS","La coordinación y participación"], c:[0], w:"Art. 15 = acceso a la información; art. 16 = coordinación y participación (comisiones mixtas)." },
{ t:"t31", q:"Las comisiones mixtas de seguridad privada previstas en el art. 16 tienen carácter:", o:["Ejecutivo y sancionador","Consultivo y de colaboración","Judicial"], c:[1], w:"Pueden ser nacionales, autonómicas o provinciales; su composición y funciones se determinan reglamentariamente." },
{ t:"t32", q:"Ante una agresión, la primera acción del escolta incluye avisar del ataque especificando:", o:["El tipo de agresión, el agresor y la dirección por la que viene","El número de heridos y su gravedad","La matrícula del vehículo del agresor"], c:[0], w:"El aviso a los compañeros se da por cualquier medio: walkie talkie o señales." },
{ t:"t32", q:"Una vez puesto a salvo el protegido, para neutralizar al agresor hay que ir:", o:["Hacia el cuerpo del atacante","Hacia el arma del atacante, colocándose delante del agresor","Hacia el vehículo de huida"], c:[1], w:"Se corta así la línea directa con el protegido." },
{ t:"t32", q:"Se recomienda que las cápsulas de protección estén formadas por:", o:["De uno a cinco miembros","De cinco a diez miembros","Exactamente cuatro miembros"], c:[0], w:"No hay regla fija, pero de 1 a 5 es lo recomendable." },
{ t:"t32", q:"En una escalera, ¿por dónde va la persona protegida?", o:["Por el centro de la escalera","Lo más cerca posible de la pared","Detrás de todo el dispositivo"], c:[1], w:"El escolta se sitúa próximo a ella y el resto del dispositivo alrededor formando un círculo." },
{ t:"t32", q:"En un ascensor, ¿qué hace el resto del equipo de seguridad?", o:["Sube en el mismo ascensor","Sube por las escaleras y controla la salida","Espera en el vestíbulo"], c:[1], w:"El protegido va siempre acompañado de algún escolta dentro del ascensor." },
{ t:"t32", q:"En un acto de recibimiento, el escolta se sitúa:", o:["Delante de la personalidad","Tras la personalidad, que ocupa una posición fija","En la puerta del local exclusivamente"], c:[1], w:"El resto se reparte por la sala y es conveniente que uno se sitúe en la entrada del local." },
{ t:"t32", q:"En las líneas de control, los escoltas deben observar especialmente:", o:["Las manos de las personas que saludan","El calzado de los asistentes","Las cámaras de los periodistas"], c:[0], w:"Se colocan dos delante y dos detrás del protegido." },
{ t:"t32", q:"En una evacuación, el jefe del equipo se sitúa:", o:["Cerrando la formación","Más próximo a la persona a evacuar, guiándola","En el vehículo, esperando"], c:[1], w:"El resto abre camino apartando a quienes dificulten el paso, o conduce al protegido al vehículo." },
{ t:"t29", q:"La protección estática se planifica dividiendo el espacio en:", o:["Tres círculos concéntricos","Interior y exterior (teoría simplificada)","Aéreo, superficial y subterráneo"], c:[1], w:"Es la teoría simplificada de los círculos concéntricos aplicada al lugar fijo." },
{ t:"t33", q:"Dentro de la protección estática exterior hay que vigilar especialmente:", o:["Las terrazas y sótanos del inmueble","Papeleras y buzones, por poder ocultar explosivos","La bandeja trasera del vehículo"], c:[1], w:"Terrazas y sótanos pertenecen al interior; la bandeja trasera es de la requisa del vehículo." },
{ t:"t33", q:"¿Qué es la avanzada?", o:["El primer escolta de la formación a pie","La acción de requisar el lugar antes de la entrada del protegido","El vehículo que abre la caravana"], c:[1], w:"Su misión es obtener información del lugar de destino y establecer un perímetro de seguridad." },
{ t:"t33", q:"La coordinación entre varios servicios que protegen a una misma persona la realiza:", o:["El escolta más antiguo","La sala de operaciones u órgano conocedor de esos servicios","La Comisión Mixta provincial"], c:[1], w:"Los jefes de cada servicio mantienen con el coordinador información continua y recíproca." },
{ t:"t34", q:"El sistema de bloqueo del vehículo debe tener un retardo entre activación y acción de:", o:["30 segundos como máximo","2 minutos como máximo","5 minutos como máximo"], c:[1], w:"Corta la inyección de combustible y acciona alarma acústica y luminosa." },
{ t:"t34", q:"El blindaje completo del vehículo incluye:", o:["Carrocería y cristales","Bajos y neumáticos","Solo las puertas laterales"], c:[0,1], w:"Debe estar completamente blindado: carrocería, cristales, bajos y neumáticos." },
{ t:"t35", q:"¿Qué conocimientos se exigen al conductor del vehículo de seguridad?", o:["Conocer a la perfección el vehículo y su mecánica","Conocer los itinerarios programados y alternativos","Poseer licencia de armas de guerra"], c:[0,1], w:"Debe haber recibido entrenamiento de conducción de alta seguridad." },
{ t:"t35", q:"La capacidad de reacción, la concentración y los reflejos del conductor son:", o:["Límites externos","Límites del vehículo","Límites personales"], c:[2], w:"Los externos los impone el entorno (pavimento, tráfico, meteorología)." },
{ t:"t35", q:"¿Cada cuánto debe revisarse el vehículo para detectar manipulaciones o sabotajes?", o:["Diariamente","Semanalmente","Antes de cada mes"], c:[0], w:"Además, la requisa exterior debe ser completa, sistemática y preestablecida." },
{ t:"t35", q:"La requisa interior del vehículo incluye:", o:["Asientos, bandeja trasera y guantera","Bajos y neumáticos","Únicamente el maletero"], c:[0], w:"Por último se revisan el motor y el maletero." },
{ t:"t36", q:"La conducción evasiva busca:", o:["Llegar lo más rápido posible al destino evitando las situaciones de peligro","Circular siempre por debajo del límite legal","Provocar la colisión con cualquier obstáculo"], c:[0], w:"Su finalidad es la destreza y pericia para evitar emboscadas y evadirse con una simple maniobra." },
{ t:"t36", q:"¿En qué maniobra se utiliza el freno de mano para hacer derrapar el coche?", o:["Maniobra en Y","Maniobra California","Giro en J"], c:[1], w:"En la California se gira el volante hacia la izquierda ayudándose del freno de mano." },
{ t:"t36", q:"¿Qué maniobra consiste en parar el vehículo y realizar el giro marcha atrás?", o:["Vuelta corta","Giro en J","Maniobra California"], c:[0], w:"Es parecida a la maniobra en Y, pero primero se detiene el vehículo." },
{ t:"t36", q:"El giro en J consiste en:", o:["Mantener el sentido de dirección cambiando el de la marcha, iniciando marcha atrás","Girar 90 grados aprovechando un cruce","Embestir lateralmente al vehículo atacante"], c:[0], w:"Se frena bloqueando las ruedas delanteras y se engrana la primera para salir hacia adelante." },
{ t:"t36", q:"¿Por qué carril conviene circular para poder realizar las maniobras evasivas con comodidad?", o:["Por el arcén","Por el carril medio o más próximo a la calzada","Por el carril de la derecha siempre"], c:[1], w:"Ante barricadas, si el vehículo tiene mayor envergadura y potencia, se puede embestir a otro vehículo." },
{ t:"t37", q:"Señala las normas de seguridad correctas en la conducción:", o:["No recoger ni auxiliar a extraños","Detenerse solo ante fuerza pública identificada con su placa","No bajar del coche al protegido hasta comprobar que no hay peligro"], c:[0,1,2], w:"También: cristales subidos, puertas aseguradas, vías amplias e iluminadas y rutas aleatorias previamente estudiadas." },
{ t:"t38", q:"Cuando hay varios escoltas en el mismo operativo:", o:["Viajan todos en el coche del protegido","Viajan en vehículos separados y en caravana","Se desplazan a pie por delante del vehículo"], c:[1], w:"En el coche del protegido solo van el conductor, el jefe de seguridad, el protegido y sus acompañantes." },
{ t:"t38", q:"Se considera que hay caravana cuando, como mínimo, hay:", o:["Tres vehículos","El coche del protegido y el coche de los escoltas","Un coche piloto y un coche adicional"], c:[1], w:"Cuantos más vehículos conformen la caravana, más complicada y problemática será." },
{ t:"t38", q:"Una caravana informal es aquella en la que:", o:["El itinerario es conocido por todos","El itinerario solo lo conocen el protegido y su equipo de seguridad","No se emplean vehículos blindados"], c:[1], w:"La formal es aquella cuyo itinerario es conocido por todos." },
{ t:"t38", q:"En el coche piloto viajan:", o:["El protegido y sus acompañantes","El equipo de seguridad y un Policía local","Solo el jefe del equipo"], c:[1], w:"En el coche VIP van el protegido, sus acompañantes y el Jefe del Equipo de seguridad." },
{ t:"t38", q:"¿Para qué sirve el coche adicional?", o:["Para transportar el equipamiento pesado","Para sustituir al coche VIP si se estropea, con las mismas prestaciones","Para abrir la caravana"], c:[1], w:"El que abre la caravana en su caso es el coche piloto." },
{ t:"t38", q:"Con tres coches de escolta, la disposición es:", o:["Uno delante y dos detrás del VIP","Los tres detrás del VIP","Dos delante y uno detrás"], c:[0], w:"Con uno: detrás. Con dos: uno delante y otro detrás." },
{ t:"t38", q:"¿Dónde se sitúa el jefe de seguridad de la cápsula dentro del coche del protegido?", o:["En la parte trasera, junto al protegido","En la parte delantera, al lado del conductor","En el coche escolta"], c:[1], w:"En la parte trasera van el protegido y, si los hubiese, sus acompañantes." },
{ t:"t39", q:"El itinerario que permite acudir a un centro de urgencia o asistencial previamente programado es el:", o:["De fuga","De evacuación","Alternativo"], c:[1], w:"El de fuga lleva a puntos seguros elegidos de antemano; el alternativo sustituye al principal." },
{ t:"t39", q:"Sobre el itinerario principal es correcto afirmar que:", o:["Es siempre el mismo para un mismo destino","Se elige tras estudiar el resto de caminos y puede ser alternativo otro día","Solo lo decide el protegido"], c:[1], w:"Lo elige el equipo de protección tras cerciorarse de que es el más seguro para ese trayecto." },
{ t:"t39", q:"¿Cuáles son puntos de peligro urbanos en un itinerario?", o:["Los semáforos","Los vehículos aparcados o en doble fila sospechosos","Los contenedores"], c:[0,1,2], w:"También la llegada y salida del itinerario, los pasos de peatones, el tráfico y las obras en la vía." },
{ t:"t39", q:"El estudio de los itinerarios por tramos tiene en cuenta:", o:["Nombre y anchura de la calle, carriles, aceras, bordillos y suelo","La posibilidad de realizar maniobras","El horario de apertura de los comercios"], c:[0,1], w:"Lo realizan los escoltas con anterioridad a la salida." },
{ t:"t39", q:"¿Con qué frecuencia deben revisarse los itinerarios?", o:["Cada 5 meses","Cada 5 semanas","Cada año"], c:[0], w:"Se revisan teniendo en cuenta el grado de peligrosidad que tengan." },
{ t:"t40", q:"El guardaespaldas, a diferencia del escolta:", o:["Puede portar armas de fuego","No es profesional ni está habilitado y no puede portar armas","Solo actúa en protección estática"], c:[1], w:"El escolta es profesional de la seguridad pública o privada y puede llevar armas de fuego." },
{ t:"t40", q:"Según Mora (2008), la detección de explosivos y los primeros auxilios son competencias:", o:["Prácticas","Teóricas","Perceptivas"], c:[1], w:"Las perceptivas son la relación con el entorno, la eficacia en la observación y la rememoración y retentiva." },
{ t:"t40", q:"La capacidad de rememoración y retentiva es una cualidad:", o:["Práctica","Teórica","Perceptiva"], c:[2], w:"Junto con la capacidad de relación con el entorno y la eficacia en la observación." },
{ t:"t40", q:"El chaleco antibalas protege también de disparos de fusil cuando:", o:["Se moja previamente","Se le agregan placas metálicas o cerámicas","Se lleva bajo la camisa"], c:[1], w:"Absorbe el impacto de balas al torso y esquirlas de explosiones." },
{ t:"t40", q:"El kubotán mide aproximadamente:", o:["7 cm","14 cm","25 cm"], c:[1], w:"Cilindro de metal, plástico o madera de unos 14 cm y 1,5 de grosor; no necesita mucho entrenamiento." },
{ t:"t40", q:"El inhibidor de frecuencia es un dispositivo que:", o:["Amplifica la señal de los intercomunicadores","Impide o dificulta la transmisión radioeléctrica emitiendo mayor potencia que el emisor","Detecta explosivos por resonancia"], c:[1], w:"Actúa sobre un determinado rango de frecuencias." },
{ t:"t40", q:"¿Qué se usa para taponar de forma aséptica una herida de bala?", o:["Preservativos","Gasas de algodón hidrófilo","Cinta americana"], c:[0], w:"Es uno de los materiales que el manual incluye entre los que utilizan los escoltas." },
{ t:"t40", q:"Los escoltas de un dispositivo se comunican mediante:", o:["Intercomunicadores y el Código Fonético Internacional","Señales luminosas exclusivamente","Mensajería del teléfono personal"], c:[0], w:"Especialmente importante cuando ocurre algún incidente." },
{ t:"t40", q:"El entorno del protegido incluye:", o:["Su familia y su círculo de amistades","El personal que trabaja para él y la prensa","Únicamente a él mismo"], c:[0,1], w:"Los ataques suelen ir dirigidos hacia el círculo de familiares y amigos cercanos." },
{ t:"t40", q:"Ante la prensa, el escolta debe:", o:["Mantener una actitud firme y controlada, permaneciendo en un segundo plano","Responder en nombre del protegido","Impedir cualquier grabación por la fuerza"], c:[0], w:"La finalidad es no dar mala prensa al protegido." },
{ t:"t41", q:"«Respetar las directrices de los superiores, cumpliendo normas y protocolos» corresponde al valor ético de:", o:["Honor","Disciplina consciente","Excelencia en las labores"], c:[1], w:"Cuando el dispositivo cuente con varios escoltas siempre habrá un Jefe de Seguridad por encima." },
{ t:"t41", q:"«No cometer ni tolerar actos de corrupción y atender al usuario con respeto y cortesía» es el valor de:", o:["Excelencia en las labores","Espíritu de servicio","Conciencia de grupo"], c:[0], w:"La conciencia de grupo es la cooperación y solidaridad entre compañeros y entidades." },
{ t:"t41", q:"El valor ético de respeto legal implica:", o:["Comunicar toda irregularidad legal a los organismos competentes","Actuar bajo los principios de racionalidad y proporcionalidad","Obedecer cualquier orden del protegido"], c:[0,1], w:"El escolta actúa siempre conforme a la legislación, no a las instrucciones particulares del protegido." },
{ t:"t41", q:"El orgullo de ostentar el uniforme que identifica al escolta corresponde al valor de:", o:["Honor","Dignidad","Espíritu de servicio"], c:[0], w:"Quienes llevan el uniforme tienen responsabilidad con el servicio y con el resto de la población." }
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
  "Claves: evaluar antes de actuar, proteger siempre la columna, controlar sangrados antes de movilizar y registrar todo lo actuado." ] },
{ t:"t17", q:"Explíqueme cómo se organiza una malla de radioteléfonos y cómo se transmite un mensaje.", p:[
  "<b>Malla</b>: conjunto de emisoras que comparten un mismo canal. Varias mallas forman una <b>red</b>.",
  "<b>Estación directora</b>: responsable del funcionamiento de la malla; su indicativo es <b>el número más bajo</b>. El resto son <b>secundarias</b>, con números correlativos.",
  "<b>Sistemas de trabajo</b>: correspondencia <b>libre, cronometrada, mixta y dirigida</b>; en la dirigida nadie transmite sin autorización de la directora.",
  "El mensaje consta de <b>encabezamiento, texto y final</b>. El encabezamiento lleva la <b>llamada</b>: simple, múltiple, colectiva o abreviada.",
  "El <b>texto</b> debe ser claro, conciso y breve. El <b>final</b>: CAMBIO y CORTO esperan respuesta; CIERRO termina la transmisión.",
  "Para deletrear se usa el <b>alfabeto fonético internacional</b>, aceptado por la Dirección General de Telecomunicaciones.",
  "Cierre: la <b>autenticación</b> es monodireccional y sirve para acreditar que la estación o el mensaje son de procedencia autorizada." ] },
{ t:"t17", q:"Recibe una llamada de amenaza de bomba en un control de accesos. ¿Cómo actúa?", p:[
  "Mantener la calma y <b>prolongar la conversación</b> todo lo posible: cada segundo aporta datos.",
  "Las <b>tres preguntas clave</b>: <b>dónde</b> está colocado el artefacto, <b>cuándo</b> hará explosión y <b>de qué clase</b> de artefacto se trata.",
  "Anotar todo lo demás: sexo y edad aproximada del llamante, acento, ruidos de fondo, si lee un texto, hora exacta de la llamada.",
  "<b>Notificar de inmediato</b> al responsable de seguridad y a las Fuerzas y Cuerpos de Seguridad. No colgar el teléfono ni bloquear la línea.",
  "Aplicar el <b>plan de emergencia</b>: no usar radios ni móviles cerca de la zona sospechosa y esperar a los especialistas.",
  "Cierre: el vigilante <b>no manipula</b> ningún objeto sospechoso; su función es informar, acordonar y colaborar." ] },
{ t:"t19", q:"Dígame qué es el tetraedro del fuego y cómo se extingue un incendio.", p:[
  "El fuego es una <b>reacción química de oxidación</b> con desprendimiento de calor y luz, entre un reductor (combustible) y un comburente (oxidante).",
  "<b>Tetraedro</b>: combustible, oxidante, energía de activación y reacción en cadena. Quitando uno de los cuatro, se apaga.",
  "De ahí los <b>cuatro procedimientos</b>: eliminación del combustible, refrigeración, sofocación y rotura de la reacción en cadena.",
  "<b>Clases de fuego</b>: A sólidos, B líquidos, C gases, D metales especiales y E con corriente eléctrica.",
  "<b>Agentes</b>: agua (refrigeración), espuma (sofocación), polvo (inhibición) y CO₂ (sofocación). Los halones están prohibidos desde el Protocolo de Montreal de 1987.",
  "Cierre: elegir el agente por la clase de fuego. En eléctrico, <b>cortar la corriente</b>; nunca agua a chorro ni espuma de baja o media expansión." ] },
{ t:"t19", q:"Se declara un incendio en su edificio. Explíqueme su actuación y la evacuación.", p:[
  "<b>Detectar y notificar</b> cuanto antes al responsable de seguridad: lugar, características y magnitud del fuego.",
  "Atacarlo si su clase lo permite con el <b>extintor adecuado</b> (primer escalón); si no basta, red de agua y <b>BIE</b> (segundo escalón).",
  "<b>Aislar</b> el incendio: cerrar puertas y ventanas para evitar la propagación, palpar las puertas antes de abrirlas.",
  "<b>No usar ascensores</b>. Si se inflaman las ropas, no correr: rodar por el suelo y envolverse en una manta.",
  "<b>Fases de la evacuación</b>: detección, notificación, alarma y evacuación. La dirige el <b>Jefe de Emergencia</b>.",
  "Vías <b>horizontales y verticales</b>, con un mínimo de <b>dos salidas en puntos opuestos</b>. No recoger el coche del aparcamiento.",
  "Cierre: ya fuera, <b>informar de quién falta</b> y ayudar en las labores auxiliares que pidan los bomberos." ] },
{ t:"t20", q:"Clasifique las armas de fuego y dígame cuáles son las reglamentarias del personal de seguridad privada.", p:[
  "Por el <b>sistema de disparo</b>: repetición, semiautomáticas y automáticas. Las automáticas son de guerra y están <b>prohibidas a particulares</b>.",
  "Por el <b>ánima</b>: lisas (cilíndricas o de choque) y estriadas. El ánima lisa alcanza <b>300 m</b> como máximo y <b>60 m</b> de alcance eficaz.",
  "Por la <b>longitud</b>: cortas, con cañón ≤ 30 cm o total ≤ 60 cm; largas, por encima de esas medidas.",
  "El Reglamento de Armas (RD 137/1993) establece <b>siete categorías</b>: 1.ª cortas, 2.ª1 largas de vigilancia y guardería, 3.ª2 escopetas, 7.ª detonadoras y ballestas, etc.",
  "Según la <b>Orden INT/318/2011</b>: el vigilante de seguridad usa el <b>revólver del 38 especial de 4 pulgadas</b> y, como arma larga, la <b>escopeta 12/70</b> con cartuchos de <b>12 postas en taco contenedor</b>.",
  "El <b>escolta privado</b>, la <b>pistola semiautomática de 9 mm Parabellum</b>. El <b>guarda rural</b>, armas rayadas de repetición.",
  "Cierre: elementos comunes de toda arma de fuego: <b>cañón, recámara, cargador, elementos de puntería y seguros</b>." ] },
{ t:"t21", q:"Descríbame el revólver reglamentario del vigilante de seguridad.", p:[
  "<b>Revólver del 38 especial de cuatro pulgadas</b>: arma corta, de acción manual con recámaras múltiples giratorias, clasificada como de <b>repetición</b> y de <b>1.ª categoría</b>.",
  "Datos: alcance eficaz <b>25 m</b>, peso <b>715 g</b>, <b>6 estrías dextrógiras</b>, cilindro de <b>6 cartuchos</b>, velocidad inicial <b>250 m/s</b>.",
  "<b>Tres partes</b>: cañón, armazón y cilindro. En el armazón están la empuñadura, el arco guardamonte, las <b>orejetas</b> y la caja plana de mecanismos.",
  "El cilindro gira <b>60°</b> por disparo y <b>bascula a la izquierda</b> por gravedad para extraer las vainas mediante la <b>cabeza estrellada</b>.",
  "Dispara en <b>simple acción</b> (martillo montado con la mano) y en <b>doble acción</b>, en la que la pieza <b>levante</b> monta el martillo: es la más rápida.",
  "Seguridad: seguro por <b>interposición de masas</b>, que impide el disparo accidental.",
  "Cierre: <b>guarniciones</b> (cachas) y <b>respetos</b> (baqueta, destornillador) completan el arma sin ser imprescindibles para su funcionamiento." ] },
{ t:"t22", q:"Explíqueme las partes de un cartucho y los tipos de bala.", p:[
  "<b>Cartucho</b>: unidad organizada que reúne los factores esenciales del disparo; sólido, sensible, impermeable y económico.",
  "<b>Metálico</b>: vaina, pistón, carga de proyección y bala. <b>Semimetálico</b> (escopeta): añade el <b>taco</b>, que sella la cámara de gas y actúa de refrigerante.",
  "<b>Vaina</b>: boca, cuerpo y culote. De cartón con culote de latón en ánima lisa; de latón en cañón estriado.",
  "<b>Percusión</b>: Lefaucheux (en desuso), Flobert (reborde) y <b>central</b>, el actual.",
  "<b>Pistón</b>: Berdan, con yunque solidario al culote y dos oídos; <b>Bóxer</b>, con yunque en la cápsula y un solo oído, recargable y más económico.",
  "<b>Pólvora</b>: hoy piroxilada o sin humo. <b>Deflagra</b>, no explosiona: menos presión, más velocidad y sin residuos.",
  "<b>Balas</b>: de plomo, blindadas y semiblindadas. Otras: perforadoras, trazadoras, incendiarias, expansivas, explosivas y dum-dum, estas últimas prohibidas.",
  "Cierre: el <b>calibre real</b> se mide entre dos crestas del estriado y el <b>nominal</b> entre dos surcos; este coincide con el diámetro de la bala." ] },
/* ===== UF2676 ===== */
{ t:"t28", q:"Explíqueme qué es la protección integral y en qué se fundamenta.", p:[
  "Servicio de protección cuyo <b>objetivo</b> es establecer un entorno seguro mediante un dispositivo que <b>neutralice los peligros</b>.",
  "El dispositivo tiene carácter <b>preventivo y disuasorio</b>: permite controlar y reaccionar mediante <b>neutralización, cobertura y evacuación</b>.",
  "Se extiende a la esfera <b>profesional y personal</b> del protegido; cada una se aborda desde la protección <b>dinámica y estática</b>.",
  "Se fundamenta en <b>dos aspectos</b>: la <b>prevención</b> (evitar el suceso) y la <b>protección</b> (neutralizar el suceso ya acontecido, con medios humanos y técnicos, para salvar la vida).",
  "Cierre: un buen sistema de protección llega a ser <b>disuasorio</b> y hace desistir al agresor de sus intenciones." ] },
{ t:"t25", q:"Enumere los principios básicos de actuación del personal de seguridad privada.", p:[
  "<b>Legalidad</b> · <b>Integridad</b> · <b>Protección</b> · <b>Dignidad</b> · <b>Corrección</b> · <b>Congruencia</b> · <b>Proporcionalidad</b> · <b>Reserva profesional</b> · <b>Colaboración</b> con las FCS.",
  "Truco para no perderse: los cinco primeros son de <b>conducta</b>; congruencia y proporcionalidad son de <b>medida</b>; reserva y colaboración son de <b>relación</b>.",
  "Añadir: el personal está obligado a <b>auxiliar y colaborar</b> especialmente con las FCS y a guardar <b>rigurosa reserva profesional</b>, facilitando datos solo a quien le haya contratado y a los órganos judiciales y policiales competentes." ] },
{ t:"t29", q:"Desarrolle la teoría de los círculos concéntricos.", p:[
  "Un círculo rodeado por <b>tres círculos concéntricos</b> alrededor del protegido; cada uno presta servicio dentro de la esfera de su propio cometido y sirve de base para un <b>dispositivo integral</b>.",
  "<b>1er círculo o interior</b>: el <b>escolta personal</b>, las personas más próximas. La distancia depende de la situación concreta. Misión: <b>cubrir y proteger</b> de un ataque y realizar una <b>rápida evacuación</b> a lugar seguro.",
  "<b>2º círculo</b>: <b>puestos de seguridad</b>; guardan cierta distancia pero tienen al protegido <b>dentro de su campo de observación</b>.",
  "<b>3er círculo</b>: <b>patrullas móviles y grupos de información</b>; <b>no controlan ni vigilan</b> al protegido, pero están dentro del dispositivo por si ocurriera una desgracia.",
  "Enlazar con la <b>teoría esférica</b> (planos aéreo, superficial y subterráneo) y con la teoría <b>simplificada</b> (interior/exterior) usada en la protección estática." ] },
{ t:"t24", q:"¿Qué requisitos generales exige la Ley 5/2014 para obtener la habilitación?", p:[
  "Ser <b>mayor de edad</b>; <b>capacidad física y aptitud psicológica</b>; <b>nacionalidad</b> UE, EEE o tercer Estado con convenio; <b>formación previa</b>.",
  "<b>Carecer de antecedentes penales</b> por delitos dolosos.",
  "No sancionado por infracción <b>grave en 2 años</b> ni <b>muy grave en 4 años</b>; no <b>separado del servicio</b> de FCS o FFAA en 2 años; no <b>condenado</b> por intromisión ilegítima en honor, intimidad, imagen o secreto de las comunicaciones en <b>5 años</b>.",
  "<b>Superar las pruebas</b> de comprobación del Ministerio del Interior.",
  "Añadir: la habilita la <b>DG de la Policía</b> (guardas rurales, la <b>Guardia Civil</b>) y la <b>pérdida de un requisito extingue</b> la habilitación con cancelación de oficio en el Registro Nacional." ] },
{ t:"t32", q:"¿Cómo actúa usted desde que se produce la agresión hasta que termina el incidente?", p:[
  "<b>1. Aviso</b>: comunico el ataque a los compañeros por walkie o señales, especificando <b>tipo de agresión, agresor y dirección</b> de la que procede.",
  "<b>2. Cobertura</b>: cubro corporalmente al protegido para <b>disminuir su superficie de blanco y su silueta</b>.",
  "<b>3. Evacuación</b>: traslado y alejo rápidamente al protegido al <b>lugar seguro previamente establecido</b>. Ningún miembro del equipo hace otra maniobra que no sea cubrir o evacuar.",
  "<b>4. Neutralización</b>: solo con el protegido a salvo. Voy <b>al arma</b> del atacante, no al cuerpo, colocándome <b>delante del agresor</b> para cortar la línea directa con el protegido.",
  "Recordar que el desplazamiento <b>a pie</b> es el de mayor riesgo por el enlentecimiento de la cobertura y la evacuación." ] },
{ t:"t32", q:"Explique la protección en interior de edificios, escaleras y ascensores.", p:[
  "<b>Edificios</b>: inspección completa <b>antes</b> de la llegada del protegido, localizando una habitación que sirva de <b>espacio de seguridad</b>.",
  "<b>Escaleras</b>: inspección previa. El protegido va <b>pegado a la pared</b>, el escolta próximo y el resto <b>formando un círculo</b>; la distancia depende de las dimensiones de la escalera. Las <b>mecánicas</b> son más peligrosas por los espacios abiertos a los lados.",
  "<b>Ascensores</b>: entrañan bastante peligro. Revisión minuciosa de <b>espacio, hueco entre ascensor y techo, cables y maquinaria</b>. El protegido va <b>siempre con un escolta</b> y el resto <b>sube por las escaleras</b> para controlar la salida." ] },
{ t:"t34", q:"¿Qué características debe reunir el vehículo y qué exige el Real Decreto?", p:[
  "Características: <b>cómodo</b>, con <b>aire acondicionado</b> (permite el cierre total ante un ataque con gas), <b>seguro y rápido</b>, completamente <b>blindado</b> (carrocería, cristales, bajos y neumáticos) y con <b>potencia</b> suficiente en buena relación potencia/peso.",
  "Requisitos del RD: <b>sistema de bloqueo</b> que corta la inyección de combustible y acciona alarma acústica y luminosa, con retardo máximo de <b>2 minutos</b>; <b>rejilla metálica</b> en el tubo del depósito; <b>protección del depósito</b>; <b>cierre especial de la caja</b> con candado o cerradura de seguridad.",
  "En grandes dispositivos, <b>vehículo aparte para los escoltas</b>, de características similares, con buen sistema de comunicación entre ambos." ] },
{ t:"t36", q:"Diferencie conducción ofensiva y defensiva y describa las maniobras.", p:[
  "Ambas son <b>conducción evasiva</b>: llegar lo más rápido posible al destino evitando las situaciones de peligro, con la destreza necesaria para evitar emboscadas.",
  "<b>Ofensiva</b>: aprovecha <b>peso, potencia y velocidad</b> para afrontar el ataque de forma <b>activa</b>, llegando a <b>colisionar</b> con el obstáculo.",
  "<b>Defensiva</b>: su objetivo es <b>evitar la colisión</b>, variando la trayectoria mediante un <b>giro de 180º</b>.",
  "Maniobras: <b>en Y</b> (reducir, girar de derecha a izquierda, marcha atrás y volver a girar), <b>vuelta corta</b> (parar y girar marcha atrás), <b>California</b> (volante a la izquierda + freno de mano, derrapando) y <b>giro en J</b> (marcha atrás, giro rápido, bloqueo de ruedas delanteras y primera para salir adelante).",
  "La <b>Y</b> y la <b>California</b> se usan <b>solo cuando no hay tiempo para reaccionar</b>. Conviene circular por el <b>carril medio o más próximo a la calzada</b>." ] },
{ t:"t38", q:"Clasifique las caravanas y explique la posición de los vehículos.", p:[
  "<b>Caravana</b>: conjunto de vehículos para desplazar al protegido y a todo su personal de seguridad. Mínimo: <b>coche del protegido + coche de escoltas</b>. Cuantos más vehículos, más problemática.",
  "Según el itinerario: <b>informales</b> (itinerario no público, solo conocido por protegido y equipo) y <b>formales</b> (conocido por todos).",
  "Vehículos: <b>piloto</b> (equipo de seguridad y un Policía local), <b>VIP</b> (protegido, acompañantes y Jefe del Equipo), <b>adicional</b> (mismas prestaciones que el VIP, por avería) y <b>escolta</b> (resto del equipo).",
  "Posiciones: 1 escolta → <b>detrás</b>; 2 escoltas → <b>uno delante y otro detrás</b>; 3 escoltas → <b>uno delante y dos detrás</b>.",
  "Dentro del coche VIP: <b>conductor y jefe de seguridad delante</b>; <b>protegido y acompañantes detrás</b>." ] },
{ t:"t39", q:"Tipos de itinerario y estudio previo.", p:[
  "<b>Principal</b>: el elegido para un desplazamiento concreto tras estudiar el resto y comprobar que es el más seguro; puede ser alternativo otro día.",
  "<b>Alternativo</b>: sustituye al principal si este no puede usarse.",
  "<b>De evacuación</b>: variante del principal para acudir a un <b>centro de urgencia o asistencial</b> previamente programado.",
  "<b>De fuga</b>: variación del principal o del alternativo para dirigirse a <b>puntos seguros elegidos de antemano</b>.",
  "Estudio: se determinan los <b>puntos de peligro urbanos</b> (llegada y salida, semáforos, pasos de peatones, tráfico, obras, vehículos en doble fila, contenedores), se fijan <b>puntos seguros</b> y <b>centros asistenciales</b>. Por tramos se valora <b>nombre y anchura de la calle, carriles, aceras, bordillos, suelo y posibilidad de maniobras</b>. Lo hacen <b>los escoltas antes de la salida</b> y se revisa <b>cada 5 meses</b>." ] },
{ t:"t40", q:"Funciones del escolta, diferencia con el guardaespaldas y valores éticos.", p:[
  "El <b>escolta</b> es un profesional de la seguridad <b>pública o privada</b> especializado en protección de personalidades; pertenece a las FCS del Estado o a una empresa de seguridad privada. Su función principal es <b>proteger a las personas</b>, con dedicación <b>plena</b>, mentalizado para el ataque con arma de fuego; los escoltas privados <b>pueden portar armas</b>.",
  "El <b>guardaespaldas</b> es una persona <b>no profesional y no habilitada</b> contratada por un particular: <b>no puede portar armas</b> ni ejercer las funciones propias del escolta.",
  "Habilidades (Mora, 2008): <b>prácticas</b> (físico, defensa personal, tácticas, conducción ofensiva-evasiva, asunción de responsabilidades, equilibrio mental), <b>teóricas</b> (explosivos, primeros auxilios, protocolo) y <b>perceptivas</b> (relación con el entorno, observación, retentiva).",
  "<b>Valores éticos</b>: espíritu de servicio, conciencia de grupo, honor, disciplina consciente, excelencia en las labores y respeto legal." ] }
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
  "<b>Ley 5/2014</b> — Seguridad Privada","<b>RD 2364/1994</b> — Reglamento de Seguridad Privada","<b>RD 137/1993</b> — Reglamento de Armas","<b>RD 130/2017</b> — Reglamento de Explosivos","<b>RD 989/2015</b> — pirotecnia y cartuchería","<b>Ley 31/1995</b> — Prevención de Riesgos Laborales","<b>LO 2/1986</b> — Fuerzas y Cuerpos de Seguridad","<b>Orden INT/314/2011</b> — empresas de seguridad","<b>Orden INT/316/2011</b> — centrales de alarmas","<b>Directiva 2012/18/UE</b> — Seveso III"] },
{ t:"Alfabeto fonético internacional", cnt:"26 letras", ord:true, l:[
  "<b>A</b> Alfa","<b>B</b> Bravo","<b>C</b> Charlie","<b>D</b> Delta","<b>E</b> Echo","<b>F</b> Foxtrot","<b>G</b> Golf","<b>H</b> Hotel","<b>I</b> India","<b>J</b> Juliett","<b>K</b> Kilo","<b>L</b> Lima","<b>M</b> Mike","<b>N</b> November","<b>O</b> Oscar","<b>P</b> Papa","<b>Q</b> Quebec","<b>R</b> Romeo","<b>S</b> Sierra","<b>T</b> Tango","<b>U</b> Uniform","<b>V</b> Victor","<b>W</b> Whiskey","<b>X</b> X-ray","<b>Y</b> Yankee","<b>Z</b> Zulu"] },
{ t:"Tetraedro del fuego", cnt:"4 factores", ord:false, l:[
  "<b>Combustible</b> — el reductor","<b>Oxidante</b> o comburente — el aire","<b>Energía de activación</b> — el calor","<b>Reacción en cadena</b>"] },
{ t:"Procedimientos de extinción", cnt:"4 procedimientos", ord:false, l:[
  "<b>Eliminación</b> del combustible","<b>Refrigeración</b> — agua","<b>Sofocación</b> — espuma y CO₂","<b>Rotura de la reacción en cadena</b> — polvo y halones"] },
{ t:"Clases de fuego", cnt:"A a E", ord:true, l:[
  "<b>A</b> — sólidos con brasa","<b>B</b> — líquidos inflamables","<b>C</b> — gases","<b>D</b> — metales especiales","<b>E</b> — con corriente eléctrica"] },
{ t:"Fases de la evacuación", cnt:"4 fases", ord:true, l:[
  "<b>Detección</b> del incendio","<b>Notificación</b>","<b>Alarma</b>","<b>Evacuación</b>"] },
{ t:"Sistema básico de comunicación", cnt:"6 elementos", ord:true, l:[
  "<b>Fuente</b>","<b>Transmisor</b>","<b>Medio de transmisión</b>","<b>Receptor</b>","<b>Destino</b>","<b>Canal de transmisión</b>"] },
{ t:"Tipos de llamada por radio", cnt:"4 tipos", ord:false, l:[
  "<b>Simple</b> — un solo corresponsal","<b>Múltiple</b> — varios corresponsales","<b>Colectiva</b> — varios con indicativo común","<b>Abreviada</b> — sin duda del destinatario"] },
{ t:"Las siete operaciones del ordenador", cnt:"7 operaciones", ord:false, l:[
  "<b>Entrada</b> de datos","<b>Salida</b> de datos","<b>Almacenamiento</b>","<b>Recuperación</b>","<b>Transmisión</b>","<b>Recepción</b>","<b>Tratamiento</b>"] },
{ t:"Categorías de armas", cnt:"7 categorías", ord:true, l:[
  "<b>1.ª</b> — armas cortas: pistolas y revólveres","<b>2.ª1</b> — largas de vigilancia y guardería · <b>2.ª2</b> caza mayor","<b>3.ª1</b> — largas rayadas deportivas · <b>3.ª2</b> escopetas y ánima lisa · <b>3.ª3</b> aire comprimido","<b>4.ª</b> — carabinas, pistolas y revólveres de aire comprimido","<b>5.ª</b> — armas blancas no prohibidas","<b>6.ª</b> — históricas, anteriores a 1890","<b>7.ª</b> — anestésicas, ballestas, Flobert, arcos y detonadoras"] },
{ t:"Armas del personal de seguridad", cnt:"Orden INT/318/2011", ord:false, l:[
  "<b>Vigilante de seguridad</b> — revólver 38 especial 4\"","<b>Vigilante con arma larga</b> — escopeta 12/70, 12 postas en taco contenedor","<b>Escolta privado</b> — pistola 9 mm Parabellum","<b>Guarda rural</b> — armas rayadas de repetición"] },
{ t:"Revólver 38 especial 4\"", cnt:"Cifras", ord:false, l:[
  "<b>25 m</b> — alcance eficaz","<b>715 g</b> — peso sin munición","<b>6</b> — estrías dextrógiras y recámaras del cilindro","<b>250 m/s</b> — velocidad inicial","<b>60°</b> — giro del cilindro por disparo","<b>Izquierda</b> — lado hacia el que bascula el cilindro"] },
{ t:"Escopeta 12/70", cnt:"Cifras", ord:false, l:[
  "<b>Calibre 12</b>, ánima lisa","<b>5 + 1</b> — cartuchos en depósito más recámara","<b>350 mm</b> — longitud del cañón","<b>300 m</b> — alcance máximo","<b>60 m</b> — alcance eficaz","<b>6 grupos</b> — cañón, carcasa, cerrojo, disparo, asta y culata"] },
{ t:"Partes del cartucho", cnt:"4 + 1", ord:false, l:[
  "<b>Vaina</b> — boca, cuerpo y culote","<b>Pistón</b> — Berdan (2 oídos) o Bóxer (1 oído)","<b>Carga de proyección</b> — pólvora sin humo","<b>Bala</b> — cuerpo, culote y ojiva","<b>Taco</b> — solo en el semimetálico; refrigerante"] },
{ t:"Cifras del módulo instrumental", cnt:"Números", ord:false, l:[
  "<b>20 kg / 30 kg</b> — extintor manual y dorsal","<b>6 meses</b> — revisión de extintores","<b>100 m</b> — distancia máxima de los hidrantes a las fachadas","<b>96 %</b> — eficacia de los sprinklers","<b>2 salidas</b> — mínimo en locales con riesgo, en puntos opuestos","<b>20 mm</b> — calibre desde el que un arma es de guerra","<b>30 cm / 60 cm</b> — cañón y longitud total del arma corta","<b>11 cm</b> — hoja máxima de navaja no automática","<b>3 a 8</b> — número de estrías de un cañón rayado","<b>1890</b> — año que separa las armas históricas (6.ª categoría)"] },
/* ===== UF2676 ===== */
{ t:"Principios básicos de actuación", cnt:"9 principios", ord:true, l:[
  "Legalidad","Integridad","Protección","Dignidad","Corrección","<b>Congruencia</b> — medidas proporcionadas a los <b>riesgos</b>","<b>Proporcionalidad</b> — uso de <b>técnicas y medios</b> de defensa","Reserva profesional","Colaboración con las FCS"] },
{ t:"Técnicas de protección", cnt:"3 tipos", ord:false, l:[
  "<b>Integral</b> — todos los aspectos: esfera profesional y personal","<b>Dinámica</b> — desplazamientos o traslado de un objeto","<b>Estática</b> — lugar fijo"] },
{ t:"Escalones o niveles de seguridad", cnt:"3 puestos", ord:true, l:[
  "<b>Puestos de vigilancia</b> — observar y comunicar novedades al superior","<b>Puestos de revisión y control</b> — filtro de acceso al área restringida","<b>Puestos especiales de seguridad</b> — función específica dentro del dispositivo"] },
{ t:"Medidas de seguridad (Ley 5/2014)", cnt:"5 medidas", ord:false, l:[
  "<b>Física</b> — barreras","<b>Electrónica</b> — detección","<b>Informática</b> — integridad, confidencialidad y disponibilidad","<b>Organizativa</b> — departamentos y planes de seguridad","<b>Personal</b> — resto de servicios"] },
{ t:"Clasificación de riesgos", cnt:"4 clases", ord:false, l:[
  "<b>Naturales</b> — inundaciones, rayos, incendios, terremotos","<b>Tecnológicos</b> — fallos de instalación, corte eléctrico, explosión de equipos","<b>Por accidente</b> — heridas a personas o daños en edificios","<b>Por malas acciones de personas</b> — intrusión, asalto, robo, amenaza de bomba, vandalismo, disturbios y huelgas"] },
{ t:"Secuencia ante agresión", cnt:"4 pasos", ord:true, l:[
  "<b>Avisar</b> del ataque: tipo, agresor y dirección","<b>Cobertura</b>: reducir superficie de blanco y silueta","<b>Evacuación</b> al lugar seguro preestablecido","<b>Neutralizar</b>: al arma, no al cuerpo"] },
{ t:"Maniobras evasivas", cnt:"4 maniobras", ord:true, l:[
  "<b>En Y</b> — 180º con marcha atrás intermedia","<b>Vuelta corta</b> — parar y girar marcha atrás","<b>California</b> — freno de mano, derrape","<b>Giro en J</b> — marcha atrás y salir hacia delante","<i>Y</i> y <i>California</i>: solo si no hay tiempo para reaccionar"] },
{ t:"Vehículos de la caravana", cnt:"4 coches", ord:true, l:[
  "<b>Piloto</b> — equipo de seguridad + Policía local","<b>VIP</b> — protegido, acompañantes y Jefe del Equipo","<b>Adicional</b> — repuesto del VIP","<b>Escolta</b> — resto del equipo"] },
{ t:"Cifras de la protección de personas", cnt:"Números", ord:false, l:[
  "<b>18 años</b> — edad mínima para la habilitación","<b>2 / 4 años</b> — plazo sin sanción grave / muy grave","<b>5 años</b> — condena por intromisión ilegítima","<b>2 minutos</b> — retardo máximo del sistema de bloqueo del vehículo","<b>1 a 5</b> — miembros de una cápsula de protección","<b>5 meses</b> — revisión de los itinerarios","<b>14 cm</b> — longitud del kubotán","<b>3 círculos</b> — concéntricos del dispositivo dinámico","<b>3 planos</b> — aéreo, superficial y subterráneo de la teoría esférica"] }
];
