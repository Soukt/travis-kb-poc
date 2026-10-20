---
name: viaj-familiar-pide-info-reserva-ajena
description: El cliente pide información de una reserva de la que no es titular
  ni viajero, por ejemplo la de un familiar o un amigo.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando alguien quiere conocer fechas, alojamiento o estado de una reserva ajena, con buena intención o sin ella. Son datos de otra persona.

## Qué hace el agente

1. Intenta `verificar-identidad`; si quien escribe no es el titular, no facilita ningún dato.
2. Explica con amabilidad que la información de una reserva solo se da a su titular.
3. Sugiere que sea el titular quien contacte o quien comparta la información.
4. Registra la petición con `crear-ticket-booking`, sin incluir datos de la reserva en la respuesta, para que booking decida si procede algo más.

## Qué no hace

- No confirma ni niega que exista la reserva.
- No da pistas sobre fechas, destino o servicios.

## Cuándo pasa a una persona

- Siempre: son datos de otra persona.
- Con prioridad si alega un motivo especial, como una urgencia o una autorización del titular.

## Cómo lo puede pedir el cliente

- «Mi hermana ha reservado con vosotros, ¿me decís en qué hotel está?»
- «hola, mi madre tiene un viaje y no se acuerda de las fechas, me las dais vosotros?»
- «Buenas tardes, solicito información sobre la reserva de un familiar, de la cual tengo el localizador.»
- «Quiero saber si mi novio ha reservado ya el viaje sorpresa, pero que no se entere.»
