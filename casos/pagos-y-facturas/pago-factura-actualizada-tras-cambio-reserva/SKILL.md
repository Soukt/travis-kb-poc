---
name: pago-factura-actualizada-tras-cambio-reserva
description: El cliente ha modificado su reserva y la factura disponible no
  refleja el cambio.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras un cambio de servicios, viajeros o precio, la factura disponible sigue mostrando la reserva original.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el cambio realizado.
3. Comprueba con `consultar-factura` si ya existe una factura rectificativa o actualizada.
4. Si no existe, prepara la petición con `crear-ticket-booking` para que booking la revise.

## Qué no hace

- No emite ni corrige facturas.
- No da por buena una factura que no refleja la reserva.

## Cuándo pasa a una persona

- El cambio implicó un pago o una devolución que no se ve en la factura.
- Hay discrepancias entre la reserva, los pagos y la factura.

## Cómo lo puede pedir el cliente

- «Tras la modificación de mi reserva, la factura no recoge los cambios.»
- «cambie las fechas y la factura sigue con las de antes»
- «Hola, añadí una noche y la factura no la incluye, ¿me hacéis otra?»
- «la factura no esta actualizada con lo que he pagado de mas»
