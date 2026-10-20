---
name: camb-reembolso-importe-menor-esperado
description: El cliente ha recibido un reembolso menor del que esperaba y quiere
  saber por qué.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La devolución ya se ha hecho, pero el cliente cree que falta dinero.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-pagos` lo pagado y lo devuelto.
3. Consulta con `consultar-politica-cancelacion` los gastos que aplicaban al cancelar.
4. Le explica lo que muestran los datos sin cerrar la reclamación.
5. Pasa el caso a booking con `crear-ticket-booking`.

## Qué no hace

- No promete devolver la diferencia.
- No hace cálculos que no salgan de las acciones.

## Cuándo pasa a una persona

- Siempre: es una reclamación de dinero.

## Cómo lo puede pedir el cliente

- «Me habéis devuelto menos de lo que pagué, ¿por qué?»
- «falta dinero en la devolucion»
- «¿Cómo habéis calculado el reembolso? No me cuadra»
- «El importe reembolsado no se corresponde con lo esperado. Solicito el desglose.»
