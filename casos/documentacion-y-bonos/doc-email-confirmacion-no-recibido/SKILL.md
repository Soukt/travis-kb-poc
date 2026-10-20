---
name: doc-email-confirmacion-no-recibido
description: El cliente ha hecho una reserva y dice que no le ha llegado el
  email de confirmación ni los bonos.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente no encuentra el email de confirmación de una reserva ya hecha. Aplica tanto si acaba de reservar como si lo echa en falta pasado un tiempo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` que la reserva existe y está confirmada.
3. Mira con `consultar-bonos` si los bonos ya están generados y disponibles.
4. Si están disponibles, los reenvía con `reenviar-bono` al email de la reserva y le sugiere revisar también las carpetas de correo no deseado y promociones.
5. Le recuerda que también puede descargarlos desde su zona de cliente.

## Qué no hace

- No envía la documentación a un email distinto del de la reserva.
- No da por confirmada una reserva que figure como pendiente o cancelada.
- No cambia el email de contacto de la reserva.

## Cuándo pasa a una persona

- La reserva no aparece o su estado no es confirmada.
- El cliente indica que el email de la reserva está mal escrito o que ya no tiene acceso a él.

## Cómo lo puede pedir el cliente

- «Buenas tardes, realicé una reserva y no he recibido ningún correo de confirmación. ¿Podrían comprobarlo?»
- «oye q no me ha llegado nada al correo, ¿la reserva está hecha o no?»
- «Reservé el otro día y no me a llegado el email, me estoy poniendo nerviosa»
- «No tengo la confirmación y de paso quería saber si el hotel tiene parking»
