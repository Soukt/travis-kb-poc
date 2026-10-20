---
name: pago-cobro-automatico-o-manual-plazos
description: El cliente pregunta si los plazos se le cobran solos o si tiene que
  hacer él cada pago.
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

El cliente tiene pagos pendientes y no sabe si se cargan automáticamente en su medio de pago o si debe entrar a pagarlos.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-pagos` cómo está configurado el cobro de los pagos pendientes.
3. Busca con `buscar-informacion` la explicación aprobada para ese tipo de cobro.
4. Le explica si debe hacer algo y, si es así, los pasos y la fecha del próximo cobro.

## Qué no hace

- No cambia el tipo de cobro.
- No pide datos de la tarjeta.

## Cuándo pasa a una persona

- El cliente quiere pasar de cobro automático a manual o al revés y no hay respuesta aprobada.
- La información de cobro no aparece en la reserva.

## Cómo lo puede pedir el cliente

- «¿Los cargos de los plazos se realizan automáticamente o debo realizarlos yo?»
- «tengo que entrar yo a pagar o me lo quitais de la tarjeta vosotros»
- «Perdona, es la primera vez que pago así, ¿me avisáis antes o se cobra sin más?»
- «no quiero q se me pase un plazo, lo cobrais solos?»
