---
name: vh-espera-entre-salida-hotel-y-vuelo
description: El cliente tiene que dejar la habitación mucho antes de su vuelo de
  vuelta y pregunta qué opciones tiene mientras espera.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-horarios-hotel
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

El vuelo de vuelta sale bastante después de la hora de salida del hotel. El cliente quiere saber dónde dejar el equipaje o si puede usar las instalaciones.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la hora del vuelo de vuelta.
3. Consulta con `consultar-horarios-hotel` la hora de salida de la habitación.
4. Revisa con `consultar-servicios-alojamiento` si hay consigna, vestuarios o zonas comunes disponibles.
5. Le explica las opciones según esos datos.

## Qué no hace

- No garantiza la salida tardía.
- No solicita nada al hotel.

## Cuándo pasa a una persona

- Si el cliente quiere contratar la salida tardía de la habitación.

## Cómo lo puede pedir el cliente

- «Salimos del hotel por la mañana y el vuelo es por la noche, ¿qué hacemos?»
- «podemos dejar las maletas en el hotel despues de dejar la habitacion?»
- «Buenas, ¿hay algún sitio para ducharse antes de ir al aeropuerto?»
- «nos quedamos todo el dia sin habitacion hasta el vuelo, alguna solucion?»
