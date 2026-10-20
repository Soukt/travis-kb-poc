---
name: pago-factura-unica-varias-reservas-empresa
description: El cliente, que gestiona los viajes de su empresa, pide una única
  factura que agrupe varias reservas.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Hay varias reservas de distintos empleados o fechas y el cliente quiere una factura conjunta. Es una excepción y puede afectar a reservas de otras personas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` las reservas de las que es titular.
2. Revisa con `consultar-reserva` los datos básicos de esas reservas.
3. Consulta con `consultar-factura` cómo están facturadas.
4. Recoge la petición y la lista de localizadores y la pasa con `crear-ticket-booking`.

## Qué no hace

- No da información de reservas de las que no es titular.
- No agrupa facturas ni promete hacerlo.

## Cuándo pasa a una persona

- Siempre: es una excepción que puede afectar a reservas de terceros.

## Cómo lo puede pedir el cliente

- «Gestionamos los viajes del equipo y necesitaríamos una factura única para todas las reservas.»
- «podeis juntar las facturas de todas las reservas de la empresa en una?»
- «Hola, he reservado para varios compañeros, ¿me hacéis una sola factura?»
- «una factura con todo junto porfa, que en contabilidad se vuelven locos»
