---
name: ent-entradas-nominativas-o-no
description: El cliente quiere saber si sus entradas van a nombre de cada
  viajero o si cualquiera del grupo puede usarlas.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica como pregunta informativa antes de la visita, sin que el cliente pida ningún cambio. Suele surgir cuando el grupo no está cerrado o alguien podría no ir.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Revisa con `consultar-condiciones-entrada` si las entradas son nominativas y si se comprueba la identidad en el acceso.
3. Explica lo que dicen las condiciones y, si son nominativas, que cualquier cambio de persona se solicita aparte.

## Qué no hace

- No tramita ningún cambio de viajero en esta consulta.
- No supone que las entradas se pueden intercambiar si las condiciones no lo dicen.

## Cuándo pasa a una persona

- El cliente decide que quiere cambiar a uno de los viajeros.

## Cómo lo puede pedir el cliente

- «¿Las entradas son personales o puede usarlas cualquiera?»
- «si al final viene otro primo en vez de mi hermano pasa algo?»
- «Quisiera saber si en las entradas figura el nombre de cada persona.»
- «las entradas llevan nombre? es q aun no se quien viene seguro»
