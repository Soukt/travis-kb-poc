---
name: pago-factura-aun-no-disponible
description: El cliente todavía no tiene la factura de su reserva y quiere saber
  cuándo estará disponible.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La reserva está pagada total o parcialmente y en su zona de cliente aún no aparece ninguna factura.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Comprueba con `consultar-factura` que no hay facturas emitidas.
3. Revisa con `consultar-pagos` si quedan pagos pendientes que puedan influir.
4. Busca con `buscar-informacion` cuándo se emite la factura y se lo explica.

## Qué no hace

- No inventa una fecha de emisión.
- No emite facturas provisionales.

## Cuándo pasa a una persona

- Según la información aprobada la factura ya debería estar emitida.
- El cliente la necesita para un trámite cercano.

## Cómo lo puede pedir el cliente

- «¿Cuándo estará disponible la factura de mi reserva?»
- «todavia no tengo factura, cuando sale?»
- «Hola, ya he pagado y no me aparece la factura, ¿tarda?»
- «la factura la emitis al pagarlo todo o despues del viaje?»
