---
name: pago-moneda-del-cobro-y-conversion
description: El cliente pregunta en qué moneda se le cobra la reserva y si su
  banco le aplicará un cambio de divisa.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente usa una tarjeta en otra moneda o de un banco extranjero y quiere saber, antes de pagar, en qué divisa se realizan los cobros.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` la moneda en la que constan los importes de la reserva.
3. Busca con `buscar-informacion` la respuesta aprobada sobre divisas y conversiones.
4. Le explica en qué moneda se cobra y que la conversión y sus posibles comisiones dependen de su banco.

## Qué no hace

- No estima tipos de cambio ni comisiones.
- No asume costes del banco del cliente.

## Cuándo pasa a una persona

- El cliente pide que se le cobre en otra moneda.
- No hay respuesta aprobada sobre la moneda de cobro.

## Cómo lo puede pedir el cliente

- «¿En qué divisa se efectuarán los cargos de mi reserva?»
- «me cobrais en euros o en la moneda de mi pais?»
- «Hola, tengo la tarjeta en otra moneda, ¿me va a cobrar comisión el banco?»
- «vivo fuera de España, como me sale el cobro»
