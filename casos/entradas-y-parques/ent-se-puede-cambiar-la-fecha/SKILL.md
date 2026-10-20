---
name: ent-se-puede-cambiar-la-fecha
description: El cliente pregunta si podría cambiar la fecha de sus entradas y en
  qué condiciones, sin pedir todavía el cambio.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente se lo está pensando y quiere saber si el cambio es posible y qué gastos tendría según el calendario de la reserva.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` la fecha actual y las entradas.
3. Revisa con `consultar-politica-cancelacion` si las entradas admiten cambio de fecha y qué gastos aplican en cada momento.
4. Explica las condiciones y le indica que, si decide cambiar, lo puede solicitar por aquí.

## Qué no hace

- No realiza el cambio de fecha.
- No calcula importes que no devuelva la acción.

## Cuándo pasa a una persona

- El cliente decide pedir el cambio.

## Cómo lo puede pedir el cliente

- «Si al final no podemos ir ese día, ¿podríamos cambiar la fecha de las entradas?»
- «las entradas se pueden cambiar de dia? cuanto cuesta?»
- «Quisiera conocer las condiciones para modificar la fecha de visita.»
- «aver si me aclaro, si cambio el dia del parque pierdo dinero?»
