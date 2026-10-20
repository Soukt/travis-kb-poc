---
name: vh-estado-vuelo-dia-del-viaje
description: El cliente, el mismo día del viaje, pregunta si su vuelo sale a su
  hora o lleva retraso.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
  simulado: "true"
---
## Cuándo aplica

El cliente está de camino o ya en el aeropuerto y quiere conocer el estado de su vuelo. Solo pide información, no una gestión.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el estado actualizado del vuelo.
3. Le informa del estado tal y como lo devuelve la acción, incluido el retraso si lo hay.
4. Le recuerda que la información de referencia en el aeropuerto es la de las pantallas y los avisos de la aerolínea.

## Qué no hace

- No predice si el retraso aumentará o se recuperará.
- No promete compensaciones por el retraso.

## Cuándo pasa a una persona

- Si el vuelo figura como cancelado o desviado.
- Si el cliente pide compensación o un vuelo alternativo por el retraso.

## Cómo lo puede pedir el cliente

- «Estoy en el aeropuerto y en la pantalla no sale mi vuelo, ¿sabéis algo?»
- «mi vuelo va con retraso??»
- «Buenos días, ¿podrían confirmarme si el vuelo de esta tarde sale en hora?»
- «q pasa con el vuelo, la puerta no abre y nadie dice nada»
