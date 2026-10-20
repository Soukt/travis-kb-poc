---
name: pago-cobro-vehiculo-en-puerto-naviera
description: El cliente tuvo que pagar a la naviera en el puerto por el
  vehículo, que creía incluido en su reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Al embarcar, la naviera exigió un pago por el vehículo, o por un vehículo de otras dimensiones, y el cliente considera que ya estaba pagado.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el vehículo que consta en la reserva y sus características.
3. Pide con `pedir-datos-cliente` el justificante del pago en el puerto y el tipo de vehículo con el que viajó.
4. Pasa la reclamación con `crear-ticket-booking`.

## Qué no hace

- No asegura que el cobro de la naviera fuera indebido.
- No promete el reembolso.

## Cuándo pasa a una persona

- Siempre: el cliente reclama un pago.

## Cómo lo puede pedir el cliente

- «En el embarque se nos exigió un pago por el vehículo, que ya figuraba en la reserva.»
- «en el puerto me cobraron el coche otra vez»
- «Hola, nos dijeron que la furgoneta era más alta de lo reservado y tuvimos que pagar, ¿me lo devolvéis?»
- «pague el coche en la taquilla del puerto y lo tenia reservado, como reclamo»
