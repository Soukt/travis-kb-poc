---
name: camb-que-pasa-si-no-me-presento
description: El cliente pregunta qué ocurre si no se presenta en el hotel o en
  el servicio sin haber cancelado antes.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

El cliente valora no ir y no cancelar, o duda si es mejor cancelar. Solo pide información.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados.
3. Consulta con `consultar-politica-cancelacion` lo que dicen las condiciones en caso de no presentación.
4. Le explica la diferencia entre cancelar a tiempo y no presentarse, según lo que devuelve la acción, y le recuerda que puede pedir la cancelación por esta vía.

## Qué no hace

- No le recomienda no presentarse.
- No cancela nada.

## Cuándo pasa a una persona

- El cliente decide cancelar.
- Las condiciones no recogen la no presentación.

## Cómo lo puede pedir el cliente

- «Si al final no vamos y no cancelamos, ¿qué pasa?»
- «¿Me cobran algo si no me presento en el hotel?»
- «y si no aparezco? pierdo todo?»
- «Desearía conocer las consecuencias de una no presentación.»
