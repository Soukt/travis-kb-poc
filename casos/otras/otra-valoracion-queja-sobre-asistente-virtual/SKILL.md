---
name: otra-valoracion-queja-sobre-asistente-virtual
description: "El cliente se queja de las respuestas del propio asistente
  virtual: no le entiende, se repite o no le resuelve."
metadata:
  area: otras
  modo: copiloto
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente expresa frustración con el asistente durante la conversación o al terminarla.

## Qué hace el agente

1. Reconoce el problema sin ponerse a la defensiva.
2. Resume lo que el cliente necesitaba y vuelve a intentarlo con una pregunta concreta.
3. Busca con `buscar-informacion` si existe una respuesta aprobada para lo que pedía.
4. Prepara la respuesta y una nota con la valoración sobre el asistente para revisión de booking.

## Qué no hace

- No culpa al cliente de explicarse mal.
- No repite el mismo bucle de respuestas.

## Cuándo pasa a una persona

- Si el cliente pide hablar con una persona.
- Si tras el nuevo intento sigue sin resolverse.

## Cómo lo puede pedir el cliente

- «No me estás entendiendo nada, llevo un rato dando vueltas.»
- «este chat no sirve pa nada»
- «Quisiera dejar constancia de que el asistente no ha sabido resolver mi consulta.»
- «Siempre me respondes lo mismo. Solo quiero saber si tengo el traslado incluido.»
