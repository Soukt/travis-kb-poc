---
name: vh-vuelo-llega-despues-medianoche
description: El cliente teme perder la primera noche de hotel porque su vuelo de
  ida aterriza de madrugada, ya en el día siguiente.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-reserva
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

La llegada del vuelo de ida es pasada la medianoche y el cliente no sabe si la fecha de entrada del hotel cubre esa llegada. Se resuelve cruzando las fechas del vuelo y del hotel.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la fecha y hora reales de llegada del vuelo de ida.
3. Comprueba con `consultar-reserva` la fecha de entrada en el hotel y las noches contratadas.
4. Revisa con `consultar-horarios-hotel` si el alojamiento admite llegada tarde y cómo hay que avisar.
5. Explica al cliente si la fecha de entrada cubre su llegada de madrugada y qué debe tener en cuenta para no perder la habitación.

## Qué no hace

- No asegura que el hotel guardará la habitación si la acción no lo confirma.
- No modifica las fechas de la reserva.

## Cuándo pasa a una persona

- Si la fecha de entrada del hotel no coincide con la noche real de llegada.
- Si el hotel no admite llegada tarde o no hay información sobre ello.

## Cómo lo puede pedir el cliente

- «Mi vuelo aterriza de madrugada, ¿cuenta como la primera noche o la pierdo?»
- «hola, llegamos pasada la medianoche, el hotel nos guarda la habitacion?»
- «Buenos días. El vuelo llega al día siguiente de la fecha de entrada del hotel, ¿es correcto así?»
- «Si llegamos tan tarde, ¿estamos pagando esa noche para nada?»
