---
name: ent-edad-de-la-tarifa-infantil
description: El cliente pregunta hasta qué edad se aplica la tarifa infantil de
  las entradas y si sus hijos entran en ella.
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

Aplica cuando el cliente quiere confirmar que las entradas de los menores son correctas según su edad. Es una consulta informativa sin cambios.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` los viajeros y el tipo de entrada de cada uno.
3. Revisa con `consultar-condiciones-entrada` los tramos de edad de cada tarifa y si se toma la edad del día de la visita.
4. Confirma si cada menor tiene la tarifa adecuada según esos tramos.

## Qué no hace

- No modifica tarifas ni viajeros.
- No da tramos de edad de memoria; usa los de las condiciones.

## Cuándo pasa a una persona

- Algún menor tiene una tarifa que no corresponde a su edad.

## Cómo lo puede pedir el cliente

- «¿Hasta qué edad pagan entrada de niño?»
- «mi hija es mayorcita, le toca entrada de niño o de adulto?»
- «Buenos días, querría comprobar que las entradas infantiles de mi reserva son correctas por edad.»
- «la tarifa infantil hasta cuando es? y los niños pagan en el traslado?»
