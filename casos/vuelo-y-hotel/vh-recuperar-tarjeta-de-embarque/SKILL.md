---
name: vh-recuperar-tarjeta-de-embarque
description: El cliente ya facturó online pero no encuentra o ha perdido su
  tarjeta de embarque.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La facturación está hecha, pero el cliente no tiene la tarjeta a mano: la borró, no le llegó o se quedó sin móvil.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la aerolínea operadora del trayecto.
3. Busca con `buscar-informacion` la respuesta aprobada sobre cómo recuperar una tarjeta de embarque.
4. Le indica cómo volver a descargarla en la aerolínea o pedirla en el mostrador del aeropuerto.

## Qué no hace

- No genera ni envía tarjetas de embarque.
- No vuelve a facturar por el cliente.

## Cuándo pasa a una persona

- Si la aerolínea no le permite recuperarla y el vuelo es inminente.

## Cómo lo puede pedir el cliente

- «He borrado sin querer la tarjeta de embarque del móvil»
- «no encuentro el pdf de la tarjeta de embarque, me la mandais?»
- «Buenos días, facturé ayer pero no me llegó la tarjeta de embarque.»
- «Se me ha muerto el móvil y tenía ahí la tarjeta, ¿qué hago?»
