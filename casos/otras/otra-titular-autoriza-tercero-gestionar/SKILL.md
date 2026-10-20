---
name: otra-titular-autoriza-tercero-gestionar
description: El cliente, titular de la reserva, quiere autorizar a otra persona,
  como un familiar, para que la gestione o la consulte.
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

El titular no puede o no quiere encargarse de las gestiones y pide que otra persona pueda hacerlas en su nombre.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Identifica con `consultar-reserva` la reserva para la que quiere dar la autorización.
3. Recoge con `pedir-datos-cliente` a quién autoriza y para qué gestiones.
4. Crea un ticket con `crear-ticket-booking` para que booking registre la autorización.

## Qué no hace

- No da acceso ni información a la persona autorizada hasta que booking lo confirme.
- No acepta autorizaciones que pide un tercero en nombre del titular.

## Cuándo pasa a una persona

- Siempre: implica datos de otra persona y permisos sobre la reserva.

## Cómo lo puede pedir el cliente

- «Quiero que mi hijo pueda llamar para gestionar mi reserva, yo no me apaño con esto.»
- «puede mi mujer hablar con vosotros por lo del viaje? la reserva esta a mi nombre»
- «Deseo autorizar a un familiar para que realice gestiones en mi nombre sobre esta reserva.»
- «Autorizo a mi hermana a cambiar lo que haga falta. ¿Qué tengo que hacer? ¿Le podéis mandar los bonos a ella?»
