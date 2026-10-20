---
name: otra-fuera-alcance-contratar-seguro-viaje
description: El cliente pregunta si puede contratar un seguro de viaje después
  de haber hecho la reserva.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente no contrató seguro al reservar, o no recuerda si lo hizo, y ahora quiere uno.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` si la reserva ya incluye algún seguro.
3. Busca con `buscar-informacion` si se puede añadir un seguro después de reservar.
4. Le informa de lo encontrado sin entrar en coberturas que no figuren.

## Qué no hace

- No contrata el seguro.
- No explica coberturas que no estén en la respuesta aprobada.
- No da precios.

## Cuándo pasa a una persona

- Si se puede añadir y el cliente quiere contratarlo.
- Si quiere dar parte de un siniestro de un seguro que ya tiene.

## Cómo lo puede pedir el cliente

- «¿Puedo añadir un seguro de cancelación a mi reserva ahora?»
- «se me olvido coger seguro, todavia estoy a tiempo?»
- «Quisiera saber si es posible contratar un seguro de viaje con posterioridad a la reserva.»
- «¿Mi reserva tiene seguro? Si no, ¿me lo podéis poner?»
