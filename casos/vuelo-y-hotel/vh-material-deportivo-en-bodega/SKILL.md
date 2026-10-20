---
name: vh-material-deportivo-en-bodega
description: El cliente quiere llevar material deportivo voluminoso en su vuelo,
  como bicicleta, tabla o bolsa de golf.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente viaja con un equipaje especial que no encaja como maleta normal. Necesita que se gestione con la aerolínea.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` la aerolínea y el equipaje incluido.
3. Busca con `buscar-informacion` la respuesta aprobada sobre equipaje especial y deportivo.
4. Pide con `pedir-datos-cliente` el tipo de material, sus medidas aproximadas y los trayectos.
5. Crea con `crear-ticket-booking` un ticket para que booking lo gestione con la aerolínea.

## Qué no hace

- No confirma que el material se pueda transportar.
- No da precios ni dimensiones máximas inventadas.

## Cuándo pasa a una persona

- Siempre, porque requiere gestión con la aerolínea y puede tener coste.

## Cómo lo puede pedir el cliente

- «Viajo con la bici, ¿cómo la llevo en el avión?»
- «quiero llevar mi tabla de surf, se puede??»
- «Buenas tardes, ¿cómo se añade una bolsa de golf a la reserva?»
- «Llevamos el equipo de buceo, ¿cuenta como maleta normal o va aparte? ¿Y cabe en el traslado?»
