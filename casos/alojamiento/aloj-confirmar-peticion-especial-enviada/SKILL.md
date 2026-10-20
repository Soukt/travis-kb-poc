---
name: aloj-confirmar-peticion-especial-enviada
description: El cliente hizo una petición especial al reservar y quiere saber si
  se ha trasladado al alojamiento y si está confirmada.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pidió cuna, cama, ubicación u otra preferencia y no ha recibido confirmación. El agente prepara la comprobación y booking la revisa antes de responder.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` las observaciones y peticiones registradas en la reserva.
3. Si no consta o no está confirmada, prepara la consulta al alojamiento en `crear-ticket-booking` para que booking la revise y la envíe.
4. Informa al cliente del estado que figura y de los siguientes pasos.

## Qué no hace

- No da por confirmada una petición que solo figura como solicitada.
- No añade peticiones nuevas sin recogerlas aparte.

## Cuándo pasa a una persona

- La petición era imprescindible, por salud o accesibilidad, y el alojamiento no responde.

## Cómo lo puede pedir el cliente

- «Al reservar pedí una cuna, ¿está ya confirmada por el hotel?»
- «pusimos en observaciones lo de las camas separadas, lo saben?»
- «Hola, no sé si le llegó al hotel lo de la habitación tranquila. Me lo confirmáis? y el parking también lo pedí»
- «Desearía comprobar si las peticiones indicadas en mi reserva han sido aceptadas por el alojamiento.»
