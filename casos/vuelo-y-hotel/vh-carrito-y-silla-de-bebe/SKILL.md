---
name: vh-carrito-y-silla-de-bebe
description: El cliente viaja con un bebé y pregunta si puede llevar el carrito
  y la silla de coche en el vuelo y dónde se entregan.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

En la reserva viaja un bebé y el cliente quiere saber qué pasa con el carrito y la silla de coche. Le preocupa si cuentan como equipaje o si hay que avisar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-reserva` que el bebé figura en la reserva.
3. Revisa con `consultar-vuelo` el equipaje que corresponde al bebé.
4. Busca con `buscar-informacion` la respuesta aprobada sobre carritos y sillas infantiles a bordo.
5. Prepara la respuesta y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No asegura que sean gratuitos si la información no lo dice.
- No da medidas ni pesos inventados.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si hay que registrar el carrito con la aerolínea o tiene coste.

## Cómo lo puede pedir el cliente

- «¿Puedo llevar el carrito del bebé hasta la puerta del avión?»
- «la silla del coche del niño cuenta como maleta?»
- «Buenas, viajamos con un bebé: ¿el carrito se factura o va aparte?»
- «Hola!! llevamos carro y sillita, hay q avisar a alguien?»
