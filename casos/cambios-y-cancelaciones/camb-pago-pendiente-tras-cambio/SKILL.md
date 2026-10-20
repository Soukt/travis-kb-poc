---
name: camb-pago-pendiente-tras-cambio
description: El cliente quiere saber si le queda algo por pagar, y cuándo se
  cobra, después de un cambio que ya aceptó.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

El cliente aceptó una modificación con coste y quiere saber qué queda pendiente y cuál es la próxima fecha de cobro.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Consulta con `consultar-pagos` los pagos hechos, los pendientes y la próxima fecha de cobro.
3. Se lo explica tal como lo devuelve la acción.

## Qué no hace

- No modifica fechas de cobro.
- No da importes distintos de los que devuelve la acción.

## Cuándo pasa a una persona

- El cliente no está de acuerdo con el importe pendiente.
- El cliente pide aplazar o fraccionar el pago.

## Cómo lo puede pedir el cliente

- «Después del cambio, ¿cuánto me queda por pagar?»
- «¿Cuándo me cobráis la diferencia del cambio?»
- «tengo q pagar algo mas o ya esta todo?»
- «Ruego me indiquen los pagos pendientes tras la modificación.»
