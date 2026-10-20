---
name: aloj-ampliar-noches-estancia
description: El cliente quiere quedarse más noches en el mismo alojamiento,
  antes o después de las fechas reservadas.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pide añadir noches a su estancia. Implica disponibilidad y un nuevo cobro, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` las fechas, la habitación y si hay otros servicios ligados.
3. Comprueba con `consultar-pagos` el estado de pagos de la reserva.
4. Recoge cuántas noches quiere añadir y abre un ticket con `crear-ticket-booking`.

## Qué no hace

- No confirma la disponibilidad ni el precio de las noches extra.
- No modifica vuelos ni traslados ligados por su cuenta.

## Cuándo pasa a una persona

- Siempre: hay un nuevo cobro y depende de la disponibilidad.

## Cómo lo puede pedir el cliente

- «Nos gustaría quedarnos una noche más en el hotel, ¿es posible?»
- «podemos alargar el apartamento unos dias mas?»
- «Hola, queremos llegar la noche antes para no madrugar. Se puede añadir? cuánto sería? y el traslado?»
- «Solicito la ampliación de mi estancia en el mismo establecimiento.»
