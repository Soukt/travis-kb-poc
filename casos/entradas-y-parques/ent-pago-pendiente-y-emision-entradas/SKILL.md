---
name: ent-pago-pendiente-y-emision-entradas
description: El cliente tiene un pago pendiente en su reserva y pregunta si eso
  afecta a la emisión de sus entradas.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Aplica a reservas con pago fraccionado o pendiente. El cliente quiere saber cuándo se cobra y cuándo tendrá las entradas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-pagos` los pagos hechos, el pendiente y la próxima fecha de cobro.
3. Revisa con `consultar-bonos` si los bonos de las entradas están bloqueados hasta completar el pago.
4. Le explica la relación entre el pago pendiente y la disponibilidad de las entradas.

## Qué no hace

- No modifica fechas de cobro.
- No cobra ni gestiona pagos por el chat.

## Cuándo pasa a una persona

- El cliente quiere cambiar la fecha de cobro o tiene un problema con el pago.

## Cómo lo puede pedir el cliente

- «Me queda un pago pendiente. ¿Me daréis las entradas antes?»
- «cuando me cobrais lo q falta? y las entradas cuando?»
- «Buenos días, ¿las entradas se emitirán una vez abonado lo pendiente?»
- «no tengo las entradas y me pone pago pendiente, es por eso?»
