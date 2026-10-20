---
name: doc-hotel-pide-tarjeta-garantia
description: El cliente pregunta por qué el alojamiento le pide una tarjeta en
  la entrada si la reserva ya está pagada.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - buscar-informacion
    - verificar-identidad
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

Antes o durante la llegada, cuando el cliente se entera de que el alojamiento solicita una tarjeta como garantía para extras o posibles daños.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre garantías que piden los alojamientos a la llegada.
2. Comprueba con `verificar-identidad` que es el titular de la reserva.
3. Le confirma con `consultar-pagos` que la reserva con la agencia está pagada, si es el caso.
4. Prepara la respuesta explicando la diferencia entre el pago de la reserva y la garantía del alojamiento, para revisión de booking.

## Qué no hace

- No asegura que el alojamiento no vaya a cobrar nada.
- No gestiona cargos ni bloqueos en la tarjeta del cliente.

## Cuándo pasa a una persona

- El alojamiento ha cobrado la estancia que ya estaba pagada.
- El cliente no tiene tarjeta y el alojamiento no le deja entrar.

## Cómo lo puede pedir el cliente

- «¿Por qué el hotel me pide la tarjeta si ya está pagado?»
- «me han dicho q en recepcion piden tarjeta, me van a cobrar otra vez?»
- «Quisiera saber si es habitual que el establecimiento solicite una tarjeta de crédito como garantía.»
- «no tengo tarjeta de crédito, solo de débito, ¿pasa algo al llegar?»
