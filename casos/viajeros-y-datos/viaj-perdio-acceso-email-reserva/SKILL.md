---
name: viaj-perdio-acceso-email-reserva
description: El cliente ya no tiene acceso al email con el que hizo la reserva y
  no puede identificarse de la forma habitual.
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

Cuando el email de la reserva se ha cerrado, era de una cuenta antigua o no puede recuperar su contraseña. Sin verificación no se puede dar información de la reserva.

## Qué hace el agente

1. Intenta `verificar-identidad` con los datos que el cliente recuerde.
2. Si no es posible, le explica con claridad que todavía no puede darle datos de la reserva.
3. Pide con `pedir-datos-cliente` el localizador, si lo tiene, y un medio de contacto actual.
4. Abre con `crear-ticket-booking` el caso para que booking valide la identidad por otra vía.

## Qué no hace

- No muestra datos de la reserva sin verificación.
- No cambia el email de contacto.
- No acepta la palabra del cliente como prueba de identidad.

## Cuándo pasa a una persona

- Siempre: la validación alternativa de identidad la hace booking.

## Cómo lo puede pedir el cliente

- «Cerré la cuenta de correo con la que reservé y ahora no puedo acceder a nada.»
- «no me acuerdo de la contraseña del email antiguo y ahi tengo todo lo del viaje»
- «Buenos días, el correo de la reserva pertenecía a mi antigua empresa y ya no tengo acceso.»
- «Ya no uso aquel email; ¿cómo consigo los bonos y cambio el contacto?»
