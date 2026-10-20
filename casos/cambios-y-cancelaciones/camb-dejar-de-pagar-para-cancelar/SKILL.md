---
name: camb-dejar-de-pagar-para-cancelar
description: El cliente pregunta si basta con no pagar el siguiente plazo para
  que la reserva se cancele sin gastos.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-politica-cancelacion
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente piensa en dejar de pagar como forma de cancelar. Hay que explicarle con claridad las consecuencias según las condiciones.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-pagos` los pagos pendientes y la próxima fecha de cobro.
3. Consulta con `consultar-politica-cancelacion` los gastos que aplicarían.
4. Busca con `buscar-informacion` qué ocurre, según la agencia, cuando un pago no se realiza.
5. Prepara una respuesta clara para que booking la revise antes de enviarla.

## Qué no hace

- No le aconseja dejar de pagar.
- No afirma que la reserva se anule sin gastos por impago.

## Cuándo pasa a una persona

- El cliente decide cancelar.
- No hay información aprobada sobre los impagos.

## Cómo lo puede pedir el cliente

- «Si no pago el siguiente plazo, ¿se cancela sola y ya está?»
- «y si dejo de pagar? me cobrais algo igual?»
- «No quiero seguir con la reserva, ¿con no pagar lo que falta vale?»
- «Desearía saber las consecuencias de no abonar el siguiente pago pendiente.»
