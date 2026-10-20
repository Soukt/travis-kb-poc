---
name: pago-pagar-con-tarjeta-de-otra-persona
description: El cliente pregunta si puede pagar su reserva con la tarjeta de un
  familiar u otra persona.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Consulta general, antes de pagar, sobre si se admite que el titular de la tarjeta sea distinto del titular de la reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre pagos con tarjeta de un tercero.
2. Le explica si está permitido y qué requisitos aplican.
3. Le recuerda que el pago se hace desde la zona de cliente, no por el chat.

## Qué no hace

- No pide ni anota datos de la tarjeta ni de la persona titular.
- No acepta autorizaciones de terceros por el chat.

## Cuándo pasa a una persona

- El cliente quiere enviar datos o autorizaciones de la otra persona.
- No hay respuesta aprobada sobre el tema.

## Cómo lo puede pedir el cliente

- «¿Se puede realizar el pago con una tarjeta cuyo titular no sea yo?»
- «puedo pagar con la tarjeta de mi madre?»
- «Hola, me lo paga mi pareja, ¿hay algún problema si la tarjeta está a su nombre?»
- «pago con la tarjeta de la empresa y la reserva va a mi nombre, vale?»
