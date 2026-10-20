---
name: vh-billete-electronico-del-vuelo
description: El cliente necesita la confirmación o el billete electrónico de su
  vuelo para presentarlo en el aeropuerto o en algún trámite.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

El cliente tiene el bono del hotel pero no encuentra la documentación del vuelo, o se la piden en algún trámite. Quiere que se la vuelvan a enviar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` los trayectos de la reserva.
3. Comprueba con `consultar-bonos` que la documentación del vuelo está disponible.
4. La reenvía con `reenviar-bono` al email de la reserva y le sugiere revisar también la carpeta de correo no deseado.

## Qué no hace

- No envía la documentación a un email distinto del de la reserva.
- No genera documentos de vuelo que no existan.

## Cuándo pasa a una persona

- Si la documentación del vuelo no está disponible o no le llega tras el reenvío.
- Si pide recibirla en otro email o con otros datos.

## Cómo lo puede pedir el cliente

- «¿Me podéis mandar el billete electrónico del vuelo?»
- «necesito el justificante del vuelo pa el visado»
- «Buenas, en el aeropuerto me pueden pedir la confirmación del vuelo de vuelta, ¿me la reenviáis?»
- «no encuentro el billete de avion, solo tengo el bono del hotel»
