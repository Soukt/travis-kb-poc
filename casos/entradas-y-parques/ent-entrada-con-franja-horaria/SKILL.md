---
name: ent-entrada-con-franja-horaria
description: El cliente ve un horario impreso en su entrada y quiere saber si es
  obligatorio para entrar o solo orientativo.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica a entradas con franja horaria de acceso. El cliente no sabe si tiene que entrar exactamente a esa hora ni qué margen tiene.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-bonos` la franja que figura en el bono.
3. Revisa con `consultar-condiciones-entrada` si la franja es obligatoria y qué margen admite el parque.
4. Explica cómo funciona su franja y qué ocurre si llega fuera de ella.

## Qué no hace

- No cambia la franja horaria de la entrada.
- No inventa un margen de tolerancia que no figure en las condiciones.

## Cuándo pasa a una persona

- El cliente quiere cambiar la franja asignada.

## Cómo lo puede pedir el cliente

- «En la entrada pone una hora. ¿Tenemos que entrar justo a esa hora?»
- «la hora del bono es obligatoria o podemos ir cuando queramos?»
- «Buenos días, ¿qué significa la franja horaria que aparece en nuestras entradas?»
- «si entramos antes de la hora q pone nos dejan?»
