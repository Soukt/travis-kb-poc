---
name: vh-anadir-viajero-al-paquete
description: El cliente quiere añadir un viajero, adulto, niño o bebé, a su
  reserva de vuelo y hotel.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Alguien se suma al viaje o ha nacido un bebé después de reservar. Hay que añadir plaza en el vuelo y comprobar la capacidad de la habitación.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` los viajeros y la habitación actuales.
3. Pide con `pedir-datos-cliente`, mediante el formulario, los datos del nuevo viajero.
4. Crea con `crear-ticket-booking` un ticket con la petición y los datos recogidos.

## Qué no hace

- No añade al viajero directamente.
- No garantiza plaza en el vuelo ni capacidad en la habitación.
- No da precios.

## Cuándo pasa a una persona

- Siempre, porque implica datos de otra persona y un cargo.

## Cómo lo puede pedir el cliente

- «Se apunta mi hermana al viaje, ¿la podéis añadir?»
- «ha nacido el bebe despues de reservar, hay q meterlo en el vuelo?»
- «Buenas, quisiera incluir a un niño más en la reserva.»
- «podemos ir uno mas en la misma habitacion? y en el avion habra sitio?»
