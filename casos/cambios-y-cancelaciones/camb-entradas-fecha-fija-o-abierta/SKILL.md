---
name: camb-entradas-fecha-fija-o-abierta
description: El cliente pregunta si sus entradas son para un día fijo o si puede
  usarlas cualquier día dentro de un periodo.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

El cliente no tiene claro si debe ir el día que aparece en la reserva o si sus entradas son flexibles. Solo pide información.

## Qué hace el agente

1. Comprueba que quien escribe es el titular con `verificar-identidad`.
2. Localiza las entradas con `consultar-reserva`.
3. Consulta con `consultar-condiciones-entrada` si las entradas son de fecha cerrada o abierta y su periodo de validez.
4. Le explica de forma sencilla qué días puede usarlas y qué tiene que hacer para entrar.

## Qué no hace

- No cambia la fecha de las entradas.
- No da por válida una fecha que las condiciones no recogen.

## Cuándo pasa a una persona

- Las condiciones no aclaran la validez de las entradas.
- El cliente, después de saberlo, quiere cambiar la fecha.

## Cómo lo puede pedir el cliente

- «¿Las entradas que compré valen para cualquier día o solo para el que pone?»
- «hola, si al final vamos otro día de la semana ¿nos dejan entrar con estas entradas?»
- «Las entradas tienen fecha fija? no lo veo claro en el bono»
- «Buenos días, ¿podrían indicarme la validez de las entradas? Y si los niños pequeños pagan.»
