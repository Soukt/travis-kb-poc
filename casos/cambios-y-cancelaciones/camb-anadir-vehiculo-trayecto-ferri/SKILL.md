---
name: camb-anadir-vehiculo-trayecto-ferri
description: El cliente reservó el ferri sin vehículo y ahora quiere llevar su
  coche o su moto.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El trayecto está reservado solo para pasajeros y el cliente quiere embarcar un vehículo. Depende del espacio disponible y tiene coste según el tipo de vehículo.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Localiza con `consultar-reserva` el trayecto en ferri.
3. Comprueba con `consultar-trayecto-ferri` que el trayecto no incluye vehículo.
4. Pide con `pedir-datos-cliente` el tipo de vehículo, sus dimensiones aproximadas y la matrícula.
5. Crea la solicitud con `crear-ticket-booking`.

## Qué no hace

- No confirma espacio para el vehículo.
- No da precio del suplemento.

## Cuándo pasa a una persona

- Siempre: tiene coste y depende de la naviera.

## Cómo lo puede pedir el cliente

- «Al final llevamos el coche, ¿se puede añadir al ferri?»
- «Quiero meter la moto en el barco, ¿se puede?»
- «hola reserve sin coche y ahora si lo llevo, q hago»
- «Solicito añadir un vehículo a mi trayecto. Es una furgoneta. ¿A qué hora hay que estar en el puerto?»
