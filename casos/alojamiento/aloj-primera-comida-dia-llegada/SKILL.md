---
name: aloj-primera-comida-dia-llegada
description: El cliente quiere saber si el régimen empieza con la cena del día
  de llegada o con el desayuno del día siguiente, y cuál es la última comida.
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

Cuando el cliente con media pensión, pensión completa o todo incluido pregunta qué comidas le corresponden el primer y el último día.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba régimen y fechas con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` si el alojamiento indica la primera y la última comida.
4. Busca con `buscar-informacion` la respuesta aprobada sobre el inicio y fin del régimen.
5. Responde con lo que figure para su alojamiento.

## Qué no hace

- No garantiza comidas fuera de lo que indique el alojamiento.
- No pide al alojamiento que guarde la cena si se llega tarde.

## Cuándo pasa a una persona

- El cliente llegará tarde y quiere que se le reserve la cena incluida.

## Cómo lo puede pedir el cliente

- «Si llegamos por la tarde, ¿la cena de ese día está incluida?»
- «el ultimo dia nos dan la comida o solo desayuno?»
- «Hola, la pensión completa empieza con la cena o con la comida? y si llegamos tarde nos guardan algo?»
- «Quisiera saber qué comidas comprende el régimen el día de llegada y el de salida.»
