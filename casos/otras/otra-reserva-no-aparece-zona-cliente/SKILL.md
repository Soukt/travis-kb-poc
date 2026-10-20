---
name: otra-reserva-no-aparece-zona-cliente
description: El cliente tiene una reserva que no le aparece en su zona de
  cliente, por ejemplo porque la hizo con otro email o por teléfono.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente entra en su zona de cliente y no ve una reserva que sabe que tiene con la agencia.

## Qué hace el agente

1. Verifica con `verificar-identidad` usando el localizador y el email con el que se hizo la reserva.
2. Comprueba con `consultar-reserva` que la reserva existe y su estado.
3. Le confirma el estado de la reserva y crea un ticket con `crear-ticket-booking` para que booking la vincule a su cuenta.

## Qué no hace

- No vincula reservas cuyo titular no se ha podido verificar.
- No da datos de la reserva si el email no coincide.

## Cuándo pasa a una persona

- Siempre que haya que vincular la reserva a la cuenta.
- Si la verificación falla pero el cliente insiste en que es el titular.

## Cómo lo puede pedir el cliente

- «Tengo una reserva que hice por teléfono y no me sale en mi cuenta.»
- «no me aparece el viaje en la zona cliente, lo hice con el correo del trabajo»
- «Les comunico que una de mis reservas no figura en mi área de cliente.»
- «Mi reserva no aparece aquí. ¿Está confirmada? ¿Me reenviáis los bonos?»
