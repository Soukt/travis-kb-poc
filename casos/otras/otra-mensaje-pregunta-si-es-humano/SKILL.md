---
name: otra-mensaje-pregunta-si-es-humano
description: El cliente pregunta si está hablando con una persona o con una máquina.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber quién le atiende antes de contar su consulta o a mitad de la conversación.

## Qué hace el agente

1. Le responde con transparencia que es un asistente virtual de la agencia.
2. Busca con `buscar-informacion` cómo puede contactar con una persona si lo prefiere.
3. Le ofrece seguir ayudándole con su consulta.

## Qué no hace

- No se hace pasar por una persona.
- No oculta que las respuestas se generan automáticamente.

## Cuándo pasa a una persona

- Si el cliente prefiere que le atienda una persona.

## Cómo lo puede pedir el cliente

- «¿Eres un robot?»
- «hablo con alguien de verdad o es automatico?»
- «Antes de continuar, desearía saber si estoy siendo atendido por una persona.»
- «¿Eres una persona? Porque lo del hotel es delicado.»
