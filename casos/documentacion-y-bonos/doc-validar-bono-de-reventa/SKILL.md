---
name: doc-validar-bono-de-reventa
description: El cliente ha recibido un bono de otra persona, comprado o
  regalado, y quiere comprobar si es auténtico y válido.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando quien escribe no es el titular de la reserva y pregunta por la validez de un bono que le ha pasado un tercero.

## Qué hace el agente

1. Intenta `verificar-identidad`; si quien escribe no es el titular, no confirma ni niega datos de la reserva.
2. Busca con `buscar-informacion` qué tiene aprobado la agencia sobre cesión o reventa de reservas.
3. Le explica lo que dice esa información y que la validación solo puede hacerse con el titular.
4. Abre `crear-ticket-booking` con el localizador que menciona y cómo obtuvo el bono.

## Qué no hace

- No confirma la existencia de la reserva a un tercero.
- No autoriza cambios de titular.

## Cuándo pasa a una persona

- Siempre: son datos de otra persona y puede haber riesgo de fraude.

## Cómo lo puede pedir el cliente

- «He comprado un bono de hotel a una persona por internet, ¿es válido?»
- «me han regalado unas entradas con el nombre de otro, sirven?»
- «Quisiera verificar la autenticidad de un bono que me ha cedido un particular.»
- «un conocido no puede ir y me pasa su reserva, ¿me dejarán entrar con su bono?»
