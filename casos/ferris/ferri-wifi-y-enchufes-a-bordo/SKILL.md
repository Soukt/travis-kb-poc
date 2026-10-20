---
name: ferri-wifi-y-enchufes-a-bordo
description: El cliente pregunta si hay wifi, cobertura o enchufes durante la
  travesía para trabajar o cargar dispositivos.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber qué servicios de conexión hay a bordo, sin necesidad de consultar su reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` la información aprobada sobre wifi, cobertura y enchufes a bordo.
2. Responde con lo que diga la información aprobada.
3. Si no hay respuesta aprobada, lo dice sin suponer.

## Qué no hace

- No asegura la calidad de la conexión.
- No da precios del servicio de wifi.

## Cuándo pasa a una persona

- El cliente necesita conexión por un motivo crítico y no hay respuesta aprobada.

## Cómo lo puede pedir el cliente

- «¿Hay wifi en el barco?»
- «se puede cargar el movil en las butacas?»
- «Buenos días, tengo que trabajar durante la travesía, ¿la conexión a bordo es estable?»
- «hay cobertura en alta mar o me descargo las pelis antes? jaja»
