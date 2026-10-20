---
name: camb-cancelar-por-situacion-en-destino
description: El cliente quiere cancelar sin gastos por un temporal, una alerta
  oficial u otro problema grave en el destino.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Hay un fenómeno meteorológico, una alerta u otra circunstancia en el destino por la que el cliente no quiere o no puede viajar. Solo booking puede valorar si aplica alguna excepción.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios y las fechas.
3. Consulta con `consultar-politica-cancelacion` los gastos vigentes.
4. Busca con `buscar-informacion` si la agencia tiene una respuesta aprobada para esa situación y se la comunica sin valoraciones propias.
5. Pasa la petición a booking con `crear-ticket-booking`.

## Qué no hace

- No opina sobre si es seguro viajar.
- No promete cancelación gratuita.

## Cuándo pasa a una persona

- Siempre: es una petición de excepción con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Anuncian un temporal fuerte en el destino, ¿podemos cancelar sin gastos?»
- «Con lo que está pasando allí no me atrevo a ir, ¿qué opciones tengo?»
- «hay alerta roja en la zona, cancelais gratis o q?»
- «Debido a la situación en el destino, solicito anular la reserva sin penalización.»
