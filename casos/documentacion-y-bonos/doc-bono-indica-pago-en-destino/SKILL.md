---
name: doc-bono-indica-pago-en-destino
description: El cliente ve en el bono que hay algo que pagar en destino y
  pregunta si no lo tenía ya pagado.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El bono indica que algún concepto se abona directamente en el alojamiento o en destino y el cliente creía haberlo pagado todo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-pagos` lo que ya ha pagado a la agencia.
3. Consulta con `consultar-reserva` qué incluye exactamente la reserva.
4. Busca con `buscar-informacion` la explicación aprobada sobre conceptos que se pagan en destino y prepara la respuesta para que booking la revise.

## Qué no hace

- No promete reembolsos ni descuentos.
- No afirma que el concepto esté incluido si las acciones no lo confirman.

## Cuándo pasa a una persona

- El cliente considera que el cobro en destino es indebido y pide que se le devuelva o se le compense.

## Cómo lo puede pedir el cliente

- «En el bono pone que tengo que pagar algo en el hotel, ¿no estaba todo pagado?»
- «pq pone pago en destino si ya lo he pagado??»
- «Desearía saber a qué corresponde el importe que, según el bono, debo abonar a la llegada.»
- «me van a cobrar algo más allí? pensaba que el paquete lo incluía todo»
