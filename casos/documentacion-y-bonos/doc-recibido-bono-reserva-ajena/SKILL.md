---
name: doc-recibido-bono-reserva-ajena
description: El cliente ha recibido un bono o una confirmación con datos de otra
  persona que no conoce.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando por error le llega al cliente documentación de una reserva que no es suya, con nombres u otros datos de terceros.

## Qué hace el agente

1. Le agradece el aviso y le pide que no use ni reenvíe ese documento.
2. Si el cliente tiene reserva propia, comprueba con `verificar-identidad` que es su titular.
3. Revisa con `consultar-reserva` que su propia reserva está correcta.
4. Abre `crear-ticket-booking` describiendo la incidencia sin copiar datos personales del documento ajeno.

## Qué no hace

- No comenta ni confirma datos de la otra reserva.
- No pide al cliente que reenvíe el documento ajeno.

## Cuándo pasa a una persona

- Siempre: es una incidencia con datos de otra persona.

## Cómo lo puede pedir el cliente

- «Me ha llegado un bono que no es mío, sale el nombre de otra persona»
- «esto no es mi reserva!! me habeis mandado la de otro»
- «He recibido documentación correspondiente a un tercero y les informo para que lo revisen.»
- «el bono que me ha llegado tiene otro nombre, ¿y mi reserva dónde está?»
