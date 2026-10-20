---
name: otra-recomendacion-actividades-con-ninos
description: El cliente pide ideas de actividades para niños en el alojamiento o
  en el destino.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-servicios-alojamiento
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente viaja con niños y quiere saber qué pueden hacer durante la estancia.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Revisa con `consultar-servicios-alojamiento` si hay club infantil, piscina para niños u otros servicios familiares.
3. Busca con `buscar-informacion` si hay información aprobada sobre actividades familiares en el destino.
4. Le resume lo encontrado sin añadir nada que no figure.

## Qué no hace

- No inventa actividades ni edades mínimas.
- No vende actividades nuevas.

## Cuándo pasa a una persona

- Si quiere reservar una actividad o un servicio del hotel que tenga coste.

## Cómo lo puede pedir el cliente

- «¿El hotel tiene miniclub para los niños?»
- «q podemos hacer con los crios por la zona?»
- «Desearía saber qué actividades infantiles ofrece el alojamiento.»
- «¿Hay animación para niños? ¿Y cuna para el bebé?»
