---
name: ent-cobro-duplicado-de-entradas
description: El cliente cree que le han cobrado dos veces sus entradas.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente ve cargos repetidos en su cuenta o tarjeta por la misma reserva.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-pagos` los pagos registrados en la reserva.
3. Contrasta lo que ve el cliente con lo registrado y abre con `crear-ticket-booking` la incidencia.

## Qué no hace

- No promete devoluciones.
- No pide datos de la tarjeta.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Me habéis cobrado dos veces las entradas.»
- «tengo dos cargos en la tarjeta!!»
- «Buenos días, he detectado un cargo duplicado en mi cuenta por la reserva de entradas.»
- «en el banco me sale el cobro repetido, q pasa?»
