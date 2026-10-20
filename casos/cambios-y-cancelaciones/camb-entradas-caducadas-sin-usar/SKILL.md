---
name: camb-entradas-caducadas-sin-usar
description: El cliente no usó sus entradas en la fecha o el periodo previsto y
  pide usarlas más tarde o recuperar el dinero.
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

La fecha o el periodo de validez de las entradas ya ha pasado y el cliente no fue al parque. Cualquier solución sería una excepción a las condiciones.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` las entradas y su estado.
3. Revisa con `consultar-condiciones-entrada` la validez y si contemplan algún cambio posterior.
4. Consulta con `consultar-politica-cancelacion` lo que aplica a las entradas no usadas.
5. Recoge el motivo por el que no las usó y pasa el caso a booking con `crear-ticket-booking`.

## Qué no hace

- No promete reembolso ni nueva fecha.
- No afirma que el parque vaya a aceptar las entradas caducadas.

## Cuándo pasa a una persona

- Siempre: es una excepción con posible impacto económico.

## Cómo lo puede pedir el cliente

- «No pudimos ir al parque el día de las entradas, ¿se pueden usar otro día?»
- «Se me pasó la fecha de las entradas, ¿hay alguna forma de no perderlas?»
- «las entradas ya caducaron xq mi hijo se puso malo, me devolveis algo???»
- «Solicito información sobre las entradas no utilizadas de mi reserva y si existe posibilidad de reembolso.»
