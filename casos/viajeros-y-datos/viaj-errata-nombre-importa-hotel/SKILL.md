---
name: viaj-errata-nombre-importa-hotel
description: El cliente detecta una errata leve en el nombre de un viajero de su
  reserva de alojamiento y pregunta si le dará problemas al llegar.
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

Cuando hay una letra cambiada, sobrante o que falta en el nombre de un viajero y el cliente solo quiere saber si tiene consecuencias. Aplica sobre todo a reservas de solo alojamiento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` cómo figura el nombre y qué servicios incluye la reserva.
3. Busca con `buscar-informacion` la respuesta aprobada sobre erratas leves en reservas de alojamiento.
4. Traslada al cliente lo que dice esa respuesta y le recuerda que cada viajero lleve su documento de identidad.
5. Si la reserva incluye vuelos, ferri o entradas, avisa de que esos servicios pueden exigir que el nombre coincida exactamente.

## Qué no hace

- No modifica el nombre en la reserva.
- No asegura cómo actuará el alojamiento si la respuesta aprobada no lo dice.
- No da por hecho que la errata es irrelevante en vuelos o trayectos en ferri.

## Cuándo pasa a una persona

- El cliente quiere que se corrija el nombre aunque no sea necesario.
- La errata afecta también a un vuelo, un trayecto en ferri o entradas nominativas.
- No existe respuesta aprobada sobre erratas en alojamiento.

## Cómo lo puede pedir el cliente

- «Buenas tardes, he visto que en la reserva mi apellido aparece con una letra cambiada. ¿Tendré algún problema en el hotel?»
- «oye, que en el bono me habéis puesto mal el nombre, solo una letra, ¿pasa algo?»
- «mi nombre sale con b en vez de con v, lo tengo q cambiar o asi vale??»
- «Hay una errata en el nombre de mi pareja y, de paso, ¿me decís si el hotel tiene aparcamiento?»
