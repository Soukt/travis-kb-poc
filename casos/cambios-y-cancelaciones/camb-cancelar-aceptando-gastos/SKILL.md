---
name: camb-cancelar-aceptando-gastos
description: El cliente quiere cancelar aunque la reserva ya tiene gastos de
  cancelación y acepta pagarlos.
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

La reserva ya ha entrado en gastos y el cliente lo sabe o lo acepta tras informarse. Conviene que entienda bien lo que perderá antes de confirmar.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados.
3. Consulta con `consultar-politica-cancelacion` los gastos que aplican hoy y se los explica tal como los devuelve la acción.
4. Le pide confirmación expresa de que quiere cancelar conociendo esos gastos.
5. Pasa la cancelación a booking con `crear-ticket-booking`, dejando constancia de la confirmación.

## Qué no hace

- No cancela sin confirmación expresa del cliente.
- No negocia reducciones de los gastos.

## Cuándo pasa a una persona

- Siempre: hay cargos y devoluciones parciales de por medio.

## Cómo lo puede pedir el cliente

- «Ya sé que tiene gastos, pero cancelad igualmente, no podemos ir»
- «Asumo la penalización, quiero cancelar la reserva»
- «cancelar aunq me cobreis algo, q le vamos a hacer»
- «Confirmo que deseo anular la reserva aceptando los gastos de cancelación. ¿Me enviarán la factura?»
