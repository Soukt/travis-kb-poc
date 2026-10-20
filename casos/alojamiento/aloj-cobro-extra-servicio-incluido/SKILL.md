---
name: aloj-cobro-extra-servicio-incluido
description: El cliente está en el alojamiento y le cobran un servicio que tenía
  incluido, como el aparcamiento, el desayuno o la wifi.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando durante la estancia el alojamiento cobra por un servicio que figura incluido en la reserva. Hay dinero de por medio y lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` qué servicios están incluidos.
3. Revisa con `consultar-bonos` si el bono refleja ese servicio para que lo muestre en recepción.
4. Recoge qué le cobran y si ya lo ha pagado, y abre un ticket con `crear-ticket-booking`.

## Qué no hace

- No le dice que pague para evitar problemas.
- No promete el reembolso de lo ya pagado.

## Cuándo pasa a una persona

- Siempre: es un posible cobro indebido.

## Cómo lo puede pedir el cliente

- «El parking venía incluido y el hotel me lo quiere cobrar.»
- «me cobran la wifi y en la reserva pone gratis»
- «Hola, nos dicen que el desayuno de los niños se paga aparte y teníamos desayuno para todos. Lo pago y me lo devolvéis?»
- «Les comunico que el establecimiento me está cobrando un servicio incluido en la reserva.»
