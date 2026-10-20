---
name: aloj-fianza-o-garantia-en-recepcion
description: El cliente pregunta si el alojamiento le pedirá fianza, depósito o
  una tarjeta de garantía al llegar.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere saber si necesitará tarjeta de crédito o dejar un depósito en la entrada. El agente prepara la respuesta y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento y el tipo de estancia con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` si informa de fianza o garantía.
4. Busca con `buscar-informacion` la respuesta aprobada sobre fianzas y tarjetas de garantía.
5. Prepara la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No indica importes de fianza.
- No asegura que se acepte tarjeta de débito o efectivo si no consta.

## Cuándo pasa a una persona

- El cliente no podrá aportar la garantía y teme que no le dejen entrar.
- El alojamiento pide la fianza por un medio inusual, como una transferencia a un particular.

## Cómo lo puede pedir el cliente

- «¿Me pedirán una fianza al llegar al apartamento?»
- «tengo q dejar la tarjeta en el hotel? solo tengo de debito»
- «Hola, me han dicho que retienen dinero en la tarjeta al entrar, es así? cuándo lo devuelven?»
- «Desearía saber si el establecimiento exige depósito o garantía a la llegada.»
