---
name: camb-credito-en-vez-de-reembolso
description: El cliente ha recibido la propuesta de un crédito para otro viaje
  en lugar del reembolso y prefiere el dinero, o al revés.
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

Tras una cancelación, del cliente o del proveedor, se ha propuesto una compensación en forma de crédito y el cliente quiere otra opción.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado de la reserva.
3. Revisa con `consultar-pagos` los pagos y devoluciones registrados.
4. Recoge qué opción prefiere el cliente y por qué.
5. Pasa la petición a booking con `crear-ticket-booking`.

## Qué no hace

- No acepta ni rechaza la propuesta en nombre de la agencia.
- No emite créditos ni saldos.

## Cuándo pasa a una persona

- Siempre: es una decisión sobre dinero.

## Cómo lo puede pedir el cliente

- «Me ofrecéis un crédito para otro viaje, pero yo quiero mi dinero»
- «¿Puedo quedarme el importe como saldo para otra reserva en vez de que me lo devolváis?»
- «no kiero vale para otro viaje, devolvedme el dinero»
- «Rechazo el crédito propuesto y solicito el reembolso del importe abonado.»
