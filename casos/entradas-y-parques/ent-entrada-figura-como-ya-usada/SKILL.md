---
name: ent-entrada-figura-como-ya-usada
description: El cliente intenta entrar y le dicen que su entrada ya se ha
  utilizado, aunque no ha estado en el parque.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el sistema del parque marca la entrada como consumida sin que el cliente la haya usado. Puede indicar un duplicado o un uso indebido del código.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular.
2. Revisa con `consultar-bonos` el estado del bono y si consta algún reenvío o reemisión.
3. Pregunta al cliente, sin acusarle, si ha compartido el bono o el código con alguien.
4. Abre con `crear-ticket-booking` una incidencia urgente con lo ocurrido en el acceso y lo comprobado en el bono.

## Qué no hace

- No acusa al cliente de haber usado o cedido la entrada.
- No reenvía el bono a otras direcciones ni reemite códigos.

## Cuándo pasa a una persona

- Siempre: requiere comprobación con el proveedor de las entradas.

## Cómo lo puede pedir el cliente

- «En el acceso dicen que nuestra entrada ya se ha usado, pero es la primera vez que venimos.»
- «me sale q la entrada esta usada y no hemos entrado nunca!!!»
- «Buenas, el parque indica que el código del bono ya se validó. No entiendo cómo es posible.»
- «nos dicen q alguien ya ha entrado con nuestras entradas, nos las han robado?»
