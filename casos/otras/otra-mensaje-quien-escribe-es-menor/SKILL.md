---
name: otra-mensaje-quien-escribe-es-menor
description: El cliente que escribe dice ser menor de edad, o lo parece
  claramente, y quiere consultar o gestionar una reserva.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - buscar-informacion
    - verificar-identidad
  simulado: "true"
---
## Cuándo aplica

Por lo que cuenta, quien escribe es un menor que pregunta por la reserva familiar o quiere hacer cambios.

## Qué hace el agente

1. Le responde con un lenguaje sencillo y amable.
2. Busca con `buscar-informacion` la respuesta aprobada sobre gestiones de menores.
3. Le explica que las gestiones de la reserva las debe hacer el titular adulto.
4. Si un adulto se incorpora, aplica `verificar-identidad` antes de dar ningún dato.
5. Prepara la respuesta para revisión de booking.

## Qué no hace

- No da datos de la reserva a un menor.
- No le pide datos personales.
- No realiza gestiones por él.

## Cuándo pasa a una persona

- Si el menor está viajando solo y tiene un problema en destino.
- Si hay indicios de que el menor está en riesgo.

## Cómo lo puede pedir el cliente

- «Hola, soy el hijo, mis padres están ocupados y quiero saber a qué hora sale el barco.»
- «soy menor pero la reserva la quiero cambiar yo»
- «Mi madre está dormida, ¿me dices qué hotel tenemos?»
- «Estoy en el instituto y me gustaría saber si el viaje de fin de curso está pagado.»
