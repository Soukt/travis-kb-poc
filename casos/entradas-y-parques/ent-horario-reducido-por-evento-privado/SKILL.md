---
name: ent-horario-reducido-por-evento-privado
description: El cliente ha visto que el parque cierra antes o abre solo en parte
  el día de su visita por un evento y pregunta cómo le afecta.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el parque anuncia un horario reducido, un cierre parcial o un evento privado en la fecha de las entradas. El cliente no quiere perder parte de la visita.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la fecha de la visita.
3. Revisa con `consultar-condiciones-entrada` el horario que consta para esa fecha.
4. Busca con `buscar-informacion` si hay una respuesta aprobada sobre cambios de horario por eventos.
5. Prepara una respuesta con el impacto real en la visita para que booking la revise antes de enviarla.

## Qué no hace

- No ofrece compensaciones por la reducción de horario.
- No confirma el cambio de horario solo con lo que cuenta el cliente.

## Cuándo pasa a una persona

- El cliente pide cambiar la fecha o una devolución por el horario reducido.

## Cómo lo puede pedir el cliente

- «He visto que ese día el parque cierra antes por un evento. ¿Nos afecta?»
- «ese dia cierran pronto x un evento privado, nos lo podiais haber dicho»
- «Buenas tardes, ¿el cierre parcial anunciado por el parque afecta a nuestras entradas?»
- «si cierran antes nos da tiempo a ver todo? y el traslado de vuelta al hotel cambia de hora?»
