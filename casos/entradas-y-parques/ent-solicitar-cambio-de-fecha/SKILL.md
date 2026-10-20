---
name: ent-solicitar-cambio-de-fecha
description: El cliente pide cambiar la fecha de sus entradas a otro día concreto.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente ya ha decidido el cambio y propone una nueva fecha. El cambio depende de la disponibilidad y puede tener gastos.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la fecha actual y lo que incluye la reserva.
3. Revisa con `consultar-politica-cancelacion` los gastos de cambio aplicables y se los traslada al cliente.
4. Recoge la nueva fecha deseada y abre con `crear-ticket-booking` la solicitud de cambio.

## Qué no hace

- No confirma la nueva fecha ni la disponibilidad.
- No cobra ni descuenta nada.

## Cuándo pasa a una persona

- Siempre: el cambio puede tener gastos y requiere gestión con el proveedor.

## Cómo lo puede pedir el cliente

- «Quiero cambiar las entradas al día siguiente del que tengo.»
- «porfa cambiadme las entradas a otro dia del puente»
- «Solicito el cambio de fecha de las entradas de mi reserva a una fecha posterior.»
- «podemos pasar las entradas al sabado? y si hay que pagar algo me decis»
