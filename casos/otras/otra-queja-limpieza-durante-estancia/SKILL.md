---
name: otra-queja-limpieza-durante-estancia
description: El cliente está alojado y se queja de que la habitación o las zonas
  comunes no están limpias y quiere que se solucione.
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

El cliente está en el alojamiento o acaba de llegar y comunica problemas de limpieza en la habitación, el baño o las zonas comunes. Quiere que alguien actúe o dejar constancia.

## Qué hace el agente

1. Verifica que quien escribe es el titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento, las fechas y el tipo de habitación contratado.
3. Le sugiere que, si aún no lo ha hecho, lo comunique también en recepción para que puedan actuar en el momento.
4. Recoge con `pedir-datos-cliente` qué ha encontrado, en qué zona, si ya avisó en recepción y si tiene fotos.
5. Crea un ticket con `crear-ticket-booking` con todo lo recogido para que booking contacte con el hotel.

## Qué no hace

- No promete cambio de habitación, compensación ni devolución.
- No contacta directamente con el hotel ni da por hecho si la queja es fundada o no.
- No recomienda al cliente abandonar el alojamiento.

## Cuándo pasa a una persona

- Siempre: la gestión con el hotel la hace booking.
- Si el cliente pide compensación o cambio de alojamiento, se indica en el ticket con prioridad.

## Cómo lo puede pedir el cliente

- «Buenas tardes, acabamos de llegar al hotel y la habitación está sucia y el baño sin limpiar. ¿Pueden hacer algo?»
- «La habitacion da asco, hay pelos en la cama y nadie hace nada»
- «Os escribo porque llevamos varios días y no han pasado a limpiar ni una vez.»
- «Quiero poner una queja por la limpieza y de paso saber si el desayuno está incluido, que no me queda claro.»
