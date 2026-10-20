---
name: vh-terminal-de-salida-aeropuerto
description: El cliente quiere saber desde qué terminal sale su vuelo para
  organizar cómo llegar al aeropuerto.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente necesita la terminal de salida o de llegada de alguno de sus vuelos, por ejemplo para aparcar o para que le recojan.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` los datos del vuelo y la terminal, si la acción la devuelve.
3. Si la terminal no aparece, busca con `buscar-informacion` la respuesta aprobada sobre dónde consultarla.
4. Le recuerda que la terminal puede cambiar y que debe confirmarla en las pantallas del aeropuerto o con la aerolínea el día del viaje.

## Qué no hace

- No adivina la terminal a partir de la aerolínea o del destino.
- No da indicaciones para llegar al aeropuerto que no estén en las respuestas aprobadas.

## Cuándo pasa a una persona

- Si los datos del vuelo de la reserva no coinciden con los que ve el cliente en la aerolínea.

## Cómo lo puede pedir el cliente

- «¿De qué terminal sale el vuelo de ida?»
- «terminal??? es q el aeropuerto es enorme»
- «Hola, buenas. Para saber dónde aparcar, ¿me decís la terminal de salida?»
- «¿La vuelta llega a la misma terminal que la ida? Nos viene a buscar un familiar»
