---
name: vh-cambio-horario-afecta-traslado
description: El cliente quiere asegurarse de que su traslado se ha ajustado al
  nuevo horario de su vuelo tras un cambio de la aerolínea.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-traslados
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Ha habido un cambio de horario y el cliente teme que el traslado de llegada o de salida siga con la hora antigua.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el horario vigente.
3. Revisa con `consultar-traslados` la hora y los datos de vuelo que constan en el traslado.
4. Si no coinciden, prepara la actualización y la respuesta, y las envía con `crear-ticket-booking` para que booking las revise antes de aplicarlas.

## Qué no hace

- No asegura que el traslado esté actualizado si la acción no lo refleja.
- No contrata traslados nuevos.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la gestión antes de aplicarla.
- Si el nuevo horario queda fuera del horario de servicio del traslado.

## Cómo lo puede pedir el cliente

- «Me cambiaron el vuelo, ¿el traslado ya lo sabe?»
- «el del traslado vendra a la hora nueva o a la vieja?»
- «Buenos días, ¿podéis actualizar el traslado de llegada con el nuevo horario?»
- «ahora llego de madrugada, sigue habiendo traslado a esas horas?»
