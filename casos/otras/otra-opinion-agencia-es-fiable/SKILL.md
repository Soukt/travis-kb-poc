---
name: otra-opinion-agencia-es-fiable
description: El cliente, ya con reserva, duda de si la agencia es fiable tras
  leer opiniones o no haber recibido algún documento.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente está inquieto y necesita confirmar que su reserva es real y que la agencia es de confianza.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` el estado de la reserva.
3. Revisa con `consultar-bonos` si los bonos están emitidos o cuándo lo estarán.
4. Busca con `buscar-informacion` la información aprobada sobre la agencia y sus garantías.
5. Prepara una respuesta basada en los hechos de su reserva, que booking revisa antes de enviar.

## Qué no hace

- No descalifica las opiniones de terceros.
- No hace promesas de garantía que no estén aprobadas.

## Cuándo pasa a una persona

- Si el cliente quiere cancelar por desconfianza.
- Si su reserva tiene alguna incidencia real, como no estar confirmada.

## Cómo lo puede pedir el cliente

- «He leído malas opiniones de vosotros y me estoy poniendo nerviosa, ¿mi reserva es real?»
- «sois de fiar? no me ha llegado nada todavia»
- «Quisiera confirmar la fiabilidad de la agencia antes de efectuar el pago pendiente.»
- «Me da miedo que sea una estafa. ¿Está el hotel confirmado? ¿Tenéis licencia de agencia?»
