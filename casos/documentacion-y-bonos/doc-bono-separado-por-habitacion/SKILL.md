---
name: doc-bono-separado-por-habitacion
description: El cliente tiene una reserva con varias habitaciones y pide un bono
  separado para cada una.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Reservas de varias habitaciones para distintas familias o grupos que llegan por separado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` cuántas habitaciones incluye y quién ocupa cada una.
3. Consulta con `consultar-bonos` si los bonos ya vienen separados por habitación.
4. Busca con `buscar-informacion` si es posible separar bonos y prepara la respuesta para revisión de booking.

## Qué no hace

- No divide la reserva.
- No envía bonos a los emails de otros ocupantes.

## Cuándo pasa a una persona

- Separar los bonos requiere dividir la reserva o incluir datos de otras personas.

## Cómo lo puede pedir el cliente

- «Tenemos dos habitaciones, ¿podéis hacer un bono para cada una?»
- «vamos dos familias y cada una llega a una hora, hay bono por separado?»
- «Solicito la emisión de documentación independiente para cada habitación.»
- «mi hermano llega un día antes, ¿puede entrar con su propio bono?»
