---
name: aloj-averia-durante-estancia
description: El cliente avisa de que algo se ha estropeado en la habitación a
  mitad de la estancia, como el aire, el agua caliente o la cerradura.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la avería aparece durante la estancia y el alojamiento no la está resolviendo. El agente prepara el aviso y booking lo revisa antes de enviarlo.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y las noches pendientes.
3. Le recomienda comunicarlo en recepción si no lo ha hecho, que es lo más rápido.
4. Prepara el aviso al alojamiento en `crear-ticket-booking` para que booking lo revise y lo envíe.

## Qué no hace

- No ofrece compensaciones.
- No da instrucciones para reparar la avería.

## Cuándo pasa a una persona

- La avería afecta a la seguridad o deja la habitación inutilizable.
- El cliente pide una compensación o un cambio de alojamiento.

## Cómo lo puede pedir el cliente

- «Se ha estropeado el aire acondicionado de la habitación y no lo arreglan.»
- «no hay agua caliente desde ayer»
- «Hola, la cerradura de la terraza no cierra y nos da miedo dejar las cosas. En recepción dicen que mañana. Y la caja fuerte tampoco va»
- «Les comunico una avería en la habitación que el establecimiento no ha resuelto.»
