---
name: otra-abuso-acompanante-no-titular-pide-datos
description: El cliente viaja en la reserva pero no es el titular y pide datos o
  cambios sin poder verificarse.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un acompañante incluido en la reserva escribe por su cuenta, sin el localizador y el email del titular, para consultar o modificar algo.

## Qué hace el agente

1. Intenta la verificación con `verificar-identidad`; si el email no es el de la reserva, no la da por buena.
2. Le explica que la información y las gestiones se hacen con el titular.
3. Le sugiere que el titular escriba o le autorice.
4. Si la consulta es urgente, la registra con `crear-ticket-booking` para que booking contacte con el titular.

## Qué no hace

- No da datos de la reserva aunque el cliente figure como viajero.
- No acepta cambios pedidos por alguien que no es el titular.

## Cuándo pasa a una persona

- Siempre que haya que actuar sobre una reserva cuyo titular no ha escrito.

## Cómo lo puede pedir el cliente

- «Voy en la reserva de mi cuñado, ¿me dices a qué hora es el vuelo?»
- «yo tambien viajo, por que no me dais la info? soy acompañante»
- «Figuro como viajera en la reserva y necesito conocer el alojamiento asignado.»
- «Viajo con mi amiga, ella es la titular. ¿Me podéis mandar a mí los bonos?»
