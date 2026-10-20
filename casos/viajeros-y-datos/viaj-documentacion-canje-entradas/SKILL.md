---
name: viaj-documentacion-canje-entradas
description: El cliente pregunta qué tiene que presentar en el parque para
  canjear o usar las entradas de su reserva.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente no sabe si debe llevar el bono impreso, en el móvil o algún documento de identidad para acceder o canjear las entradas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-condiciones-entrada` cómo se accede o se canjean las entradas y si piden identificación.
3. Comprueba con `consultar-bonos` que el bono está disponible.
4. Si el cliente no lo tiene a mano, lo reenvía con `reenviar-bono` al email de la reserva.

## Qué no hace

- No inventa condiciones de acceso.
- No envía el bono a un email distinto del de la reserva.

## Cuándo pasa a una persona

- El bono no está disponible y la fecha de la visita está cerca.
- Las condiciones exigen algo que el cliente no puede presentar.

## Cómo lo puede pedir el cliente

- «¿Tengo que imprimir las entradas o vale con enseñarlas en el móvil?»
- «Para entrar al parque, ¿piden el DNI de todos?»
- «q hay q llevar al parque pa q nos den las entradas»
- «No encuentro el bono de las entradas; ¿me lo reenviáis y me decís a qué hora abre el parque?»
