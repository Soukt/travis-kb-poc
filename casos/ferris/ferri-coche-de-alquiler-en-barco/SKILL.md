---
name: ferri-coche-de-alquiler-en-barco
description: El cliente quiere saber si puede embarcar en el barco con un coche de alquiler.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente pregunta en general si se admiten vehículos de alquiler a bordo y qué documentación se pide, sin necesidad de consultar su reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` las condiciones aprobadas para embarcar con vehículos de alquiler.
2. Explica lo que diga la información aprobada sobre la documentación del vehículo en el embarque.
3. Recuerda que el permiso para sacar el coche en barco depende del contrato con la empresa de alquiler y que debe confirmarlo con ella.

## Qué no hace

- No interpreta el contrato de alquiler del cliente.
- No asegura que la empresa de alquiler lo permita.
- No consulta la reserva porque no lo necesita para responder.

## Cuándo pasa a una persona

- El cliente necesita registrar un coche de alquiler en su trayecto y todavía no tiene la matrícula.

## Cómo lo puede pedir el cliente

- «¿Se puede meter un coche de alquiler en el ferri?»
- «alquilo coche en destino y quiero cruzar en barco, se puede?»
- «Buenas, el coche de alquiler aún no me lo han dado y no sé la matrícula, ¿qué hago con el billete del barco?»
- «Vamos con un coche alquilado, ¿qué papeles piden al embarcar?»
