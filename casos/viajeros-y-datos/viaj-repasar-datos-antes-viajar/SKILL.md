---
name: viaj-repasar-datos-antes-viajar
description: El cliente quiere comprobar antes del viaje que todos los viajeros
  figuran correctamente en la reserva.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere quedarse tranquilo antes de salir y revisar quién figura en la reserva y si los bonos están listos. No hay un error concreto detectado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Muestra al cliente, a partir de `consultar-reserva`, los viajeros tal y como figuran y los servicios contratados.
3. Revisa con `consultar-bonos` si los bonos están disponibles.
4. Pide al cliente que compare los nombres con los documentos con los que viajará cada persona.

## Qué no hace

- No muestra datos que las acciones no devuelvan.
- No corrige nada en la reserva.

## Cuándo pasa a una persona

- El cliente detecta un error que requiere corrección.
- Falta algún viajero o algún bono no está disponible sin motivo claro.

## Cómo lo puede pedir el cliente

- «Hola, ¿me podéis confirmar que están bien los nombres de todos los que viajamos?»
- «Antes de salir quería revisar que la reserva está completa y con los datos correctos.»
- «me dices q nombres salen en la reserva? es q no me fio de haberlos puesto bien»
- «Quiero comprobar los viajeros y de paso saber si ya tengo los bonos para descargar.»
