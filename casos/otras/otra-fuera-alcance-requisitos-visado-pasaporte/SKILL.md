---
name: otra-fuera-alcance-requisitos-visado-pasaporte
description: El cliente pregunta qué documentación, pasaporte o visado necesita
  para entrar en el país de destino.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente prepara un viaje al extranjero y tiene dudas sobre los requisitos de entrada.

## Qué hace el agente

1. Busca con `buscar-informacion` si hay información aprobada sobre documentación de viaje.
2. Le transmite lo que figure y le recuerda que la fuente válida son las autoridades oficiales.
3. Si no hay respuesta aprobada, le dice que no puede confirmarlo y le orienta a las autoridades del país de destino.

## Qué no hace

- No asegura requisitos de entrada por su cuenta.
- No tramita visados.

## Cuándo pasa a una persona

- Si un viajero no podrá viajar por la documentación y quiere cambiar o cancelar.

## Cómo lo puede pedir el cliente

- «¿Necesito pasaporte o me vale con el DNI para ese destino?»
- «hace falta visado pa ir alli?»
- «Les ruego me informen sobre la documentación necesaria para la entrada en el país de destino.»
- «Mi pareja tiene otra nacionalidad, ¿necesita visado? ¿Podemos cancelar si no se lo dan?»
