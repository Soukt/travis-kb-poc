---
name: viaj-nombre-apellido-invertidos
description: El cliente ve que en la reserva el nombre y el apellido de un
  viajero aparecen intercambiados.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando al rellenar los datos se introdujo el apellido en el campo del nombre o al revés. El impacto depende de los servicios contratados y de lo estricto que sea cada proveedor.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo está registrado el viajero y qué servicios incluye la reserva.
3. Busca con `buscar-informacion` la respuesta aprobada sobre nombres y apellidos intercambiados.
4. Pide con `pedir-datos-cliente` el nombre y los apellidos tal y como figuran en el documento del viajero.
5. Abre con `crear-ticket-booking` la petición indicando los servicios afectados para que booking la revise con cada proveedor.

## Qué no hace

- No cambia el orden de los datos por su cuenta.
- No asegura que el proveedor lo aceptará tal cual está.
- No pide copias del documento por el chat.

## Cuándo pasa a una persona

- Siempre que el cliente quiera corregirlo, y en especial si la reserva incluye vuelos o ferri.

## Cómo lo puede pedir el cliente

- «Hola, creo que puse el apellido donde iba el nombre y ahora sale al revés en la reserva.»
- «En la confirmación figura mi apellido como nombre de pila. ¿Pueden corregirlo, por favor?»
- «me sale todo al reves, el nombre de apellido y el apellido de nombre jajaja eso es un problema?»
- «Tengo el nombre y el apellido cambiados de sitio y el viaje lleva vuelo, ¿me tocará pagar algo?»
