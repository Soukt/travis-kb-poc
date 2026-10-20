---
name: ent-espectaculo-cancelado-por-organizador
description: El cliente ha sabido que el espectáculo para el que tiene entradas
  se ha cancelado y pregunta por la devolución.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el organizador cancela la función sin nueva fecha. Implica una devolución o una alternativa.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` las entradas y la fecha de la función.
3. Revisa con `consultar-bonos` el estado del bono por si el proveedor lo ha anulado.
4. Abre con `crear-ticket-booking` la solicitud con lo que prefiere el cliente, devolución o alternativa.

## Qué no hace

- No confirma la cancelación solo con lo que dice el cliente.
- No promete plazos ni importes de devolución.

## Cuándo pasa a una persona

- Siempre: hay una devolución de por medio.

## Cómo lo puede pedir el cliente

- «Han cancelado el espectáculo. ¿Cómo me devolvéis el dinero?»
- «me ha llegado un aviso de q el show se suspende, y ahora?»
- «Solicito el reembolso de las entradas de un espectáculo cancelado por la organización.»
- «se cancela la funcion, podemos ir a otra o nos lo devolveis?»
