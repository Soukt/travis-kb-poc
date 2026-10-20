---
name: pago-cobro-equipaje-en-aeropuerto
description: El cliente tuvo que pagar en el aeropuerto por un equipaje que
  creía incluido en su vuelo.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La aerolínea le hizo pagar una maleta o equipaje en el aeropuerto y el cliente entiende que su reserva lo incluía.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-vuelo` el equipaje incluido en los vuelos de la reserva.
3. Pide con `pedir-datos-cliente` el justificante del pago y qué equipaje llevó.
4. Pasa el caso con `crear-ticket-booking`, indicando lo que constaba como incluido.

## Qué no hace

- No promete el reembolso.
- No interpreta las normas de equipaje de la aerolínea más allá de lo que devuelve la acción.

## Cuándo pasa a una persona

- Siempre: es una reclamación de dinero.

## Cómo lo puede pedir el cliente

- «En el mostrador de facturación se nos cobró el equipaje, que creíamos incluido.»
- «me cobraron la maleta en el aeropuerto y pague con maleta!!»
- «Hola, a la vuelta nos hicieron pagar el equipaje de mano, ¿eso entraba?»
- «me clavaron por la maleta en el aeropuerto, quiero que me lo devolvais»
