---
name: pago-fianza-con-tarjeta-en-recepcion
description: El cliente pregunta si el alojamiento le pedirá una fianza o una
  tarjeta como garantía al llegar.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente ha oído que algunos alojamientos bloquean un importe en la tarjeta a la llegada y quiere saber si le pasará y cuándo se libera.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el alojamiento y el tipo de reserva.
3. Busca con `buscar-informacion` la respuesta aprobada sobre fianzas y garantías en recepción.
4. Le explica que esa garantía la gestiona el alojamiento y lo que indica la respuesta aprobada.

## Qué no hace

- No indica importes ni cuándo se libera la garantía si no consta.
- No contacta con el alojamiento por su cuenta.

## Cuándo pasa a una persona

- El cliente no tiene tarjeta de crédito y teme que no le dejen alojarse.
- No hay información aprobada para ese alojamiento.

## Cómo lo puede pedir el cliente

- «¿El establecimiento solicitará una fianza o una tarjeta como garantía a la llegada?»
- «me van a bloquear dinero en la tarjeta en el hotel?»
- «Hola, solo tengo tarjeta de débito, ¿me pondrán problemas en recepción por la fianza?»
- «eso de la garantia del hotel cuando me lo devuelven»
