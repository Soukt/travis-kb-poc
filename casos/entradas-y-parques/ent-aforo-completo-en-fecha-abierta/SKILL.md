---
name: ent-aforo-completo-en-fecha-abierta
description: El cliente tiene entrada de fecha abierta pero el parque indica
  aforo completo para el día que quiere ir.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando la entrada obliga a reservar el día con el parque y no hay disponibilidad en la fecha elegida.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-bonos` la validez de la entrada.
3. Revisa con `consultar-condiciones-entrada` qué ocurre si no hay aforo y si las entradas de fecha abierta tienen alguna prioridad.
4. Prepara una respuesta con alternativas dentro del periodo de validez para que booking la revise antes de enviarla.

## Qué no hace

- No garantiza plaza en el parque.
- No amplía la validez de la entrada.

## Cuándo pasa a una persona

- No queda ningún día disponible dentro de la validez de la entrada.

## Cómo lo puede pedir el cliente

- «Intento reservar el día en el parque y pone que está completo. Tengo entrada abierta.»
- «no hay sitio el dia q queremos ir, que hago con la entrada?»
- «Buenas tardes, el parque no tiene disponibilidad para la fecha que necesito con mi entrada de fecha abierta.»
- «esta todo lleno en el puente, me vais a cambiar la entrada o la pierdo?»
