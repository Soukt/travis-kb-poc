---
name: pago-factura-sin-iva-desglosado
description: El cliente pregunta por qué su factura no muestra el IVA desglosado.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente, normalmente un profesional o una empresa, ve que la factura no separa la base y el impuesto y quiere saber el motivo.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-factura` el tipo de factura emitida.
3. Busca con `buscar-informacion` la explicación aprobada sobre el régimen fiscal de las facturas de viajes.
4. Le traslada esa explicación sin añadir interpretación propia.

## Qué no hace

- No da asesoramiento fiscal.
- No promete una factura con el impuesto desglosado si la respuesta aprobada no lo contempla.

## Cuándo pasa a una persona

- El cliente insiste en que necesita otro formato de factura.
- No hay respuesta aprobada sobre el tema.

## Cómo lo puede pedir el cliente

- «La factura no refleja el IVA de forma desglosada; ¿a qué se debe?»
- «porque no sale el iva en la factura?»
- «Hola, soy autónomo y mi gestor dice que la factura no lleva el IVA aparte»
- «necesito el iva separado en la factura, se puede?»
