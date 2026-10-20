---
name: otra-queja-trato-personal-recepcion
description: El cliente se queja del trato recibido por el personal del
  alojamiento (recepción, restaurante u otro servicio) durante su estancia.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente relata un trato maleducado, despectivo o poco profesional del personal del hotel, durante o después de la estancia, y quiere que conste.

## Qué hace el agente

1. Escucha el relato sin juzgar y agradece que lo comunique.
2. Verifica la titularidad con `verificar-identidad`.
3. Confirma con `consultar-reserva` el alojamiento y las fechas de la estancia.
4. Recoge con `pedir-datos-cliente` qué ocurrió, cuándo, en qué servicio y si lo comunicó en el momento.
5. Crea un ticket con `crear-ticket-booking` para que booking traslade la queja al hotel.

## Qué no hace

- No da ni quita la razón al cliente o al personal del hotel.
- No comparte con el cliente datos del personal del hotel.
- No ofrece compensaciones.

## Cuándo pasa a una persona

- Siempre: es una queja sobre el proveedor que gestiona booking.
- Si el cliente relata una situación grave, como amenazas o agresiones, se marca como urgente.

## Cómo lo puede pedir el cliente

- «Quiero dejar constancia del trato tan desagradable que recibimos en recepción al hacer la entrada.»
- «el recepcionista nos hablo fatal, una verguenza, quiero q lo sepais»
- «Estimados señores: durante nuestra estancia el personal del restaurante fue muy poco profesional con nosotros.»
- «Nos trataron fatal en el hotel y encima no sé si me han cobrado el parking aparte, ¿me lo miráis?»
