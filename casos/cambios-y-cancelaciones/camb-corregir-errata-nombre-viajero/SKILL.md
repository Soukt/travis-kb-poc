---
name: camb-corregir-errata-nombre-viajero
description: El cliente detecta una errata en el nombre o los apellidos de un
  viajero de su reserva y quiere corregirla.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un nombre está mal escrito, le falta un apellido o están invertidos. Conviene corregirlo antes del viaje, sobre todo si hay vuelos o ferri, donde el nombre debe coincidir con el documento.

## Qué hace el agente

1. Comprueba que quien escribe es el titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` cómo figura el nombre y qué servicios lo usan.
3. Pide con `pedir-datos-cliente` el nombre correcto tal como aparece en el documento de identidad.
4. Pasa la corrección a booking con `crear-ticket-booking`, indicando los servicios afectados.

## Qué no hace

- No corrige el nombre por su cuenta.
- No asegura que la corrección sea gratuita en todos los servicios.

## Cuándo pasa a una persona

- Siempre: son datos de un viajero y la corrección la hace booking con cada proveedor.

## Cómo lo puede pedir el cliente

- «He puesto mal el apellido de mi pareja, ¿se puede corregir?»
- «Hola, en la reserva sale mi nombre con una letra cambiada»
- «me e equibocado en el nombre de mi hijo al reservar, como lo arreglo»
- «Les solicito la corrección del segundo apellido de uno de los viajeros. ¿Afecta al vuelo?»
