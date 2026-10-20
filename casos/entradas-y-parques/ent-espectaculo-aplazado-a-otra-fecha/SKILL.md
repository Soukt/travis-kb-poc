---
name: ent-espectaculo-aplazado-a-otra-fecha
description: El cliente pregunta si sus entradas siguen valiendo después de que
  el espectáculo se haya aplazado a otra fecha.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el organizador mueve la función. El cliente no sabe si la entrada vale para la nueva fecha o si puede pedir otra solución.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` la fecha de la función reservada.
3. Revisa con `consultar-condiciones-entrada` qué pasa con las entradas en caso de aplazamiento.
4. Consulta con `consultar-politica-cancelacion` las opciones si el cliente no puede ir en la nueva fecha.
5. Prepara una respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No promete devolución si el cliente no puede asistir en la nueva fecha.
- No reemite entradas.

## Cuándo pasa a una persona

- El cliente no puede asistir en la nueva fecha y pide la devolución.

## Cómo lo puede pedir el cliente

- «El espectáculo se ha aplazado. ¿Mis entradas valen para la nueva fecha?»
- «han cambiado el dia del show y ese dia no puedo»
- «Buenos días, ¿debo hacer algo con mis entradas tras el aplazamiento de la función?»
- «si lo han movido de fecha tengo derecho a que me devolvais el dinero?»
