---
name: camb-cancelar-reserva-sin-gastos
description: El cliente quiere cancelar su reserva y todavía está dentro del
  periodo de cancelación gratuita.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La política indica que hoy no hay gastos y el cliente confirma que quiere cancelar. Hay una devolución de por medio, así que la cancelación la tramita booking.

## Qué hace el agente

1. Comprueba que quien escribe es el titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios que se cancelarían.
3. Comprueba con `consultar-politica-cancelacion` que hoy la cancelación no tiene gastos y hasta cuándo dura ese periodo.
4. Confirma con el cliente que quiere cancelar toda la reserva y recoge el motivo si quiere darlo.
5. Crea la solicitud con `crear-ticket-booking`, indicando que está en periodo sin gastos para que se gestione a tiempo.

## Qué no hace

- No da la cancelación por hecha.
- No promete fechas de devolución.

## Cuándo pasa a una persona

- Siempre: la cancelación con devolución la tramita booking.
- Con prioridad si el periodo sin gastos está a punto de terminar.

## Cómo lo puede pedir el cliente

- «Quiero cancelar mi reserva, ¿sigo a tiempo de que no me cobréis nada?»
- «cancelar reserva porfa, nos ha surgido algo»
- «Buenas, ¿cómo anulo la reserva? Creo que aún es gratis»
- «Por la presente solicito la cancelación de mi reserva dentro del periodo sin penalización.»
