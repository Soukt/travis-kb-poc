---
name: viaj-tratamiento-o-sexo-incorrecto
description: El cliente indica que un viajero aparece en la reserva con un
  tratamiento o un sexo que no le corresponde.
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

Cuando se marcó señor en lugar de señora, o al revés, o el sexo no coincide con el del documento. En vuelos puede importar más que en el alojamiento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo figura el viajero y qué servicios tiene.
3. Si hay vuelos, comprueba con `consultar-vuelo` cómo aparece el pasajero.
4. Busca con `buscar-informacion` la respuesta aprobada sobre este tipo de error.
5. Prepara la respuesta con un trato respetuoso y la deja para revisión de booking antes de enviarla.

## Qué no hace

- No hace suposiciones sobre la identidad del viajero.
- No pide justificación ni documentos.
- No modifica el dato.

## Cuándo pasa a una persona

- La información aprobada indica que hay que corregirlo en el vuelo.
- El cliente pide la corrección expresamente.

## Cómo lo puede pedir el cliente

- «En la reserva pone Sr. delante del nombre de mi mujer, ¿eso da problemas?»
- «Buenas tardes, el sexo que figura en mi reserva no coincide con el de mi documento. ¿Qué tengo que hacer?»
- «me han puesto como señora y soy señor jaja, se puede arreglar o da igual»
- «Sale mal el tratamiento de mi hijo en el billete y quería saber también qué equipaje lleva.»
