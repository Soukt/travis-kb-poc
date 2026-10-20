---
name: otra-abuso-factura-con-datos-falsos
description: El cliente pide una factura con importes, fechas, conceptos o
  titulares distintos a los reales de su reserva.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

La petición no es corregir un error sino adaptar la factura a lo que le conviene, por ejemplo para que se la pague su empresa.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-factura` las facturas emitidas de la reserva.
3. Le explica que las facturas solo pueden reflejar los datos reales de la reserva.
4. Le ofrece la factura existente.

## Qué no hace

- No modifica importes, fechas ni conceptos para que no coincidan con la realidad.
- No emite facturas a nombre de terceros sin relación con la reserva.

## Cuándo pasa a una persona

- Si en realidad hay un error en la factura y pide una corrección legítima.

## Cómo lo puede pedir el cliente

- «¿Me podéis poner en la factura que eran días de trabajo y no vacaciones?»
- «ponme mas importe en la factura q me lo paga la empresa»
- «Solicito que la factura figure a nombre de una sociedad distinta y con otras fechas.»
- «Hazme la factura como si fuera un congreso, que así me lo pagan. ¿Y está ya pagado todo?»
