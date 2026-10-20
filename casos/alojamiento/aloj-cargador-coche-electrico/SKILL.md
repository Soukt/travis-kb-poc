---
name: aloj-cargador-coche-electrico
description: El cliente viaja con coche eléctrico y pregunta si el alojamiento
  tiene punto de carga.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente necesita cargar su vehículo durante la estancia y quiere saber si podrá hacerlo en el alojamiento.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` si hay puntos de carga y si requieren reserva o tienen coste.
4. Responde con lo que figura y, si no consta, lo dice claramente.

## Qué no hace

- No supone el tipo de conector ni la potencia disponible.
- No reserva el punto de carga.

## Cuándo pasa a una persona

- El cliente necesita confirmar la carga para poder hacer el viaje de vuelta y no hay información.

## Cómo lo puede pedir el cliente

- «¿El hotel tiene cargador para coches eléctricos?»
- «puedo cargar el coche en el parking?»
- «Hola, vamos con el eléctrico y es justo para llegar, hay enchufe en el hotel o algo cerca?»
- «Quisiera saber si el alojamiento dispone de punto de recarga para vehículos eléctricos.»
