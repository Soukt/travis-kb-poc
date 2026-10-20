---
name: pago-reserva-cancelada-por-impago
description: El cliente tiene la reserva cancelada por un pago no realizado y
  quiere recuperarla o saber qué pasa con lo pagado.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva aparece cancelada por un plazo o un pago pendiente no abonado y el cliente pide reactivarla o saber qué ocurre con lo que ya pagó.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` el estado y el motivo de la cancelación.
3. Consulta con `consultar-pagos` lo pagado y lo que quedó pendiente.
4. Revisa con `consultar-politica-cancelacion` los gastos que constan.
5. Recoge lo que pide el cliente y lo pasa con `crear-ticket-booking`.

## Qué no hace

- No reactiva la reserva ni promete que se pueda recuperar.
- No anuncia devoluciones de lo ya pagado.

## Cuándo pasa a una persona

- Siempre: recuperar una reserva cancelada o devolver lo pagado lo decide booking.

## Cómo lo puede pedir el cliente

- «Mi reserva ha sido cancelada por impago y quisiera saber si es posible recuperarla.»
- «me habeis cancelado el viaje por un plazo, yo quiero ir!!»
- «Hola, no vi el aviso del pago y ahora la reserva sale anulada, ¿qué hago?»
- «si me la cancelais por no pagar, me devolveis lo que ya pague?»
