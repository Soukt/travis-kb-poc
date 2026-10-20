---
name: pago-devolucion-por-enfermedad-o-fallecimiento
description: El cliente no puede viajar por una enfermedad grave o el
  fallecimiento de un familiar y pide la devolución pese a los gastos.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Una causa grave impide el viaje y el cliente pide que no se le apliquen gastos de cancelación. Es una excepción y un caso delicado.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` las fechas y los viajeros.
3. Consulta con `consultar-politica-cancelacion` los gastos que aplicarían.
4. Pide con `pedir-datos-cliente` solo lo imprescindible para la gestión, sin entrar en detalles médicos.
5. Pasa el caso con `crear-ticket-booking` y responde con empatía.

## Qué no hace

- No pide informes médicos por el chat.
- No promete la exención de gastos.

## Cuándo pasa a una persona

- Siempre: es una excepción con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Lamentablemente, debido al fallecimiento de un familiar, no podremos viajar. Solicitamos el reembolso.»
- «me han ingresado en el hospital y no puedo ir, me devolveis el dinero?»
- «Hola, mi padre ha fallecido y no tengo cabeza para nada, ¿qué hago con el viaje?»
- «por enfermedad no podemos viajar, hay que pagar gastos igual?»
