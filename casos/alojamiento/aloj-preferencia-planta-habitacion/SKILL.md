---
name: aloj-preferencia-planta-habitacion
description: El cliente prefiere una habitación en planta baja, en planta alta o
  cerca del ascensor.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pide una ubicación por comodidad, ruido o por viajar con personas mayores, sin necesitar una habitación adaptada. El agente prepara la petición y booking la revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y la habitación.
3. Consulta con `consultar-servicios-alojamiento` si hay ascensor y cómo es el edificio.
4. Prepara la preferencia de ubicación en `crear-ticket-booking` para que booking la revise y la envíe.

## Qué no hace

- No garantiza la planta solicitada.
- No trata la petición como accesibilidad si el cliente no lo indica.

## Cuándo pasa a una persona

- La petición responde en realidad a una necesidad de movilidad reducida.

## Cómo lo puede pedir el cliente

- «¿Podrían pedir que nos den una habitación en planta baja?»
- «q no sea en el ultimo piso q mi madre se cansa»
- «Hola, preferimos planta alta por el ruido de la calle. Hay ascensor? Y piscina?»
- «Les ruego trasladen al alojamiento nuestra preferencia por una habitación próxima al ascensor.»
