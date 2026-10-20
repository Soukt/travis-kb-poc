---
name: otra-abuso-pide-numero-completo-tarjeta
description: El cliente pide que le digan el número completo de la tarjeta o los
  datos bancarios con los que pagó.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

El cliente no recuerda con qué medio pagó, o quiere comprobarlo, y pide los datos completos.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` los pagos hechos en la reserva.
3. Le informa de los pagos realizados sin mostrar datos completos de tarjetas ni cuentas.
4. Le explica que por seguridad no se facilitan esos datos.

## Qué no hace

- No da números completos de tarjeta ni códigos de seguridad.
- No pide al cliente sus datos bancarios por el chat.

## Cuándo pasa a una persona

- Si el cliente sospecha que han usado su tarjeta sin permiso.

## Cómo lo puede pedir el cliente

- «¿Me dices el número de la tarjeta con la que pagué? No sé cuál usé.»
- «dame los numeros de la tarjeta del pago q no me acuerdo cual era»
- «Solicito los datos completos del medio de pago utilizado en la reserva.»
- «¿Con qué tarjeta se pagó? Es que mi marido usó la suya y quiero saber cuál.»
