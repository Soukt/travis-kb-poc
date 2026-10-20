export const AREAS = [
  { slug: "alojamiento", label: "Alojamiento", prefix: "aloj" },
  { slug: "entradas-y-parques", label: "Entradas y parques", prefix: "ent" },
  { slug: "ferris", label: "Ferris", prefix: "ferri" },
  { slug: "vuelo-y-hotel", label: "Vuelo y hotel", prefix: "vh" },
  { slug: "cambios-y-cancelaciones", label: "Cambios y cancelaciones", prefix: "camb" },
  { slug: "pagos-y-facturas", label: "Pagos y facturas", prefix: "pago" },
  { slug: "viajeros-y-datos", label: "Viajeros y datos", prefix: "viaj" },
  { slug: "documentacion-y-bonos", label: "Documentación y bonos", prefix: "doc" },
  { slug: "otras", label: "Otras consultas", prefix: "otra" },
] as const;

export const ACCIONES = [
  { name: "verificar-identidad", description: "Comprueba que quien escribe es el titular de la reserva (localizador y email)." },
  { name: "consultar-reserva", description: "Fechas, viajeros, servicios contratados y estado de la reserva." },
  { name: "consultar-horarios-hotel", description: "Horarios de entrada y salida del alojamiento y si admite llegada tarde." },
  { name: "consultar-servicios-alojamiento", description: "Servicios del alojamiento (aparcamiento, wifi, piscina, mascotas, accesibilidad…)." },
  { name: "consultar-condiciones-entrada", description: "Condiciones de las entradas: acceso, horarios, edades, canje." },
  { name: "consultar-trayecto-ferri", description: "Puerto, hora de presentación, embarque, vehículo y acomodación del trayecto." },
  { name: "consultar-vuelo", description: "Horarios, estado y equipaje incluido de los vuelos de la reserva." },
  { name: "consultar-traslados", description: "Traslados incluidos, punto de encuentro y horarios." },
  { name: "consultar-politica-cancelacion", description: "Calendario de gastos de cancelación y cambio de la reserva." },
  { name: "consultar-pagos", description: "Pagos hechos, pagos pendientes y próxima fecha de cobro." },
  { name: "consultar-bonos", description: "Estado de los bonos de la reserva y si están disponibles." },
  { name: "reenviar-bono", description: "Reenvía los bonos al email de la reserva." },
  { name: "consultar-factura", description: "Facturas emitidas de la reserva." },
  { name: "pedir-datos-cliente", description: "Pide al cliente datos concretos con un formulario (por ejemplo los de un viajero nuevo)." },
  { name: "crear-ticket-booking", description: "Crea un ticket para el equipo de booking con todo lo recogido." },
  { name: "buscar-informacion", description: "Busca en las preguntas y respuestas aprobadas de la agencia; si no hay respuesta, no se inventa." },
] as const;

export const MODOS = [
  { value: "autonomo", label: "Responde solo" },
  { value: "copiloto", label: "Copiloto: lo revisa booking antes de enviarlo" },
  { value: "persona", label: "Lo pasa a booking" },
] as const;

export const SECCIONES = [
  "Cuándo aplica",
  "Qué hace el agente",
  "Qué no hace",
  "Cuándo pasa a una persona",
  "Cómo lo puede pedir el cliente",
] as const;

export const REPO = "Soukt/travis-kb-poc";
export const PUERTO = 8080;

// Agent Skills spec: 1-64 chars, a-z 0-9 and single hyphens, no leading/trailing hyphen.
export const NOMBRE_VALIDO = /^[a-z0-9]+(-[a-z0-9]+)*$/;
