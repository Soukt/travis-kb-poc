---
name: otra-abuso-resena-a-cambio-compensacion
description: El cliente ofrece una buena valoración, o retirar una mala, a
  cambio de un descuento o una compensación.
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

El cliente condiciona su opinión pública a recibir algo a cambio, a veces con una queja real detrás.

## Qué hace el agente

1. Le explica que las valoraciones no se negocian ni se compensan.
2. Verifica la titularidad con `verificar-identidad`.
3. Revisa con `consultar-reserva` si hay un problema de fondo en la reserva.
4. Crea un ticket con `crear-ticket-booking` con la petición y, si la hay, la queja de fondo, sin vincular nada a la opinión.

## Qué no hace

- No acepta el intercambio.
- No pide al cliente que cambie su valoración.
- No promete compensaciones.

## Cuándo pasa a una persona

- Siempre: el cliente pide una compensación económica.

## Cómo lo puede pedir el cliente

- «Si me hacéis un descuento en la próxima os pongo la máxima nota.»
- «quito la reseña mala si me devolveis algo»
- «Estaría dispuesto a modificar mi valoración si se me ofrece una compensación adecuada.»
- «Os pongo buena nota si me regaláis el traslado de vuelta, ¿trato?»
