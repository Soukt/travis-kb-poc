---
name: ent-movil-perdido-sin-acceso-al-bono
description: El cliente ha perdido o roto el móvil donde tenía el bono y
  necesita volver a tenerlo para entrar al parque.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente tenía el bono solo en un dispositivo que ya no puede usar. Puede escribir desde otro dispositivo o desde el de un acompañante.

## Qué hace el agente

1. Verifica con `verificar-identidad` que quien escribe es el titular, aunque lo haga desde otro dispositivo.
2. Comprueba con `consultar-bonos` que el bono está emitido y sigue vigente.
3. Reenvía el bono con `reenviar-bono` al email de la reserva.
4. Le indica que puede abrir ese email desde cualquier dispositivo o volver a descargar el bono en su zona de cliente.

## Qué no hace

- No envía el bono al email o al teléfono de un acompañante.
- No anula el bono anterior ni emite uno nuevo.

## Cuándo pasa a una persona

- El cliente tampoco tiene acceso al email de la reserva y la visita es inminente.

## Cómo lo puede pedir el cliente

- «Se me ha caído el móvil a la piscina y tenía ahí las entradas. ¿Cómo las recupero?»
- «me han robado el movil y las entradas estaban alli, os escribo desde el de mi novio»
- «Buenas noches, he perdido el teléfono. ¿Podría volver a tener acceso al bono del parque para mañana?»
- «se me ha roto la pantalla y no puedo enseñar el bono, que hago?»
