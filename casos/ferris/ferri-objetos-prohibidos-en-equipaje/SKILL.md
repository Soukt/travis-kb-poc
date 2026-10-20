---
name: ferri-objetos-prohibidos-en-equipaje
description: El cliente pregunta si puede llevar en su equipaje de pasajero
  objetos como navajas, herramientas o un hornillo.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber qué objetos no se admiten en la zona de pasaje, sin necesidad de consultar su reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` la lista aprobada de objetos prohibidos o restringidos a bordo.
2. Responde sobre el objeto concreto que menciona el cliente.
3. Si no hay respuesta aprobada para ese objeto, lo dice sin suponer.

## Qué no hace

- No autoriza objetos que no estén contemplados en la información aprobada.
- No da consejos para esquivar controles.

## Cuándo pasa a una persona

- El objeto puede considerarse peligroso y no hay respuesta aprobada.

## Cómo lo puede pedir el cliente

- «¿Puedo llevar una navaja en la mochila en el barco?»
- «se puede subir con un hornillo de camping al ferri?»
- «Disculpe, ¿hay control de seguridad del equipaje de mano antes de embarcar?»
- «llevo herramientas de trabajo en la maleta, me las van a quitar?»
