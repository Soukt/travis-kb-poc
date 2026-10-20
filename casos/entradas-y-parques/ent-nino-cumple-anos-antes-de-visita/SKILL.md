---
name: ent-nino-cumple-anos-antes-de-visita
description: El cliente avisa de que un menor cumplirá años entre la compra y la
  visita y teme que cambie de tramo de tarifa.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando la edad del menor en la fecha de la visita puede no coincidir con la que tenía al reservar. El impacto depende de cómo calcule la edad el parque.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` el viajero y la tarifa contratada.
3. Revisa con `consultar-condiciones-entrada` si la edad se calcula el día de la compra o el de la visita.
4. Prepara una respuesta que indique si la entrada sigue siendo válida para que booking la revise antes de enviarla.

## Qué no hace

- No cambia la tarifa del menor.
- No informa de diferencias de precio.

## Cuándo pasa a una persona

- La entrada deja de ser válida por la edad y hay que cambiarla, con posible coste.

## Cómo lo puede pedir el cliente

- «Mi hijo cumple años justo antes del viaje. ¿Le sigue valiendo la entrada de niño?»
- «compre la entrada infantil pero la niña cumple antes de ir, pasa algo?»
- «Buenos días, ¿la edad de la tarifa se cuenta el día que compramos o el día que vamos?»
- «el crio hace años esa semana, le van a poner pegas en la puerta?»
