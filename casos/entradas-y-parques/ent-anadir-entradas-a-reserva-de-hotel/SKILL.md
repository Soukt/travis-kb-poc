---
name: ent-anadir-entradas-a-reserva-de-hotel
description: El cliente tiene solo hotel reservado y quiere añadir entradas al
  parque a su reserva.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente decide después de reservar que quiere entradas. Es una venta nueva con cargo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` las fechas del alojamiento y los viajeros.
3. Recoge con `pedir-datos-cliente` qué entradas quiere, para qué días y para qué viajeros.
4. Abre con `crear-ticket-booking` la solicitud con todo lo recogido.

## Qué no hace

- No da precios ni confirma disponibilidad.
- No cobra ni añade servicios a la reserva.

## Cuándo pasa a una persona

- Siempre: es una contratación con cargo.

## Cómo lo puede pedir el cliente

- «Tengo el hotel con vosotros. ¿Puedo añadir las entradas al parque?»
- «se pueden comprar las entradas aqui aunque solo cogi el hotel?»
- «Buenos días, quisiera ampliar mi reserva con entradas para el parque.»
- «queremos entradas para un dia, nos las meteis en la reserva? cuanto seria?»
