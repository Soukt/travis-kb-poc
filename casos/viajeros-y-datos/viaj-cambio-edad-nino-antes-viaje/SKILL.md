---
name: viaj-cambio-edad-nino-antes-viaje
description: El cliente avisa de que un niño de la reserva cumplirá años antes o
  durante el viaje y pregunta si eso cambia algo.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando la edad del niño al reservar no será la misma en las fechas del viaje y puede pasar de un tramo de edad a otro, por ejemplo de bebé a niño.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` la fecha de nacimiento o la edad registrada y las fechas del viaje.
3. Busca con `buscar-informacion` la respuesta aprobada sobre qué edad se tiene en cuenta en cada servicio.
4. Prepara la respuesta para el cliente y la deja para revisión de booking antes de enviarla.

## Qué no hace

- No calcula diferencias de precio.
- No modifica el tipo de viajero.

## Cuándo pasa a una persona

- El cambio de edad obliga a ajustar el precio o el tipo de plaza.
- Afecta a un vuelo en el que el bebé pasaría a necesitar asiento propio.

## Cómo lo puede pedir el cliente

- «Mi hijo cumple años justo antes del viaje, ¿hay que cambiar algo?»
- «reserve con la edad q tiene ahora pero en el viaje ya tendra uno mas, importa?»
- «Buenos días, la menor cambiará de tramo de edad durante la estancia. ¿Afecta a la reserva?»
- «El bebé cumple años en las vacaciones; ¿seguirá viajando en brazos en el avión de vuelta?»
