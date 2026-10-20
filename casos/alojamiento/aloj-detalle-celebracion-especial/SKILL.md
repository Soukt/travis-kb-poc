---
name: aloj-detalle-celebracion-especial
description: El cliente celebra un aniversario, un cumpleaños o su luna de miel
  y pide que el alojamiento tenga algún detalle.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere comunicar una ocasión especial al alojamiento. El agente prepara la nota y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` las fechas y el alojamiento.
3. Recoge la ocasión y si quiere que sea sorpresa para el acompañante.
4. Prepara la nota para el alojamiento en `crear-ticket-booking` para que booking la revise y la envíe.

## Qué no hace

- No promete regalos, mejoras de habitación ni detalles concretos.
- No contrata servicios de pago como cava o decoración.

## Cuándo pasa a una persona

- El cliente quiere contratar y pagar un detalle concreto a través de la agencia.

## Cómo lo puede pedir el cliente

- «Es nuestro aniversario de boda, ¿podrían comunicárselo al hotel?»
- «vamos de luna de miel!! nos ponen algo especial?»
- «Hola, es el cumple de mi novia, se puede preparar alguna sorpresa en la habitación? que no se entere ella»
- «Les agradecería que informasen al establecimiento de que celebramos nuestro viaje de novios.»
