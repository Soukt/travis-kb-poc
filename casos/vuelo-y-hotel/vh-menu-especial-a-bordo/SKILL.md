---
name: vh-menu-especial-a-bordo
description: El cliente necesita un menú especial a bordo por alergia,
  intolerancia o dieta y pregunta si se puede solicitar.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El vuelo puede ofrecer servicio de comida y el cliente necesita una opción adaptada. La petición se hace a la aerolínea y no siempre está garantizada.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` los trayectos y la aerolínea.
3. Busca con `buscar-informacion` la respuesta aprobada sobre menús especiales a bordo.
4. Pide con `pedir-datos-cliente` el tipo de menú, para qué viajero y en qué trayectos.
5. Prepara la solicitud y la respuesta, y las envía con `crear-ticket-booking` para que booking las revise antes de enviarlas.

## Qué no hace

- No garantiza que la aerolínea disponga del menú.
- No da consejos sobre alergias ni sobre qué comer.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la solicitud antes de enviarla.
- Si el vuelo no ofrece comida a bordo y el cliente pide una alternativa.

## Cómo lo puede pedir el cliente

- «¿Se puede pedir comida sin gluten en el vuelo?»
- «dan comida en el avion? necesitamos un menu sin frutos secos»
- «Buenas tardes, quisiera solicitar un menú vegetariano para la ida y la vuelta.»
- «se puede pedir menu especial? y en el hotel tb lo tendran en cuenta?»
