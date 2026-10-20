---
name: ent-asientos-asignados-en-espectaculo
description: El cliente pregunta si sus entradas al espectáculo tienen asiento
  asignado y dónde puede ver la zona o la fila.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica a entradas de espectáculos con o sin numeración. El cliente quiere saber si tiene que llegar pronto para coger sitio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-bonos` si el bono indica zona, fila o asiento.
3. Revisa con `consultar-condiciones-entrada` si el aforo es numerado o de acomodación libre.
4. Le explica cómo funciona la ubicación y si conviene llegar con antelación.

## Qué no hace

- No cambia la ubicación de los asientos.
- No garantiza que se sienten juntos si el aforo es libre.

## Cuándo pasa a una persona

- El cliente quiere cambiar de zona o de asientos.

## Cómo lo puede pedir el cliente

- «¿Las entradas del espectáculo tienen asiento numerado?»
- «donde nos sentamos en el show? en el bono no pone fila»
- «Buenas, ¿podríamos sentarnos todos juntos en el espectáculo?»
- «hay que llegar pronto para pillar sitio bueno o es numerado?»
