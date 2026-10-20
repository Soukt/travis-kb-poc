---
name: doc-email-sospechoso-suplanta-agencia
description: El cliente ha recibido un email o mensaje que dice ser de la
  agencia y le pide pagar o dar datos para recibir el bono.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - buscar-informacion
    - verificar-identidad
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Posibles intentos de fraude que piden datos de tarjeta, pagos adicionales o descargar archivos para «desbloquear» el bono.

## Qué hace el agente

1. Busca con `buscar-informacion` cómo se comunica oficialmente la agencia y qué no pide nunca por email.
2. Le aconseja no responder, no pulsar enlaces y no facilitar datos.
3. Comprueba con `verificar-identidad` que es el titular de la reserva.
4. Revisa con `consultar-pagos` si de verdad hay algún pago pendiente en la reserva.
5. Abre `crear-ticket-booking` con la descripción del mensaje recibido, sin pedir datos de tarjeta.

## Qué no hace

- No pide al cliente datos de su tarjeta.
- No confirma que el mensaje sea legítimo.
- No gestiona reclamaciones con su banco.

## Cuándo pasa a una persona

- Siempre: es un posible fraude con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Me ha llegado un correo vuestro pidiendo pagar otra vez para recibir el bono, ¿es real?»
- «me piden los datos de la tarjeta por mensaje para confirmar la reserva, sois vosotros??»
- «He recibido una comunicación sospechosa en nombre de su agencia y quisiera verificarla.»
- «ya he dado la tarjeta a uno que decía ser de la agencia, ¿qué hago?»
