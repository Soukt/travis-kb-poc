---
name: camb-cancelar-por-fallecimiento-familiar
description: El cliente necesita cancelar o aplazar el viaje por el
  fallecimiento de un familiar.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Es una situación muy delicada. El cliente necesita una respuesta empática y que booking valore el caso con la mayor flexibilidad posible.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios afectados.
3. Consulta con `consultar-politica-cancelacion` las condiciones para informar a booking, sin presionar al cliente con cifras.
4. Responde con empatía y pide solo lo imprescindible: si prefiere cancelar o aplazar.
5. Crea un ticket con `crear-ticket-booking` señalando la situación para que se trate con prioridad y sensibilidad.

## Qué no hace

- No pide certificados en el primer mensaje.
- No promete devolución.
- No usa un tono burocrático.

## Cuándo pasa a una persona

- Siempre: es un caso delicado con posible excepción.

## Cómo lo puede pedir el cliente

- «Ha fallecido mi padre y no vamos a poder viajar. No sé qué hay que hacer.»
- «Siento escribir esto, pero ha muerto mi abuela y tenemos que cancelar.»
- «hola, nos ha pasado una desgracia en la familia, se puede anular el viaje?»
- «Por el fallecimiento de un familiar directo, solicito la cancelación de la reserva.»
