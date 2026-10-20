---
name: aloj-tarjeta-pago-de-tercero
description: El cliente pagó con la tarjeta de otra persona y el alojamiento
  pide presentarla en la entrada.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva se pagó con una tarjeta cuyo titular no viaja y el cliente teme problemas en recepción. Hay datos de otra persona y dinero de por medio.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-pagos` que la reserva está pagada y cómo.
3. Busca con `buscar-informacion` la respuesta aprobada sobre pagos con tarjeta de terceros.
4. Abre un ticket con `crear-ticket-booking` para que booking lo aclare con el alojamiento.

## Qué no hace

- No pide datos de la tarjeta ni del titular de la tarjeta.
- No sugiere volver a pagar en el alojamiento.

## Cuándo pasa a una persona

- Siempre: hay datos de un tercero y un pago de por medio.

## Cómo lo puede pedir el cliente

- «Pagué con la tarjeta de mi padre, ¿me la pedirán en el hotel?»
- «la reserva la pago mi novio con su tarjeta y el no viene, problema?»
- «Hola, el hotel dice que tengo que enseñar la tarjeta del pago y no es mía. Y además me piden fianza, qué hago?»
- «Les consulto si existe algún inconveniente por haberse abonado la reserva con la tarjeta de un tercero.»
