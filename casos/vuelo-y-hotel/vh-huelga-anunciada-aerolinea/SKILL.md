---
name: vh-huelga-anunciada-aerolinea
description: El cliente ha oído que hay una huelga anunciada que puede afectar a
  su vuelo y pregunta qué va a pasar con su viaje.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Hay una huelga anunciada de la aerolínea, del aeropuerto o del control aéreo en las fechas del viaje. El vuelo todavía no tiene cambios confirmados.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el estado actual del vuelo.
3. Busca con `buscar-informacion` la respuesta aprobada sobre huelgas y servicios mínimos.
4. Revisa con `consultar-politica-cancelacion` las condiciones vigentes por si el cliente pregunta por cancelar.
5. Prepara una respuesta prudente y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No predice si el vuelo se cancelará.
- No ofrece por adelantado cancelaciones ni cambios sin gastos.
- No difunde información que no sea oficial.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si el cliente quiere cancelar o cambiar el viaje por la huelga.

## Cómo lo puede pedir el cliente

- «He visto en las noticias que hay huelga, ¿afecta a mi vuelo?»
- «si hay huelga q hacemos? nos devolveis el dinero?»
- «Buenas, ¿la aerolínea ha avisado de algo por la huelga de esos días?»
- «Hay huelga justo cuando nos vamos, ¿qué me recomendáis?»
