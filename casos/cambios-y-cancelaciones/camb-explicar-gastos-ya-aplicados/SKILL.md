---
name: camb-explicar-gastos-ya-aplicados
description: El cliente ya ha cancelado y quiere entender el desglose de los
  gastos que se le han aplicado, sin reclamar.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
    - consultar-pagos
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

El cliente no discute los gastos, pero quiere saber de dónde sale cada concepto.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Recupera con `consultar-politica-cancelacion` las condiciones vigentes en el momento de cancelar.
3. Revisa con `consultar-pagos` lo cobrado y lo devuelto.
4. Comprueba con `consultar-factura` las facturas emitidas.
5. Prepara un desglose claro para que booking lo revise antes de enviarlo.

## Qué no hace

- No reabre la cancelación.
- No añade conceptos que no aparezcan en las acciones.

## Cuándo pasa a una persona

- Al ver el desglose, el cliente no está de acuerdo y reclama.

## Cómo lo puede pedir el cliente

- «No reclamo nada, pero ¿me explicáis de dónde salen los gastos que me cobrasteis?»
- «quiero entender el desglose de la cancelacion»
- «¿Por qué me habéis quitado esa cantidad al cancelar? Solo quiero entenderlo»
- «Solicito el desglose detallado de los gastos de cancelación aplicados. ¿Puedo tener la factura?»
