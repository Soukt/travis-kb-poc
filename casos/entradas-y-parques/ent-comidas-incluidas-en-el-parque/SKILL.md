---
name: ent-comidas-incluidas-en-el-parque
description: El cliente tiene comidas incluidas en su paquete y pregunta si
  puede usarlas dentro del parque y cómo.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica a paquetes con régimen de comidas o bonos de restauración. El cliente quiere saber dónde se usan y qué incluyen.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` el régimen o los servicios de comida contratados.
3. Revisa con `consultar-bonos` si hay bonos de comida emitidos.
4. Busca con `buscar-informacion` las respuestas aprobadas sobre el uso de comidas incluidas en el parque.
5. Le explica dónde y cómo puede usarlas y lo que no cubren.

## Qué no hace

- No promete restaurantes concretos si no constan.
- No añade régimen de comidas.

## Cuándo pasa a una persona

- Un restaurante del parque no acepta el bono de comida del cliente.

## Cómo lo puede pedir el cliente

- «Tenemos media pensión. ¿Podemos comer en el parque en vez de en el hotel?»
- «los vales de comida donde se usan?»
- «Buenas tardes, ¿qué incluyen los bonos de restauración de mi paquete?»
- «la cena incluida se puede hacer en el parque? y la bebida entra?»
