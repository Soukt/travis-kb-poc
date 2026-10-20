---
name: viaj-tildes-enes-caracteres-especiales
description: El cliente ve que el nombre de un viajero aparece sin tildes, sin
  eñe, sin apóstrofo o sin guion en la reserva o en el bono.
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

Cuando el sistema o el proveedor ha eliminado caracteres especiales del nombre y el cliente teme que no coincida con su documento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo aparece el nombre del viajero.
3. Busca con `buscar-informacion` la respuesta aprobada sobre caracteres especiales en los nombres.
4. Explica al cliente lo que dice esa respuesta, por ejemplo que es habitual que los sistemas los eliminen, solo si así consta.

## Qué no hace

- No modifica el nombre.
- No afirma que no pasa nada si la respuesta aprobada no lo dice.

## Cuándo pasa a una persona

- Además de los caracteres especiales, falta o sobra alguna letra.
- No hay respuesta aprobada sobre el tema.

## Cómo lo puede pedir el cliente

- «Mi apellido lleva eñe y en el bono sale con una n normal. ¿Es un problema?»
- «Buenas, en la reserva me han quitado la tilde del nombre, ¿lo tengo que corregir?»
- «mi apellido tiene un apostrofe y en el billete sale todo junto, me dejaran pasar o q»
- «Sale mi nombre sin acento y aprovecho para preguntar si el desayuno está incluido.»
