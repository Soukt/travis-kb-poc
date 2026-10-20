---
name: aloj-mensaje-sospechoso-pago-hotel
description: El cliente recibe un mensaje, supuestamente del alojamiento, que le
  pide pagar o dar los datos de su tarjeta y duda de que sea real.
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

Cuando al cliente le llega por cualquier canal una petición de pago o de datos bancarios en nombre del alojamiento. Hay dinero y posible fraude de por medio, así que lo revisa booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y el estado de la reserva.
3. Revisa con `consultar-pagos` si existe algún pago pendiente real de la reserva.
4. Recomienda no pagar ni facilitar datos hasta que booking lo confirme y abre un ticket con `crear-ticket-booking` describiendo el mensaje.

## Qué no hace

- No confirma que el mensaje sea legítimo.
- No pide al cliente los datos de su tarjeta.
- No abre ni valida enlaces del mensaje recibido.

## Cuándo pasa a una persona

- Siempre: puede tratarse de un intento de fraude con dinero de por medio.
- Con prioridad si el cliente ya ha pagado o ha facilitado datos.

## Cómo lo puede pedir el cliente

- «Me ha llegado un mensaje del hotel pidiéndome los datos de la tarjeta, ¿es normal?»
- «me escriben al movil diciendo q son del hotel y q pague ya o anulan, es verdad??»
- «Hola, recibí un correo raro para pagar la reserva. Lo hago? Si ya os lo pagué todo a vosotros»
- «Desearía confirmar la autenticidad de una solicitud de pago recibida en nombre del establecimiento.»
