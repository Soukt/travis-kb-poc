---
name: pago-plazo-rechazado-tarjeta-caducada
description: El cliente recibe aviso de que no se pudo cobrar un plazo porque su
  tarjeta ha caducado.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cobro de un plazo ha fallado porque la tarjeta registrada ya no es válida, y el cliente quiere actualizarla o pagar el plazo de otra forma.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Confirma con `consultar-pagos` qué plazo ha fallado y cuánto queda pendiente.
3. Busca con `buscar-informacion` cómo se actualiza la tarjeta o se paga el plazo fallido desde la zona de cliente.
4. Le explica los pasos y si hay una fecha límite para regularizar el pago.

## Qué no hace

- No recoge los datos de la nueva tarjeta por el chat.
- No asegura que no haya consecuencias si la respuesta aprobada no lo dice.

## Cuándo pasa a una persona

- El cliente no consigue actualizar la tarjeta ni pagar desde la zona de cliente.
- La fecha límite para regularizar el pago ya ha pasado.

## Cómo lo puede pedir el cliente

- «Me notifican que el cargo del plazo ha sido rechazado por caducidad de la tarjeta.»
- «me ha caducado la tarjeta y no me habeis podido cobrar, que hago»
- «Hola, el banco me cambió la tarjeta y ahora el pago ha fallado, ¿cómo pongo la nueva?»
- «tarjeta caducada, pago rechazado, ¿pierdo la reserva?»
