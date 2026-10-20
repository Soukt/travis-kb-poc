---
name: camb-reserva-hecha-por-error
description: El cliente acaba de hacer una reserva por error o con datos
  equivocados y quiere anularla.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva se ha hecho por equivocación, con fechas, destino o servicio que no quería, y el cliente reacciona poco después. La anulación depende de las condiciones y de la gestión de booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los datos de la reserva.
3. Consulta con `consultar-politica-cancelacion` las condiciones vigentes.
4. Pregunta si prefiere anularla o corregirla.
5. Lo pasa a booking con `crear-ticket-booking`, indicando que es un error reciente.

## Qué no hace

- No da por anulada la reserva.
- No asegura que no haya gastos.

## Cuándo pasa a una persona

- Siempre: hay una devolución de por medio.

## Cómo lo puede pedir el cliente

- «Acabo de reservar sin querer, ¿la podéis anular?»
- «Me he equivocado de mes al reservar, ¿se puede deshacer?»
- «le he dado a reservar sin querer!! cancelarla porfa»
- «He formalizado una reserva por error. Solicito su anulación inmediata.»
