---
name: camb-cuando-entra-reserva-en-gastos
description: El cliente pregunta a partir de qué momento su reserva empieza a
  tener gastos de cancelación.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere conocer la fecha límite para cancelar sin coste y cómo aumentan los gastos después.

## Qué hace el agente

1. Comprueba que quien escribe es el titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados.
3. Obtiene con `consultar-politica-cancelacion` el calendario de gastos de cada servicio.
4. Le explica cuándo empiezan los gastos y los tramos siguientes tal como los devuelve la acción, indicando la zona horaria si la acción la da.
5. Si los servicios tienen calendarios distintos, los separa claramente.

## Qué no hace

- No redondea ni interpreta fechas que la acción no da.
- No cancela nada.

## Cuándo pasa a una persona

- El calendario no aparece o es contradictorio.

## Cómo lo puede pedir el cliente

- «¿Hasta cuándo puedo cancelar gratis?»
- «¿Cuándo empieza mi reserva a tener gastos?»
- «q dia es el ultimo para anular sin pagar nada? y es hora de aqui o de alli?»
- «Solicito el calendario de gastos de cancelación de mi reserva.»
