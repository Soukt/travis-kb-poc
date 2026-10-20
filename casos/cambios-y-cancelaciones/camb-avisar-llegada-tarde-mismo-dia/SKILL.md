---
name: camb-avisar-llegada-tarde-mismo-dia
description: El cliente llegará al hotel el día previsto pero muy tarde y teme
  que le anulen la reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

El cliente mantiene sus fechas, pero llegará mucho más tarde de lo habitual. Quiere saber si pierde la habitación.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Confirma con `consultar-reserva` el alojamiento y la fecha de entrada.
3. Consulta con `consultar-horarios-hotel` el horario de recepción y si el hotel admite llegada tarde.
4. Le explica qué hacer según lo que devuelve la acción y le confirma que la reserva sigue activa.

## Qué no hace

- No promete que el hotel mantenga la habitación si la acción no lo indica.
- No inventa horarios de recepción.

## Cuándo pasa a una persona

- El hotel no admite llegada tarde o la acción no lo aclara y hay que avisarle.
- El cliente prevé llegar ya al día siguiente.

## Cómo lo puede pedir el cliente

- «Llegaremos al hotel de madrugada, ¿nos anulan la reserva?»
- «hola, el vuelo llega muy tarde, ¿habrá alguien en recepción?»
- «aviso q llegamos tardisimo, no nos quiten la habitacion porfa»
- «¿El alojamiento admite entradas a última hora? Y otra cosa: ¿tiene aparcamiento?»
