---
name: pago-factura-de-gastos-de-cancelacion
description: El cliente canceló su reserva con gastos y quiere la factura o el
  documento de esos gastos.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La reserva está cancelada, el cliente ha asumido gastos de cancelación y necesita un documento que los justifique.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` que la reserva está cancelada.
3. Consulta con `consultar-factura` si se han emitido la factura de gastos o la rectificativa.
4. Si no aparecen, busca con `buscar-informacion` cuándo se emiten y se lo explica.

## Qué no hace

- No calcula ni discute los gastos de cancelación.
- No emite documentos por su cuenta.

## Cuándo pasa a una persona

- El cliente no está de acuerdo con los gastos.
- La factura debería existir y no consta.

## Cómo lo puede pedir el cliente

- «Habiendo cancelado la reserva con gastos, necesito la factura correspondiente.»
- «cancele y me cobrasteis algo, me dais factura de eso?»
- «Hola, ¿dónde encuentro la factura de lo que me cobrasteis al cancelar?»
- «necesito el papel de lo que perdi al anular»
