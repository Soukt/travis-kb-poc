---
name: ent-entrada-combinada-dos-parques
description: El cliente tiene una entrada combinada para dos parques y quiere
  saber cómo usarla, en qué orden y si puede cambiar de parque el mismo día.
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

Aplica a entradas que dan acceso a más de un parque. El cliente quiere organizar los días de visita.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-bonos` qué parques y qué días cubre el bono.
3. Revisa con `consultar-condiciones-entrada` si se puede pasar de un parque a otro el mismo día y si hay un orden obligatorio.
4. Le explica cómo usar la entrada combinada.

## Qué no hace

- No añade otro parque a la entrada.
- No da información de transporte entre parques que no conste.

## Cuándo pasa a una persona

- El bono no recoge uno de los parques contratados.

## Cómo lo puede pedir el cliente

- «Tengo la entrada de dos parques. ¿Puedo ir a los dos el mismo día?»
- «q parque va primero con la combinada?»
- «Buenas, ¿la entrada combinada exige visitar los parques en días distintos?»
- «con la combinada el acuatico va el mismo dia o otro?»
