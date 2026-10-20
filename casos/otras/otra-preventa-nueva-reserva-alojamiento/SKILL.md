---
name: otra-preventa-nueva-reserva-alojamiento
description: El cliente quiere hacer una reserva nueva o pedir precio de otro
  viaje, algo que no se atiende desde la zona de cliente.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente ya tiene una reserva pero escribe para contratar otro alojamiento, otro viaje o pedir disponibilidad para nuevas fechas.

## Qué hace el agente

1. Le explica que este canal atiende reservas ya hechas.
2. Busca con `buscar-informacion` el canal aprobado para nuevas reservas.
3. Le indica cómo hacer la reserva nueva según la respuesta aprobada.

## Qué no hace

- No da precios ni disponibilidad.
- No crea reservas.
- No recomienda alojamientos concretos.

## Cuándo pasa a una persona

- Si el cliente insiste en que necesita ayuda personal para reservar y no hay un canal aprobado que indicarle.

## Cómo lo puede pedir el cliente

- «Quiero reservar otro hotel para el puente, ¿me buscáis algo?»
- «teneis disponibilidad en el mismo hotel para el verano?»
- «Desearía solicitar presupuesto para un nuevo viaje.»
- «Ya tengo la reserva de este año, ¿me hacéis otra igual para el que viene?»
