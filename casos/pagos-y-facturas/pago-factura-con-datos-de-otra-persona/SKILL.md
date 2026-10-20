---
name: pago-factura-con-datos-de-otra-persona
description: El cliente ha recibido una factura con datos de otra persona que no
  tiene nada que ver con su reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-factura
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La factura descargada o recibida contiene el nombre, la dirección u otros datos de un tercero. Es un caso delicado de privacidad.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-factura` qué factura tiene asociada su reserva.
3. Pide al cliente que no reenvíe ni comparta el documento recibido.
4. Pasa el caso como prioritario con `crear-ticket-booking`.

## Qué no hace

- No comenta ni repite los datos de la otra persona.
- No pide al cliente que envíe la factura errónea por el chat.

## Cuándo pasa a una persona

- Siempre: implica datos de otra persona.

## Cómo lo puede pedir el cliente

- «La factura que me han enviado figura a nombre de otra persona que no conozco.»
- «me ha llegado una factura con el nombre y la direccion de otro»
- «Hola, al descargar la factura salen datos de alguien que no soy yo, ¿esto qué es?»
- «ojo q en mi factura sale otra persona, y mi factura donde esta?»
