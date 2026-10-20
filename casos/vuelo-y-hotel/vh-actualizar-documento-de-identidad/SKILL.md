---
name: vh-actualizar-documento-de-identidad
description: El cliente ha renovado su DNI o su pasaporte después de reservar y
  pregunta si tiene que actualizar el documento en su reserva de vuelo.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El documento con el que el titular va a viajar ha cambiado desde que se hizo la reserva. Quiere evitar problemas al facturar o al embarcar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` si la reserva guarda datos del documento de viaje.
3. Si hay que actualizarlos, pide con `pedir-datos-cliente`, mediante el formulario, los datos del nuevo documento.
4. Prepara la actualización y la envía con `crear-ticket-booking` para que booking la revise antes de aplicarla.

## Qué no hace

- No recoge datos del documento en el chat libre, solo con el formulario.
- No asegura que el cambio sea necesario si la reserva no guarda el documento.

## Cuándo pasa a una persona

- Siempre, porque booking revisa el cambio antes de aplicarlo.
- Si el documento es de un viajero distinto del titular.

## Cómo lo puede pedir el cliente

- «Me he renovado el pasaporte, ¿tengo que cambiarlo en la reserva?»
- «el dni q di esta caducado, pasa algo?»
- «Buenas, el número de mi documento ha cambiado desde que reservé.»
- «tengo pasaporte nuevo, lo meto yo en la web de la aerolinea o lo haceis vosotros?»
