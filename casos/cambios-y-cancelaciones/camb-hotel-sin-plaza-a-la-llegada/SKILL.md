---
name: camb-hotel-sin-plaza-a-la-llegada
description: El cliente llega al hotel y le dicen que no tienen habitación para
  él o que su reserva está cancelada.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Hay un problema de sobreventa o el alojamiento no encuentra la reserva. Es urgente y puede acabar en reubicación, devolución o compensación.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Confirma con `consultar-reserva` que la reserva está confirmada y con qué datos.
3. Le pide que no abandone la recepción y que tenga el bono a mano mientras se resuelve.
4. Abre un ticket urgente con `crear-ticket-booking`.

## Qué no hace

- No le dice que pague otra habitación por su cuenta.
- No promete compensaciones.

## Cuándo pasa a una persona

- Siempre y con máxima prioridad: el cliente está sin alojamiento.

## Cómo lo puede pedir el cliente

- «Estoy en el hotel y dicen que no hay habitación para nosotros, ¿qué hago?»
- «¡Nos dicen que la reserva está cancelada y estamos en la puerta!»
- «el hotel esta lleno y no nos dan la habitacion, urgente!!!»
- «Al llegar al alojamiento nos informan de que no disponen de habitación. Requiero una solución inmediata.»
