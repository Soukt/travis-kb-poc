---
name: aloj-tiempo-entre-salida-y-vuelo
description: El cliente tiene que dejar la habitación bastante antes de su vuelo
  de vuelta y pregunta qué opciones tiene mientras tanto.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-horarios-hotel
    - consultar-servicios-alojamiento
    - consultar-traslados
  simulado: "true"
---
## Cuándo aplica

Cuando hay un hueco entre la hora de salida del alojamiento y el vuelo de regreso. Aplica si el cliente quiere organizar ese tiempo sin ampliar la estancia.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba la hora del vuelo de vuelta con `consultar-vuelo`.
3. Obtiene la hora de salida del alojamiento con `consultar-horarios-hotel`.
4. Revisa con `consultar-servicios-alojamiento` si hay consigna o zonas comunes utilizables tras la salida.
5. Consulta con `consultar-traslados` si hay traslado incluido y a qué hora le recogen.
6. Resume al cliente cómo encaja todo con la información obtenida.

## Qué no hace

- No solicita una salida tardía por su cuenta.
- No cambia el horario de los traslados ni del vuelo.

## Cuándo pasa a una persona

- El cliente quiere pagar por conservar la habitación más tiempo.
- La hora de recogida del traslado no encaja con la del vuelo.

## Cómo lo puede pedir el cliente

- «Tenemos que dejar el hotel por la mañana y el vuelo sale por la noche, ¿qué podemos hacer con las maletas?»
- «q hacemos desde q dejamos la habitacion hasta el vuelo??»
- «Hola, el último día podemos seguir usando la piscina después de dejar la habitación? y el traslado a qué hora pasa?»
- «Les agradecería que me orientasen sobre el tiempo entre la salida del hotel y nuestro vuelo de regreso.»
