---
name: vh-menor-viaja-solo-sin-acompanante
description: El cliente quiere que un menor de la reserva viaje solo en alguno
  de los vuelos y pregunta cómo se gestiona.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un niño de la reserva va a volar sin ningún adulto en uno de los trayectos. Depende del servicio de acompañamiento de menores de la aerolínea.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` los viajeros y quién es el menor.
3. Obtiene con `consultar-vuelo` la aerolínea y el trayecto en el que viajaría solo.
4. Crea con `crear-ticket-booking` un ticket para que booking consulte el servicio con la aerolínea.
5. Le explica que booking le dirá si es posible y qué documentación hace falta.

## Qué no hace

- No confirma que el menor pueda viajar solo.
- No recoge datos de los adultos que lo entregarán o recogerán.

## Cuándo pasa a una persona

- Siempre, porque implica datos de otras personas y un servicio especial de la aerolínea.

## Cómo lo puede pedir el cliente

- «Mi hijo vuelve solo antes que nosotros, ¿puede?»
- «el niño puede volar sin adultos? lo recoge su abuela»
- «Buenas, ¿la aerolínea tiene servicio de acompañamiento de menores?»
- «queremos q la niña vuelva sola en el vuelo de vuelta, q hay q hacer»
