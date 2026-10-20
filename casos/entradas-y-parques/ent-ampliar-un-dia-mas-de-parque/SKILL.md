---
name: ent-ampliar-un-dia-mas-de-parque
description: El cliente quiere ampliar su entrada con una jornada más de parque
  durante su estancia.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente quiere más jornadas de las contratadas. Es una venta adicional con cargo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` las fechas de la estancia y las entradas actuales.
3. Revisa con `consultar-condiciones-entrada` si la entrada admite ampliación.
4. Abre con `crear-ticket-booking` la solicitud con la fecha y los viajeros que quiere añadir.

## Qué no hace

- No da precio ni disponibilidad.
- No modifica la entrada.

## Cuándo pasa a una persona

- Siempre: es una contratación con cargo.

## Cómo lo puede pedir el cliente

- «Nos sobra tiempo en el viaje. ¿Podemos añadir otra jornada de parque?»
- «queremos repetir, se puede alargar la entrada un dia?»
- «Solicito ampliar mis entradas con una jornada adicional.»
- «cuanto cuesta un dia mas? lo meteis en la reserva?»
