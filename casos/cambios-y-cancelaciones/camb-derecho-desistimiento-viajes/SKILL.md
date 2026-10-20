---
name: camb-derecho-desistimiento-viajes
description: El cliente pregunta si tiene un derecho legal de desistimiento que
  le permita cancelar su reserva de viaje sin gastos.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente ha oído que las compras a distancia permiten desistir y quiere aplicarlo a su viaje. Es una pregunta con implicaciones legales que hay que responder con la información aprobada.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada de la agencia sobre el desistimiento en servicios de viaje.
2. Prepara la respuesta usando solo esa información, sin interpretaciones jurídicas propias.
3. Deja la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No da asesoramiento legal.
- No afirma ni niega derechos sin una respuesta aprobada.

## Cuándo pasa a una persona

- El cliente quiere ejercer ese derecho sobre su reserva.
- No hay respuesta aprobada.

## Cómo lo puede pedir el cliente

- «¿No hay un plazo legal para devolver lo que se compra por internet? Quiero cancelar»
- «He leído que puedo desistir de la compra, ¿se aplica a mi reserva?»
- «lo del desistimiento vale para los viajes o no?»
- «Deseo ejercer mi derecho de desistimiento. Indíquenme el procedimiento.»
