---
name: viaj-traslado-adaptado-silla-ruedas
description: El cliente necesita que el traslado de la reserva se haga en un
  vehículo adaptado para silla de ruedas.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-traslados
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero no puede pasar de la silla al asiento o la silla no cabe en un vehículo normal. Puede requerir otro tipo de traslado con distinto precio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-traslados` el tipo de traslado contratado.
3. Recoge con `pedir-datos-cliente` si la silla es plegable o eléctrica y si el viajero puede pasar al asiento.
4. Abre con `crear-ticket-booking` la petición para que booking la confirme con el proveedor del traslado.

## Qué no hace

- No confirma la disponibilidad del vehículo adaptado.
- No da precios.

## Cuándo pasa a una persona

- Siempre: lo gestiona booking y puede cambiar el precio.

## Cómo lo puede pedir el cliente

- «Mi marido va en silla de ruedas, ¿el traslado es en un vehículo adaptado?»
- «la silla no se pliega, cabe en el coche del transfer?»
- «Buenas tardes, solicito un traslado con rampa para un pasajero en silla de ruedas.»
- «Necesito traslado adaptado y quiero saber si hay que pagar la diferencia.»
