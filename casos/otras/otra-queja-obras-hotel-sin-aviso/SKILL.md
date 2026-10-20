---
name: otra-queja-obras-hotel-sin-aviso
description: El cliente se queja de que hay obras en el alojamiento o justo al
  lado y nadie le avisó al reservar.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

El cliente está alojado o a punto de llegar y descubre obras, ruido de maquinaria o zonas cerradas por reformas que no esperaba.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` el alojamiento y las fechas de la estancia.
3. Revisa con `consultar-servicios-alojamiento` si consta algún aviso de reformas o servicios cerrados.
4. Prepara una respuesta empática con lo encontrado y le sugiere pedir en recepción una habitación alejada de la zona afectada.
5. Deja la respuesta lista para que booking la revise antes de enviarla.

## Qué no hace

- No afirma que el hotel ocultara las obras sin evidencia.
- No ofrece compensación ni cambio de alojamiento.
- No inventa cuánto van a durar las obras.

## Cuándo pasa a una persona

- Si el cliente pide compensación, devolución o cambio de alojamiento.
- Si las obras impiden usar servicios contratados, como el restaurante de una pensión incluida.

## Cómo lo puede pedir el cliente

- «Hay una obra al lado de la habitación y empiezan con el taladro a primera hora, ¿esto se sabía?»
- «Buenos días, en la descripción no ponía nada de reformas y la piscina está cerrada por obras.»
- «esto es un caos de obras, no se puede descansar»
- «¿Me podéis decir si hay obras en el hotel? Nos han dicho que sí, y también quería saber si tiene parking.»
