---
name: aloj-robo-en-habitacion
description: El cliente denuncia que le han robado pertenencias en la habitación
  o en las zonas comunes del alojamiento.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente sufre un robo o una pérdida grave durante la estancia. Es una incidencia delicada que gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y si tiene seguro contratado.
3. Le recomienda comunicarlo en recepción y a las autoridades locales para que conste.
4. Pide con `pedir-datos-cliente` cuándo ocurrió y si ya lo ha comunicado.
5. Abre un ticket con `crear-ticket-booking` con lo recogido.

## Qué no hace

- No asegura que el alojamiento o el seguro cubran lo robado.
- No da asesoramiento legal.
- No pide la lista de objetos con su valor.

## Cuándo pasa a una persona

- Siempre: es una incidencia grave con posible reclamación.
- Con prioridad si le han robado documentación necesaria para volver.

## Cómo lo puede pedir el cliente

- «Nos han robado en la habitación del hotel mientras estábamos en la playa.»
- «me han quitado la cartera de la caja fuerte!!»
- «Hola, han entrado en el apartamento y se han llevado el portátil. El hotel dice que no es su problema. Y el seguro?»
- «Les comunico la sustracción de pertenencias en el alojamiento y solicito orientación.»
