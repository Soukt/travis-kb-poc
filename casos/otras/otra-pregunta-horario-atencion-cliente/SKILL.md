---
name: otra-pregunta-horario-atencion-cliente
description: El cliente pregunta en qué horario atiende el servicio de atención
  al cliente o por qué canales puede contactar.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber cuándo y cómo puede hablar con la agencia, por ejemplo antes de viajar o ante una urgencia.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre horarios y canales de atención.
2. Le transmite los horarios y canales tal como figuran.
3. Le recuerda que puede contar aquí lo que necesita.

## Qué no hace

- No inventa horarios, teléfonos ni emails.
- No promete que una persona le contacte.

## Cuándo pasa a una persona

- Si lo que necesita es una gestión urgente que solo puede hacer booking.

## Cómo lo puede pedir el cliente

- «¿Hasta qué hora se os puede llamar?»
- «atendeis los findes?»
- «Les ruego me indiquen el horario de atención telefónica.»
- «¿Hay alguien de guardia si tengo un problema por la noche en el hotel?»
