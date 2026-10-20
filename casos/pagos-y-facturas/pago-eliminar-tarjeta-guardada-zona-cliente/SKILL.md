---
name: pago-eliminar-tarjeta-guardada-zona-cliente
description: El cliente quiere borrar de su zona de cliente la tarjeta que quedó
  guardada al pagar.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Por seguridad o porque ya no usa esa tarjeta, el cliente no quiere que siga guardada en su cuenta.

## Qué hace el agente

1. Busca con `buscar-informacion` cómo se eliminan las tarjetas guardadas en la zona de cliente.
2. Le explica los pasos.
3. Le avisa, según la respuesta aprobada, de qué ocurre si tiene cobros pendientes asociados a esa tarjeta.

## Qué no hace

- No pide ni muestra los datos de la tarjeta.
- No elimina datos por su cuenta.

## Cuándo pasa a una persona

- El cliente no encuentra la opción o no puede eliminar la tarjeta.
- El cliente pide que se borren todos sus datos personales.

## Cómo lo puede pedir el cliente

- «Desearía eliminar la tarjeta que figura guardada en mi cuenta.»
- «como borro la tarjeta de mi perfil?»
- «Hola, no quiero que se quede mi tarjeta guardada en vuestra web»
- «borrad mi tarjeta porfa, ya no la uso»
