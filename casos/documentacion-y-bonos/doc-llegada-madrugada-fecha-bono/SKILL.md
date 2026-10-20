---
name: doc-llegada-madrugada-fecha-bono
description: El cliente llega al alojamiento de madrugada y duda si la fecha de
  entrada del bono es la correcta.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente llega pasada la medianoche y no sabe si tendría que haber reservado desde la noche anterior o si el alojamiento le esperará.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` la fecha de entrada que figura en la reserva.
3. Consulta con `consultar-horarios-hotel` el horario de entrada y si admite llegada tarde.
4. Le explica cómo encaja su hora de llegada con la fecha reservada y, si hay riesgo de que no cuadre, se lo dice con claridad.

## Qué no hace

- No cambia las fechas de la reserva.
- No asegura que la habitación esté disponible antes de la fecha reservada.

## Cuándo pasa a una persona

- El cliente quiere añadir la noche anterior o cambiar la fecha de entrada.
- El alojamiento no admite llegadas tardías y el cliente llega fuera de horario.

## Cómo lo puede pedir el cliente

- «Llego de madrugada, ¿la fecha del bono está bien o tenía que haber cogido la noche de antes?»
- «mi vuelo aterriza pasada la medianoche, me guardan la habitacion?»
- «Mi llegada está prevista de madrugada y quisiera confirmar que la reserva cubre esa noche.»
- «el bono pone entrada el sábado pero yo llego el sábado de madrugada, ¿me lío o está bien?»
