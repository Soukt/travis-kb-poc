---
name: viaj-bebe-en-brazos-o-asiento-propio
description: El cliente pregunta si el bebé de la reserva viaja en brazos o
  tiene asiento propio en el vuelo.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando viaja un bebé en avión y los padres no tienen claro cómo está registrado ni qué implica.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo figura el bebé.
3. Revisa con `consultar-vuelo` los pasajeros y el equipaje incluido.
4. Busca con `buscar-informacion` la respuesta aprobada sobre bebés en vuelos y se la explica al cliente.

## Qué no hace

- No cambia el tipo de plaza.
- No da precios de un asiento adicional.

## Cuándo pasa a una persona

- El cliente quiere que el bebé tenga asiento propio.
- El bebé no figura en el vuelo.

## Cómo lo puede pedir el cliente

- «¿Mi bebé va en brazos o tiene su asiento?»
- «el bebe tiene sitio en el avion o va encima mio todo el viaje»
- «Buenas tardes, quisiera confirmar si el lactante tiene plaza asignada en el vuelo.»
- «¿El bebé va en brazos? Si es así, ¿puedo llevar su sillita a bordo?»
