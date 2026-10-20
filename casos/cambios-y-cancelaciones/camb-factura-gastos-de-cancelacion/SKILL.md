---
name: camb-factura-gastos-de-cancelacion
description: El cliente pide la factura correspondiente a los gastos de
  cancelación que se le han cobrado.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

La reserva se canceló con gastos y el cliente necesita la factura para su contabilidad o para justificarlo.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Consulta con `consultar-factura` las facturas emitidas de la reserva.
3. Si existe la factura de gastos, le indica cómo obtenerla según lo que devuelve la acción.
4. Si todavía no existe, se lo explica sin dar plazos.

## Qué no hace

- No emite facturas.
- No modifica datos fiscales.

## Cuándo pasa a una persona

- La factura no se ha emitido.
- El cliente necesita cambiar los datos fiscales.

## Cómo lo puede pedir el cliente

- «Necesito la factura de los gastos de cancelación»
- «¿Me podéis dar la factura de lo que me cobrasteis al anular?»
- «factura de la penalizacion porfa, es para la empresa»
- «Solicito la factura de los gastos de anulación de mi reserva.»
