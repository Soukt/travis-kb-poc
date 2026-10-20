---
name: viaj-nacionalidad-incorrecta-viajero
description: El cliente ve que la nacionalidad de un viajero figura de forma
  incorrecta en la reserva.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la nacionalidad registrada no coincide con la del documento con el que viajará la persona. Puede influir en la documentación que piden los proveedores o el destino.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` la nacionalidad registrada y los servicios contratados.
3. Pide con `pedir-datos-cliente` la nacionalidad correcta y el tipo de documento con el que viajará.
4. Abre con `crear-ticket-booking` la corrección para que booking la aplique con los proveedores que la necesiten.

## Qué no hace

- No opina sobre los requisitos de entrada al destino.
- No modifica el dato por su cuenta.

## Cuándo pasa a una persona

- Siempre: la corrección la gestiona booking.

## Cómo lo puede pedir el cliente

- «En la reserva aparece que mi marido es español y tiene otra nacionalidad. ¿Lo pueden corregir?»
- «hola, se me ha quedado marcada la nacionalidad que venia por defecto y mi amiga no es de aqui»
- «Les informo de que la nacionalidad de una de las viajeras es errónea; viajará con su pasaporte extranjero.»
- «La nacionalidad de mi madre está mal y no sé si con su documento necesita algo más para entrar.»
