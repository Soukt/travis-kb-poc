---
name: pago-prefiere-dinero-en-vez-de-vale
description: El cliente ha recibido la oferta de un vale en lugar de la
  devolución y prefiere que le devuelvan el dinero.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras una cancelación o una incidencia se le propuso un vale para futuras reservas y el cliente lo rechaza y pide el reembolso.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado de la reserva y la incidencia.
3. Consulta con `consultar-pagos` lo pagado y si ya consta un vale emitido.
4. Pasa la petición con `crear-ticket-booking`.

## Qué no hace

- No anula el vale ni promete el dinero.
- No insiste en que acepte el vale.

## Cuándo pasa a una persona

- Siempre: es una devolución.

## Cómo lo puede pedir el cliente

- «No deseo el vale ofrecido; solicito el reembolso del importe.»
- «no quiero vale, quiero mi dinero»
- «Hola, me habéis dado un vale pero no vamos a volver a viajar pronto, ¿me lo cambiáis por dinero?»
- «el vale no me sirve, devolvedme lo pagado»
