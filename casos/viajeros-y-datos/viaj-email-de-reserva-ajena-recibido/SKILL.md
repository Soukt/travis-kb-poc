---
name: viaj-email-de-reserva-ajena-recibido
description: El cliente recibe en su email confirmaciones o bonos de una reserva
  de otra persona que no conoce.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando probablemente el titular escribió mal su email al reservar y las comunicaciones llegan a otra persona. Hay datos de un tercero expuestos y el titular puede quedarse sin sus bonos.

## Qué hace el agente

1. Agradece el aviso y pide al cliente que no use ni reenvíe la información recibida.
2. Recoge con `pedir-datos-cliente` el localizador que aparece en el email y cuándo lo recibió.
3. Abre con `crear-ticket-booking` el caso para que booking corrija el contacto y avise al titular.
4. Explica al cliente que booking se encargará de corregir el contacto de esa reserva.

## Qué no hace

- No confirma ni amplía los datos de esa reserva.
- No pide al cliente que reenvíe el email con los datos.

## Cuándo pasa a una persona

- Siempre: hay datos de otra persona en juego.

## Cómo lo puede pedir el cliente

- «Me están llegando emails de una reserva de un señor que no conozco.»
- «me a llegado un bono de hotel q no es mio, a nombre de otra persona»
- «Buenos días, les informo de que recibo en mi correo la documentación de una reserva ajena.»
- «Me llegan los correos de otra persona; ¿cómo hago para que paren? ¿Me puede pasar algo?»
