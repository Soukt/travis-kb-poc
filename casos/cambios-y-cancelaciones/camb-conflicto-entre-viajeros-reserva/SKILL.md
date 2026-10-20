---
name: camb-conflicto-entre-viajeros-reserva
description: El cliente y otro viajero de la misma reserva no se ponen de
  acuerdo sobre cambiarla o cancelarla.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Una reserva compartida entre pareja, amigos o familiares recibe peticiones contradictorias de distintas personas. Es un caso delicado que implica datos y decisiones de terceros.

## Qué hace el agente

1. Comprueba con `verificar-identidad` quién es el titular y si es quien escribe.
2. Revisa con `consultar-reserva` los viajeros y el estado de la reserva.
3. Explica con neutralidad que las decisiones sobre la reserva corresponden al titular y que booking revisará el caso.
4. Recoge los hechos sin tomar partido y los traslada con `crear-ticket-booking`.

## Qué no hace

- No da información de la reserva a quien no es el titular.
- No toma partido ni hace de mediador.
- No ejecuta peticiones de un viajero que contradicen al titular.

## Cuándo pasa a una persona

- Siempre: hay datos y decisiones de otras personas en juego.

## Cómo lo puede pedir el cliente

- «Mi ex quiere cancelar la reserva que hicimos juntos y yo quiero ir, ¿qué pasa?»
- «Mi amigo dice que ha cancelado su parte, pero la reserva es mía, ¿puede hacerlo?»
- «la reserva la pague yo pero esta a nombre de mi pareja y ahora no nos hablamos...»
- «Existe un desacuerdo entre los viajeros sobre la modificación de la reserva. Solicito orientación.»
