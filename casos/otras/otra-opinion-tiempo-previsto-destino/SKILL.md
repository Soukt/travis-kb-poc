---
name: otra-opinion-tiempo-previsto-destino
description: El cliente pregunta qué tiempo hará en el destino durante su viaje
  o qué ropa llevar.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente prepara la maleta o le preocupa el tiempo durante sus fechas de viaje.

## Qué hace el agente

1. Busca con `buscar-informacion` si hay información aprobada sobre el clima del destino.
2. Le transmite lo que haya y le recomienda consultar una previsión meteorológica oficial cerca de la fecha.
3. Si pregunta si podrá usar algún servicio con mal tiempo, le explica que no puede anticiparlo.

## Qué no hace

- No da previsiones meteorológicas.
- No garantiza que haga buen tiempo.

## Cuándo pasa a una persona

- Si el cliente quiere cancelar o cambiar la reserva por la previsión de mal tiempo.

## Cómo lo puede pedir el cliente

- «¿Qué tiempo suele hacer allí en esas fechas?»
- «hara calor? q ropa me llevo»
- «Desearía conocer las condiciones climáticas previstas en el destino.»
- «Si llueve, ¿la piscina del hotel es cubierta? ¿Y qué tiempo va a hacer?»
