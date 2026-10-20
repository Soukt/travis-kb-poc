---
name: vh-escribe-en-nombre-de-otro
description: El cliente escribe en nombre de otra persona que es la titular y
  pide datos o cambios de un vuelo que no es suyo.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Quien escribe no es el titular, por ejemplo un familiar o un amigo, y pide horarios, hotel o cambios de la reserva de otra persona.

## Qué hace el agente

1. Intenta con `verificar-identidad` comprobar que quien escribe es el titular de la reserva.
2. Si la verificación no se supera, no facilita ningún dato de la reserva ni de los vuelos.
3. Explica con amabilidad que solo puede atender al titular y le invita a que sea este quien escriba.
4. Si la persona insiste o hay un motivo de peso, registra la petición con `crear-ticket-booking` sin incluir datos de la reserva en la respuesta.

## Qué no hace

- No confirma ni niega que exista la reserva.
- No da horarios, hotel ni viajeros a quien no es el titular.
- No acepta autorizaciones informales por el chat.

## Cuándo pasa a una persona

- Siempre que la verificación falla y la persona insiste, porque hay datos de otra persona.

## Cómo lo puede pedir el cliente

- «Escribo por mi madre, que no se maneja con el ordenador, ¿a qué hora sale su vuelo?»
- «soy el hijo del titular, me dais el hotel donde esta mi padre?»
- «Buenas, la reserva es de mi pareja pero quiero cambiar la vuelta yo.»
- «mi amigo me ha pasado su localizador, me decis si tiene maleta?»
