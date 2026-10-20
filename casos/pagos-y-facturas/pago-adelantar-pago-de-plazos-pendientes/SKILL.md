---
name: pago-adelantar-pago-de-plazos-pendientes
description: El cliente tiene plazos pendientes y quiere pagar ya lo que le
  queda, sin esperar a las fechas de cobro.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La reserva está a plazos y el cliente prefiere liquidar el importe pendiente antes de tiempo, total o parcialmente.

## Qué hace el agente

1. Verifica que es el titular con `verificar-identidad`.
2. Consulta con `consultar-pagos` el importe pendiente y los plazos que quedan.
3. Busca con `buscar-informacion` cómo se adelanta un pago desde la zona de cliente.
4. Explica los pasos y le recuerda el importe pendiente que figura en la reserva.

## Qué no hace

- No realiza el cobro ni pide los datos de la tarjeta por el chat.
- No asegura que los plazos futuros se anulen solos si la respuesta aprobada no lo dice.

## Cuándo pasa a una persona

- La zona de cliente no ofrece la opción de adelantar el pago.
- El cliente quiere adelantar solo una parte y no hay respuesta aprobada para ello.

## Cómo lo puede pedir el cliente

- «Me gustaría abonar ya el importe pendiente de mi reserva, ¿cómo puedo hacerlo?»
- «quiero pagar lo que falta de golpe y olvidarme»
- «Hola, me ha llegado la paga extra y prefiero pagar ya los plazos que quedan»
- «se puede adelantar el ultimo plazo? y el bono me llega antes si lo pago todo?»
