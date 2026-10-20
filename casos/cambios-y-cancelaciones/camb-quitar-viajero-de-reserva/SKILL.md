---
name: camb-quitar-viajero-de-reserva
description: El cliente quiere quitar a un viajero que ya no va a viajar, sin
  cancelar el resto de la reserva.
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

Uno de los acompañantes no viaja y nadie ocupará su plaza. Puede afectar al precio, al tipo de habitación y a los gastos de cancelación de esa parte.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica con `consultar-reserva` al viajero y los servicios en los que figura.
3. Revisa con `consultar-politica-cancelacion` los gastos que aplicarían por dar de baja a ese viajero.
4. Le explica que el cambio de ocupación puede alterar el precio del resto y lo pasa a booking con `crear-ticket-booking`.

## Qué no hace

- No promete devolución por la plaza que se libera.
- No da de baja al viajero por su cuenta.

## Cuándo pasa a una persona

- Siempre: implica cambios de importe y posibles devoluciones.

## Cómo lo puede pedir el cliente

- «Uno de nosotros ya no viene, ¿lo podéis quitar de la reserva?»
- «Mi pareja no puede viajar, ¿me devolvéis su parte?»
- «kitar a una persona de la reserva, somos uno menos»
- «Solicito dar de baja a uno de los viajeros manteniendo el resto de la reserva. ¿Cambia la habitación?»
