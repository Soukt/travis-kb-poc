---
name: pago-comision-bancaria-por-cobro-extranjero
description: El cliente reclama una comisión que le ha cobrado su banco por un
  pago de la reserva y pide que se la abonen.
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

Tras un cobro de la reserva, el banco del cliente le ha aplicado una comisión (por divisa o por operación en el extranjero) y el cliente considera que debe asumirla la agencia.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-pagos` el cobro al que se refiere.
3. Pide con `pedir-datos-cliente` el concepto de la comisión tal como aparece en su banco.
4. Pasa la reclamación con `crear-ticket-booking`.

## Qué no hace

- No promete abonar la comisión.
- No opina sobre las condiciones del banco del cliente.

## Cuándo pasa a una persona

- Siempre: es una reclamación de dinero.

## Cómo lo puede pedir el cliente

- «Mi entidad me ha aplicado una comisión por el cargo de la reserva y solicito que me la reembolsen.»
- «el banco me ha cobrado comision por vuestro pago, eso lo pagais vosotros no?»
- «Hola, me ha salido un cargo extra del banco por pago en el extranjero y nadie me avisó»
- «comision por divisa?? yo pague en euros»
