---
name: ferri-desembarque-procedimiento-y-orden
description: El cliente pregunta cómo es el desembarque al llegar, en qué orden
  salen pasajeros y vehículos y cuándo puede bajar.
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

El cliente quiere organizarse para la llegada, por ejemplo para bajar pronto o para saber cuándo volver al vehículo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-trayecto-ferri` si viaja con vehículo o a pie y la hora prevista de llegada.
3. Busca con `buscar-informacion` el procedimiento aprobado de desembarque.
4. Explica los pasos según viaje con vehículo o a pie.

## Qué no hace

- No calcula cuánto tardará en salir del barco.
- No promete que pueda desembarcar de los primeros.

## Cuándo pasa a una persona

- El cliente necesita asistencia para desembarcar.

## Cómo lo puede pedir el cliente

- «Cuando llegue el barco, ¿salen primero los coches o la gente andando?»
- «cuando hay q bajar al coche pa salir?»
- «Disculpe, ¿cómo se realiza el desembarque de vehículos en destino?»
- «Tenemos el traslado esperando, ¿se tarda mucho en bajar del barco? No queremos que se vaya sin nosotros.»
