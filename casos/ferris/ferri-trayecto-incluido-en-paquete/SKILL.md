---
name: ferri-trayecto-incluido-en-paquete
description: El cliente ha comprado un paquete y no tiene claro si incluye el
  barco, qué trayectos y si es con vehículo o solo pasajeros.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

La reserva combina varios servicios y el cliente quiere saber exactamente qué parte del viaje en barco está contratada.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados y si hay trayectos en barco.
3. Obtiene con `consultar-trayecto-ferri` el detalle de cada trayecto: ida, vuelta, vehículo y acomodación.
4. Responde con un resumen claro de lo que incluye y lo que no.

## Qué no hace

- No da por incluido un trayecto que no figura en la reserva.
- No ofrece añadir servicios por su cuenta.

## Cuándo pasa a una persona

- El cliente cree que contrató un trayecto o un vehículo que no aparece en la reserva.

## Cómo lo puede pedir el cliente

- «¿Mi paquete incluye el barco de vuelta o solo la ida?»
- «el coche va incluido en el paquete o solo nosotros?»
- «Buenas tardes, quisiera saber qué servicios marítimos comprende mi reserva.»
- «no entiendo bien lo q contratamos, hay barco? y el hotel tiene desayuno?»
