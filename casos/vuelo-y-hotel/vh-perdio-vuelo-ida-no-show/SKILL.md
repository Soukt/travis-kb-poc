---
name: vh-perdio-vuelo-ida-no-show
description: El cliente ha perdido su vuelo de ida por llegar tarde al
  aeropuerto y quiere saber qué pasa con la vuelta y con el hotel.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente no se ha presentado al embarque por causas propias, como un atasco o un despiste. Duda de si el resto de servicios siguen en pie.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` los servicios que quedan por disfrutar.
3. Confirma con `consultar-vuelo` el vuelo perdido y el de vuelta.
4. Consulta con `consultar-politica-cancelacion` las condiciones que aplican a la reserva.
5. Crea con `crear-ticket-booking` un ticket urgente y avisa al cliente de que no dé nada por perdido hasta que booking le confirme la situación.

## Qué no hace

- No asegura que el vuelo de vuelta siga siendo válido.
- No ofrece reembolsos ni cambios gratuitos.
- No compra ni reserva otro vuelo.

## Cuándo pasa a una persona

- Siempre, porque implica posibles cargos y excepciones a las condiciones.

## Cómo lo puede pedir el cliente

- «Hemos perdido el vuelo por un atasco, ¿qué hacemos ahora?»
- «llegue tarde y ya habian cerrado el embarque, la vuelta me la anulan?»
- «Buenos días, no pudimos coger el vuelo de ida. ¿El hotel sigue reservado?»
- «Se me ha escapado el avión, ¿puedo coger el siguiente?»
