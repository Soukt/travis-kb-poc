---
name: ent-hora-de-inicio-del-espectaculo
description: El cliente tiene entradas para un espectáculo con sesión y quiere
  saber a qué hora empieza y cuándo abren las puertas.
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

Aplica a entradas de espectáculos con una sesión concreta. El cliente quiere planificar la llegada al recinto.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-bonos` la sesión y la fecha que figuran en el bono.
3. Revisa con `consultar-condiciones-entrada` la hora de inicio, la apertura de puertas y si se permite entrar con la función empezada.
4. Le responde con esos datos y le recomienda llegar con margen.

## Qué no hace

- No indica un horario distinto del que figura en el bono o en las condiciones.
- No garantiza el acceso si llega con el espectáculo empezado.

## Cuándo pasa a una persona

- La sesión del bono no coincide con la que el cliente compró.

## Cómo lo puede pedir el cliente

- «¿A qué hora tenemos que estar en el espectáculo? En el bono no lo veo claro.»
- «a q hora abren puertas para el show?»
- «Buenas tardes, ¿la hora del bono es la de inicio o la de apertura de puertas?»
- «si llegamos un poco tarde al espectaculo nos dejan pasar?»
