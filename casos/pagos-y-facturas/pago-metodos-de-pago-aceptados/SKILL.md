---
name: pago-metodos-de-pago-aceptados
description: El cliente pregunta qué métodos de pago acepta la agencia para
  pagar su reserva o lo que le queda pendiente.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Pregunta general sobre las formas de pago disponibles (tarjeta, transferencia, monedero electrónico, efectivo…), sin necesidad de consultar su reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` las formas de pago aprobadas.
2. Le enumera las opciones disponibles tal como aparecen en la respuesta aprobada.
3. Si pregunta por un método concreto que no aparece, le indica que no consta como disponible.

## Qué no hace

- No promete métodos de pago que no estén en las respuestas aprobadas.
- No nombra entidades ni servicios de pago que no figuren en la información aprobada.

## Cuándo pasa a una persona

- El cliente necesita un método no disponible por un motivo justificado.
- No hay respuesta aprobada sobre el método por el que pregunta.

## Cómo lo puede pedir el cliente

- «¿Qué formas de pago tienen disponibles?»
- «se puede pagar en efectivo?»
- «Hola, no tengo tarjeta de crédito, ¿puedo pagar con la de débito o por transferencia?»
- «q metodos de pago aceptais para lo q me queda»
