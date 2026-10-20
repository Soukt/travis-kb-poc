---
name: aloj-reserva-regalo-otra-persona
description: El cliente ha reservado el alojamiento para que lo disfruten otras
  personas y él no viajará.
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

Cuando el titular no estará en la entrada y los huéspedes son otras personas, por ejemplo en un regalo. Implica datos de terceros y la aceptación del alojamiento.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` a nombre de quién figuran la reserva y los viajeros.
3. Pide con `pedir-datos-cliente` los datos de los huéspedes que harán la entrada.
4. Abre un ticket con `crear-ticket-booking` para que booking confirme con el alojamiento que acepta la entrada sin el titular.

## Qué no hace

- No cambia el titular de la reserva.
- No asegura que el alojamiento acepte la entrada sin el titular.
- No comparte el bono con terceros por su cuenta.

## Cuándo pasa a una persona

- Siempre: hay datos de otras personas y depende de la aceptación del alojamiento.

## Cómo lo puede pedir el cliente

- «He reservado el hotel como regalo para mis padres, ¿pueden entrar ellos sin mí?»
- «es un regalo de cumple, la reserva esta a mi nombre pero van ellos»
- «Hola, yo no voy a ir, van mi hermana y su novio. Les pedirán la tarjeta con la que pagué?»
- «Desearía que los huéspedes de la reserva fueran personas distintas del titular.»
