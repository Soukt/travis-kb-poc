---
name: aloj-club-infantil-animacion
description: El cliente pregunta si el alojamiento tiene club infantil,
  animación o actividades para niños.
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

Cuando una familia quiere saber qué actividades ofrece el alojamiento para los niños y si están incluidas.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` las fechas y los viajeros menores.
3. Consulta con `consultar-servicios-alojamiento` si hay club infantil o animación y para qué edades.
4. Responde con lo que figura, indicando si es por temporada cuando así conste.

## Qué no hace

- No asegura plazas en el club infantil.
- No inscribe a los niños en actividades.

## Cuándo pasa a una persona

- El alojamiento anunciaba club infantil y está cerrado durante la estancia.

## Cómo lo puede pedir el cliente

- «¿El hotel tiene miniclub para los niños?»
- «hay animacion por las noches?»
- «Hola, mis peques son pequeños, hay actividades para su edad? y piscina infantil?»
- «Quisiera saber si el establecimiento cuenta con servicio de animación infantil.»
