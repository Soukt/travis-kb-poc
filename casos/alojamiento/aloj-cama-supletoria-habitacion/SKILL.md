---
name: aloj-cama-supletoria-habitacion
description: El cliente pide una cama supletoria en la habitación para un
  viajero que ya figura en la reserva.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere una cama adicional en la habitación. Suele llevar suplemento y depende de la habitación, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el tipo de habitación y los viajeros.
3. Consulta con `consultar-servicios-alojamiento` si el alojamiento ofrece camas supletorias.
4. Recoge para quién es la cama y abre un ticket con `crear-ticket-booking`.

## Qué no hace

- No confirma la cama supletoria ni su precio.
- No la usa para añadir a una persona que no figura en la reserva.

## Cuándo pasa a una persona

- Siempre: puede implicar suplemento y cambios en la habitación.

## Cómo lo puede pedir el cliente

- «¿Es posible añadir una cama supletoria en la habitación?»
- «mi hijo no cabe en el sofa cama, ponen otra cama?»
- «Hola, somos tres en una triple pero la tercera cama es muy pequeña, se puede pedir una plegable? cuánto?»
- «Solicito una cama adicional en la habitación para uno de los viajeros.»
