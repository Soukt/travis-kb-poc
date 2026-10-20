---
name: viaj-numero-documento-mal-introducido
description: El cliente avisa de que el número de documento de un viajero está
  mal escrito en una reserva que lo requiere, como un vuelo o un ferri.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el número de DNI, pasaporte u otro documento registrado tiene un error o corresponde a un documento antiguo. Algunos proveedores lo usan en el embarque.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué servicios están asociados al viajero.
3. Comprueba con `consultar-vuelo` o `consultar-trayecto-ferri` en qué trayectos se usa el documento.
4. Pide con `pedir-datos-cliente` el tipo y el número de documento correctos.
5. Abre con `crear-ticket-booking` la corrección con los trayectos afectados.

## Qué no hace

- No repite en la conversación el número de documento completo.
- No asegura que el proveedor permita el cambio.

## Cuándo pasa a una persona

- Siempre: la actualización la hace booking con el proveedor del transporte.

## Cómo lo puede pedir el cliente

- «He puesto mal el número de DNI de mi mujer en la reserva del barco, ¿lo podéis cambiar?»
- «Buenos días, el número de pasaporte registrado es el del documento anterior, que ya está caducado.»
- «me equivoque en una cifra del pasaporte, me van a dejar volar igual??»
- «Tengo que cambiar el número de documento de un pasajero y también saber hasta qué hora puedo embarcar el coche.»
