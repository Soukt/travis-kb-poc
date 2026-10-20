---
name: doc-nombre-vuelo-no-coincide-documento
description: El cliente ve que el nombre de un pasajero en el vuelo no coincide
  con el de su pasaporte o documento de identidad.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el nombre registrado en el vuelo tiene un error o no coincide con el documento con el que se va a viajar, lo que puede impedir embarcar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-vuelo` los vuelos afectados y sus fechas.
3. Recoge con `pedir-datos-cliente` el nombre exacto tal como figura en el documento de viaje.
4. Abre `crear-ticket-booking` con el nombre registrado, el correcto y los vuelos afectados.

## Qué no hace

- No asegura que la aerolínea permita la corrección ni que sea gratuita.
- No recomienda viajar con el nombre erróneo.

## Cuándo pasa a una persona

- Siempre: las correcciones de nombre en vuelos dependen de la aerolínea y pueden tener coste.

## Cómo lo puede pedir el cliente

- «En el billete de avión mi nombre está mal escrito»
- «mi pasaporte pone el nombre compuesto y en el vuelo solo uno, pasa algo?»
- «El nombre de uno de los pasajeros del vuelo no coincide con su documento de viaje.»
- «me he dado cuenta de que puse el apellido de casada y el pasaporte tiene el de soltera»
