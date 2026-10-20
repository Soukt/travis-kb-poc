---
name: ferri-anadir-vehiculo-a-reserva
description: El cliente reservó el barco como pasajero a pie y ahora quiere
  llevar su coche o su moto.
metadata:
  area: ferris
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

El trayecto está contratado sin vehículo y el cliente quiere incluir uno en la ida, en la vuelta o en ambas.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los pasajeros y los trayectos contratados.
3. Confirma con `consultar-trayecto-ferri` que el trayecto no incluye vehículo.
4. Pide con `pedir-datos-cliente` el tipo, las medidas, la matrícula y los trayectos en los que lo llevará.
5. Abre un caso con `crear-ticket-booking` y explica que booking confirmará la disponibilidad y el posible suplemento.

## Qué no hace

- No confirma que haya plaza para el vehículo.
- No da el precio del suplemento.

## Cuándo pasa a una persona

- Siempre: añadir un vehículo implica un cargo y depende de la disponibilidad de la naviera.

## Cómo lo puede pedir el cliente

- «Al final nos llevamos el coche, ¿se puede añadir al billete del barco?»
- «reserve sin coche y ahora lo necesito, se puede meter?»
- «Buenos días, quisiera incluir mi motocicleta en el trayecto de ida y vuelta.»
- «Si añado el coche, ¿cuánto me costaría? ¿Me lo cobráis con el siguiente pago?»
