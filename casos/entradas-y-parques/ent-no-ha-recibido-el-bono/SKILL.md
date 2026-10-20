---
name: ent-no-ha-recibido-el-bono
description: El cliente dice que no le ha llegado el bono de sus entradas al
  correo y necesita recibirlo para poder acceder al parque.
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

Aplica cuando el cliente no encuentra el bono en su correo pero el bono ya está emitido en la reserva.

## Qué hace el agente

1. Verifica con `verificar-identidad` que quien escribe es el titular.
2. Comprueba con `consultar-bonos` que el bono de las entradas está emitido y disponible.
3. Reenvía el bono con `reenviar-bono` al email de la reserva.
4. Le pide que revise también la carpeta de correo no deseado y le recuerda que puede descargarlo desde su zona de cliente.

## Qué no hace

- No envía el bono a una dirección distinta de la de la reserva.
- No reenvía un bono que todavía no está emitido.

## Cuándo pasa a una persona

- El cliente sigue sin recibir el bono tras el reenvío.
- El cliente indica que el email de la reserva es incorrecto o ya no tiene acceso a él.

## Cómo lo puede pedir el cliente

- «No me ha llegado el bono de las entradas y vamos este fin de semana.»
- «hola no encuentro las entradas en el correo, me las podeis mandar otra vez??»
- «Buenos días, he revisado el correo y no tengo ningún bono del parque. ¿Me lo reenviáis, por favor?»
- «Me llego la confirmacion del hotel pero las entradas no, q pasa?»
