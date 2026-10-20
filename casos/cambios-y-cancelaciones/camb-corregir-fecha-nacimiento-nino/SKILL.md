---
name: camb-corregir-fecha-nacimiento-nino
description: El cliente indicó mal la edad o la fecha de nacimiento de un niño
  al hacer la reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La edad del menor afecta a precios, ocupación y condiciones de entradas o transporte, así que corregirla puede cambiar el precio o la habitación.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la edad que figura y los servicios afectados.
3. Pide con `pedir-datos-cliente` la fecha de nacimiento correcta.
4. Le avisa de que la corrección puede cambiar el precio o las condiciones y pasa el caso a booking con `crear-ticket-booking`.

## Qué no hace

- No recalcula precios.
- No le recomienda dejar la edad incorrecta.

## Cuándo pasa a una persona

- Siempre: son datos de un menor y pueden cambiar el importe.

## Cómo lo puede pedir el cliente

- «Puse que mi hija tenía menos años de los que tiene, ¿pasa algo?»
- «Me equivoqué con la fecha de nacimiento del niño, ¿cómo lo cambio?»
- «la edad de mi hijo esta mal en la reserva, en realidad es mayor»
- «Al realizar la reserva consigné erróneamente la edad de un menor. Solicito su corrección.»
