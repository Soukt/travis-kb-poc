---
name: aloj-chinches-plaga-habitacion
description: El cliente encuentra chinches, cucarachas u otra plaga en la
  habitación o tiene picaduras tras dormir en ella.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando hay una plaga en el alojamiento. Afecta a la salud y suele terminar en reclamación, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y la habitación.
3. Le recomienda pedir de inmediato en recepción un cambio de habitación.
4. Pide con `pedir-datos-cliente` qué ha encontrado y qué respuesta le ha dado el alojamiento.
5. Abre un ticket urgente con `crear-ticket-booking`.

## Qué no hace

- No da consejos médicos sobre las picaduras.
- No promete compensaciones ni cambio de alojamiento.

## Cuándo pasa a una persona

- Siempre: es una incidencia de salubridad con posible reclamación.

## Cómo lo puede pedir el cliente

- «Hemos encontrado chinches en la cama de la habitación.»
- «hay cucarachas en el baño, q asco»
- «Hola, me he levantado lleno de picaduras y en el colchón hay bichos. Nos cambian de hotel?»
- «Les comunico la presencia de una plaga en la habitación asignada.»
