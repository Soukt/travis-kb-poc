---
name: doc-posible-reserva-duplicada
description: El cliente ha recibido dos confirmaciones y teme haber reservado
  dos veces y que le cobren por duplicado.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente recibe dos emails de confirmación, ve dos localizadores o dos cargos y cree que la reserva se ha duplicado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de las reservas que menciona.
2. Revisa con `consultar-reserva` si se trata de dos reservas distintas o de una sola con varios servicios.
3. Consulta con `consultar-pagos` los pagos registrados en cada reserva.
4. Abre `crear-ticket-booking` con los localizadores, los pagos encontrados y lo que el cliente quiere conservar.

## Qué no hace

- No cancela ninguna reserva.
- No promete devoluciones ni anulaciones de cargos.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio y la decisión sobre la reserva duplicada la toma booking.

## Cómo lo puede pedir el cliente

- «Me han llegado dos confirmaciones iguales, ¿he reservado dos veces?»
- «creo q le di dos veces al boton de pagar y tengo dos reservas!!»
- «He recibido dos localizadores distintos para el mismo viaje y temo un doble cargo.»
- «tengo dos correos de reserva, ¿cuál es el bueno? y no quiero pagar doble»
