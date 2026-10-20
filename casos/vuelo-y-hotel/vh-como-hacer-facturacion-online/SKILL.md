---
name: vh-como-hacer-facturacion-online
description: El cliente pregunta cómo y cuándo puede hacer la facturación online
  de su vuelo.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente no ha facturado nunca online o no sabe dónde se hace en su caso. Quiere los pasos y el momento en que se abre.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la aerolínea operadora de cada trayecto.
3. Busca con `buscar-informacion` la respuesta aprobada sobre facturación online y su apertura.
4. Le explica los pasos según esa respuesta y le recuerda tener a mano la documentación de todos los viajeros.

## Qué no hace

- No hace la facturación en nombre del cliente.
- No da un momento de apertura inventado.

## Cuándo pasa a una persona

- Si tras seguir los pasos la aerolínea sigue sin dejarle facturar.

## Cómo lo puede pedir el cliente

- «¿Cómo hago el check-in online?»
- «cuando se puede facturar por internet?»
- «Buenas tardes, ¿la facturación online se hace en vuestra web o en la de la aerolínea?»
- «aver si me explicais lo del check in q no me aclaro»
