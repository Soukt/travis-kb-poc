---
name: vh-vuelo-pendiente-de-emision
description: El cliente ve que su vuelo aparece como pendiente o sin confirmar
  en la zona de cliente y quiere saber si ya tiene billete.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El hotel figura confirmado pero el vuelo no, o el vuelo aparece como pendiente de emisión. El cliente quiere saber si tiene plaza asegurada.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` el estado general de la reserva y de cada servicio.
3. Obtiene con `consultar-vuelo` el estado del vuelo.
4. Comprueba con `consultar-pagos` si hay algún pago pendiente que pueda estar frenando la emisión.
5. Prepara la explicación del estado y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No asegura que el billete está emitido si la acción no lo confirma.
- No promete una fecha de emisión.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si hay un pago pendiente que el cliente discute o asegura haber hecho.

## Cómo lo puede pedir el cliente

- «En mi área de cliente el vuelo sale como pendiente, ¿está confirmado?»
- «porque pone pendiente si ya lo pague todo??»
- «Hola, quiero saber si ya tengo los billetes de avión emitidos.»
- «El hotel está confirmado pero el vuelo no, ¿me tengo que preocupar?»
