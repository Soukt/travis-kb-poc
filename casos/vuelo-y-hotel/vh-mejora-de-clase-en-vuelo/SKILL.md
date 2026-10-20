---
name: vh-mejora-de-clase-en-vuelo
description: El cliente quiere mejorar la clase de su vuelo o tener asientos con
  más espacio dentro del paquete.
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

El cliente quiere volar en una clase superior o con más comodidad en uno o varios trayectos. Supone un cambio con coste.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` la clase y la tarifa actuales.
3. Pide con `pedir-datos-cliente` qué trayectos y qué viajeros quiere mejorar.
4. Crea con `crear-ticket-booking` un ticket con la petición.
5. Le informa de que booking le confirmará disponibilidad y coste antes de aplicar nada.

## Qué no hace

- No da precios ni confirma disponibilidad.
- No modifica la reserva.

## Cuándo pasa a una persona

- Siempre, porque implica un cargo.

## Cómo lo puede pedir el cliente

- «¿Se puede subir a business en el vuelo de vuelta?»
- «cuanto me cuesta ir en primera? es nuestra luna de miel»
- «Buenas tardes, me interesa mejorar la clase del vuelo de ida para mi pareja y para mí.»
- «hay asientos con mas espacio para las piernas? pagaria la diferencia»
