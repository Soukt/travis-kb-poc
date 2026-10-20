---
name: ent-altura-minima-en-atracciones
description: El cliente quiere saber qué altura mínima piden las atracciones
  para saber si sus hijos podrán subir.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica como consulta general sobre restricciones de altura en las atracciones. No necesita datos de la reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` las respuestas aprobadas sobre restricciones de altura en las atracciones del parque.
2. Responde con lo encontrado y explica que el parque mide a los menores en la entrada de cada atracción.
3. Si no hay respuesta aprobada, se lo dice al cliente sin suponer alturas.

## Qué no hace

- No da alturas mínimas de memoria.
- No garantiza que un menor pueda subir a una atracción concreta.

## Cuándo pasa a una persona

- El cliente quiere una devolución porque sus hijos no pueden subir a casi ninguna atracción.

## Cómo lo puede pedir el cliente

- «¿Qué altura tienen que tener los niños para subir a las atracciones?»
- «mi hijo es bajito, podra montar en las montañas rusas?»
- «Buenos días, ¿hay una lista de atracciones con la altura mínima exigida?»
- «hay cosas para peques que no lleguen a la altura? o se aburren?»
