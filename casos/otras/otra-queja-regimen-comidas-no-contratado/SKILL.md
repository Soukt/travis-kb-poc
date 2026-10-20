---
name: otra-queja-regimen-comidas-no-contratado
description: El cliente se queja de que el régimen de comidas que le aplica el
  alojamiento no coincide con el que contrató.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente está alojado o acaba de salir y dice que le dan menos comidas de las contratadas, por ejemplo solo desayuno teniendo media pensión, o que le cobran comidas incluidas.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-reserva` qué régimen de comidas figura en la reserva.
3. Si la reserva confirma el régimen, le recomienda mostrar el bono en recepción mientras se gestiona.
4. Recoge con `pedir-datos-cliente` qué le están ofreciendo, qué le han cobrado y qué le han dicho en el hotel.
5. Crea un ticket con `crear-ticket-booking` para que booking lo resuelva con el hotel.

## Qué no hace

- No promete reembolsar las comidas que el cliente haya pagado aparte.
- No le dice que pague comidas extra a cuenta de la agencia.

## Cuándo pasa a una persona

- Siempre: hay posible diferencia económica y gestión con el hotel.
- Con prioridad si el cliente sigue alojado.

## Cómo lo puede pedir el cliente

- «Tenemos media pensión en la reserva y en el hotel dicen que solo tenemos desayuno.»
- «nos estan cobrando las cenas y yo pague todo incluido!!»
- «Buenos días, el régimen que nos aplica el hotel no corresponde con el contratado. Les ruego lo revisen.»
- «En el hotel no nos dan la cena que pagamos y además quería saber si tengo ya la factura de esta reserva.»
