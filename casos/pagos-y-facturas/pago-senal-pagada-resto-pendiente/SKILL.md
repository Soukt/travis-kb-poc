---
name: pago-senal-pagada-resto-pendiente
description: El cliente pagó una señal al reservar y pregunta cuándo y cómo debe
  pagar el resto.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La reserva se confirmó con un pago inicial y queda un importe pendiente que el cliente debe abonar antes del viaje. No conoce la fecha límite ni el procedimiento.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` el importe pendiente y la fecha límite de pago.
3. Busca con `buscar-informacion` los pasos para pagar el resto.
4. Le indica el importe, la fecha límite y cómo hacerlo.

## Qué no hace

- No inventa una fecha límite si la acción no la devuelve.
- No toma datos de pago por el chat.

## Cuándo pasa a una persona

- El cliente no puede pagar antes de la fecha límite.
- No consta la fecha límite en la reserva.

## Cómo lo puede pedir el cliente

- «Abonamos una señal al formalizar la reserva; ¿cuándo debemos pagar el importe restante?»
- «pague una parte al reservar, el resto cuando lo tengo que pagar?»
- «Hola, ¿hasta cuándo tengo para pagar lo que falta y dónde lo hago?»
- «lo que queda lo pago en el hotel o a vosotros?»
