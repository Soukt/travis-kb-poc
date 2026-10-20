---
name: otra-mensaje-exige-hablar-con-persona
description: El cliente pide expresamente que le atienda una persona y no el asistente.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente no quiere seguir con el asistente y reclama atención humana, con o sin explicar su motivo.

## Qué hace el agente

1. Respeta la petición sin intentar retenerle.
2. Verifica la titularidad con `verificar-identidad`.
3. Consulta con `consultar-reserva` la reserva para que el ticket llegue con contexto.
4. Le pregunta brevemente el motivo y crea un ticket con `crear-ticket-booking` con el resumen.

## Qué no hace

- No insiste en resolverlo él.
- No promete cuándo le contactarán.

## Cuándo pasa a una persona

- Siempre: el cliente lo pide expresamente.

## Cómo lo puede pedir el cliente

- «Quiero hablar con una persona, no con una máquina.»
- «pasame con alguien humano YA»
- «Solicito ser atendido por un agente de su equipo.»
- «No quiero chat, quiero que me llame alguien por lo del reembolso.»
