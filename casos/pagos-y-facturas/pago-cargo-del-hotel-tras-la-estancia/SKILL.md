---
name: pago-cargo-del-hotel-tras-la-estancia
description: El cliente recibe un cargo del alojamiento en su tarjeta después de
  haber dejado el hotel.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras la salida, el alojamiento ha cobrado un importe en la tarjeta que dejó como garantía (consumos, daños u otros conceptos) y el cliente no está de acuerdo o no lo entiende.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el alojamiento, las fechas y lo que incluía la reserva.
3. Pide con `pedir-datos-cliente` el concepto del cargo y cualquier justificante que le haya dado el hotel.
4. Crea el ticket con `crear-ticket-booking` para que booking lo gestione con el alojamiento.

## Qué no hace

- No da la razón al cliente ni al hotel.
- No promete la devolución del cargo.

## Cuándo pasa a una persona

- Siempre: es un cargo que el cliente discute.

## Cómo lo puede pedir el cliente

- «Una vez finalizada la estancia, el hotel me ha efectuado un cargo que no autoricé.»
- «el hotel me ha cobrado algo despues de irme»
- «Hola, me han cobrado el minibar y no tomé nada»
- «me han cobrado daños de la habitacion y yo la deje perfecta, quiero reclamar»
