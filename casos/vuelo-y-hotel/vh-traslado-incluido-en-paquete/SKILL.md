---
name: vh-traslado-incluido-en-paquete
description: El cliente quiere saber si su paquete incluye traslado entre el
  aeropuerto y el hotel y de qué tipo es.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
  simulado: "true"
---
## Cuándo aplica

El cliente no recuerda si contrató traslado o quiere saber si es de ida, de vuelta o de ambos, y si es privado o compartido.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-traslados` los traslados incluidos en la reserva.
3. Le indica qué trayectos cubre y de qué tipo es cada traslado, según devuelve la acción.
4. Si no hay traslado incluido, se lo dice con claridad.

## Qué no hace

- No da por incluido un traslado que no aparece en la reserva.
- No da precios de traslados.

## Cuándo pasa a una persona

- Si el cliente quiere contratar o mejorar el traslado.

## Cómo lo puede pedir el cliente

- «¿Tenemos traslado incluido del aeropuerto al hotel?»
- «el traslado es privado o compartido?»
- «Buenas, ¿el traslado incluye también la vuelta al aeropuerto?»
- «hay q coger taxi o nos recoge alguien?»
