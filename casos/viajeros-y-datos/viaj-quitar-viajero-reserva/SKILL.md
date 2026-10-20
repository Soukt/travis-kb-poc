---
name: viaj-quitar-viajero-reserva
description: El cliente quiere eliminar de la reserva a un viajero que
  finalmente no va a viajar.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando uno de los viajeros se cae del viaje y el resto mantiene la reserva. Puede afectar al precio, a la ocupación y a una posible devolución.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` el viajero afectado y los servicios en los que figura.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cancelación parcial, sin comprometer importes.
4. Abre con `crear-ticket-booking` la petición indicando qué viajero sale y de qué servicios.
5. Explica al cliente que booking le confirmará si hay gastos o devolución.

## Qué no hace

- No promete ninguna devolución.
- No da por hecho que el precio del resto se mantenga igual.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio y cambios con los proveedores.

## Cómo lo puede pedir el cliente

- «Uno de los viajeros no podrá venir. ¿Pueden quitarlo de la reserva?»
- «mi hijo al final no viene, me devolvéis lo suyo?»
- «Les comunico que una de las personas de la reserva causa baja. Quedo a la espera de las condiciones.»
- «hay q sacar a una persona de la reserva y no se si me cambia el precio de la habitacion»
