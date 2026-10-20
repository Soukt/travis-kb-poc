---
name: ent-horario-del-espectaculo-nocturno
description: El cliente pregunta a qué hora es el espectáculo nocturno o de
  cierre del parque y si está incluido en su entrada.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente quiere quedarse al espectáculo final del día y necesita saber la hora y si su entrada da acceso a él.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la fecha y el tipo de entrada.
3. Revisa con `consultar-condiciones-entrada` si el espectáculo nocturno está incluido y en qué horario.
4. Si las condiciones no lo recogen, busca con `buscar-informacion` una respuesta aprobada.
5. Responde con lo encontrado y, si no hay dato, se lo dice al cliente sin suponer.

## Qué no hace

- No inventa la hora del espectáculo.
- No asegura que se celebre ese día si no consta.

## Cuándo pasa a una persona

- El cliente reservó la entrada contando con el espectáculo y este no se celebra en su fecha.

## Cómo lo puede pedir el cliente

- «¿A qué hora son los fuegos o el espectáculo de cierre?»
- «el show de la noche entra con la entrada normal?»
- «Buenas, querría saber si el espectáculo nocturno se celebra el día de nuestra visita y a qué hora empieza.»
- «nos quedamos al espectaculo del final? es que luego el hotel esta lejos y no se si hay bus»
