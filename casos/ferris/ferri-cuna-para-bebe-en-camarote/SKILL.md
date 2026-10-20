---
name: ferri-cuna-para-bebe-en-camarote
description: El cliente viaja con un bebé y pregunta si puede tener una cuna en
  el camarote o cómo dormirá el bebé a bordo.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Entre los viajeros hay un bebé y la reserva incluye camarote o el cliente duda dónde dormirá en una travesía nocturna.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` que el bebé figura entre los viajeros.
3. Comprueba con `consultar-trayecto-ferri` el tipo de camarote contratado.
4. Busca con `buscar-informacion` si hay cunas a bordo según la información aprobada.
5. Prepara la respuesta o la petición a la naviera para que booking la revise antes de enviarla.

## Qué no hace

- No garantiza la disponibilidad de cuna.
- No da recomendaciones sobre el sueño del bebé.

## Cuándo pasa a una persona

- El bebé no figura en la reserva y hay que añadirlo.

## Cómo lo puede pedir el cliente

- «Viajamos con un bebé, ¿hay cuna en el camarote?»
- «el bebe donde duerme en el barco? llevamos la cuna de viaje?»
- «Buenos días, ¿sería posible solicitar una cuna para el camarote del trayecto de ida?»
- «ponen cuna en el camarote o lo tenemos q llevar en brazos toda la noche? ah y el carrito se puede subir?»
