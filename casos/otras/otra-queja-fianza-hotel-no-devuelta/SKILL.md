---
name: otra-queja-fianza-hotel-no-devuelta
description: El cliente reclama que el alojamiento le retuvo un depósito o
  fianza y no se lo ha devuelto tras la salida.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya dejó el alojamiento y sigue sin recuperar la fianza o el bloqueo de saldo que le hicieron al entrar, o el hotel alega desperfectos.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` el alojamiento y las fechas de la estancia.
3. Recoge con `pedir-datos-cliente` cómo se pagó la fianza, si tiene justificante y qué le dijeron al salir.
4. Crea un ticket con `crear-ticket-booking` para que booking lo reclame al hotel.

## Qué no hace

- No promete cuándo se devolverá la fianza.
- No pide al cliente los datos completos de su tarjeta.
- No da por buenos ni por falsos los desperfectos que alegue el hotel.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio y gestión con el hotel.

## Cómo lo puede pedir el cliente

- «Dejamos una fianza al entrar en el apartamento y todavía no nos la han devuelto.»
- «el hotel me bloqueo dinero en la tarjeta y sigue ahi, q pasa?»
- «Les ruego gestionen la devolución del depósito retenido por el alojamiento a la salida.»
- «No me han devuelto la fianza y encima dicen que rompimos algo, cosa que no es verdad.»
