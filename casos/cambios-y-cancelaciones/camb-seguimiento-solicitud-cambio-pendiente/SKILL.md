---
name: camb-seguimiento-solicitud-cambio-pendiente
description: El cliente ya pidió un cambio en su reserva y pregunta cómo va
  porque no ha recibido respuesta.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

Hubo una solicitud previa de modificación y el cliente no sabe si se ha aplicado. El estado real de la gestión lo conoce booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` si los datos de la reserva ya reflejan el cambio pedido.
3. Si el cambio aparece aplicado, lo prepara como confirmación; si no, prepara un mensaje explicando que la solicitud sigue en revisión.
4. Deja la respuesta preparada para que booking la revise y complete el estado real antes de enviarla.

## Qué no hace

- No inventa el estado de la solicitud.
- No promete una fecha de respuesta.

## Cuándo pasa a una persona

- No se encuentra rastro de la solicitud anterior.
- El viaje es inminente y el cambio sigue sin aplicarse.

## Cómo lo puede pedir el cliente

- «Hace días pedí cambiar las fechas y no sé nada, ¿cómo va?»
- «¿Me podéis decir si ya está hecho el cambio que solicité?»
- «hola?? sigo esperando lo del cambio de nombre, me decis algo»
- «Buenos días, quisiera conocer el estado de mi solicitud de modificación. ¿Me reenviarán el bono cuando esté?»
