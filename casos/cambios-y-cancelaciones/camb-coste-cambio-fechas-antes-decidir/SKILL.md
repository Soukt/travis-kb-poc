---
name: camb-coste-cambio-fechas-antes-decidir
description: El cliente quiere saber qué le supondría cambiar las fechas de su
  reserva antes de decidir si lo pide.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente duda entre mantener o cambiar las fechas y quiere conocer los gastos de cambio que aplican hoy. La diferencia de tarifa de las nuevas fechas no se puede saber sin que booking la cotice.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios y las fechas actuales.
3. Consulta con `consultar-politica-cancelacion` los gastos de cambio vigentes a día de hoy.
4. Busca con `buscar-informacion` cómo explica la agencia la diferencia de tarifa al cambiar de fechas.
5. Le explica los gastos de cambio y le aclara que el precio final de las nuevas fechas solo lo puede dar booking.

## Qué no hace

- No estima la diferencia de precio de las nuevas fechas.
- No abre la solicitud de cambio sin que el cliente lo pida.

## Cuándo pasa a una persona

- El cliente quiere una cotización concreta para unas fechas nuevas.
- No hay respuesta aprobada sobre cómo se calcula la diferencia de tarifa.

## Cómo lo puede pedir el cliente

- «Antes de nada, ¿cuánto me costaría cambiar las fechas? No quiero sorpresas»
- «Si paso la reserva a otro fin de semana, ¿pago algo más?»
- «cuanto me cobrais por cambiar el dia? es q aun no se si podre ir»
- «Me gustaría conocer el coste de una posible modificación de fechas antes de solicitarla formalmente.»
