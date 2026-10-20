---
name: otra-privacidad-email-sospechoso-pide-pago
description: El cliente ha recibido un email o mensaje en nombre de la agencia
  que le pide un pago o datos y sospecha que es fraude.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Al cliente le reclaman un pago urgente, la actualización de su tarjeta o datos personales por un canal que no le parece fiable.

## Qué hace el agente

1. Le recomienda no pagar ni facilitar datos desde ese mensaje.
2. Verifica la titularidad con `verificar-identidad`.
3. Consulta con `consultar-pagos` si de verdad tiene algún pago pendiente.
4. Busca con `buscar-informacion` la respuesta aprobada sobre comunicaciones fraudulentas.
5. Le informa de lo que realmente consta en su reserva.

## Qué no hace

- No afirma que el mensaje sea auténtico sin comprobarlo.
- No abre ni analiza enlaces que el cliente envíe.

## Cuándo pasa a una persona

- Si el cliente ya pagó o dio datos bancarios en ese mensaje.
- Si el mensaje contiene datos reales de su reserva.

## Cómo lo puede pedir el cliente

- «Me ha llegado un correo vuestro diciendo que pague ya o me cancelan la reserva, ¿es real?»
- «me an mandado un sms con un enlace para pagar, sois vosotros?»
- «He recibido una comunicación que solicita mis datos bancarios en nombre de la agencia. ¿Es legítima?»
- «Me piden por mensaje que actualice la tarjeta, ¿tengo algo pendiente de pagar de verdad?»
