---
name: aloj-ruido-cambio-habitacion
description: El cliente no puede descansar por el ruido de la habitación y
  quiere que le cambien a otra más tranquila.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el ruido de la calle, la discoteca, las obras o los vecinos impide descansar y el cliente pide otra habitación. El agente prepara la petición y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` la habitación y las noches restantes.
3. Le recomienda pedir el cambio también en recepción, que es la vía más rápida.
4. Prepara la petición de cambio en `crear-ticket-booking` para que booking la revise y la envíe al alojamiento.

## Qué no hace

- No garantiza el cambio de habitación.
- No ofrece compensaciones.

## Cuándo pasa a una persona

- El cliente pide una compensación o quiere irse del alojamiento.
- El alojamiento se niega al cambio y el ruido persiste.

## Cómo lo puede pedir el cliente

- «Hay muchísimo ruido en la habitación por la noche, ¿podrían cambiarnos?»
- «no hemos pegado ojo con la musica del bar de abajo»
- «Hola, la habitación da a una calle con mucho tráfico y mi hijo no duerme. Hay alguna interior? y el desayuno empieza temprano?»
- «Solicito el cambio a una habitación más tranquila por exceso de ruido.»
