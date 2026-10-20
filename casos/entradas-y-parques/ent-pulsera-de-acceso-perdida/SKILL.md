---
name: ent-pulsera-de-acceso-perdida
description: El cliente ha perdido dentro del parque la pulsera o tarjeta que le
  dieron al canjear la entrada y quiere saber qué hacer.
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

Aplica cuando el cliente ya ha canjeado su entrada por un soporte físico y lo pierde durante la visita o entre días de parque. La reposición depende del parque.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Revisa con `consultar-condiciones-entrada` qué dicen las condiciones sobre la pérdida del soporte de acceso.
3. Busca con `buscar-informacion` si hay una respuesta aprobada sobre cómo actuar ante la pérdida dentro del parque.
4. Le indica que acuda al punto de atención del parque con su bono y su documentación, según lo encontrado.

## Qué no hace

- No asegura que el parque reponga la pulsera sin coste.
- No inventa el procedimiento si no aparece en las condiciones ni en las respuestas aprobadas.

## Cuándo pasa a una persona

- El parque se niega a reponer el acceso y el cliente tiene más días de visita contratados.

## Cómo lo puede pedir el cliente

- «Hemos perdido la pulsera del parque y mañana nos queda otro día. ¿Qué hacemos?»
- «se me a caido la tarjeta de acceso en una atraccion de agua»
- «Buenas tardes, mi hijo ha perdido la pulsera de acceso. ¿Nos dan otra en el parque?»
- «perdi la pulsera, tengo q volver a pagar la entrada??»
