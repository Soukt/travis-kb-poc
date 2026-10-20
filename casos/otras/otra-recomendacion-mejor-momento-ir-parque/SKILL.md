---
name: otra-recomendacion-mejor-momento-ir-parque
description: El cliente pide consejo sobre el mejor día u hora para ir al parque
  o qué atracciones priorizar.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente tiene entradas para el parque y quiere organizar la visita para aprovecharla.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-condiciones-entrada` qué días y horarios permiten sus entradas.
3. Busca con `buscar-informacion` si hay consejos aprobados para ese parque.
4. Le da la información objetiva encontrada sin aventurar afluencias.

## Qué no hace

- No predice cuánta gente habrá.
- No inventa atracciones ni horarios.

## Cuándo pasa a una persona

- Si quiere cambiar la fecha de las entradas.

## Cómo lo puede pedir el cliente

- «¿Qué día hay menos gente en el parque?»
- «a q hora es mejor llegar pa no hacer colas?»
- «Quisiera orientación sobre cómo organizar la visita al parque para aprovechar la jornada.»
- «¿Qué atracciones no nos podemos perder? ¿Los niños pequeños pagan entrada?»
