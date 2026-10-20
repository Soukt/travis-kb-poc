---
name: viaj-falta-segundo-apellido
description: El cliente avisa de que un viajero figura solo con el primer
  apellido y pregunta si debe añadir el segundo.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el viajero tiene dos apellidos en su documento pero en la reserva solo consta uno. La respuesta depende de si hay vuelos u otros servicios nominativos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo figura el viajero y qué servicios tiene la reserva.
3. Si hay vuelos, comprueba con `consultar-vuelo` cómo aparece el nombre en ellos.
4. Busca con `buscar-informacion` la respuesta aprobada sobre apellidos incompletos.
5. Prepara la respuesta indicando si basta así o si conviene completarlo, para que booking la revise antes de enviarla.

## Qué no hace

- No modifica los datos del viajero.
- No afirma lo que aceptará la aerolínea si la información aprobada no lo recoge.

## Cuándo pasa a una persona

- La información aprobada indica que hay que completar el apellido en algún servicio.
- El cliente pide expresamente que se añada el segundo apellido.

## Cómo lo puede pedir el cliente

- «Buenas, en la reserva solo aparece mi primer apellido. ¿Hace falta poner también el segundo?»
- «Les escribo porque a mi hija le falta el segundo apellido en la reserva y no sé si eso importa.»
- «pone solo un apellido, en el dni tengo dos, me van a decir algo en el aeropuerto?»
- «Falta un apellido de mi marido y además quería saber a qué hora sale el vuelo de vuelta.»
