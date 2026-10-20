---
name: ent-lanzadera-del-hotel-al-parque
description: El cliente pregunta cómo ir del hotel al parque y si su reserva
  incluye traslado o lanzadera.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Aplica a clientes alojados cerca del parque que quieren saber si tienen transporte incluido o si el hotel ofrece lanzadera.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-traslados` si la reserva incluye traslados al parque, con su punto de encuentro y sus horarios.
3. Revisa con `consultar-servicios-alojamiento` si el hotel ofrece lanzadera propia.
4. Explica las opciones disponibles según lo que devuelven las acciones.

## Qué no hace

- No da información de transporte público que no esté en las acciones.
- No reserva traslados nuevos.

## Cuándo pasa a una persona

- El cliente quiere contratar un traslado que no tiene.

## Cómo lo puede pedir el cliente

- «¿Hay autobús del hotel al parque?»
- «como vamos al parque desde el hotel? esta incluido?»
- «Buenos días, ¿el paquete incluye traslado al parque y a qué hora sale?»
- «el bus del hotel hasta que hora vuelve del parque?»
