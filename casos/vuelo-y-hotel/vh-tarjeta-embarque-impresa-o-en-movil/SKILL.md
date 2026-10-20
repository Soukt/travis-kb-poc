---
name: vh-tarjeta-embarque-impresa-o-en-movil
description: El cliente pregunta si tiene que imprimir la tarjeta de embarque o
  si le vale enseñarla en el móvil.
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

El cliente ya ha facturado o va a hacerlo y no tiene claro en qué formato debe llevar la tarjeta. Puede dudar especialmente del vuelo de vuelta.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la aerolínea operadora de cada trayecto.
3. Busca con `buscar-informacion` la respuesta aprobada sobre el formato de la tarjeta de embarque.
4. Le traslada esa información y le recomienda tener la tarjeta accesible antes de llegar al control.

## Qué no hace

- No asegura que todos los aeropuertos acepten la tarjeta en el móvil.
- No envía tarjetas de embarque.

## Cuándo pasa a una persona

- Si no hay respuesta aprobada y algún aeropuerto del viaje exige un formato concreto que el cliente no puede conseguir.

## Cómo lo puede pedir el cliente

- «¿Hay que imprimir la tarjeta de embarque?»
- «vale con enseñar la tarjeta en el movil?»
- «Buenas, no tengo impresora, ¿me la imprimen en el aeropuerto?»
- «la tarjeta del movil vale tb en la vuelta o alli la piden en papel?»
