---
name: vh-seleccionar-asiento-antes-de-volar
description: El cliente quiere elegir asiento o asegurarse de ir junto a sus
  acompañantes antes del vuelo.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente quiere un asiento concreto, como ventanilla o pasillo, o sentarse con su grupo. La selección puede tener coste según la tarifa.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` los trayectos y la aerolínea.
3. Pide con `pedir-datos-cliente` en qué trayectos y con qué preferencias quiere los asientos.
4. Crea con `crear-ticket-booking` un ticket con la petición.
5. Le informa de que booking le dirá si tiene coste antes de aplicar nada.

## Qué no hace

- No asigna asientos ni promete que irán juntos.
- No da precios de asientos.

## Cuándo pasa a una persona

- Siempre, porque puede tener un cargo.

## Cómo lo puede pedir el cliente

- «Quiero escoger asiento, ¿se puede?»
- «queremos ir juntos en el avion, como lo hacemos?»
- «Buenas, ¿la selección de asiento está incluida o se paga aparte?»
- «me gustaria ventanilla a la ida, y tb saber si llevo maleta»
