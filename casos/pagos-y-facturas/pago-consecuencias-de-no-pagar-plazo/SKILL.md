---
name: pago-consecuencias-de-no-pagar-plazo
description: El cliente pregunta qué pasaría con su reserva si no paga un plazo a tiempo.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-politica-cancelacion
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente teme no poder pagar un plazo y quiere saber las consecuencias antes de que ocurra: si se cancela la reserva, si hay gastos o si se reintenta el cobro.

## Qué hace el agente

1. Verifica la identidad del titular con `verificar-identidad`.
2. Consulta con `consultar-pagos` el próximo plazo y su fecha.
3. Revisa con `consultar-politica-cancelacion` los gastos que aplicarían si la reserva se cancelara.
4. Busca con `buscar-informacion` qué ocurre cuando un plazo queda sin pagar y se lo explica.

## Qué no hace

- No amenaza ni presiona al cliente.
- No promete una prórroga ni que la reserva se vaya a mantener.

## Cuándo pasa a una persona

- El cliente pide más tiempo para pagar.
- El cliente quiere cancelar la reserva porque no puede pagar.

## Cómo lo puede pedir el cliente

- «En caso de no poder abonar el próximo plazo, ¿qué consecuencias tendría para mi reserva?»
- «si no pago un plazo me anulais el viaje?»
- «Hola, igual este mes no llego al pago, ¿qué pasa si se retrasa un poco?»
- «ke pasa si la tarjeta no tiene fondos el dia del cobro»
