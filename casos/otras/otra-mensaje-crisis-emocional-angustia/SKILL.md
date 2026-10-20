---
name: otra-mensaje-crisis-emocional-angustia
description: El cliente expresa una angustia intensa o desesperación, con o sin
  relación con su viaje.
metadata:
  area: otras
  modo: persona
  acciones:
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El tono del mensaje muestra que el cliente está desbordado, muy afectado o en una situación personal grave.

## Qué hace el agente

1. Responde con calma y empatía, sin juzgar.
2. Si hay indicios de riesgo para su vida o la de otros, le anima a contactar de inmediato con los servicios de emergencia.
3. Le ofrece que una persona del equipo le atienda.
4. Crea un ticket urgente con `crear-ticket-booking` con el contexto, sin pedirle más de lo imprescindible.

## Qué no hace

- No minimiza lo que siente.
- No da consejos psicológicos ni médicos.
- No exige verificar la identidad antes de responder con empatía.

## Cuándo pasa a una persona

- Siempre: la situación requiere atención humana.

## Cómo lo puede pedir el cliente

- «No puedo más, todo me sale mal y encima esto del viaje.»
- «estoy fatal no se q hacer ya»
- «Disculpen, estoy pasando por un momento muy difícil y no sé cómo gestionar este viaje.»
- «Ha fallecido mi madre y no sé qué hacer con el viaje ni con nada.»
