---
name: otra-opinion-comparar-alojamientos-futuro-viaje
description: El cliente pide al agente su opinión sobre qué alojamiento elegir
  entre varios para un viaje que aún no ha reservado.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente duda entre opciones para un viaje nuevo y quiere que el agente le diga cuál es mejor.

## Qué hace el agente

1. Le explica que no da opiniones personales ni asesora reservas nuevas desde aquí.
2. Busca con `buscar-informacion` el canal aprobado para recibir asesoramiento antes de reservar.
3. Le indica ese canal.

## Qué no hace

- No recomienda un alojamiento sobre otro.
- No compara precios.

## Cuándo pasa a una persona

- Si la duda es en realidad sobre cambiar su reserva actual a otro alojamiento.

## Cómo lo puede pedir el cliente

- «Dudo entre dos hoteles para el verano, ¿cuál me recomiendas?»
- «q hotel es mejor para ir con niños, el de la playa o el del centro?»
- «Agradecería su opinión profesional sobre qué establecimiento elegir para mi próximo viaje.»
- «Este hotel me gustó, pero ¿cuál me aconsejas para la próxima vez, uno mejor?»
