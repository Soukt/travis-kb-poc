---
name: otra-incidente-huelga-o-cierre-en-destino
description: El cliente pregunta qué pasa con su viaje por una huelga, un cierre
  o un fenómeno meteorológico en destino.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente ha oído o leído sobre un acontecimiento externo que podría afectar a su viaje, antes o durante el mismo.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` los servicios y fechas que podrían verse afectados.
3. Busca con `buscar-informacion` si hay una respuesta aprobada sobre esa situación.
4. Prepara una respuesta con lo que se sabe, sin especular, para revisión de booking.

## Qué no hace

- No inventa información sobre la huelga o el cierre.
- No cancela ni modifica servicios.
- No promete reembolsos.

## Cuándo pasa a una persona

- Si un servicio contratado queda afectado y el cliente pide cambio o cancelación.
- Si el cliente está en destino y no puede volver.

## Cómo lo puede pedir el cliente

- «He visto que hay huelga de transporte en destino esos días, ¿afecta a mi viaje?»
- «dicen q viene un temporal, q pasa con mi reserva?»
- «Ante el anuncio de cierre de la zona por las autoridades, solicito información sobre mi reserva.»
- «Hay huelga en el puerto. ¿Sale el ferri o no? ¿Y si no sale, qué hago con el hotel?»
