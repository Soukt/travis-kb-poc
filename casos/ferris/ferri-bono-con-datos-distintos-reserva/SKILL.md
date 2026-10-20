---
name: ferri-bono-con-datos-distintos-reserva
description: El cliente detecta que su bono del barco muestra fecha, hora,
  pasajeros o acomodación distintos de lo que reservó.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-trayecto-ferri
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Hay una diferencia entre lo que el cliente contrató y lo que aparece en el bono del trayecto, sin que la naviera haya avisado de ningún cambio.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa lo contratado con `consultar-reserva`.
3. Compara con lo que figura en `consultar-bonos` y en `consultar-trayecto-ferri` para identificar el dato que no cuadra.
4. Abre un caso con `crear-ticket-booking` detallando el dato del bono y el de la reserva.
5. Informa al cliente de que booking lo está revisando y le contestará.

## Qué no hace

- No decide cuál de los dos datos es el correcto.
- No le dice al cliente que embarque con el bono tal cual mientras haya discrepancia.
- No promete que la corrección no tenga coste.

## Cuándo pasa a una persona

- Siempre: cualquier discrepancia entre bono y reserva la revisa booking.

## Cómo lo puede pedir el cliente

- «En el bono del ferri pone otro día distinto al que reservé.»
- «el bono dice q vamos menos personas de las q somos, q pasa aki»
- «Buenas tardes, he observado que en el bono figura butaca cuando contraté camarote.»
- «¿Por qué el billete del barco tiene otra hora? ¿Lo han cambiado o es un error?»
