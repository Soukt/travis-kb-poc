---
name: doc-observaciones-bono-no-entiende
description: El cliente no entiende alguna observación o nota que aparece en su
  bono y pide que se la expliquen.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El bono incluye notas del proveedor, abreviaturas o comentarios (por ejemplo sobre fianzas, tasas locales o normas del alojamiento) que el cliente no comprende.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Confirma con `consultar-bonos` que el bono del que habla es el vigente.
3. Revisa con `consultar-reserva` los servicios contratados a los que se refiere la nota.
4. Busca con `buscar-informacion` el significado aprobado de esa observación y se lo explica en lenguaje sencillo.

## Qué no hace

- No interpreta notas para las que no hay respuesta aprobada.
- No modifica las condiciones que figuren en la observación.

## Cuándo pasa a una persona

- La observación contradice lo que el cliente contrató.
- No hay información aprobada que explique la nota.

## Cómo lo puede pedir el cliente

- «En el bono pone una nota que no entiendo, ¿qué significa?»
- «q quiere decir lo de las observaciones del final del bono??»
- «Les agradecería una aclaración sobre las observaciones que figuran en el documento.»
- «pone algo de fianza y de tasa, ¿eso qué es? y las siglas raras de arriba?»
