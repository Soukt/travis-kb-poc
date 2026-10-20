---
name: viaj-corregir-errata-nombre-vuelo
description: El cliente necesita corregir un error en el nombre de un pasajero
  que figura en un vuelo de su reserva.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el nombre de un pasajero en el vuelo no coincide con su documento de viaje por una errata, letras de más o de menos o apellidos incompletos. Las aerolíneas suelen ser estrictas y la corrección puede tener coste.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` y `consultar-vuelo` cómo figura el nombre del pasajero y en qué vuelos.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio de la reserva, sin adelantar importes.
4. Pide con `pedir-datos-cliente` el nombre y los apellidos exactamente como aparecen en el documento con el que viajará.
5. Abre con `crear-ticket-booking` la solicitud con el nombre actual, el correcto, los vuelos afectados y las condiciones consultadas.
6. Explica al cliente que booking gestionará la corrección con la aerolínea y le informará de si tiene algún coste.

## Qué no hace

- No promete que la corrección sea posible ni gratuita.
- No calcula ni comunica gastos de cambio por su cuenta.
- No recomienda comprar un billete nuevo.

## Cuándo pasa a una persona

- Siempre: la corrección de nombres en vuelos la tramita booking con la aerolínea y puede suponer un cargo.

## Cómo lo puede pedir el cliente

- «Buenos días, al hacer la reserva escribí mal mi apellido y el billete de avión sale con el error. ¿Es posible corregirlo?»
- «me e dado cuenta de que en el vuelo pone mal mi nombre, le falta una letra, me dejaran embarcar?»
- «Solicito la corrección del nombre de uno de los pasajeros, ya que no coincide con su pasaporte.»
- «Tengo el nombre mal en el billete y además no sé si llevo maleta facturada, ¿me lo miráis todo?»
