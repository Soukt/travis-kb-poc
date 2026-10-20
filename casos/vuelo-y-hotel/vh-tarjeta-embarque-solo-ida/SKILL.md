---
name: vh-tarjeta-embarque-solo-ida
description: El cliente ha conseguido la tarjeta de embarque de la ida pero no
  la de la vuelta y cree que hay un problema.
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

Tras facturar online, el cliente solo tiene la tarjeta de embarque de un trayecto. La vuelta le aparece bloqueada o no disponible.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` los dos trayectos y sus fechas.
3. Busca con `buscar-informacion` la respuesta aprobada sobre la facturación del vuelo de vuelta.
4. Le explica, según esa respuesta, cuándo y cómo podrá facturar la vuelta.

## Qué no hace

- No da por hecho que haya un error en la reserva.
- No indica momentos de apertura que no estén en la respuesta aprobada.

## Cuándo pasa a una persona

- Si una vez abierta la facturación de la vuelta sigue sin poder hacerla.

## Cómo lo puede pedir el cliente

- «Solo me deja descargar la tarjeta de embarque de la ida»
- «y la de vuelta?? no me sale»
- «Hola, ¿la vuelta se factura aparte?»
- «He facturado la ida y la vuelta aparece bloqueada, ¿es normal?»
