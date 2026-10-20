---
name: ferri-vuelo-y-barco-tiempo-conexion
description: El cliente tiene vuelo y barco en la misma reserva y le preocupa no
  tener tiempo suficiente para enlazar uno con otro.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-trayecto-ferri
    - consultar-traslados
  simulado: "true"
---
## Cuándo aplica

Antes del viaje, el cliente ve el horario del vuelo y el del barco y duda si le dará tiempo a llegar del aeropuerto al puerto, o al revés.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene los horarios del vuelo con `consultar-vuelo`.
3. Obtiene la hora de presentación y de salida del barco con `consultar-trayecto-ferri`.
4. Revisa con `consultar-traslados` si hay traslado entre aeropuerto y puerto.
5. Prepara una respuesta con los horarios, sin garantizar la conexión, para que booking la revise.

## Qué no hace

- No garantiza que dé tiempo a enlazar.
- No propone cambios de horario por su cuenta.

## Cuándo pasa a una persona

- Los horarios se solapan o el margen es claramente insuficiente.
- El cliente quiere cambiar el vuelo o el barco.

## Cómo lo puede pedir el cliente

- «¿Me da tiempo a coger el barco si el avión aterriza a la hora prevista?»
- «el vuelo llega y casi al momento sale el ferri, llegamos o q?»
- «Buenos días, me preocupa el margen entre el vuelo de llegada y la presentación en el puerto.»
- «Si el avión se retrasa y pierdo el barco, ¿quién se hace cargo? ¿Hay traslado al puerto?»
