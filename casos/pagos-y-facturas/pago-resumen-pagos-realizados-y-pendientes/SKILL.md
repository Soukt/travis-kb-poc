---
name: pago-resumen-pagos-realizados-y-pendientes
description: El cliente quiere un resumen de lo que ya ha pagado de su reserva y
  de lo que le queda pendiente.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

El cliente ha perdido la cuenta de los pagos hechos o quiere comprobar el estado económico de la reserva antes de viajar. Puede haber pagado de una vez, con señal o a plazos.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Obtiene con `consultar-pagos` los pagos realizados, sus fechas y el importe pendiente.
3. Presenta un resumen ordenado: lo pagado, lo pendiente y la próxima fecha de cobro si existe.
4. Si no queda nada pendiente, confirma que la reserva está pagada por completo.

## Qué no hace

- No suma ni redondea importes por su cuenta: usa los que devuelve la acción.
- No muestra datos completos del medio de pago.

## Cuándo pasa a una persona

- El cliente no reconoce alguno de los pagos que aparecen.
- El cliente asegura haber pagado algo que no figura en la reserva.

## Cómo lo puede pedir el cliente

- «¿Me pueden facilitar un detalle de los pagos realizados y del importe pendiente de mi reserva?»
- «cuanto llevo pagado y cuanto me falta?»
- «Oye, ¿lo tengo ya todo pagado o me queda algo? Es que no me acuerdo»
- «Necesito saber qué he pagado hasta ahora porque lo estamos pagando entre varios amigos»
