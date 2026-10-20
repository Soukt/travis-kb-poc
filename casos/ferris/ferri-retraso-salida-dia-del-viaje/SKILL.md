---
name: ferri-retraso-salida-dia-del-viaje
description: El cliente está en el puerto o va de camino y se entera de que su
  barco sale con retraso.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El mismo día de la salida, el cliente ve un retraso anunciado y quiere saber la nueva hora y qué tiene que hacer.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene con `consultar-trayecto-ferri` el estado del trayecto y la hora de salida actualizada, si la hay.
3. Busca con `buscar-informacion` qué recomienda la información aprobada en caso de retraso.
4. Responde con la información disponible y recuerda que debe atender a los avisos de la naviera en el puerto.

## Qué no hace

- No estima la duración del retraso por su cuenta.
- No promete compensaciones.

## Cuándo pasa a una persona

- El retraso afecta a otros servicios de la reserva, como el hotel, un traslado o un vuelo.
- El cliente quiere reclamar por el retraso.

## Cómo lo puede pedir el cliente

- «En el puerto dicen que el barco va con retraso, ¿sabéis algo?»
- «el ferri no sale a su hora, cuanto vamos a esperar??»
- «Buenas tardes, el panel de la terminal indica retraso en mi salida. ¿Tienen información actualizada?»
- «Llevamos un buen rato esperando y nadie dice nada, ¿qué hacemos? ¿Podemos irnos a comer?»
