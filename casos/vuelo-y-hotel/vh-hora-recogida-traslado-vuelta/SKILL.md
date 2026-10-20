---
name: vh-hora-recogida-traslado-vuelta
description: El cliente quiere saber a qué hora y dónde le recogerán en el hotel
  para llevarle al aeropuerto el día de la vuelta.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
    - consultar-vuelo
  simulado: "true"
---
## Cuándo aplica

El cliente tiene traslado de vuelta incluido y quiere organizar el último día. No pide cambiar la hora.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-traslados` la hora y el lugar de recogida del traslado de vuelta.
3. Consulta con `consultar-vuelo` la hora del vuelo de vuelta para dar contexto a la respuesta.
4. Le informa de la recogida tal y como la devuelve la acción o, si se comunica en destino, se lo explica así.

## Qué no hace

- No calcula una hora de recogida por su cuenta.
- No cambia la hora de recogida.

## Cuándo pasa a una persona

- Si la hora de recogida no está disponible o no encaja con el vuelo.

## Cómo lo puede pedir el cliente

- «¿A qué hora nos recogen en el hotel el último día?»
- «el traslado de vuelta cuando pasa?»
- «Buenas, ¿dónde nos recoge el traslado para ir al aeropuerto, en la puerta del hotel?»
- «nadie nos ha dicho la hora de recogida pa la vuelta»
