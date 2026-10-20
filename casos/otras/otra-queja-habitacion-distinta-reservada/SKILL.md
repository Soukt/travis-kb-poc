---
name: otra-queja-habitacion-distinta-reservada
description: El cliente se queja de que le han dado una habitación de tipo o
  categoría distinta a la que reservó.
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

El cliente está en el alojamiento o ya terminó la estancia y dice que la habitación asignada no coincide con la contratada en camas, vistas o categoría.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-reserva` qué tipo de habitación figura en la reserva.
3. Si sigue en el hotel, le sugiere mostrar el bono en recepción para pedir que se corrija.
4. Recoge con `pedir-datos-cliente` qué habitación le dieron, qué le dijeron en recepción y fotos si las tiene.
5. Crea un ticket con `crear-ticket-booking` con la comparación entre lo contratado y lo recibido.

## Qué no hace

- No promete devolver la diferencia ni una compensación.
- No asegura que el hotel vaya a cambiar la habitación sin que booking lo confirme.

## Cuándo pasa a una persona

- Siempre: puede implicar una reclamación económica al hotel.
- Con prioridad si el cliente sigue alojado y la habitación no le sirve, por ejemplo porque faltan camas.

## Cómo lo puede pedir el cliente

- «Reservé una habitación con vistas al mar y nos han dado una interior que da a un patio.»
- «Nos han puesto una cama de matrimonio y pedimos camas separadas, que vamos con los niños»
- «Les escribo para reclamar: la categoría de la habitación no es la que pagamos.»
- «la habitacion no es la que puse en la reserva, q hago? y otra cosa, a qué hora hay que dejarla el último día»
