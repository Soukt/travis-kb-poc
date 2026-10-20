---
name: pago-pagar-pendiente-por-transferencia
description: El cliente quiere pagar lo que le queda pendiente de su reserva
  mediante transferencia bancaria.
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

El cliente prefiere no usar tarjeta para el pago pendiente y pregunta si puede hacerlo por transferencia y qué datos debe indicar.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` el importe pendiente y la fecha límite.
3. Busca con `buscar-informacion` si se admite la transferencia y el procedimiento aprobado.
4. Le explica cómo hacerla, qué concepto indicar y cómo enviar el justificante.

## Qué no hace

- No facilita datos bancarios que no procedan de la respuesta aprobada.
- No da el pago por hecho hasta que conste en la reserva.

## Cuándo pasa a una persona

- No hay respuesta aprobada sobre pagos por transferencia.
- La fecha límite no deja margen para que llegue la transferencia.

## Cómo lo puede pedir el cliente

- «¿Es posible abonar el importe pendiente mediante transferencia bancaria?»
- «puedo pagar lo que falta por transferencia? que pongo en el concepto»
- «Hola, prefiero hacer una transferencia, ¿me pasáis los datos?»
- «no me fio de poner la tarjeta, por transferencia se puede?»
