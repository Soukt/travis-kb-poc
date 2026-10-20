---
name: camb-anular-solicitud-de-cancelacion
description: El cliente pidió cancelar su reserva y ahora se arrepiente y quiere mantenerla.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Existe una petición de cancelación reciente y el cliente quiere echarse atrás. Si la cancelación ya se ha ejecutado con el proveedor, puede no haber vuelta atrás.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` si la reserva sigue activa o ya está cancelada.
3. Le explica el estado sin prometer que se pueda recuperar.
4. Crea un ticket urgente con `crear-ticket-booking` para detener o revertir la cancelación si aún es posible.

## Qué no hace

- No asegura que la reserva se recupere en las mismas condiciones.
- No crea una reserva nueva.

## Cuándo pasa a una persona

- Siempre: puede afectar a devoluciones y a la disponibilidad.

## Cómo lo puede pedir el cliente

- «Pedí cancelar pero al final sí vamos, ¿podéis pararlo?»
- «me arrepiento de haber cancelado, se puede recuperar la reserva?»
- «No canceléis nada, que lo hemos solucionado»
- «Solicito anular mi petición de cancelación y mantener la reserva tal como estaba.»
