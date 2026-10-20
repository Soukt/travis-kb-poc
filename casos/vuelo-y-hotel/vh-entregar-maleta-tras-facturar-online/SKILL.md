---
name: vh-entregar-maleta-tras-facturar-online
description: El cliente ya ha facturado online y pregunta dónde y cómo tiene que
  dejar la maleta en el aeropuerto.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente tiene la tarjeta de embarque pero lleva equipaje facturado. No sabe si tiene que hacer cola en el mostrador ni a qué hora.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` la aerolínea y el equipaje facturado incluido.
3. Busca con `buscar-informacion` la respuesta aprobada sobre la entrega de equipaje tras la facturación online.
4. Le explica cómo se entrega la maleta y le recomienda consultar en las pantallas del aeropuerto el mostrador asignado.

## Qué no hace

- No da horarios de cierre de mostradores inventados.
- No indica mostradores concretos.

## Cuándo pasa a una persona

- Si en el mostrador la aerolínea no reconoce el equipaje incluido.

## Cómo lo puede pedir el cliente

- «Ya tengo la tarjeta de embarque, ¿dónde dejo la maleta?»
- «si facture online tengo q hacer cola igual para la maleta?»
- «Buenas, ¿la maleta se entrega en el mismo mostrador que el resto de pasajeros?»
- «check in hecho, y ahora q hago con la maleta grande»
