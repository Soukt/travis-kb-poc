---
name: vh-duracion-trayecto-aeropuerto-hotel
description: El cliente pregunta cuánto se tarda del aeropuerto al hotel y si el
  traslado hace paradas en otros alojamientos.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere calcular a qué hora llegará al hotel o cuánto tiempo reservar para ir al aeropuerto el último día.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-traslados` el tipo de traslado y la duración estimada, si la acción la devuelve.
3. Busca con `buscar-informacion` la respuesta aprobada sobre cómo funcionan los traslados compartidos.
4. Le traslada la duración y le explica si puede haber paradas en otros alojamientos.

## Qué no hace

- No da una duración inventada.
- No asegura que un traslado compartido vaya sin paradas.

## Cuándo pasa a una persona

- Si el cliente quiere cambiar a un traslado directo.

## Cómo lo puede pedir el cliente

- «¿Cuánto se tarda del aeropuerto al hotel?»
- «el traslado va parando en mas hoteles?»
- «Buenas, ¿cuánto tiempo hay que calcular para el traslado de vuelta?»
- «el hotel esta lejos del aeropuerto? llegamos cansadisimos»
