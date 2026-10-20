---
name: camb-reserva-cancelada-sin-pedirlo
description: El cliente ve su reserva cancelada sin haberlo pedido y quiere saber por qué.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva figura cancelada o el cliente ha recibido un aviso de cancelación que no solicitó. Puede deberse a un pago no realizado, a un problema con el proveedor o a un error.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el estado de la reserva.
3. Revisa con `consultar-pagos` si había algún pago pendiente o fallido.
4. Explica lo que muestran los datos sin aventurar la causa si no está clara.
5. Abre un ticket prioritario con `crear-ticket-booking`.

## Qué no hace

- No reactiva la reserva.
- No culpa al cliente ni al proveedor sin datos.

## Cuándo pasa a una persona

- Siempre: puede implicar devoluciones, cobros o una nueva reserva.

## Cómo lo puede pedir el cliente

- «Me ha llegado un email de que mi reserva está cancelada, ¡yo no he cancelado nada!»
- «¿Por qué aparece mi reserva como cancelada?»
- «me habeis cancelado la reserva sin avisar, q ha pasado??»
- «Observo que mi reserva consta como anulada sin haberlo solicitado. Exijo una explicación.»
