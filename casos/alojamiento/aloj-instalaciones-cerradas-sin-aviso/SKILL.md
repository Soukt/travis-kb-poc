---
name: aloj-instalaciones-cerradas-sin-aviso
description: El cliente llega y descubre que la piscina, el restaurante u otra
  instalación anunciada está cerrada sin haber sido avisado.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un servicio que motivó la reserva no está disponible durante la estancia. Puede haber reclamación o compensación, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el alojamiento y las fechas.
3. Comprueba con `consultar-servicios-alojamiento` qué servicios anunciaba el alojamiento.
4. Recoge qué instalación está cerrada y qué le han explicado, y abre un ticket con `crear-ticket-booking`.

## Qué no hace

- No promete compensaciones.
- No afirma que el cierre fuera conocido de antemano.

## Cuándo pasa a una persona

- Siempre: es una posible reclamación por un servicio no prestado.

## Cómo lo puede pedir el cliente

- «La piscina del hotel está cerrada por obras y nadie nos avisó.»
- «el spa cerrado todo el viaje y lo elegimos por eso»
- «Hola, el restaurante de la media pensión no abre y nos mandan a otro hotel a cenar. Es normal?»
- «Les comunico que diversas instalaciones del establecimiento permanecen cerradas durante nuestra estancia.»
