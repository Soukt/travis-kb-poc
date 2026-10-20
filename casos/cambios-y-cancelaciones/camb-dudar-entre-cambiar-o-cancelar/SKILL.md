---
name: camb-dudar-entre-cambiar-o-cancelar
description: El cliente duda entre cambiar la reserva o cancelarla y pregunta
  qué opción le conviene más.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

El cliente no tiene claro si le conviene modificar la reserva o cancelarla y hacer otra. Hay que comparar las condiciones sin decidir por él.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios y las fechas.
3. Consulta con `consultar-politica-cancelacion` los gastos de cambio y de cancelación vigentes.
4. Prepara una comparación clara de ambas opciones con lo que se sabe, indicando que la diferencia de tarifa de un cambio la cotiza booking.
5. Deja la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No recomienda una opción como la mejor.
- No inicia el cambio ni la cancelación.

## Cuándo pasa a una persona

- El cliente elige una de las opciones.
- El cliente pide una cotización de nuevas fechas.

## Cómo lo puede pedir el cliente

- «¿Qué me sale más a cuenta, cambiar las fechas o cancelar y reservar otra vez?»
- «no se si cambiar o cancelar, q me recomendais?»
- «Si cambio pago gastos y si cancelo también, ¿cuál es menos?»
- «Solicito que me indiquen las condiciones de ambas alternativas, modificación y cancelación.»
