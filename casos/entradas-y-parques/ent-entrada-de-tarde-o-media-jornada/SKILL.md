---
name: ent-entrada-de-tarde-o-media-jornada
description: El cliente tiene una entrada de tarde o de media jornada y quiere
  saber desde qué momento puede acceder y qué incluye.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica a entradas con acceso limitado a una parte del día. El cliente quiere planificar la llegada y saber qué cubre esa modalidad.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` el tipo de entrada contratada.
3. Revisa con `consultar-condiciones-entrada` el horario de acceso permitido y si incluye espectáculos o atracciones concretas.
4. Responde con esos datos y aclara qué no cubre esa modalidad.

## Qué no hace

- No asegura el acceso antes del horario que marca la entrada.
- No convierte la entrada en una de jornada completa.

## Cuándo pasa a una persona

- El cliente creía haber comprado jornada completa y quiere cambiar la entrada.

## Cómo lo puede pedir el cliente

- «Tengo entrada de tarde. ¿A partir de qué hora puedo entrar?»
- «la entrada de media jornada desde q hora vale?»
- «Buenos días, ¿la entrada de tarde incluye el espectáculo nocturno?»
- «pensaba q era para todo el dia y pone tarde, eso que es?»
