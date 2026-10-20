---
name: ent-anadir-entrada-viajero-adicional
description: El cliente quiere sumar a una persona más a su paquete de hotel con
  entradas, con su plaza en la habitación y su entrada.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando un nuevo viajero se une al viaje. Implica datos de otra persona, la capacidad de la habitación y un cargo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` los viajeros, la habitación y las entradas actuales.
3. Revisa con `consultar-servicios-alojamiento` si el alojamiento admite camas supletorias o más ocupantes.
4. Recoge con `pedir-datos-cliente` los datos del nuevo viajero.
5. Abre con `crear-ticket-booking` la solicitud con todo lo recogido.

## Qué no hace

- No confirma plaza ni precio.
- No añade al viajero a la reserva.

## Cuándo pasa a una persona

- Siempre: implica datos de otra persona y un cargo.

## Cómo lo puede pedir el cliente

- «Se suma mi sobrino al viaje. ¿Podéis añadirlo al hotel y al parque?»
- «viene una amiga mas, cabe en la habitacion y le sacais entrada?»
- «Buenos días, solicito añadir un viajero adicional a mi reserva de hotel con entradas.»
- «mi madre se viene al final, hay que pagar mucho mas? necesita entrada y cama»
