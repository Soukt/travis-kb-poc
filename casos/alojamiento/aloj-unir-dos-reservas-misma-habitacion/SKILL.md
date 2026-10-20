---
name: aloj-unir-dos-reservas-misma-habitacion
description: El cliente tiene dos reservas seguidas en el mismo alojamiento y
  quiere no cambiar de habitación entre una y otra.
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

Cuando el cliente encadena dos reservas suyas en el mismo alojamiento. El agente prepara la petición y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad` en ambas reservas.
2. Comprueba con `consultar-reserva` que las fechas son consecutivas y el tipo de habitación de cada una.
3. Prepara la petición de mantener la misma habitación en `crear-ticket-booking` para que booking la revise y la envíe.
4. Explica que depende de la disponibilidad del alojamiento.

## Qué no hace

- No fusiona las reservas ni cambia sus condiciones.
- No garantiza la misma habitación.

## Cuándo pasa a una persona

- Una de las reservas no está a nombre del cliente.
- Las habitaciones son de tipos distintos y el cliente quiere igualarlas.

## Cómo lo puede pedir el cliente

- «Tengo dos reservas seguidas en el mismo hotel, ¿puedo quedarme en la misma habitación?»
- «hice dos reservas sin querer seguidas, no quiero cambiar de cuarto»
- «Hola, amplié la estancia con otra reserva. Me harán hacer la maleta a mitad? y el desayuno sigue?»
- «Solicito que se mantenga la misma habitación entre mis dos reservas consecutivas.»
