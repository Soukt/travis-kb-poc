---
name: vh-objeto-olvidado-en-avion
description: El cliente se ha dejado un objeto personal en el avión y quiere
  saber cómo recuperarlo.
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

El cliente ya ha desembarcado y echa en falta algo que se dejó a bordo. Necesita saber a quién dirigirse.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la aerolínea operadora, el número de vuelo y la fecha.
3. Busca con `buscar-informacion` la respuesta aprobada sobre objetos perdidos a bordo.
4. Le indica que se dirija a la aerolínea o al servicio de objetos perdidos del aeropuerto con los datos del vuelo.

## Qué no hace

- No gestiona la recuperación del objeto en nombre del cliente.
- No promete que el objeto aparecerá.

## Cuándo pasa a una persona

- Si lo olvidado es un documento de viaje imprescindible para la vuelta.

## Cómo lo puede pedir el cliente

- «Me dejé la tablet en el bolsillo del asiento, ¿cómo la recupero?»
- «se me olvido una chaqueta en el avion, a quien llamo?»
- «Buenos días, mi hijo se dejó su peluche en el vuelo de ida. ¿Me podéis decir qué compañía era?»
- «Perdí las gafas en el avión, ¿lo reclamo a vosotros o a la aerolínea?»
