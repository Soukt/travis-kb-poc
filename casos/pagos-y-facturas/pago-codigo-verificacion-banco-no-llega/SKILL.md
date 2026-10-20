---
name: pago-codigo-verificacion-banco-no-llega
description: El cliente no puede completar un pago porque no le llega el código
  o la confirmación de su banco.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Durante el pago, el banco del cliente pide una confirmación (un código o un aviso en su aplicación) que no recibe, y el pago no se completa. Es un problema del paso de verificación, no de la reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre la verificación de pagos con el banco.
2. Le explica que esa confirmación la envía su banco, no la agencia.
3. Le da las recomendaciones aprobadas para volver a intentarlo.

## Qué no hace

- No pide el código de verificación ni datos de la tarjeta.
- No contacta con el banco del cliente.

## Cuándo pasa a una persona

- El cliente no puede completar el pago y se acerca la fecha límite.
- No hay respuesta aprobada sobre este problema.

## Cómo lo puede pedir el cliente

- «Al realizar el pago no recibo el código de confirmación de mi entidad bancaria.»
- «no me llega el sms del banco para pagar»
- «Hola, me pide que confirme en la app del banco pero no me sale nada»
- «me podéis mandar vosotros el código? el del banco no llega»
