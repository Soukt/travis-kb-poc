---
name: ent-bebe-necesita-entrada
description: El cliente viaja con un bebé y quiere saber si necesita entrada
  para el parque o si accede sin ella.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando en la reserva hay un bebé o el cliente duda de si debía incluirlo. Suele preguntarse junto a dudas de carritos y accesos.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` si el bebé figura entre los viajeros.
3. Revisa con `consultar-condiciones-entrada` a partir de qué edad se necesita entrada y si hay que acreditar la edad del bebé.
4. Explica si el bebé entra sin entrada y qué documento conviene llevar.

## Qué no hace

- No añade al bebé a la reserva ni emite entradas.
- No afirma que el acceso es gratuito si las condiciones no lo dicen.

## Cuándo pasa a una persona

- El bebé necesita entrada y no está incluida en la reserva.

## Cómo lo puede pedir el cliente

- «Vamos con un bebé. ¿Necesita entrada?»
- «el bebe paga o entra gratis?»
- «Buenas, no incluí a mi hijo pequeño en las entradas porque es un bebé. ¿Hay algún problema?»
- «los bebes tienen que llevar algun papel para entrar gratis? y podemos meter el carro?»
