---
name: aloj-que-cubre-todo-incluido
description: El cliente tiene todo incluido y quiere saber exactamente qué
  comidas, bebidas y servicios entran.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente con régimen de todo incluido pregunta por bebidas, snacks, restaurantes temáticos o servicios extra.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma con `consultar-reserva` que el régimen es todo incluido.
3. Consulta con `consultar-servicios-alojamiento` qué detalla el alojamiento de su todo incluido.
4. Busca con `buscar-informacion` la respuesta aprobada sobre lo que suele quedar fuera de este régimen.
5. Responde con lo que incluye según el alojamiento y lo que conviene confirmar en recepción.

## Qué no hace

- No asegura la inclusión de bebidas o restaurantes concretos si no figuran.
- No indica precios de lo que no está incluido.

## Cuándo pasa a una persona

- El alojamiento cobra al cliente algo que figuraba como incluido.

## Cómo lo puede pedir el cliente

- «¿Qué incluye exactamente el todo incluido del hotel?»
- «en el todo incluido entran las copas?»
- «Hola, los restaurantes a la carta van dentro del todo incluido o se pagan? y la caja fuerte?»
- «Les agradecería el detalle de los servicios comprendidos en el régimen de todo incluido.»
