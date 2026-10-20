---
name: otra-objeto-olvidado-vehiculo-traslado
description: El cliente se dejó un objeto en el vehículo del traslado y quiere recuperarlo.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-traslados
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya ha bajado del coche, furgoneta o autobús del traslado incluido y echa algo en falta.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-traslados` qué traslado era, el trayecto y el horario.
3. Recoge con `pedir-datos-cliente` la descripción del objeto y en qué parte del vehículo lo dejó.
4. Crea un ticket con `crear-ticket-booking` para que booking lo consulte con el proveedor del traslado.

## Qué no hace

- No asegura que el conductor lo haya encontrado.
- No da datos de contacto del conductor.

## Cuándo pasa a una persona

- Siempre: la gestión con el proveedor del traslado la hace booking.
- Con prioridad si el objeto es documentación necesaria para seguir el viaje.

## Cómo lo puede pedir el cliente

- «Me he dejado el móvil en el coche del traslado del aeropuerto al hotel.»
- «nos dejamos una maleta en el autobus del transfer!!»
- «Les informo de que olvidé un objeto en el vehículo del traslado contratado.»
- «Me dejé la cámara en la furgoneta del traslado. ¿El mismo conductor nos recoge a la vuelta?»
