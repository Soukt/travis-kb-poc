---
name: pago-factura-no-coincide-con-lo-pagado
description: El cliente ve que el importe de la factura no coincide con lo que ha pagado.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-factura
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

La factura muestra un total distinto de la suma de sus pagos, por ejemplo porque quedan plazos pendientes o porque hubo un cambio en la reserva.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-factura` el importe facturado.
3. Consulta con `consultar-pagos` lo pagado y lo pendiente.
4. Prepara una explicación de la diferencia para que booking la revise antes de enviarla.

## Qué no hace

- No corrige la factura.
- No da por hecho un error ni promete devoluciones.

## Cuándo pasa a una persona

- La diferencia no se explica con los datos de pagos.
- El cliente reclama que se le devuelva la diferencia.

## Cómo lo puede pedir el cliente

- «El importe facturado no coincide con el total abonado.»
- «en la factura pone un precio y yo he pagado otro»
- «Hola, la factura sale por más de lo que llevo pagado, ¿es normal?»
- «no me cuadra la factura con los cargos del banco»
