---
name: pago-contracargo-abierto-con-el-banco
description: El cliente ha abierto una reclamación con su banco por un cobro de
  la reserva y pregunta qué pasa ahora.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya ha pedido a su banco que anule un cargo de la agencia y quiere saber cómo afecta a su reserva o a su devolución. Es un caso delicado.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado de la reserva.
3. Consulta con `consultar-pagos` el cobro afectado.
4. Recoge lo que el cliente cuenta sobre su reclamación y lo pasa con `crear-ticket-booking`.

## Qué no hace

- No opina sobre la reclamación bancaria ni le pide que la retire.
- No garantiza que la reserva siga activa.

## Cuándo pasa a una persona

- Siempre: hay una disputa bancaria abierta.

## Cómo lo puede pedir el cliente

- «He iniciado una reclamación con mi banco por el cargo de la reserva; ¿cómo afecta a mi viaje?»
- «he pedido al banco que me devuelva el cobro, ¿me anuláis la reserva?»
- «Hola, puse una disputa en el banco porque no me contestabais, ¿y ahora qué?»
- «el banco me ha devuelto el dinero del cargo, sigo teniendo el hotel?»
