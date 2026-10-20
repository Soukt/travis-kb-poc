---
name: doc-entradas-un-codigo-por-persona
description: El cliente pregunta si las entradas llevan un código para cada
  persona o uno solo para todo el grupo.
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

Reservas de entradas para varias personas en las que el cliente solo ve un código o no sabe si tienen que entrar juntos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` cuántas entradas se han emitido y en qué formato.
3. Consulta con `consultar-condiciones-entrada` si el acceso es individual o en grupo.
4. Le explica si pueden entrar por separado o tienen que hacerlo juntos.

## Qué no hace

- No divide ni reemite entradas.
- No inventa condiciones de acceso.

## Cuándo pasa a una persona

- El número de entradas emitidas no coincide con el de personas de la reserva.

## Cómo lo puede pedir el cliente

- «Solo me sale un código para cuatro personas, ¿es normal?»
- «cada uno tiene su qr o entramos todos con uno?»
- «Quisiera saber si las entradas son individuales o se trata de un único acceso para el grupo.»
- «mis suegros llegan más tarde al parque, ¿pueden entrar sin nosotros?»
