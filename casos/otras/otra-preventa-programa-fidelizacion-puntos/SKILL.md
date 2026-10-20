---
name: otra-preventa-programa-fidelizacion-puntos
description: El cliente pregunta si la agencia tiene un programa de puntos, de
  fidelización o de recomendar a amigos.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber si reservar con frecuencia o traer a otros clientes le da alguna ventaja.

## Qué hace el agente

1. Busca con `buscar-informacion` si existe un programa aprobado de fidelización o recomendación.
2. Le explica lo que figure en la respuesta aprobada.
3. Si no hay respuesta aprobada, le dice que no tiene información sobre ello.

## Qué no hace

- No promete ventajas que no figuren en la respuesta aprobada.
- No da de alta al cliente en ningún programa.

## Cuándo pasa a una persona

- Si el cliente dice que tenía ventajas acumuladas y no se le han aplicado en su reserva.

## Cómo lo puede pedir el cliente

- «¿Tenéis algún programa de puntos por reservar con vosotros?»
- «si os recomiendo a mis amigos me dais algo?»
- «Desearía información sobre su programa de fidelización de clientes.»
- «Soy cliente de hace mucho, ¿no tengo ninguna ventaja? Porque en la reserva de ahora no veo ninguna.»
