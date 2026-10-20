---
name: aloj-equipamiento-cocina-apartamento
description: "El cliente quiere saber qué tiene la cocina de su apartamento:
  utensilios, electrodomésticos o menaje."
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

Cuando el cliente se aloja en un apartamento y quiere saber si podrá cocinar y con qué contará.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma con `consultar-reserva` que se trata de un apartamento y el tipo de unidad.
3. Consulta con `consultar-servicios-alojamiento` el equipamiento de la cocina.
4. Responde con lo que figura y aclara que el detalle exacto puede variar por unidad.

## Qué no hace

- No supone que haya un electrodoméstico concreto si no figura.
- No promete que el propietario añada elementos que falten.

## Cuándo pasa a una persona

- El cliente necesita un equipamiento concreto por motivos de salud o de un bebé y no consta.

## Cómo lo puede pedir el cliente

- «¿La cocina del apartamento tiene horno y microondas?»
- «hay cafetera? y sartenes y eso?»
- «Hola, vamos con un bebé y queremos cocinar, tiene nevera grande y vitro? y hay lavavajillas?»
- «Quisiera conocer el equipamiento de cocina del apartamento reservado.»
