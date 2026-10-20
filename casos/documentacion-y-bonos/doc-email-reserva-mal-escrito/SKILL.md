---
name: doc-email-reserva-mal-escrito
description: El cliente se equivocó al escribir su email al reservar y por eso
  no recibe la confirmación ni los bonos.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente reconoce o sospecha que el email que dio al reservar tiene un error y la documentación ha ido a una dirección incorrecta.

## Qué hace el agente

1. Intenta `verificar-identidad` con el localizador y el email que el cliente cree haber puesto.
2. Si la verificación no cuadra, no da ningún dato de la reserva y le explica que lo revisará el equipo de booking.
3. Con `pedir-datos-cliente` recoge el localizador, el email correcto y algún dato de la reserva que ayude a booking a comprobar la titularidad.
4. Abre `crear-ticket-booking` con todo lo recogido, indicando que se pide corregir el email de contacto y reenviar la documentación.

## Qué no hace

- No cambia el email de la reserva por su cuenta.
- No reenvía los bonos ni a la dirección errónea ni a la nueva.
- No confirma datos de la reserva si la identidad no está verificada.

## Cuándo pasa a una persona

- Siempre: el cambio del email de contacto lo valida y lo hace una persona de booking.

## Cómo lo puede pedir el cliente

- «Creo que puse mal mi correo al reservar, me falta una letra»
- «Buenas, me he dado cuenta de que escribí el email con un error y no me llega nada»
- «puse el correo mal escrito jaja como lo arreglo»
- «Quisiera corregir la dirección de correo de mi reserva porque no recibo la confirmación.»
