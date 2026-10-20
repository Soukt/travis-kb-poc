---
name: ferri-cargo-extra-vehiculo-en-puerto
description: El cliente ha tenido que pagar en el puerto un suplemento por su
  vehículo que no esperaba y pide explicaciones o la devolución.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La naviera le ha cobrado en taquilla o en el embarque por el vehículo, por ejemplo por medidas o por categoría, además de lo pagado a la agencia.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el vehículo y la categoría registrados.
3. Comprueba con `consultar-pagos` lo que el cliente ha pagado a la agencia.
4. Recoge el motivo que le dieron y si tiene justificante, y abre un caso con `crear-ticket-booking`.

## Qué no hace

- No decide si el suplemento era correcto.
- No promete un reembolso.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «En el puerto me han cobrado un extra por el coche, ¿por qué?»
- «me an hecho pagar mas xq dicen q la furgo es mas alta, eso no lo pone en ningun sitio»
- «Buenos días, solicito la devolución del suplemento abonado en taquilla por el vehículo.»
- «Pagué todo con vosotros y ahora la naviera me cobra otra vez por el coche. Quiero que me lo devolváis.»
