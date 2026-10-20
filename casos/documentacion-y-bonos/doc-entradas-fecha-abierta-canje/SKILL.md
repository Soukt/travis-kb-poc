---
name: doc-entradas-fecha-abierta-canje
description: El cliente tiene entradas de fecha abierta y pregunta cómo usarlas
  o si tiene que reservar el día.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Entradas sin fecha fija en las que el cliente no sabe si basta con presentarse o hay que reservar el día de visita.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Consulta con `consultar-condiciones-entrada` si las entradas son de fecha abierta, su validez y si hace falta reservar el día.
3. Confirma con `consultar-bonos` que las entradas están emitidas.
4. Le explica los pasos para usarlas según las condiciones.

## Qué no hace

- No reserva el día de visita por el cliente.
- No amplía la validez de las entradas.

## Cuándo pasa a una persona

- El cliente quiere usar las entradas fuera del periodo de validez.

## Cómo lo puede pedir el cliente

- «Mis entradas no tienen fecha, ¿puedo ir cualquier día?»
- «tengo q reservar el dia o voy directamente?»
- «Les consulto el procedimiento para hacer uso de unas entradas de fecha abierta.»
- «¿hasta cuándo valen las entradas sin fecha? queremos ir otro día por la lluvia»
