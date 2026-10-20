---
name: viaj-autorizar-tercero-gestionar-reserva
description: El cliente, titular de la reserva, quiere autorizar a otra persona
  para que pueda consultarla o gestionarla en su nombre.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el titular no podrá ocuparse de la reserva y prefiere que lo haga otra persona, como un hijo o un compañero de viaje.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Recoge con `pedir-datos-cliente` los datos de la persona autorizada y qué podrá hacer: consultar, modificar o ambas cosas.
3. Abre con `crear-ticket-booking` la autorización para que booking la valide y la registre.
4. Explica al titular que, hasta que booking lo confirme, solo él puede gestionar la reserva.

## Qué no hace

- No da acceso a nadie por su cuenta.
- No acepta autorizaciones que pida el tercero en lugar del titular.

## Cuándo pasa a una persona

- Siempre: implica datos y permisos de otra persona.

## Cómo lo puede pedir el cliente

- «Quiero que mi hijo pueda gestionar mi reserva, que yo no me apaño con esto.»
- «puede mi mujer hablar con vosotros por la reserva aunque este a mi nombre?»
- «Buenos días, autorizo a mi compañera de viaje a realizar gestiones sobre la reserva. ¿Qué necesitan?»
- «Mi hija se encargará de todo; ¿le podéis mandar a ella los bonos y explicarle los pagos?»
