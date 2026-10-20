---
name: pago-solicitar-devolucion-por-cancelacion
description: El cliente ha cancelado o quiere cancelar su reserva y pide la
  devolución de lo que le corresponda.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente solicita expresamente el reembolso de lo pagado tras una cancelación, sin que conste todavía una devolución en marcha.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado de la reserva.
3. Consulta con `consultar-politica-cancelacion` los gastos aplicables.
4. Revisa con `consultar-pagos` lo pagado.
5. Pasa la solicitud con `crear-ticket-booking` con todo lo recogido.

## Qué no hace

- No aprueba devoluciones ni fija importes.
- No cancela la reserva si el cliente no lo ha confirmado con claridad.

## Cuándo pasa a una persona

- Siempre: es una devolución de dinero.

## Cómo lo puede pedir el cliente

- «Solicito el reembolso de los importes abonados tras la cancelación de mi reserva.»
- «he cancelado, quiero mi dinero»
- «Hola, anulamos el viaje, ¿cómo pido que me devolváis lo pagado?»
- «quiero cancelar y que me devolvais todo lo que se pueda»
