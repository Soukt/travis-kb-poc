---
name: viaj-acomodacion-ferri-con-bebe
description: El cliente viaja en ferri con un bebé y pregunta por la acomodación
  contratada y cómo viajará el bebé a bordo.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva incluye un trayecto en ferri con un bebé y los padres quieren saber si tendrá plaza propia, si hay cuna en el camarote o qué servicios hay a bordo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` que el bebé figura en la reserva.
3. Revisa con `consultar-trayecto-ferri` la acomodación contratada.
4. Busca con `buscar-informacion` la respuesta aprobada sobre bebés a bordo y se la explica al cliente.

## Qué no hace

- No garantiza servicios a bordo que no consten.
- No cambia la acomodación.

## Cuándo pasa a una persona

- El cliente quiere cambiar de acomodación.
- El bebé no figura en el trayecto.

## Cómo lo puede pedir el cliente

- «Vamos en el barco con un bebé, ¿tiene sitio propio en el camarote?»
- «en el ferry hay cuna o el bebe duerme con nosotros?»
- «Buenos días, ¿qué facilidades hay a bordo para viajar con un lactante?»
- «¿El bebé paga en el barco? ¿Y podemos llevar el carrito hasta el camarote?»
