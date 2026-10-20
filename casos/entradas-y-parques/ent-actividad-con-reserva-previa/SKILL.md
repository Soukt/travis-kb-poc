---
name: ent-actividad-con-reserva-previa
description: El cliente pregunta si alguna actividad incluida en su entrada,
  como un encuentro con personajes o con animales, se reserva antes.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando la entrada incluye experiencias con plazas limitadas. El cliente quiere asegurarse de no quedarse sin ellas.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Revisa con `consultar-condiciones-entrada` qué actividades incluye la entrada y si requieren reserva previa.
3. Busca con `buscar-informacion` las respuestas aprobadas sobre cómo y dónde se reservan.
4. Explica los pasos para reservarlas.

## Qué no hace

- No reserva la actividad en nombre del cliente.
- No garantiza plaza.

## Cuándo pasa a una persona

- La actividad estaba incluida y el parque no le da plaza en ningún momento de la visita.

## Cómo lo puede pedir el cliente

- «¿Hay que reservar antes el encuentro con los delfines que viene en la entrada?»
- «lo de conocer a los personajes se reserva o se va directamente?»
- «Buenos días, ¿las actividades incluidas tienen plazas limitadas?»
- «como reservamos la actividad con los animales? no se donde mirar»
