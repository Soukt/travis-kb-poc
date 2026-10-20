---
name: ferri-traslado-puerto-hotel-incluido
description: El cliente pregunta si tiene traslado incluido entre el puerto y el
  hotel y dónde le recogen al desembarcar.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

El cliente llega en barco a destino y quiere saber cómo llegará al alojamiento.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-traslados` si hay traslado incluido, el punto de encuentro y el horario.
3. Comprueba con `consultar-trayecto-ferri` la hora de llegada para confirmar que encaja con el traslado.
4. Responde con el punto de encuentro y qué hacer al desembarcar.

## Qué no hace

- No contrata traslados que no estén en la reserva.
- No recomienda taxis ni otros transportes concretos.

## Cuándo pasa a una persona

- La hora del traslado no encaja con la llegada del barco.

## Cómo lo puede pedir el cliente

- «¿Tenemos traslado desde el puerto al hotel?»
- «al bajar del barco alguien nos recoge o como vamos al hotel»
- «Buenas tardes, ¿dónde está el punto de encuentro del traslado en el puerto de llegada?»
- «Si el barco llega tarde, ¿el del traslado nos espera? ¿Y a qué hora sale el barco?»
