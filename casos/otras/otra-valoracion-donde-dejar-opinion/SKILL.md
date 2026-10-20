---
name: otra-valoracion-donde-dejar-opinion
description: El cliente quiere dejar una valoración sobre su viaje, el
  alojamiento o la agencia y pregunta dónde y cómo hacerlo.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente ha terminado el viaje o está en él y quiere compartir su opinión, positiva o negativa, pero no sabe por qué canal.

## Qué hace el agente

1. Le agradece la intención de valorar.
2. Busca con `buscar-informacion` la respuesta aprobada sobre cómo y dónde dejar valoraciones.
3. Le explica los pasos tal como figuran en la respuesta aprobada.
4. Si no hay respuesta aprobada, se lo dice con claridad y no improvisa un canal.

## Qué no hace

- No escribe la valoración por el cliente.
- No sugiere qué nota poner.
- No ofrece nada a cambio de la opinión.

## Cuándo pasa a una persona

- Si lo que quiere dejar es en realidad una queja formal.
- Si el cliente no encuentra la forma de valorar y pide que se la registren.

## Cómo lo puede pedir el cliente

- «¿Dónde puedo dejar mi opinión sobre el hotel?»
- «quiero poner una valoracion del viaje, donde se hace»
- «Me gustaría valorar el servicio recibido. ¿Me indican el procedimiento?»
- «Todo genial, ¿cómo os dejo una reseña? Por cierto, ¿la factura me llega sola?»
