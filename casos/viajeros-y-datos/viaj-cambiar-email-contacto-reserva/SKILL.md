---
name: viaj-cambiar-email-contacto-reserva
description: El cliente quiere que el email de contacto de su reserva se sustituya por otro.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente va a dejar de usar el email con el que reservó o prefiere recibir las comunicaciones en otro. Como el email sirve para verificar la identidad, el cambio lo valida una persona.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular, usando el email actual de la reserva.
2. Pide con `pedir-datos-cliente` el email nuevo y lo hace confirmar escribiéndolo dos veces.
3. Abre con `crear-ticket-booking` la solicitud de cambio para que booking la valide.
4. Explica al cliente que, hasta que se aplique, las comunicaciones seguirán llegando al email actual.

## Qué no hace

- No cambia el email por su cuenta.
- No envía bonos ni documentos al email nuevo mientras no conste en la reserva.
- No tramita el cambio si la verificación con el email actual falla.

## Cuándo pasa a una persona

- Siempre: el cambio de email afecta a la seguridad de la reserva y lo valida booking.

## Cómo lo puede pedir el cliente

- «Hola, quiero cambiar el correo de la reserva porque el que puse es del trabajo.»
- «Buenos días, solicito que se actualice la dirección de correo electrónico asociada a mi reserva.»
- «el email q puse ya no lo uso, me lo podeis cambiar por otro?»
- «Cambiadme el email de contacto y mandadme ahí los bonos, por favor.»
