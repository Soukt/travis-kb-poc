---
name: vh-resumen-itinerario-completo
description: El cliente pide un resumen ordenado de su viaje con vuelos,
  traslados y horarios de entrada y salida del hotel.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-traslados
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

El cliente quiere tener todo el viaje en un solo mensaje, en orden cronológico. No pide cambios.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-reserva` las fechas, los viajeros y los servicios contratados.
3. Obtiene con `consultar-vuelo` los horarios de cada trayecto.
4. Obtiene con `consultar-traslados` los traslados, su punto de encuentro y sus horarios.
5. Obtiene con `consultar-horarios-hotel` las horas de entrada y salida del alojamiento.
6. Redacta un resumen cronológico desde la salida hasta la vuelta, sin rellenar huecos con datos supuestos.

## Qué no hace

- No añade servicios que no estén en la reserva.
- No completa la información que falte con suposiciones.

## Cuándo pasa a una persona

- Si al cruzar los datos aparece una incoherencia, como un traslado que no cuadra con el vuelo.

## Cómo lo puede pedir el cliente

- «¿Me podéis hacer un resumen de todo el viaje?»
- «me pasais el itinerario completo? vuelos, traslado y hotel»
- «Buenos días, quisiera tener en un único mensaje todos los horarios del viaje.»
- «pa no liarme, q hago el primer dia desde que aterrizo?»
