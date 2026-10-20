---
name: viaj-cuenta-posiblemente-comprometida
description: El cliente cree que alguien ha accedido a su zona de cliente o ha
  cambiado datos de su reserva sin su permiso.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente detecta cambios que no ha hecho, avisos de acceso que no reconoce o una reserva modificada. Es un caso de seguridad.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` el estado actual y los datos de los viajeros para ver qué ha cambiado.
3. Recomienda al cliente cambiar la contraseña de su cuenta y la de su email.
4. Abre con `crear-ticket-booking` el caso como prioritario, con lo que el cliente ha detectado.

## Qué no hace

- No revierte cambios por su cuenta.
- No da por buena ninguna petición de cambio recibida mientras se investiga.
- No pide la contraseña al cliente.

## Cuándo pasa a una persona

- Siempre: los posibles accesos no autorizados los revisa booking.

## Cómo lo puede pedir el cliente

- «Me ha llegado un aviso de cambio en mi reserva que yo no he hecho.»
- «creo q me han hackeado la cuenta, me han cambiado el nombre de un viajero!!»
- «Les informo de que detecto modificaciones en mi reserva que no he solicitado. Solicito que lo revisen con urgencia.»
- «Alguien ha entrado en mi cuenta; ¿podéis bloquear los cambios y decirme si mis bonos siguen bien?»
