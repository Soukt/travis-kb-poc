---
name: ent-entrada-varios-dias-no-consecutivos
description: El cliente tiene una entrada de varios días y pregunta si tiene que
  usarlos seguidos o puede repartirlos.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica a entradas multidía. El cliente quiere saber si puede dejar días libres entre visitas o cambiar de parque cada día.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` el tipo de entrada y las fechas.
3. Revisa con `consultar-condiciones-entrada` si los días deben ser consecutivos, en qué periodo se pueden usar y si incluye varios parques.
4. Explica cómo puede organizar los días según esas condiciones.

## Qué no hace

- No modifica las fechas de la entrada.
- No supone que los días son flexibles si las condiciones no lo dicen.

## Cuándo pasa a una persona

- El cliente necesita cambiar las fechas para encajar los días.

## Cómo lo puede pedir el cliente

- «Tenemos la entrada multidía. ¿Los días tienen que ser seguidos?»
- «podemos ir un dia, descansar y volver otro con la misma entrada?»
- «Quería saber si la entrada de varios días permite usar los días de manera no consecutiva.»
- «la entrada de varios dias vale para los dos parques o solo uno?»
