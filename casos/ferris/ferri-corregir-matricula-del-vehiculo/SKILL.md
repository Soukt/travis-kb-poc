---
name: ferri-corregir-matricula-del-vehiculo
description: El cliente se equivocó al indicar la matrícula de su vehículo o
  viajará con otro coche del mismo tipo y quiere cambiarla.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La matrícula registrada en el trayecto no es la del vehículo con el que el cliente se va a presentar, pero el tipo de vehículo no cambia.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la matrícula y la categoría registradas.
3. Pide con `pedir-datos-cliente` la matrícula correcta y la confirmación de que el vehículo es del mismo tipo.
4. Abre un caso con `crear-ticket-booking` con el dato registrado y el nuevo.
5. Informa al cliente de que booking lo tramitará con la naviera.

## Qué no hace

- No confirma el cambio hasta que booking lo gestione.
- No promete que el cambio sea gratuito.
- No trata como simple cambio de matrícula lo que en realidad es un cambio de tipo de vehículo.

## Cuándo pasa a una persona

- Siempre: el cambio lo tramita booking con la naviera y puede tener coste.

## Cómo lo puede pedir el cliente

- «Me he equivocado en una letra de la matrícula, ¿cómo lo corrijo?»
- «al final vamos con el otro coche de casa, hay q cambiar la matricula?»
- «Buenas tardes, he cambiado de coche y necesito actualizar la matrícula en el billete del ferri.»
- «puse mal la matricula, me van a dejar embarcar igual??»
