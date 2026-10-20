---
name: pago-plazos-tras-modificar-reserva
description: El cliente ha modificado su reserva y quiere saber cómo quedan los
  plazos pendientes después del cambio.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Tras un cambio en la reserva (fechas, viajeros o servicios) el precio ha variado y el cliente no entiende cómo se reparte la diferencia en los cobros pendientes.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el cambio realizado y el estado actual de la reserva.
3. Consulta con `consultar-pagos` el nuevo calendario y los importes pendientes.
4. Busca con `buscar-informacion` cómo se recalculan los plazos tras una modificación.
5. Prepara una explicación clara para que booking la revise antes de enviarla.

## Qué no hace

- No envía la explicación sin la revisión de booking.
- No recalcula los plazos por su cuenta.

## Cuándo pasa a una persona

- El nuevo calendario no cuadra con el cambio realizado.
- El cliente no está de acuerdo con la diferencia de precio.

## Cómo lo puede pedir el cliente

- «Tras modificar las fechas de mi viaje, ¿cómo quedan los pagos pendientes?»
- «añadi un niño a la reserva y ahora no se cuanto me vais a cobrar en cada plazo»
- «Hola, cambié de habitación y veo los plazos distintos, ¿me lo explicáis?»
- «he quitado el traslado, me lo descontais del siguiente pago o como va»
