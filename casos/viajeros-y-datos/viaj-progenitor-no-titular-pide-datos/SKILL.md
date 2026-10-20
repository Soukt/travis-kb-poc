---
name: viaj-progenitor-no-titular-pide-datos
description: El cliente es progenitor de un menor incluido en una reserva hecha
  por otra persona y pide información sobre ese viaje.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un padre o una madre que no es titular quiere saber fechas, destino o alojamiento de un viaje de su hijo organizado por otra persona, a menudo en un contexto de separación. Son datos de otra persona.

## Qué hace el agente

1. Comprueba con `verificar-identidad` si quien escribe es el titular; si no lo es, no da ningún dato.
2. Le explica con tacto que la información de la reserva solo se facilita al titular.
3. Recoge con `pedir-datos-cliente` el motivo de la consulta y un medio de contacto.
4. Abre con `crear-ticket-booking` el caso para que booking valore cómo proceder.

## Qué no hace

- No confirma ni niega que exista la reserva.
- No da fechas, destinos ni alojamientos.
- No toma partido en conflictos familiares.

## Cuándo pasa a una persona

- Siempre: implica datos de otra persona y posibles cuestiones legales.

## Cómo lo puede pedir el cliente

- «Soy el padre de un niño que viaja con su madre y quiero saber a qué hotel van.»
- «mi ex se lleva a mi hijo de viaje con vosotros y no me dice donde, me lo podeis decir?»
- «Buenos días, como progenitora con custodia compartida solicito información sobre el viaje reservado para mi hija.»
- «Necesito saber cuándo vuelve mi hijo del viaje y si el vuelo está confirmado.»
