---
name: pago-financiacion-rechazada-alternativas
description: El cliente ha visto rechazada su financiación y pregunta qué otras
  formas de pago tiene para su reserva.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente pidió financiar la reserva o lo pendiente, la entidad lo rechazó y quiere saber cómo puede pagar para no perder la reserva.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado de la reserva.
3. Consulta con `consultar-pagos` el importe pendiente y la fecha límite.
4. Busca con `buscar-informacion` las alternativas de pago aprobadas y se las explica.

## Qué no hace

- No explica ni valora los motivos del rechazo de la financiación.
- No mantiene la reserva sin pago ni amplía la fecha límite.

## Cuándo pasa a una persona

- La fecha límite de pago está a punto de vencer y el cliente no puede pagar.
- La reserva ha quedado bloqueada tras el rechazo.

## Cómo lo puede pedir el cliente

- «Me han denegado la financiación; ¿de qué otras maneras puedo abonar la reserva?»
- «no me han aprobado lo de financiar, como pago entonces»
- «Hola, la financiera me ha dicho que no, ¿pierdo la reserva?»
- «rechazada la financiacion, puedo pagar a plazos con vosotros?»
