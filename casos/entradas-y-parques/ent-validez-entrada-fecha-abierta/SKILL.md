---
name: ent-validez-entrada-fecha-abierta
description: El cliente tiene una entrada de fecha abierta y quiere saber hasta
  cuándo puede usarla y si tiene días excluidos.
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

Aplica a entradas sin fecha fija con un periodo de validez. El cliente quiere planificar cuándo ir.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-bonos` el bono y la validez que figura en él.
3. Revisa con `consultar-condiciones-entrada` el periodo de validez, los días excluidos y si hay que reservar el día.
4. Le resume hasta cuándo puede usar la entrada y qué pasos debe seguir.

## Qué no hace

- No amplía la validez de la entrada.
- No inventa fechas de caducidad.

## Cuándo pasa a una persona

- El cliente pide ampliar la validez porque no podrá ir dentro del periodo.

## Cómo lo puede pedir el cliente

- «Mi entrada es de fecha abierta. ¿Hasta cuándo la puedo usar?»
- «la entrada sin fecha vale para cualquier dia o hay dias q no?»
- «Buenas, ¿la entrada abierta caduca? No veo la fecha límite en el bono.»
- «podemos ir en festivo con la entrada abierta?»
