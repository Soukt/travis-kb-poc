---
name: doc-bono-muestra-reserva-cancelada
description: El cliente ve su bono o su reserva como cancelada sin haberlo pedido.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando en la zona de cliente o en un email aparece la reserva o un servicio como cancelado y el cliente no lo ha solicitado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el estado de la reserva y de cada servicio.
3. Consulta con `consultar-pagos` si hay pagos pendientes o rechazados que puedan explicar el estado.
4. Abre `crear-ticket-booking` con prioridad, con el estado encontrado y la fecha del viaje.

## Qué no hace

- No reactiva la reserva.
- No promete mantener el precio ni la disponibilidad.

## Cuándo pasa a una persona

- Siempre: hay dinero y disponibilidad en juego.

## Cómo lo puede pedir el cliente

- «Me sale la reserva como cancelada y yo no he cancelado nada»
- «el bono pone anulado!!! que ha pasado»
- «He recibido una notificación de cancelación que no he solicitado.»
- «el hotel aparece cancelado pero el ferry no, ¿qué está pasando?»
