---
name: pago-factura-separada-por-cada-viajero
description: El cliente quiere que se emita una factura distinta para cada
  viajero o familia de su reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Una reserva de grupo tiene una sola factura y los viajeros necesitan facturas individuales. Es una excepción e implica datos de otras personas.

## Qué hace el agente

1. Verifica la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros incluidos.
3. Consulta con `consultar-factura` las facturas emitidas.
4. Recoge cómo quiere el reparto y lo pasa con `crear-ticket-booking`, sin pedir datos de los demás viajeros.

## Qué no hace

- No divide la factura ni promete que se pueda dividir.
- No recoge datos fiscales de otros viajeros.

## Cuándo pasa a una persona

- Siempre: es una excepción con datos de terceros.

## Cómo lo puede pedir el cliente

- «Viajamos varias familias y necesitaríamos una factura por cada unidad familiar.»
- «podeis hacer una factura para cada uno?»
- «Hola, somos un grupo de amigos y cada uno quiere su factura»
- «la factura viene toda junta y necesito solo mi parte»
