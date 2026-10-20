---
name: camb-cambiar-fecha-entradas-parque
description: El cliente tiene entradas para un día concreto en el parque y
  quiere usarlas otro día.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Las entradas están asociadas a una fecha y el cliente no podrá ir ese día. El cambio depende de las condiciones de las entradas y del parque.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la fecha y el tipo de entradas.
3. Consulta con `consultar-condiciones-entrada` si las entradas admiten cambio de fecha y en qué condiciones.
4. Revisa con `consultar-politica-cancelacion` los posibles gastos del cambio.
5. Pregunta la nueva fecha y lo traslada a booking con `crear-ticket-booking`.

## Qué no hace

- No asegura que haya disponibilidad para el nuevo día.
- No le dice que vaya otro día con las mismas entradas sin confirmación.

## Cuándo pasa a una persona

- Siempre: el cambio de fecha de las entradas lo gestiona booking con el parque.

## Cómo lo puede pedir el cliente

- «Hola, tenemos entradas para el parque el sábado pero va a llover, ¿podemos cambiarlas al domingo?»
- «Necesito cambiar el día de las entradas, ¿es posible?»
- «las entradas son para el dia q no podemos, se pueden pasar a otro dia o las perdemos?»
- «Buenas, ¿podría modificar la fecha de las entradas y, ya que estamos, añadir el aparcamiento?»
