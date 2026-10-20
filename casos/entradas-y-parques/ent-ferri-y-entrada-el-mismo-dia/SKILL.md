---
name: ent-ferri-y-entrada-el-mismo-dia
description: El cliente llega en ferri el mismo día que tiene entrada al parque
  y quiere saber si le da tiempo y cómo organizarse.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica a reservas con trayecto en ferri y entradas en la misma fecha. El cliente quiere cuadrar la llegada al puerto con el horario del parque.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-trayecto-ferri` el horario de llegada del trayecto y si viaja con vehículo.
3. Revisa con `consultar-condiciones-entrada` el horario del parque y si la entrada tiene franja.
4. Le ayuda a valorar si le da tiempo, sin garantizar tiempos de desplazamiento.

## Qué no hace

- No calcula tiempos de desplazamiento que no devuelvan las acciones.
- No cambia el trayecto ni las entradas.

## Cuándo pasa a una persona

- No le da tiempo y el cliente quiere cambiar el trayecto o la fecha de la entrada.

## Cómo lo puede pedir el cliente

- «Llegamos en barco por la mañana. ¿Nos da tiempo a ir al parque ese mismo día?»
- «el ferri llega a q hora? es q tenemos entradas para ese dia»
- «Buenas tardes, quisiera cuadrar la hora de llegada del ferri con la entrada del parque.»
- «bajamos del barco con el coche y vamos directos al parque, llegamos a la franja?»
