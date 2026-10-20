---
name: pago-traslado-incluido-cobrado-por-conductor
description: El cliente tuvo que pagar al conductor un traslado que estaba
  incluido en su reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-traslados
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente pagó al conductor o a la empresa de traslados en destino, aunque el traslado figuraba como incluido en la reserva.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-traslados` los traslados incluidos y sus condiciones.
3. Pide con `pedir-datos-cliente` el justificante del pago y en qué trayecto ocurrió.
4. Pasa la reclamación con `crear-ticket-booking`.

## Qué no hace

- No promete el reembolso.
- No acusa al conductor.

## Cuándo pasa a una persona

- Siempre: el cliente reclama un pago.

## Cómo lo puede pedir el cliente

- «El conductor del traslado nos solicitó el pago de un servicio que ya estaba incluido.»
- «el del traslado me cobro y lo tenia pagado con vosotros»
- «Hola, el conductor del aeropuerto dijo que no tenía la reserva y le pagamos, ¿me lo devolvéis?»
- «pague el traslado al hotel en efectivo y era incluido, como lo reclamo»
