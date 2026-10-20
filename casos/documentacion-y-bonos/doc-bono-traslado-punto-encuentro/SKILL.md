---
name: doc-bono-traslado-punto-encuentro
description: El cliente pregunta dónde y cómo tiene que presentar el bono del
  traslado para que le recojan.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Reservas con traslado incluido en las que el cliente no sabe dónde le esperan ni qué tiene que enseñar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Consulta con `consultar-traslados` el punto de encuentro, los horarios y lo que haya que hacer al llegar.
3. Confirma con `consultar-bonos` que el bono del traslado está disponible.
4. Le explica dónde dirigirse y que lleve el bono a mano al presentarse.

## Qué no hace

- No inventa puntos de encuentro ni descripciones del conductor.
- No contrata traslados nuevos.

## Cuándo pasa a una persona

- El traslado no figura en la reserva aunque el cliente asegura haberlo contratado.

## Cómo lo puede pedir el cliente

- «¿Dónde me recoge el traslado al llegar al aeropuerto?»
- «con el bono del transfer a donde voy?? hay un cartel o algo?»
- «Les agradecería que me indicaran el punto de encuentro del traslado incluido.»
- «el traslado está incluido, ¿no? ¿y qué tengo que enseñar al conductor?»
