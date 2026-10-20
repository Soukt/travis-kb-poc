---
name: aloj-fumar-habitacion-terraza
description: El cliente fumador pregunta si puede fumar en la habitación, en la
  terraza o en alguna zona del alojamiento.
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

Cuando el cliente quiere conocer las normas sobre fumar en su alojamiento antes o durante la estancia.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento y el tipo de habitación con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` si hay habitaciones o zonas para fumadores.
4. Busca con `buscar-informacion` la respuesta aprobada sobre penalizaciones por fumar en espacios no permitidos.
5. Responde con las normas del alojamiento y le recomienda respetarlas para evitar cargos.

## Qué no hace

- No solicita habitación de fumadores como si estuviera garantizada.
- No indica importes de posibles penalizaciones.

## Cuándo pasa a una persona

- El alojamiento ha cargado una penalización al cliente por fumar.
- El cliente pide expresamente cambiar a una habitación de fumadores.

## Cómo lo puede pedir el cliente

- «¿Está permitido fumar en la terraza de la habitación?»
- «se puede fumar en el hotel o donde?»
- «Hola, somos fumadores, hay alguna zona? y el balcón cuenta como dentro?»
- «Quisiera conocer la normativa del alojamiento respecto al tabaco.»
