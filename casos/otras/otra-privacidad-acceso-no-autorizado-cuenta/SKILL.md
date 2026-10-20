---
name: otra-privacidad-acceso-no-autorizado-cuenta
description: El cliente cree que alguien ha entrado en su cuenta o ha tocado su
  reserva sin su permiso.
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

El cliente ve cambios que no ha hecho, recibe avisos extraños o sospecha que otra persona usa su zona de cliente.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` si hay cambios que el cliente no reconoce.
3. Le recomienda cambiar la contraseña de su cuenta y la de su email.
4. Crea un ticket urgente con `crear-ticket-booking` con los cambios no reconocidos.

## Qué no hace

- No revierte cambios por su cuenta.
- No da datos a terceros que digan ser el titular.

## Cuándo pasa a una persona

- Siempre: es un posible incidente de seguridad.

## Cómo lo puede pedir el cliente

- «Alguien ha cambiado el email de mi reserva y yo no he sido.»
- «creo q me han hackeado la cuenta, me llegan cosas raras»
- «Les informo de un posible acceso no autorizado a mi área de cliente.»
- «Han cancelado una entrada de mi reserva y no fui yo. ¿Se puede recuperar?»
