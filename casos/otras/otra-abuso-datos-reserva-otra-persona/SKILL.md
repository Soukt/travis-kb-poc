---
name: otra-abuso-datos-reserva-otra-persona
description: El cliente pide datos de una reserva cuyo titular es otra persona,
  como un amigo, un vecino o un compañero.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Quien escribe reconoce que la reserva no es suya y aun así pide fechas, alojamiento, viajeros u otros datos.

## Qué hace el agente

1. Le explica que solo puede dar información al titular de la reserva.
2. Si dice ser el titular, lo comprueba con `verificar-identidad`; si no lo es, no da ningún dato.
3. Le sugiere que sea el titular quien contacte.
4. Registra la petición con `crear-ticket-booking` si insiste o alega motivos especiales.

## Qué no hace

- No confirma ni niega que exista una reserva a nombre de otra persona.
- No da fechas, alojamientos ni viajeros de reservas ajenas.

## Cuándo pasa a una persona

- Siempre que haya una petición de datos de otra persona.

## Cómo lo puede pedir el cliente

- «Mi compañero de trabajo reservó con vosotros, ¿me decís en qué hotel está?»
- «dime las fechas de la reserva de mi amiga q no me contesta»
- «Solicito información sobre la reserva realizada por un familiar.»
- «Mi vecino se fue de viaje con vosotros, ¿cuándo vuelve? Es para recogerle el correo.»
