---
name: aloj-queja-formal-estancia
description: El cliente, ya de vuelta, quiere presentar una queja formal por
  cómo fue su estancia en el alojamiento.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pide registrar una reclamación por la estancia, haya o no pedido compensación. Toda queja formal la gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento, las fechas y los servicios contratados.
3. Pide con `pedir-datos-cliente` el motivo de la queja, si lo comunicó al alojamiento y si tiene pruebas que aportar.
4. Abre un ticket con `crear-ticket-booking` con la queja completa.
5. Informa al cliente de que su queja queda registrada y booking le responderá.

## Qué no hace

- No valora si la queja es procedente.
- No ofrece compensaciones ni descuentos en futuras reservas.

## Cuándo pasa a una persona

- Siempre: es una queja formal.

## Cómo lo puede pedir el cliente

- «Quiero presentar una reclamación formal por la estancia en el hotel.»
- «fatal el hotel, quiero poner una queja y q me devolvais algo»
- «Hola, ya estamos en casa y lo del apartamento fue un desastre, cómo reclamo? tengo fotos»
- «Por medio del presente deseo interponer una reclamación formal relativa a mi estancia.»
