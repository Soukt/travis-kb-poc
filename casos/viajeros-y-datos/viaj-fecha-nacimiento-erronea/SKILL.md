---
name: viaj-fecha-nacimiento-erronea
description: El cliente detecta que la fecha de nacimiento de un viajero está
  mal en la reserva.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la fecha de nacimiento registrada no es la real, por un error al teclear o al elegir el año. Puede afectar al tipo de viajero y a lo que piden los proveedores.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` la fecha registrada y si el viajero figura como adulto, niño o bebé.
3. Pide con `pedir-datos-cliente` la fecha de nacimiento correcta.
4. Abre con `crear-ticket-booking` la corrección, indicando si la fecha correcta podría cambiar el tipo de viajero.
5. Informa al cliente de que booking revisará el cambio y le avisará si tiene alguna consecuencia.

## Qué no hace

- No cambia la fecha por su cuenta.
- No anticipa si habrá diferencia de precio.

## Cuándo pasa a una persona

- Siempre: la corrección la aplica booking.
- Con más motivo si la fecha correcta hace que el viajero pase de adulto a niño o al revés.

## Cómo lo puede pedir el cliente

- «Buenas, al meter la fecha de nacimiento de mi hija me equivoqué de año. ¿Se puede cambiar?»
- «la fecha de nacimiento de mi padre esta mal en la reserva, le puse la de hoy sin querer»
- «Les ruego corrijan la fecha de nacimiento de uno de los viajeros, que no corresponde con su documento.»
- «Puse mal el cumpleaños de mi hijo y no sé si por eso me han cobrado como adulto.»
