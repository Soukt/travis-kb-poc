---
name: camb-aerolinea-cambia-o-cancela-vuelo
description: El cliente tiene un vuelo que la aerolínea ha cancelado o cambiado
  mucho de horario y quiere saber sus opciones.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-traslados
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cambio lo ha provocado la aerolínea, no el cliente. Puede afectar al resto de servicios, como el traslado o las noches de hotel, y el cliente puede querer aceptar, cambiar o cancelar.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-vuelo` el estado y los horarios actuales del vuelo.
3. Comprueba con `consultar-traslados` si el traslado queda afectado por el cambio.
4. Pregunta al cliente si prefiere aceptar el nuevo horario, buscar alternativa o cancelar.
5. Pasa el caso a booking con `crear-ticket-booking`.

## Qué no hace

- No promete compensaciones.
- No confirma vuelos alternativos.

## Cuándo pasa a una persona

- Siempre: puede haber reubicación, devolución o compensación.

## Cómo lo puede pedir el cliente

- «Me ha llegado que han cancelado el vuelo, ¿qué hago ahora?»
- «Han adelantado muchísimo el vuelo de vuelta y no nos viene bien, ¿podemos cambiarlo?»
- «la aerolinea me ha cambiado la hora y ahora pierdo el traslado, q pasa?»
- «La compañía aérea ha modificado el horario de mi vuelo. Deseo conocer mis opciones.»
