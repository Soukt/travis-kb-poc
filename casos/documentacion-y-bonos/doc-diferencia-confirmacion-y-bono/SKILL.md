---
name: doc-diferencia-confirmacion-y-bono
description: El cliente pregunta qué diferencia hay entre el email de
  confirmación y el bono, y cuál tiene que llevar.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - buscar-informacion
    - verificar-identidad
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

El cliente tiene varios documentos de la reserva y no sabe para qué sirve cada uno.

## Qué hace el agente

1. Busca con `buscar-informacion` la explicación aprobada sobre qué es la confirmación y qué es el bono.
2. Le explica para qué sirve cada documento y cuál se presenta en destino.
3. Si quiere saber qué tiene ya disponible, comprueba con `verificar-identidad` que es el titular.
4. Le indica con `consultar-bonos` qué bonos de su reserva están emitidos.

## Qué no hace

- No inventa usos de los documentos que no estén en la información aprobada.
- No reenvía documentación si el cliente no la pide.

## Cuándo pasa a una persona

- El cliente tiene documentos con datos contradictorios entre sí.

## Cómo lo puede pedir el cliente

- «¿Qué diferencia hay entre la confirmación y el bono?»
- «tengo dos correos y no se cual enseñar en el hotel»
- «Quisiera saber cuál de los documentos recibidos debo presentar a mi llegada.»
- «q es eso del voucher? es lo mismo que el bono?»
