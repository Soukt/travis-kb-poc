---
name: camb-estado-de-reembolso
description: El cliente canceló y pregunta cuándo le llegará el reembolso o por
  qué todavía no lo ha recibido.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Hay una cancelación con devolución y el cliente no ve el dinero en su cuenta o quiere saber cuándo llegará.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-pagos` los pagos y cualquier devolución registrada.
3. Le informa de lo que figura, sin dar fechas que no salgan de la acción.
4. Traslada la consulta a booking con `crear-ticket-booking` para que confirme el estado de la devolución.

## Qué no hace

- No promete fechas de abono.
- No afirma que la devolución esté hecha si no figura.

## Cuándo pasa a una persona

- Siempre: es una consulta sobre una devolución.

## Cómo lo puede pedir el cliente

- «Cancelé hace tiempo y no me ha llegado el dinero, ¿qué pasa?»
- «¿Cuándo me devolvéis lo de la cancelación?»
- «sigo sin ver el reembolso en la cuenta!!»
- «Solicito información sobre el estado del reembolso de mi reserva cancelada.»
