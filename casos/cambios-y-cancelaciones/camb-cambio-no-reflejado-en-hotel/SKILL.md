---
name: camb-cambio-no-reflejado-en-hotel
description: El cliente está en el hotel o a punto de llegar y el alojamiento no
  tiene registrado el cambio que hizo con la agencia.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La agencia confirmó una modificación de fechas, viajeros o habitación, pero el hotel tiene los datos antiguos. Es una incidencia urgente.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Confirma con `consultar-reserva` que el cambio figura en la reserva.
3. Revisa con `consultar-bonos` si el bono actualizado está disponible.
4. Si el cliente no lo tiene a mano, se lo reenvía con `reenviar-bono` para que lo muestre en recepción.
5. Abre un ticket urgente con `crear-ticket-booking` para que booking lo resuelva con el hotel.

## Qué no hace

- No contacta con el hotel por su cuenta.
- No le dice que pague ninguna diferencia en el hotel.

## Cuándo pasa a una persona

- Siempre y con prioridad: hay que resolverlo con el hotel en el momento.

## Cómo lo puede pedir el cliente

- «Estoy en recepción y no les aparece el cambio de fechas que hice con vosotros»
- «en el hotel dicen q la reserva es para dos personas y yo añadí a mi hijo!!»
- «Hola, el hotel tiene la reserva con el nombre antiguo, ¿qué hago?»
- «Les escribo desde el alojamiento: no consta la modificación confirmada. Necesito una solución inmediata.»
