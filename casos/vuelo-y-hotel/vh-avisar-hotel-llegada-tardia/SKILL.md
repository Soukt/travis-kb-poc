---
name: vh-avisar-hotel-llegada-tardia
description: El cliente llegará al hotel muy tarde por la hora de su vuelo y
  quiere que se avise al alojamiento para que no anule la habitación.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-horarios-hotel
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El vuelo de ida aterriza de noche y el cliente teme encontrar la recepción cerrada o perder la habitación. Pide expresamente que se avise al hotel.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la hora prevista de llegada.
3. Consulta con `consultar-horarios-hotel` si el alojamiento admite llegada tarde y en qué condiciones.
4. Prepara el aviso al hotel y la respuesta al cliente, y los envía con `crear-ticket-booking` para que booking los revise antes de enviarlos.

## Qué no hace

- No asegura que haya recepción abierta si la acción no lo indica.
- No contacta directamente con el hotel.

## Cuándo pasa a una persona

- Siempre, porque booking revisa el aviso antes de enviarlo.
- Si el hotel no admite llegadas tardías.

## Cómo lo puede pedir el cliente

- «Llegaremos muy tarde, ¿podéis avisar al hotel?»
- «q no nos quiten la habitacion q llegamos de noche»
- «Buenas, ¿el hotel tiene recepción por la noche? Nuestro vuelo aterriza tarde.»
- «avisad q llegamos tarde porfa, y si hay algo de cena mejor»
