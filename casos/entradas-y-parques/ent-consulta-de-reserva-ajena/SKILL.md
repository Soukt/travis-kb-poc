---
name: ent-consulta-de-reserva-ajena
description: El cliente pregunta por las entradas de una reserva que no está a
  su nombre, por ejemplo la de un familiar.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando quien escribe no supera la verificación como titular o reconoce que la reserva es de otra persona. Hay datos de terceros de por medio.

## Qué hace el agente

1. Intenta comprobar con `verificar-identidad` si quien escribe es el titular de la reserva.
2. Si no lo es, le explica con amabilidad que no puede darle datos de una reserva ajena.
3. Le sugiere que el titular escriba desde su zona de cliente o le autorice formalmente.
4. Abre con `crear-ticket-booking` un aviso con la consulta para que booking valore cómo contactar con el titular.

## Qué no hace

- No facilita datos, bonos ni el estado de la reserva a quien no es el titular.
- No reenvía bonos a petición de un tercero.

## Cuándo pasa a una persona

- Siempre: hay datos de otra persona de por medio.

## Cómo lo puede pedir el cliente

- «La reserva la hizo mi madre. ¿Me podéis decir a qué hora entramos al parque?»
- «soy el hermano del titular, mandadme las entradas a mi»
- «Buenas tardes, escribo en nombre de mi pareja, que es la titular de la reserva.»
- «mi amigo me ha pasado su localizador, me decis si estan las entradas?»
