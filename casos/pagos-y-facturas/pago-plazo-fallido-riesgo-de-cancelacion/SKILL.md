---
name: pago-plazo-fallido-riesgo-de-cancelacion
description: El cliente ha tenido un plazo fallido y teme que le cancelen la reserva.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Un cobro de plazo no se ha podido realizar y el cliente, preocupado, quiere saber en qué situación queda su reserva y cómo regularizarla.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado actual de la reserva.
3. Consulta con `consultar-pagos` el plazo fallido y el importe pendiente.
4. Busca con `buscar-informacion` qué ocurre tras un plazo fallido y cómo regularizarlo.
5. Prepara una respuesta tranquilizadora y precisa para que booking la revise antes de enviarla.

## Qué no hace

- No garantiza que la reserva se mantenga.
- No concede prórrogas.

## Cuándo pasa a una persona

- La reserva ya aparece cancelada.
- El cliente pide más tiempo para pagar.

## Cómo lo puede pedir el cliente

- «Me ha llegado un aviso de cobro fallido y quisiera saber si mi reserva sigue vigente.»
- «no se pudo cobrar el plazo, me vais a cancelar el viaje???»
- «Hola, estoy muy preocupada, ha fallado el pago y nos vamos pronto, ¿qué tengo que hacer?»
- «ha fallado el cobro, sigue la reserva bien? y los bonos?»
