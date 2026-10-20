---
name: pago-devolucion-parcial-viajero-que-no-va
description: El cliente tiene un viajero en la reserva que ya no podrá viajar y
  pide que se le devuelva su parte.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El resto del grupo mantiene el viaje, pero un viajero se da de baja y el cliente quiere recuperar lo que corresponde a esa persona.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros y los servicios.
3. Consulta con `consultar-politica-cancelacion` los gastos de cambio o cancelación aplicables.
4. Recoge qué viajero se da de baja, sin pedir sus datos personales, y lo pasa con `crear-ticket-booking`.

## Qué no hace

- No elimina viajeros de la reserva.
- No calcula lo que se devolvería.

## Cuándo pasa a una persona

- Siempre: implica una devolución y cambios en la reserva.

## Cómo lo puede pedir el cliente

- «Uno de los viajeros no podrá viajar; ¿es posible obtener el reembolso de su parte?»
- «mi amigo ya no viene, le devolveis lo suyo?»
- «Hola, mi suegra se ha puesto mala y no viene, ¿qué pasa con su plaza y su dinero?»
- «quitar a una persona de la reserva y que me devolvais su parte»
