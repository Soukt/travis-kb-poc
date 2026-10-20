---
name: viaj-ex-pareja-en-la-reserva
description: El cliente ha roto con otro viajero de la reserva y quiere sacarlo
  del viaje o saber qué pasa con su propia plaza.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando una ruptura de pareja o de amistad afecta a una reserva compartida. Quien escribe puede ser el titular o el otro viajero, y hay dinero y datos de otra persona de por medio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` si quien escribe es el titular.
2. Si es el titular, revisa con `consultar-reserva` los viajeros y con `consultar-politica-cancelacion` las condiciones de cambio, sin comprometer importes.
3. Si no es el titular, no da datos de la reserva y le explica que las gestiones corresponden al titular.
4. Abre con `crear-ticket-booking` el caso con lo que pide cada parte, sin juicios.

## Qué no hace

- No informa a una persona de lo que ha pedido la otra.
- No promete devoluciones ni repartos del dinero.
- No toma partido.

## Cuándo pasa a una persona

- Siempre: hay dinero y datos de otra persona.

## Cómo lo puede pedir el cliente

- «Lo he dejado con mi pareja y no quiero que venga al viaje; la reserva está a mi nombre.»
- «mi ex hizo la reserva y yo pague la mitad, me devolveis lo mio?»
- «Buenas tardes, debido a un cambio en mi situación personal, solicito retirar a un acompañante de la reserva.»
- «Ya no vamos juntos; ¿sigo yo en la reserva? ¿Puede mi ex quitarme sin avisarme?»
