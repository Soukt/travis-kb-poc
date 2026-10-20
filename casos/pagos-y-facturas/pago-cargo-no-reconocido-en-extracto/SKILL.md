---
name: pago-cargo-no-reconocido-en-extracto
description: El cliente ve en su extracto un cargo a nombre de la agencia que no reconoce.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aparece un cargo de la agencia que el cliente no sabe a qué corresponde y que no encaja con lo que recuerda de su reserva.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-pagos` los cobros registrados en la reserva.
3. Pide con `pedir-datos-cliente` la fecha, el importe y el concepto del cargo tal como aparecen en su banco.
4. Pasa el caso con `crear-ticket-booking`, indicando si coincide o no con algún cobro de la reserva.

## Qué no hace

- No afirma que el cargo sea correcto ni incorrecto.
- No pide el número completo de la tarjeta.

## Cuándo pasa a una persona

- Siempre: un cargo no reconocido lo revisa booking.

## Cómo lo puede pedir el cliente

- «En mi extracto figura un cargo de su empresa que no identifico.»
- «me ha salido un cobro vuestro que no se de que es»
- «Hola, tengo un cargo con vuestro nombre y no me cuadra con nada de mi viaje»
- «q es este cargo?? no he comprado nada mas»
