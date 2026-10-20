---
name: ent-atraccion-incluida-o-con-suplemento
description: El cliente pregunta si una atracción, actividad o zona concreta
  está incluida en su entrada o se paga aparte.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando en el parque hay experiencias con suplemento y el cliente quiere saber qué cubre su entrada.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` el tipo de entrada.
3. Revisa con `consultar-condiciones-entrada` qué incluye y qué excluye la entrada.
4. Si no aparece, busca con `buscar-informacion` una respuesta aprobada sobre esa atracción.
5. Responde con lo encontrado o indica que no consta, sin suponer.

## Qué no hace

- No da precios de suplementos.
- No vende suplementos.

## Cuándo pasa a una persona

- El cliente quiere contratar el suplemento a través de la agencia.

## Cómo lo puede pedir el cliente

- «¿La entrada incluye la zona de realidad virtual o se paga aparte?»
- «las atracciones de agua entran en la entrada?»
- «Buenos días, ¿qué actividades del parque no están incluidas en mi entrada?»
- «hay q pagar algo mas dentro o con la entrada vale todo?»
