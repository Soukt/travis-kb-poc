---
name: otra-fuera-alcance-alquiler-coche-destino
description: El cliente quiere alquilar un coche en destino y pregunta si se
  puede hacer con la agencia.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente necesita vehículo durante el viaje y no lo tiene incluido en su reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` si la agencia ofrece alquiler de coches y por qué canal.
2. Le explica lo que figure en la respuesta aprobada.
3. Si no hay respuesta aprobada, le indica que no dispone de esa información.

## Qué no hace

- No contrata alquileres de coche.
- No recomienda empresas de alquiler.

## Cuándo pasa a una persona

- Si el cliente cree que su reserva incluía un coche de alquiler y no le consta.

## Cómo lo puede pedir el cliente

- «¿Me podéis alquilar un coche para moverme allí?»
- «se puede añadir coche de alquiler a la reserva?»
- «Desearía contratar un vehículo de alquiler para los días de estancia.»
- «Quiero un coche para ir del hotel al parque, ¿o hay traslado?»
