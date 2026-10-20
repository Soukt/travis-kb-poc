---
name: vh-cancelar-solo-vuelo-mantener-hotel
description: El cliente quiere cancelar solo los vuelos del paquete y quedarse
  con el hotel, o al revés.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente va a llegar por otros medios o ya no necesita alguno de los servicios. Pide separar el paquete antes de viajar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` los servicios que forman el paquete.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cada servicio.
4. Le explica que la cancelación parcial la valora booking y crea con `crear-ticket-booking` un ticket con la petición.

## Qué no hace

- No asegura que el paquete se pueda separar.
- No da el precio del servicio que se mantiene.

## Cuándo pasa a una persona

- Siempre, porque es una modificación con posible cargo o excepción.

## Cómo lo puede pedir el cliente

- «Iremos en coche, ¿podemos quitar los vuelos y dejar solo el hotel?»
- «solo queremos el vuelo, el hotel lo anulamos»
- «Buenas, ¿se puede cancelar únicamente el vuelo de vuelta?»
- «si quito el vuelo me sale mas barato el hotel o lo pierdo?»
