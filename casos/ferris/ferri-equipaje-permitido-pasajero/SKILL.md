---
name: ferri-equipaje-permitido-pasajero
description: El cliente pregunta cuánto equipaje puede llevar a bordo como
  pasajero y si hay límite de bultos o de peso.
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

El cliente quiere saber qué equipaje admite la naviera en la zona de pasaje, viaje a pie o con vehículo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la naviera y si viaja con vehículo o a pie.
3. Busca con `buscar-informacion` las condiciones aprobadas de equipaje.
4. Responde con lo que diga la información aprobada, sin añadir límites propios.

## Qué no hace

- No inventa límites de peso ni de bultos.
- No aplica condiciones de equipaje de los vuelos al barco.

## Cuándo pasa a una persona

- El cliente lleva un equipaje excepcional que la información aprobada no cubre.

## Cómo lo puede pedir el cliente

- «¿Cuántas maletas podemos llevar en el barco?»
- «hay limite de peso pal equipaje en el ferri como en los aviones?»
- «Buenos días, viajamos a pie, ¿existe alguna restricción de equipaje en la zona de pasaje?»
- «Llevamos bastantes bultos por la mudanza, ¿algún problema? ¿Y el vuelo de vuelta qué equipaje incluye?»
