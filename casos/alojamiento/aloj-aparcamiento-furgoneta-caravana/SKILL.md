---
name: aloj-aparcamiento-furgoneta-caravana
description: El cliente viaja con furgoneta, autocaravana o remolque y pregunta
  si cabrá en el aparcamiento del alojamiento.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el vehículo es más grande de lo habitual y al cliente le preocupan las restricciones de altura o tamaño.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` el tipo de aparcamiento y si indica limitaciones.
4. Busca con `buscar-informacion` la respuesta aprobada sobre vehículos de gran tamaño.
5. Responde con lo que figure y, si no hay datos de medidas, lo indica sin suponer.

## Qué no hace

- No da medidas de acceso que no figuren.
- No reserva espacio para el vehículo.

## Cuándo pasa a una persona

- El cliente necesita la confirmación del alojamiento para poder viajar con ese vehículo.

## Cómo lo puede pedir el cliente

- «Viajamos en autocaravana, ¿hay sitio en el aparcamiento del hotel?»
- «mi furgo es alta, entra en el parking?»
- «Hola, llevamos remolque con las bicis, se puede dejar en el hotel? y es cubierto?»
- «Desearía saber si el aparcamiento admite vehículos de gran altura.»
