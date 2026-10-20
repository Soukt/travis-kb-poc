---
name: camb-cancelar-tarifa-no-reembolsable
description: El cliente quiere cancelar una reserva con tarifa no reembolsable y
  espera recuperar su dinero.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

Las condiciones indican que la cancelación no tiene devolución. Hay que explicarlo con claridad y empatía, sin cerrar la puerta a que booking valore el caso si el cliente lo pide.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la tarifa y los servicios.
3. Confirma con `consultar-politica-cancelacion` que la tarifa es no reembolsable y lo que implica.
4. Prepara una respuesta empática que explique las condiciones aceptadas al reservar y lo que ocurre si cancela.
5. Deja la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No promete reembolso ni excepciones.
- No cancela la reserva sin que el cliente lo confirme tras conocer las condiciones.

## Cuándo pasa a una persona

- El cliente pide una excepción o presenta un justificante.
- El cliente confirma que quiere cancelar igualmente.

## Cómo lo puede pedir el cliente

- «Quiero cancelar y me sale que no es reembolsable, ¿de verdad lo pierdo todo?»
- «No me fijé en lo de no reembolsable, ¿hay alguna forma de recuperar algo?»
- «como q no me devolveis nada?? si queda un monton para el viaje»
- «Necesito cancelar una reserva no reembolsable. ¿Qué opciones existen?»
