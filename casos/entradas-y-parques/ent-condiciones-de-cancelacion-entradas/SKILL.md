---
name: ent-condiciones-de-cancelacion-entradas
description: El cliente quiere saber qué gastos tendría si cancelara sus
  entradas, sin pedir aún la cancelación.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

Aplica como consulta previa. El cliente quiere conocer el calendario de gastos antes de decidir.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-politica-cancelacion` el calendario de gastos de cancelación de las entradas.
3. Explica las condiciones de forma clara y le indica que puede pedir la cancelación por aquí si lo decide.

## Qué no hace

- No cancela la reserva.
- No interpreta las condiciones más allá de lo que devuelve la acción.

## Cuándo pasa a una persona

- El cliente decide cancelar.

## Cómo lo puede pedir el cliente

- «Si cancelo las entradas, ¿cuánto pierdo?»
- «las entradas son reembolsables?»
- «Buenas tardes, quisiera conocer la política de cancelación de mis entradas.»
- «hasta cuando puedo cancelar sin pagar nada?»
