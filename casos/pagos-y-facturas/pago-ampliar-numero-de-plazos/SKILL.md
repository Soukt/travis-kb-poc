---
name: pago-ampliar-numero-de-plazos
description: El cliente quiere repartir lo que le queda por pagar en más plazos
  de los que contrató.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva ya tiene un calendario de pagos y el cliente pide dividir el pendiente en más cobros o en cobros más pequeños.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` el calendario actual y el importe pendiente.
3. Busca con `buscar-informacion` si hay alguna respuesta aprobada sobre cambiar el número de plazos.
4. Recoge la propuesta del cliente y la envía a booking con `crear-ticket-booking`.

## Qué no hace

- No crea un calendario de pagos nuevo.
- No da por hecho que la ampliación sea posible.

## Cuándo pasa a una persona

- Siempre: pedir un calendario distinto al contratado es una excepción.

## Cómo lo puede pedir el cliente

- «Desearía saber si existe la posibilidad de fraccionar el importe pendiente en más pagos.»
- «puedo pagar lo q queda en mas veces?? los plazos me salen muy altos»
- «Hola, ¿me dejáis dividir el último pago en dos?»
- «Me cuesta llegar con los plazos que tengo, ¿podéis ponerme cuotas más pequeñas aunque tarde más?»
