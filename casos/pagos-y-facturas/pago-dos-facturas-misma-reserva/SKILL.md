---
name: pago-dos-facturas-misma-reserva
description: El cliente ve dos facturas para la misma reserva y no sabe cuál es la válida.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

En su zona de cliente aparecen varias facturas de la misma reserva (por ejemplo, una original y una rectificativa) y el cliente teme que se le haya cobrado dos veces.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` si ha habido cambios o cancelaciones.
3. Consulta con `consultar-factura` todas las facturas y su tipo.
4. Prepara una explicación de qué es cada factura para que booking la revise antes de enviarla.

## Qué no hace

- No anula facturas.
- No envía la explicación sin revisión.

## Cuándo pasa a una persona

- Las dos facturas son ordinarias y por el mismo importe sin cambios en la reserva.
- El cliente cree que se le ha cobrado dos veces.

## Cómo lo puede pedir el cliente

- «Constan dos facturas asociadas a una misma reserva; ¿cuál es la correcta?»
- «tengo dos facturas del mismo viaje, cual vale»
- «Hola, me aparece una factura en negativo y otra normal, ¿qué significa?»
- «dos facturas es que me habeis cobrado dos veces? no entiendo»
