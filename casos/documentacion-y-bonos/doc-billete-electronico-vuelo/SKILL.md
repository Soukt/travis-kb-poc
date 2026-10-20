---
name: doc-billete-electronico-vuelo
description: El cliente pide el billete electrónico o la confirmación del vuelo
  porque no la encuentra entre su documentación.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Reservas con vuelo en las que el cliente necesita un documento que acredite el vuelo, por ejemplo para tenerlo a mano o presentarlo en el aeropuerto.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-vuelo` los vuelos, horarios y estado.
3. Consulta con `consultar-bonos` si la confirmación del vuelo forma parte de la documentación emitida.
4. Si está disponible, la reenvía con `reenviar-bono` al email de la reserva.

## Qué no hace

- No emite billetes ni documentos de la aerolínea.
- No cambia nombres ni horarios del vuelo.

## Cuándo pasa a una persona

- El vuelo figura en la reserva pero no hay ningún documento que lo acredite.

## Cómo lo puede pedir el cliente

- «No encuentro el billete del avión entre los documentos»
- «me mandais el billete electronico del vuelo porfa»
- «Solicito el justificante de los vuelos incluidos en mi reserva.»
- «tengo el hotel pero del vuelo nada, ¿está emitido?»
