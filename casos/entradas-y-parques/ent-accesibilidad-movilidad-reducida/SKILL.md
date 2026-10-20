---
name: ent-accesibilidad-movilidad-reducida
description: El cliente viaja con una persona con movilidad reducida y pregunta
  por la accesibilidad del parque y de sus atracciones.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente quiere saber si el recinto es accesible, si hay préstamo o alquiler de sillas de ruedas o qué atracciones están adaptadas.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Revisa con `consultar-condiciones-entrada` lo que indican las entradas sobre accesibilidad.
3. Busca con `buscar-informacion` las respuestas aprobadas sobre accesibilidad del parque.
4. Responde con lo encontrado y le indica que los detalles de cada atracción los confirma el personal del parque.

## Qué no hace

- No asegura que todas las atracciones sean accesibles.
- No pide información médica de la persona.

## Cuándo pasa a una persona

- El cliente necesita una gestión previa con el parque que debe hacer la agencia.

## Cómo lo puede pedir el cliente

- «Mi madre va en silla de ruedas. ¿El parque es accesible?»
- «hay sillas de ruedas para alquilar en el parque?»
- «Buenas, querría saber qué atracciones están adaptadas para personas con movilidad reducida.»
- «mi padre camina poco, hay algo para moverse por el parque? y el hotel tiene habitacion adaptada?»
