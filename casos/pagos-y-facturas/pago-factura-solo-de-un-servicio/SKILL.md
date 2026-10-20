---
name: pago-factura-solo-de-un-servicio
description: El cliente necesita una factura de solo una parte de su reserva,
  por ejemplo únicamente del alojamiento.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva incluye varios servicios y el cliente quiere una factura separada de uno de ellos, normalmente para justificar un gasto concreto.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados.
3. Consulta con `consultar-factura` cómo se ha emitido la factura.
4. Recoge qué servicio necesita facturado aparte y para qué, y lo pasa con `crear-ticket-booking`.

## Qué no hace

- No promete separar la factura.
- No indica importes por servicio que no devuelvan las acciones.

## Cuándo pasa a una persona

- Siempre: es una excepción al formato de factura.

## Cómo lo puede pedir el cliente

- «Necesitaría una factura que recoja únicamente el importe del alojamiento.»
- «me podeis hacer factura solo del hotel sin el vuelo?»
- «Hola, en el trabajo solo me pagan el hotel, ¿me hacéis factura aparte?»
- «quiero la factura del ferry por un lado y la del hotel por otro»
