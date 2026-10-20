---
name: aloj-piscina-abierta-temporada
description: El cliente quiere saber si la piscina del alojamiento estará
  abierta en las fechas de su estancia y si es climatizada.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pregunta por la piscina: si existe, si abre en su temporada o si es climatizada.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba el alojamiento y las fechas de estancia con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` la piscina, su temporada de apertura y si está climatizada.
4. Responde ajustándose a lo que devuelve la acción para sus fechas.

## Qué no hace

- No asegura la apertura en sus fechas si la acción no lo indica.
- No inventa horarios de la piscina ni la temperatura del agua.

## Cuándo pasa a una persona

- El cliente reservó precisamente por la piscina y la información indica que estará cerrada.

## Cómo lo puede pedir el cliente

- «¿La piscina estará abierta en nuestras fechas?»
- «la pisci es climatizada??»
- «Hola! Mis hijos solo preguntan por la piscina jaja, estará abierta? hay toallas o las llevamos?»
- «Desearía saber si la piscina del hotel estará operativa durante nuestra estancia.»
