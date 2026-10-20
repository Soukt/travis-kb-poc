---
name: camb-cancelar-sin-ser-titular
description: El cliente que escribe no es el titular de la reserva y pide
  cancelarla o modificarla.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Escribe un acompañante, un familiar u otra persona que no supera la verificación como titular. No se puede actuar sobre la reserva ni dar información de ella.

## Qué hace el agente

1. Intenta comprobar la identidad con `verificar-identidad`.
2. Si no es el titular, le explica con amabilidad que las gestiones solo las puede hacer el titular.
3. Recoge la petición y la traslada a booking con `crear-ticket-booking`, sin datos de la reserva.

## Qué no hace

- No da ningún dato de la reserva.
- No cancela ni modifica nada.
- No confirma siquiera si la reserva existe.

## Cuándo pasa a una persona

- Siempre: implica a una persona distinta del titular.

## Cómo lo puede pedir el cliente

- «La reserva la hizo mi marido pero quiero cancelarla yo»
- «Soy uno de los viajeros, ¿puedo cancelar mi parte aunque no sea el titular?»
- «mi madre reservo pero ella no sabe usar esto, cancelo yo?»
- «Actúo en nombre del titular, que no puede gestionarlo. Solicito la anulación.»
