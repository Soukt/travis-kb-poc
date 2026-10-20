---
name: camb-cancelar-con-pagos-pendientes
description: El cliente paga la reserva a plazos, quiere cancelar y pregunta qué
  pasa con los pagos que faltan.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva tiene pagos pendientes programados y el cliente quiere cancelar antes del siguiente cobro.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-pagos` lo pagado, lo pendiente y la próxima fecha de cobro.
3. Consulta con `consultar-politica-cancelacion` los gastos vigentes.
4. Le explica la situación y le avisa de que la cancelación no se completa hasta que booking la tramite.
5. Crea la solicitud con `crear-ticket-booking`, indicando la próxima fecha de cobro.

## Qué no hace

- No detiene los cobros por su cuenta.
- No promete que no se haga el siguiente cargo.

## Cuándo pasa a una persona

- Siempre: hay cobros pendientes y posibles devoluciones.
- Con prioridad si el próximo cobro es inminente.

## Cómo lo puede pedir el cliente

- «Estoy pagando a plazos y quiero cancelar, ¿me vais a cobrar el siguiente?»
- «cancelar y q no me cobren lo q falta»
- «Hola, ¿si cancelo ahora, qué pasa con lo que queda por pagar?»
- «Solicito cancelar la reserva y que se suspendan los pagos pendientes.»
