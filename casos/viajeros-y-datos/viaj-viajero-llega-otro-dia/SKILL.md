---
name: viaj-viajero-llega-otro-dia
description: El cliente avisa de que uno de los viajeros llegará al alojamiento
  más tarde que el resto, en otra fecha.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva es para todos desde el mismo día, pero un viajero se incorpora después. Conviene avisar al alojamiento para evitar malentendidos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` las fechas y los viajeros.
3. Revisa con `consultar-horarios-hotel` los horarios de entrada y si admite llegada tarde.
4. Prepara el aviso al alojamiento y la respuesta al cliente, para que booking los revise antes de enviarlos.

## Qué no hace

- No cambia las fechas de la reserva.
- No promete una reducción de precio por las noches no usadas.

## Cuándo pasa a una persona

- El titular es quien llega después y no habrá nadie de la reserva el primer día.
- El cliente pide que se le descuente la parte no disfrutada.

## Cómo lo puede pedir el cliente

- «Mi hijo se une al viaje al día siguiente, ¿hay que avisar al hotel?»
- «una de las q venimos llega despues, le guardaran la cama?»
- «Buenos días, uno de los huéspedes se incorporará con posterioridad a la fecha de entrada.»
- «Mi pareja llega más tarde; ¿podrá entrar sola de noche y nos descontáis algo?»
