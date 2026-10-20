---
name: viaj-localizar-familiar-emergencia
description: El cliente no consigue contactar con un familiar que está de viaje
  con una reserva de la agencia y pide ayuda para localizarlo.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando hay preocupación o una urgencia familiar y quien escribe no es el titular. No se pueden revelar datos, pero el caso merece atención prioritaria.

## Qué hace el agente

1. Escucha con calma y explica que no puede facilitar datos de reservas de otras personas.
2. Si hay riesgo para alguien, le indica que contacte en primer lugar con los servicios de emergencia o las autoridades.
3. Recoge con `pedir-datos-cliente` lo que sabe del viaje, su relación con el viajero y cómo contactarle.
4. Abre con `crear-ticket-booking` el caso como urgente para que booking valore si puede hacer llegar un mensaje al viajero.

## Qué no hace

- No confirma si la persona tiene reserva ni dónde se aloja.
- No facilita contactos de alojamientos ni de proveedores.
- No promete que se vaya a localizar al viajero.

## Cuándo pasa a una persona

- Siempre: implica datos de otra persona y una posible urgencia.

## Cómo lo puede pedir el cliente

- «Mi padre está de viaje y no contesta al teléfono desde hace días, ¿sabéis en qué hotel está?»
- «porfavor es urgente, mi hermana esta de vacaciones con vosotros y ha pasado algo en la familia, necesito hablar con ella»
- «Buenas noches, solicito ayuda para contactar con un familiar que viaja con una reserva suya por un asunto grave.»
- «No localizo a mi hijo, que está de viaje; ¿me podéis decir al menos si ha llegado al hotel?»
