---
name: doc-falta-segundo-apellido-bono
description: El cliente se da cuenta de que en el bono solo aparece su primer
  apellido y pregunta si es un problema.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el bono o la reserva muestran el nombre incompleto, sin segundo apellido o sin segundo nombre.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` cómo figura el nombre y qué servicios incluye la reserva.
3. Busca con `buscar-informacion` lo que la agencia tiene aprobado sobre nombres incompletos según el tipo de servicio.
4. Le explica si en sus servicios eso puede dar problemas y, si en alguno el nombre tiene que coincidir exactamente, se lo advierte.

## Qué no hace

- No modifica el nombre.
- No asegura que una aerolínea o naviera acepte el nombre incompleto si la información no lo dice.

## Cuándo pasa a una persona

- La reserva incluye un vuelo o un ferri y la información indica que el nombre debe coincidir con el documento.
- El cliente quiere que se añada el apellido que falta.

## Cómo lo puede pedir el cliente

- «En el bono solo sale mi primer apellido, ¿es un problema?»
- «falta mi segundo apellido, me dejaran entrar igual?»
- «Observo que la documentación no incluye mi segundo apellido y quisiera saber si debo preocuparme.»
- «no sale mi segundo nombre y llevo vuelo, ¿hay lío en el aeropuerto?»
