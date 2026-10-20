---
name: ent-reservar-dia-en-web-del-parque
description: El cliente pregunta si, además del bono, tiene que reservar el día
  de visita directamente con el parque.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Aplica cuando algunas entradas requieren registrar la fecha o la franja con el parque antes de ir. El cliente no sabe si su entrada lo exige ni con qué referencia hacerlo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Revisa con `consultar-condiciones-entrada` si las entradas exigen reservar el día con el parque.
3. Consulta con `consultar-bonos` la referencia del bono que necesitará para hacer esa reserva.
4. Explica el paso que le falta, si existe, y le recomienda hacerlo con antelación por si hay límite de aforo.

## Qué no hace

- No reserva el día en nombre del cliente.
- No facilita direcciones web del parque.

## Cuándo pasa a una persona

- El parque no reconoce la referencia del bono al intentar reservar el día.

## Cómo lo puede pedir el cliente

- «He leído que hay que reservar el día en el parque aunque tengas entrada. ¿Es mi caso?»
- «tengo q apuntarme en algun sitio para el dia o con el bono basta?»
- «Quería confirmar si debo registrar la fecha de visita con el parque o ya está hecho por vuestra parte.»
- «Hola, ¿con qué número reservo el día en el parque? No encuentro nada en el bono.»
