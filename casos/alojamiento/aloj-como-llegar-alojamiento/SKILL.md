---
name: aloj-como-llegar-alojamiento
description: El cliente pregunta dónde está exactamente su alojamiento y cómo
  llegar desde el aeropuerto, la estación o el puerto.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-traslados
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente necesita la ubicación del alojamiento o saber si tiene un traslado incluido para llegar.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento y los servicios contratados con `consultar-reserva`.
3. Obtiene la dirección del alojamiento que figura en el bono con `consultar-bonos`.
4. Comprueba con `consultar-traslados` si la reserva incluye traslado y dónde es el punto de encuentro.
5. Responde con la dirección y, si hay traslado, cómo funciona.

## Qué no hace

- No calcula rutas ni tiempos de trayecto por su cuenta.
- No recomienda medios de transporte que no estén en la reserva.

## Cuándo pasa a una persona

- La dirección del bono no coincide con la que encuentra el cliente al llegar.

## Cómo lo puede pedir el cliente

- «¿Cuál es la dirección exacta del hotel?»
- «como llego al apartamento desde el aeropuerto?»
- «Hola, tenemos traslado o vamos por nuestra cuenta? Y el hotel está cerca de la playa?»
- «Les ruego me indiquen la ubicación del alojamiento y cómo acceder a él.»
