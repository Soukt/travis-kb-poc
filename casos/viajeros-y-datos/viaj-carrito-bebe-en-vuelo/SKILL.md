---
name: viaj-carrito-bebe-en-vuelo
description: El cliente pregunta si puede llevar el carrito o la silla del bebé
  en el vuelo y si cuenta como equipaje.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando viaja un bebé en un vuelo de la reserva y el cliente quiere saber qué puede llevar sin coste y hasta dónde.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-vuelo` el equipaje incluido para cada pasajero.
3. Busca con `buscar-informacion` la respuesta aprobada sobre carritos y sillas de bebé en vuelos.
4. Explica al cliente lo que indican ambas fuentes.

## Qué no hace

- No inventa franquicias de equipaje.
- No contrata equipaje adicional.

## Cuándo pasa a una persona

- El cliente quiere añadir equipaje con coste.
- La información del vuelo y la aprobada no aclaran el caso.

## Cómo lo puede pedir el cliente

- «¿Puedo llevar el carrito del bebé en el avión sin pagar?»
- «el carro del niño lo dejo en la puerta del avion o lo tengo q facturar?»
- «Buenas tardes, ¿se admite la silla de coche del bebé como equipaje en el vuelo?»
- «Llevo carrito y cuna de viaje; ¿cuenta como maleta? ¿Y el bebé tiene equipaje propio?»
