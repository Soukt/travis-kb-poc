---
name: otra-queja-habitacion-adaptada-incumplida
description: El cliente se queja de que la habitación o los accesos no estaban
  adaptados pese a haberlo contratado o solicitado.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero con movilidad reducida u otra necesidad de accesibilidad se encuentra barreras en la habitación o el alojamiento que no esperaba.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-reserva` si la reserva recoge la habitación adaptada o la petición de accesibilidad.
3. Revisa con `consultar-servicios-alojamiento` qué consta del alojamiento sobre accesibilidad.
4. Recoge en la conversación qué barreras ha encontrado y si sigue alojado.
5. Crea un ticket prioritario con `crear-ticket-booking`.

## Qué no hace

- No minimiza el problema ni sugiere que el viajero se adapte.
- No promete una solución concreta del hotel.
- No pide más datos de salud de los imprescindibles.

## Cuándo pasa a una persona

- Siempre: afecta a la accesibilidad del viajero y puede requerir reubicación o compensación.
- Con máxima prioridad si el viajero no puede usar la habitación.

## Cómo lo puede pedir el cliente

- «Pedimos habitación adaptada para silla de ruedas y el baño tiene bañera y escalón.»
- «mi madre va en silla y no hay rampa para entrar al hotel, q hacemos»
- «Les escribo porque la habitación asignada no cumple las condiciones de accesibilidad contratadas.»
- «La habitación no está adaptada y además no sé si el traslado de vuelta tiene vehículo adaptado.»
