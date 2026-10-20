---
name: vh-hora-presentacion-en-aeropuerto
description: El cliente pregunta con cuánta antelación debe presentarse en el
  aeropuerto antes de la salida de su vuelo.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente pide la recomendación general sobre cuándo llegar al aeropuerto, sin necesitar datos de su reserva. Es habitual en quien vuela poco.

## Qué hace el agente

1. Busca con `buscar-informacion` la recomendación aprobada sobre la antelación para presentarse en el aeropuerto.
2. Responde con esa recomendación tal cual, aclarando que la referencia final es la que indique la aerolínea.
3. Le recuerda que la facturación y el embarque cierran antes de la salida del vuelo y que conviene comprobarlo con la aerolínea.

## Qué no hace

- No da una antelación inventada si no hay respuesta aprobada.
- No consulta la reserva si el cliente solo pide la recomendación general.

## Cuándo pasa a una persona

- Si no hay respuesta aprobada y el cliente necesita una indicación para un vuelo concreto.

## Cómo lo puede pedir el cliente

- «¿Cuánto antes hay que estar en el aeropuerto?»
- «con cuanto tiempo vamos al aeropuerto? es nuestro primer viaje en avion»
- «Hola, si ya tengo la tarjeta de embarque, ¿puedo llegar más justo?»
- «Una pregunta: ¿cuándo cierra la facturación? Y otra, ¿el hotel tiene desayuno?»
