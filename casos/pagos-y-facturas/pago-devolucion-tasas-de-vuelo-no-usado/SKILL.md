---
name: pago-devolucion-tasas-de-vuelo-no-usado
description: El cliente no usó un vuelo de su reserva y pide que le devuelvan las tasas.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente no voló, porque no se presentó o porque canceló, y ha oído que las tasas pueden recuperarse aunque el billete no sea reembolsable.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-vuelo` el vuelo no utilizado.
3. Consulta con `consultar-politica-cancelacion` las condiciones de la reserva.
4. Pasa la petición con `crear-ticket-booking`.

## Qué no hace

- No promete el reembolso de las tasas.
- No indica importes de tasas.

## Cuándo pasa a una persona

- Siempre: es una devolución.

## Cómo lo puede pedir el cliente

- «No hicimos uso del vuelo de ida; solicitamos el reembolso de las tasas.»
- «no vole, me devolveis al menos las tasas?»
- «Hola, he leído que las tasas se devuelven aunque no vueles, ¿cómo lo pido?»
- «perdimos el vuelo, algo se recupera?»
