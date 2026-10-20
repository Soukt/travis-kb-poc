---
name: doc-entradas-horario-pase-bono
description: El cliente ve una hora de pase o de sesión en sus entradas y
  pregunta si puede ir en otro momento.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Entradas con franja horaria o sesión asignada en las que el cliente duda si la hora es obligatoria.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` que las entradas están emitidas.
3. Consulta con `consultar-condiciones-entrada` si la franja es obligatoria, el margen de acceso y qué ocurre si se llega tarde.
4. Le explica las condiciones tal como las devuelve la acción.

## Qué no hace

- No cambia la sesión ni la franja horaria.
- No inventa márgenes de tolerancia.

## Cuándo pasa a una persona

- El cliente quiere cambiar la sesión o ya ha perdido la franja asignada.

## Cómo lo puede pedir el cliente

- «En las entradas pone una hora, ¿tengo que ir justo a esa hora?»
- «si llegamos mas tarde del pase nos dejan entrar?»
- «Les consulto si la franja horaria indicada en las entradas es de obligado cumplimiento.»
- «la sesión del espectáculo es por la mañana y preferimos la tarde, ¿se puede?»
