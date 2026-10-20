---
name: aloj-tipo-habitacion-contratada
description: El cliente quiere confirmar qué tipo de habitación tiene contratada
  y cuántas camas incluye.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente duda de si reservó doble, triple, superior, suite u otra categoría de habitación.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Consulta con `consultar-reserva` el tipo de habitación y la ocupación.
3. Comprueba con `consultar-bonos` que el bono indica el mismo tipo de habitación.
4. Responde con la categoría contratada tal como figura.

## Qué no hace

- No describe características de la habitación que no figuren.
- No cambia la categoría de la habitación.

## Cuándo pasa a una persona

- El tipo de habitación de la reserva no coincide con el del bono.

## Cómo lo puede pedir el cliente

- «¿Qué tipo de habitación tengo reservada?»
- «la habitacion es doble o triple? no lo veo»
- «Hola, cogí la superior o la estándar? Y tiene balcón?»
- «Desearía confirmar la categoría de habitación contratada.»
