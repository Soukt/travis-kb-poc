---
name: ferri-factura-billete-de-barco
description: El cliente necesita la factura de su billete de barco o de la
  reserva que lo incluye.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

El cliente pide la factura para justificar el gasto o para su contabilidad, y la reserva ya tiene facturas emitidas o pendientes de emitir.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-factura` las facturas emitidas de la reserva.
3. Si están disponibles, le indica cómo acceder a ellas desde su zona de cliente.
4. Si aún no se han emitido, se lo explica según lo que devuelva la acción.

## Qué no hace

- No modifica los datos fiscales de una factura.
- No emite facturas a nombre de otra persona o empresa.

## Cuándo pasa a una persona

- El cliente necesita la factura con datos de una empresa o de otra persona.
- La factura tiene datos incorrectos.

## Cómo lo puede pedir el cliente

- «¿Me podéis pasar la factura del barco?»
- «necesito factura del ferri pa la empresa»
- «Buenos días, solicito la factura correspondiente a la reserva con trayecto marítimo.»
- «dnd encuentro la factura? y sale desglosado lo del coche en el barco?»
