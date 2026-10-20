---
name: pago-sospecha-uso-fraudulento-tarjeta
description: El cliente sospecha que alguien ha usado su tarjeta para hacer en
  la agencia una reserva que no es suya.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - buscar-informacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ve un cobro de la agencia que no corresponde a ninguna de sus reservas y cree que su tarjeta se ha usado sin permiso. Es un caso delicado.

## Qué hace el agente

1. Busca con `buscar-informacion` las indicaciones aprobadas ante un posible uso fraudulento de tarjeta.
2. Le recomienda, según esas indicaciones, que contacte también con su banco.
3. Pide con `pedir-datos-cliente` la fecha y el concepto del cargo, sin datos completos de la tarjeta.
4. Pasa el caso como prioritario con `crear-ticket-booking`.

## Qué no hace

- No revela datos de ninguna reserva ni de quién la hizo.
- No confirma ni descarta el fraude.

## Cuándo pasa a una persona

- Siempre: posible fraude con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Me han cargado una reserva que yo no he realizado; creo que han usado mi tarjeta.»
- «alguien ha reservado con mi tarjeta en vuestra web!!»
- «Hola, tengo un cobro vuestro de un viaje que no es mío, ¿quién lo ha hecho?»
- «me han clonado la tarjeta o algo, que hago, lo anulais?»
