---
name: vh-solicitar-entrada-anticipada-salida-tardia
description: El cliente quiere asegurar la entrada anticipada o la salida tardía
  de la habitación para ajustarla a sus vuelos, aunque tenga coste.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-horarios-hotel
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El horario de los vuelos no encaja con el del hotel y el cliente pide expresamente disponer de la habitación antes o después de lo habitual.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` las horas de llegada y de salida.
3. Consulta con `consultar-horarios-hotel` los horarios habituales del alojamiento.
4. Crea con `crear-ticket-booking` un ticket con la petición y las horas que necesita.
5. Le informa de que booking le confirmará si es posible y su coste.

## Qué no hace

- No confirma la petición.
- No da precios.

## Cuándo pasa a una persona

- Siempre, porque es una excepción al horario del hotel y puede tener cargo.

## Cómo lo puede pedir el cliente

- «Quiero contratar la salida tardía el último día»
- «se puede pagar para tener la habitacion hasta irnos al aeropuerto?»
- «Buenas, ¿podéis pedir al hotel la entrada anticipada? Llegamos de madrugada.»
- «nos guardais la habitacion hasta la tarde? pagamos lo que haga falta»
