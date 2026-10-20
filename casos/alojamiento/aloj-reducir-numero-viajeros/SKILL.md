---
name: aloj-reducir-numero-viajeros
description: El cliente avisa de que una de las personas de la reserva ya no
  viajará y pregunta qué pasa con el alojamiento.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando hay que quitar a un viajero de la habitación. Puede cambiar el precio o el tipo de habitación y afecta a datos de otra persona.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros y el tipo de habitación.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio que aplican.
4. Abre un ticket con `crear-ticket-booking` con el viajero que se da de baja.

## Qué no hace

- No elimina al viajero de la reserva.
- No promete devolución por la plaza que queda libre.

## Cuándo pasa a una persona

- Siempre: supone modificar la reserva y puede haber gastos o devoluciones.

## Cómo lo puede pedir el cliente

- «Una de las personas de la reserva no podrá viajar, ¿qué tengo que hacer?»
- «mi amiga se ha borrado, me devolveis su parte del hotel?»
- «Hola, al final vamos dos en vez de tres, la habitación nos la cambian? y el traslado?»
- «Les comunico la baja de uno de los viajeros de la reserva del alojamiento.»
