---
name: ent-entrada-infantil-para-un-adulto
description: El cliente compró una entrada infantil para alguien que ya no tiene
  edad de esa tarifa y teme que no le dejen entrar.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando un viajero supera la edad de la tarifa infantil reservada. Corregirlo suele implicar un cambio con coste.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` el viajero y su tarifa.
3. Revisa con `consultar-condiciones-entrada` el tramo de edad de la tarifa y si se comprueba en el acceso.
4. Explica el riesgo de que no le dejen pasar y abre con `crear-ticket-booking` la solicitud de cambio de tarifa.

## Qué no hace

- No aconseja usar la entrada infantil de todas formas.
- No informa de importes del cambio.

## Cuándo pasa a una persona

- Siempre: el cambio de tarifa implica un cargo.

## Cómo lo puede pedir el cliente

- «Creo que reservé entrada de niño para mi sobrino y ya es adulto. ¿Qué hago?»
- «puse a mi hijo como niño pero ya tiene edad de adulto, le dejaran pasar?»
- «Necesito cambiar una entrada infantil por una de adulto, me he equivocado al reservar.»
- «si pago la diferencia en la taquilla vale o lo tengo q hacer con vosotros?»
