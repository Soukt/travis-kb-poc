---
name: viaj-viajero-con-un-solo-apellido
description: El cliente explica que un viajero tiene un único apellido y que al
  reservar tuvo que rellenar el segundo campo con otro dato.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero, a menudo con documentación extranjera, solo tiene un apellido y el formulario pedía dos. El cliente repitió el apellido o puso otro texto y quiere saber si es un problema.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo ha quedado registrado el viajero.
3. Busca con `buscar-informacion` la respuesta aprobada para viajeros con un solo apellido.
4. Explica al cliente lo que indica esa respuesta y le recuerda viajar con el documento cuyo nombre se usó en la reserva.

## Qué no hace

- No modifica los datos del viajero.
- No inventa una regla si no hay respuesta aprobada.

## Cuándo pasa a una persona

- La respuesta aprobada indica que hay que corregir el dato de relleno.
- El dato de relleno figura en un vuelo o en un trayecto en ferri.

## Cómo lo puede pedir el cliente

- «Hola, mi pareja solo tiene un apellido y en el formulario puse el mismo dos veces. ¿Es correcto así?»
- «Buenos días, disculpad mi español: tengo un solo apellido y la web me obligaba a poner dos.»
- «puse un punto en el segundo apellido porque no tengo, pasa algo??»
- «Mi documento es extranjero y solo trae un apellido; ¿tengo que hacer algo antes de viajar?»
