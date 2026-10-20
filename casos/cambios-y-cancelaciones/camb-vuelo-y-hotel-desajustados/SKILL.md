---
name: camb-vuelo-y-hotel-desajustados
description: El cliente detecta que, tras un cambio, las fechas del vuelo y las
  del hotel ya no coinciden.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
  simulado: "true"
---
## Cuándo aplica

Después de una modificación del cliente o de la aerolínea, el vuelo llega o sale un día que no cuadra con las noches de alojamiento. Hay que revisar la reserva completa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` las fechas del alojamiento.
3. Comprueba con `consultar-vuelo` las fechas y horarios actuales de los vuelos.
4. Identifica el desajuste concreto, como una noche que sobra o que falta, y lo resume.
5. Prepara la propuesta de corrección para que booking la revise antes de contestar al cliente.

## Qué no hace

- No modifica noches ni vuelos.
- No asume quién provocó el desajuste.

## Cuándo pasa a una persona

- Corregirlo supone añadir o quitar noches con coste.
- El viaje empieza en breve.

## Cómo lo puede pedir el cliente

- «El vuelo ahora llega un día después pero el hotel empieza antes, ¿qué hacemos?»
- «Me han movido el vuelo y me sobra una noche de hotel»
- «no cuadra el vuelo con el hotel desde que cambiasteis la hora, revisarlo porfa»
- «Observo una discrepancia entre las fechas de vuelo y de alojamiento en mi reserva. ¿Pueden revisarlo?»
