---
name: camb-como-funcionan-los-reembolsos
description: El cliente pregunta, en general, cómo y en cuánto tiempo hace la
  agencia los reembolsos.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Es una duda general sobre el proceso de devolución, sin reclamar una devolución concreta.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre cómo y cuándo se realizan los reembolsos.
2. Se la explica tal cual, sin añadir plazos propios.
3. Si el cliente pregunta por su devolución concreta, le indica que hace falta verificar su identidad y que el estado lo confirmará booking.

## Qué no hace

- No da plazos que no estén en la respuesta aprobada.
- No consulta pagos de una reserva sin verificar al titular.

## Cuándo pasa a una persona

- El cliente pregunta por el estado de una devolución concreta.
- No hay respuesta aprobada.

## Cómo lo puede pedir el cliente

- «¿Cuánto tardáis normalmente en devolver el dinero?»
- «Si cancelo, ¿el dinero vuelve a la misma tarjeta?»
- «como devolveis el dinero? por transferencia o a la tarjeta?»
- «Desearía conocer el procedimiento general de reembolsos.»
