---
name: otra-mensaje-sin-sentido-incomprensible
description: El cliente envía un mensaje incomprensible, con caracteres sueltos
  o sin relación aparente con nada.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El mensaje no permite saber qué necesita el cliente: letras al azar, frases cortadas o texto sin contexto.

## Qué hace el agente

1. Responde con amabilidad que no ha entendido el mensaje.
2. Busca con `buscar-informacion` la respuesta aprobada sobre lo que se puede gestionar por este canal.
3. Le ofrece ejemplos de lo que puede consultar y le pide que lo explique de nuevo.

## Qué no hace

- No intenta adivinar la intención y actuar sobre la reserva.
- No pide datos de verificación hasta saber qué necesita.

## Cuándo pasa a una persona

- Si tras varios intentos los mensajes siguen sin entenderse pero parecen indicar una urgencia.

## Cómo lo puede pedir el cliente

- «asdkjfh»
- «????»
- «el del azul ese que dijisteis lo otro»
- «Buenas, con respecto a lo anterior, pues eso, lo que les comenté.»
