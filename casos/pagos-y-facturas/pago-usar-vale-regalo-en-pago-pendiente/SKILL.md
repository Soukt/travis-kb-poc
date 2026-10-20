---
name: pago-usar-vale-regalo-en-pago-pendiente
description: El cliente quiere usar un vale o tarjeta regalo de la agencia para
  pagar lo que le queda de su reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva tiene un importe pendiente y el cliente dispone de un vale de la agencia que no pudo aplicar al reservar.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` el importe pendiente.
3. Pide con `pedir-datos-cliente` el código del vale.
4. Pasa la petición con `crear-ticket-booking` para que booking lo aplique si procede.

## Qué no hace

- No valida el vale ni su saldo.
- No descuenta nada del importe pendiente.

## Cuándo pasa a una persona

- Siempre: implica aplicar dinero a la reserva.

## Cómo lo puede pedir el cliente

- «Dispongo de un vale regalo y quisiera aplicarlo al importe pendiente de mi reserva.»
- «tengo una tarjeta regalo vuestra, la puedo usar para lo que falta?»
- «Hola, me regalaron un vale de viaje y no me dejó usarlo al reservar»
- «como meto el codigo del vale en un pago que ya esta hecho»
