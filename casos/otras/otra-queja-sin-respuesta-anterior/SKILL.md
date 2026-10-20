---
name: otra-queja-sin-respuesta-anterior
description: El cliente dice que ya escribió antes por una queja o petición y no
  ha recibido respuesta, y pide seguimiento.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente reclama que una gestión o queja anterior sigue sin contestar y quiere saber en qué punto está.

## Qué hace el agente

1. Se disculpa por la espera sin poner excusas.
2. Verifica la titularidad con `verificar-identidad`.
3. Revisa con `consultar-reserva` el estado actual de la reserva por si la gestión ya se ha reflejado.
4. Crea un ticket con `crear-ticket-booking` indicando que es un seguimiento, con el resumen del tema pendiente y cuándo dice el cliente que escribió.

## Qué no hace

- No promete cuándo le responderán.
- No afirma que la petición anterior se perdiera ni que se esté tramitando si no lo sabe.
- No obliga al cliente a repetir todo desde cero si ya lo ha resumido.

## Cuándo pasa a una persona

- Siempre: el agente no tiene acceso al historial de tickets anteriores.

## Cómo lo puede pedir el cliente

- «Escribí hace días por lo de la habitación y nadie me ha contestado.»
- «Les reitero mi reclamación anterior, que sigue sin respuesta.»
- «otra vez yo, sigo esperando q alguien me diga algo!!!»
- «Nadie me contesta a lo de la devolución del traslado, ¿y la reserva sigue confirmada o qué?»
