---
name: pago-saldo-a-favor-para-otra-reserva
description: El cliente tiene saldo a favor de una reserva cancelada y quiere
  aplicarlo a otra reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras una cancelación se le reconoció un crédito o saldo a favor y quiere usarlo para pagar, total o parcialmente, otra reserva suya.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es titular de las dos reservas.
2. Consulta con `consultar-pagos` el saldo a favor y lo pendiente de la nueva reserva.
3. Pasa la petición con `crear-ticket-booking` indicando ambas reservas.

## Qué no hace

- No aplica saldos.
- No confirma la validez del saldo.

## Cuándo pasa a una persona

- Siempre: implica mover dinero entre reservas.

## Cómo lo puede pedir el cliente

- «Disponemos de un crédito a favor de una reserva anterior y quisiéramos aplicarlo a la nueva.»
- «tengo dinero a favor de otro viaje, lo uso en este?»
- «Hola, me quedó saldo de la reserva que cancelé, ¿me lo descontáis de esta?»
- «pasadme el saldo de la otra reserva a esta porfa»
