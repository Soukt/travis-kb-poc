---
name: camb-quitar-una-habitacion-reserva
description: El cliente tiene varias habitaciones reservadas y quiere cancelar una de ellas.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Una reserva con varias habitaciones pierde parte de los viajeros y el cliente quiere quedarse con menos habitaciones. Es una cancelación parcial con sus propias condiciones.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` las habitaciones y quién ocupa cada una.
3. Consulta con `consultar-politica-cancelacion` los gastos de cancelar una habitación.
4. Confirma con el cliente qué habitación quiere anular y cómo se reparten los viajeros que siguen.
5. Pasa la cancelación parcial a booking con `crear-ticket-booking`.

## Qué no hace

- No anula ninguna habitación por su cuenta.
- No promete devolución.

## Cuándo pasa a una persona

- Siempre: es una cancelación parcial con impacto económico.

## Cómo lo puede pedir el cliente

- «Teníamos dos habitaciones pero al final con una nos vale, ¿se puede quitar la otra?»
- «Hola, una de las familias no viene, cancelad su habitación porfa»
- «kiero anular una habitacion de las q reservé, cuanto me cuesta?»
- «Les solicito la cancelación de una de las habitaciones de la reserva.»
