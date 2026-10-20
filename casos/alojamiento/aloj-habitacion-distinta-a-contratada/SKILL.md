---
name: aloj-habitacion-distinta-a-contratada
description: El cliente llega y le asignan una habitación de un tipo o categoría
  distinta, peor que la que contrató.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la habitación asignada no corresponde con la categoría de la reserva. Puede suponer una diferencia económica y lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el tipo de habitación contratado.
3. Revisa con `consultar-bonos` la categoría que figura en el bono para que el cliente lo muestre en recepción.
4. Recoge qué habitación le han dado y abre un ticket urgente con `crear-ticket-booking`.

## Qué no hace

- No acepta en nombre del cliente la habitación asignada.
- No promete devoluciones por la diferencia.

## Cuándo pasa a una persona

- Siempre: hay un incumplimiento de lo contratado con posible diferencia económica.

## Cómo lo puede pedir el cliente

- «Contratamos una habitación superior y nos han dado una estándar.»
- «pague vistas al mar y me dan vistas al parking»
- «Hola, la habitación es mucho más pequeña de lo que reservé y no tiene terraza. Me devolvéis algo?»
- «Les informo de que la habitación asignada no corresponde con la categoría contratada.»
