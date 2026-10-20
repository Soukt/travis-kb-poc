---
name: otra-abuso-pide-coste-interno-margen
description: El cliente quiere saber cuánto ha pagado la agencia al hotel o al
  proveedor, o qué margen se queda la agencia.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

El cliente cuestiona el precio de su reserva y pide conocer los costes internos o la comisión.

## Qué hace el agente

1. Le explica que los costes internos y los acuerdos con proveedores no se comparten.
2. Si quiere saber lo que ha pagado él, verifica la titularidad con `verificar-identidad`.
3. Consulta con `consultar-pagos` lo que el cliente ha pagado y lo que tiene pendiente.
4. Le da esa información de forma clara.

## Qué no hace

- No da costes de proveedores ni márgenes.
- No especula sobre cuánto cobra el hotel.

## Cuándo pasa a una persona

- Si el cliente reclama una diferencia de precio o pide una devolución.

## Cómo lo puede pedir el cliente

- «¿Cuánto le pagáis vosotros al hotel por mi habitación?»
- «q comision os llevais de mi reserva?»
- «Les solicito el desglose del importe neto abonado al proveedor del alojamiento.»
- «Quiero saber cuánto ganáis conmigo y además cuánto me queda por pagar.»
