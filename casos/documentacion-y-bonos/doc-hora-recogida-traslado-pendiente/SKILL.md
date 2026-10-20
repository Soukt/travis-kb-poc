---
name: doc-hora-recogida-traslado-pendiente
description: El cliente ve que su bono de traslado indica la hora de recogida
  como pendiente de confirmar y pregunta cuándo la sabrá.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Habitual en los traslados de regreso, cuando la hora de recogida se confirma más adelante.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Consulta con `consultar-traslados` si ya hay hora de recogida asignada.
3. Si no la hay, busca con `buscar-informacion` cómo se comunica la hora de recogida pendiente y se lo explica.
4. Le recomienda revisar la información de su traslado antes del día del regreso.

## Qué no hace

- No inventa una hora de recogida.
- No promete un aviso concreto si la información no lo recoge.

## Cuándo pasa a una persona

- El regreso es inminente y la hora de recogida sigue sin asignar.

## Cómo lo puede pedir el cliente

- «En el bono del traslado de vuelta pone hora a confirmar, ¿cuándo me la dicen?»
- «no se a q hora me recogen para volver al aeropuerto»
- «Les ruego me informen de la hora de recogida del traslado de regreso.»
- «la recogida pone pendiente y el vuelo es pronto, me preocupa perderlo»
