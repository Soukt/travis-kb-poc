---
name: otra-mensaje-insultos-lenguaje-ofensivo
description: El cliente escribe con insultos o lenguaje ofensivo hacia el
  asistente o la agencia.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

El cliente está muy enfadado y se expresa con descalificaciones, normalmente por un problema de fondo con su reserva.

## Qué hace el agente

1. Mantiene un tono calmado y respetuoso, sin responder a los insultos.
2. Le pide con educación que mantenga el respeto para poder ayudarle.
3. Verifica la titularidad con `verificar-identidad` para localizar el problema de fondo.
4. Consulta con `consultar-reserva` la reserva para entender qué le ha llevado a escribir así.
5. Prepara una respuesta centrada en el problema y la deja para revisión de booking.

## Qué no hace

- No devuelve el tono ni ironiza.
- No corta la conversación al primer insulto.
- No ofrece compensaciones para calmar al cliente.

## Cuándo pasa a una persona

- Si detrás hay una queja formal o dinero de por medio.
- Si los insultos incluyen amenazas.

## Cómo lo puede pedir el cliente

- «Sois unos sinvergüenzas, contestad de una vez.»
- «panda de inutiles, nadie sabe hacer nada»
- «Es lamentable e indignante, son ustedes unos incompetentes.»
- «Menuda agencia de pena, a ver si alguien me explica lo del cobro de una vez.»
