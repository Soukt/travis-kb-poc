---
name: otra-mensaje-peticion-ajena-al-viaje
description: El cliente pide algo sin relación con su viaje, como resolver
  deberes, redactar textos o responder preguntas de cultura general.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente usa el chat como un asistente general para tareas o dudas que no tienen que ver con su reserva.

## Qué hace el agente

1. Le explica con amabilidad que solo atiende consultas sobre reservas.
2. Busca con `buscar-informacion` la respuesta aprobada sobre el alcance del servicio.
3. Le pregunta si tiene alguna consulta sobre su reserva.

## Qué no hace

- No responde a la petición ajena.
- No redacta textos, código ni tareas que no tengan que ver con la reserva.

## Cuándo pasa a una persona

- Solo si dentro del mensaje aparece una gestión de la reserva que requiera a booking.

## Cómo lo puede pedir el cliente

- «¿Me ayudas con un trabajo de clase sobre los ríos de Europa?»
- «escribeme un poema para mi novia»
- «¿Podría redactarme una carta de reclamación para mi compañía de la luz?»
- «Antes de lo de la reserva, ¿quién ganó el partido de anoche?»
