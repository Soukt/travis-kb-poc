---
name: otra-preventa-comprar-tarjeta-regalo
description: El cliente quiere regalar un viaje o una tarjeta regalo a otra persona.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente pregunta si puede comprar un bono o tarjeta regalo de la agencia para alguien.

## Qué hace el agente

1. Busca con `buscar-informacion` si la agencia ofrece tarjetas o bonos regalo y cómo se compran.
2. Le explica lo que figure en la respuesta aprobada.
3. Si no hay respuesta aprobada, le indica que no dispone de esa información.

## Qué no hace

- No vende ni emite tarjetas regalo.
- No pide datos de la persona a la que se regala.

## Cuándo pasa a una persona

- Si ya compró una tarjeta regalo y tiene problemas para usarla.

## Cómo lo puede pedir el cliente

- «¿Vendéis tarjetas regalo? Quiero regalar un viaje a mis padres.»
- «se puede regalar una escapada? como funciona»
- «Quisiera adquirir un bono regalo para obsequiar a un familiar.»
- «Me encantó el viaje y quiero regalarle uno parecido a mi amiga, ¿cómo lo hago?»
