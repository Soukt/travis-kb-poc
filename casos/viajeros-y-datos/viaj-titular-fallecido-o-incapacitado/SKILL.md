---
name: viaj-titular-fallecido-o-incapacitado
description: El cliente escribe en nombre de un titular que ha fallecido o que
  no puede gestionar su reserva por una enfermedad grave.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un familiar o representante tiene que ocuparse de la reserva de otra persona en una situación delicada. Requiere empatía y la validación de booking.

## Qué hace el agente

1. Expresa sus condolencias o su comprensión con sencillez.
2. Intenta `verificar-identidad` con el localizador y el email de la reserva si el familiar dispone de ellos, sin dar datos hasta que booking valide la situación.
3. Recoge con `pedir-datos-cliente` la relación con el titular, el localizador si lo tiene y un contacto.
4. Abre con `crear-ticket-booking` el caso como prioritario para que booking indique qué documentación necesita y cómo proceder.

## Qué no hace

- No pide certificados ni documentos por el chat.
- No promete devoluciones ni cancelaciones sin gastos.
- No trata la conversación con frialdad o como un simple trámite.

## Cuándo pasa a una persona

- Siempre: implica datos de otra persona y, probablemente, cancelaciones o devoluciones.

## Cómo lo puede pedir el cliente

- «Mi madre falleció y tenía un viaje reservado con vosotros, ¿qué tengo que hacer?»
- «mi padre esta ingresado y no podra viajar, la reserva esta a su nombre, la puedo gestionar yo?»
- «Buenos días, escribo en calidad de familiar de la titular de una reserva, que ha fallecido recientemente.»
- «Mi marido tenía la reserva a su nombre y ha muerto; ¿podemos ir los demás o hay que cancelar?»
