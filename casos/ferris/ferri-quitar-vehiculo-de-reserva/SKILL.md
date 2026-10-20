---
name: ferri-quitar-vehiculo-de-reserva
description: El cliente ya no va a viajar con el vehículo que reservó en el
  barco y quiere quitarlo del billete.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente viajará a pie en uno o en todos los trayectos que tenía contratados con vehículo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica con `consultar-trayecto-ferri` el vehículo y los trayectos afectados.
3. Consulta con `consultar-politica-cancelacion` las condiciones que aplican a la modificación.
4. Explica que, según las condiciones, puede no haber devolución, y abre un caso con `crear-ticket-booking`.

## Qué no hace

- No promete devolver la diferencia.
- No elimina el vehículo de la reserva.

## Cuándo pasa a una persona

- Siempre: puede haber devolución o gastos y lo decide booking.

## Cómo lo puede pedir el cliente

- «Se nos ha estropeado el coche y vamos a ir a pie, ¿qué hago con la plaza del vehículo?»
- «ya no llevamos coche, me devolveis la diferencia?»
- «Solicito eliminar el vehículo del trayecto de vuelta, ya que regresaré sin él.»
- «Vendí el coche, quitadlo del barco porfa. ¿El camarote sigue igual?»
