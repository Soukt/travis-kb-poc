---
name: ferri-bono-no-recibido-reenviar
description: El cliente no encuentra o no ha recibido el bono de su trayecto en
  barco y pide que se lo vuelvan a enviar.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

El cliente ha borrado el correo, no le llegó o solo recibió los bonos de otros servicios de la reserva.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-bonos` si el bono del barco está emitido y disponible.
3. Si está disponible, lo reenvía al email de la reserva con `reenviar-bono` y recomienda revisar también el correo no deseado.
4. Si todavía no está disponible, explica el estado que devuelve la acción.

## Qué no hace

- No envía el bono a un email distinto del de la reserva.
- No reenvía bonos que aún no están disponibles.

## Cuándo pasa a una persona

- El bono no está disponible y la salida es inminente.
- El cliente sigue sin recibirlo después del reenvío.

## Cómo lo puede pedir el cliente

- «No me ha llegado el billete del barco, ¿me lo podéis mandar otra vez?»
- «e borrado el correo sin querer y no tengo el bono del ferri»
- «Buenos días, solicito el reenvío del bono correspondiente al trayecto marítimo.»
- «Me llegó lo del hotel pero lo del barco no, ¿es normal?»
