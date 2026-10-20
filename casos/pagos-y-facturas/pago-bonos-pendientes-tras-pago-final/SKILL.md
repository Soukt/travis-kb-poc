---
name: pago-bonos-pendientes-tras-pago-final
description: El cliente ya ha pagado todo lo pendiente y todavía no tiene
  disponibles los bonos de su reserva.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

El cliente completó el pago final y espera recibir los bonos, pero no le han llegado o no aparecen en su zona de cliente.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Confirma con `consultar-pagos` que el pago final consta como realizado.
3. Revisa con `consultar-bonos` si los bonos ya están disponibles.
4. Si lo están, los reenvía al email de la reserva con `reenviar-bono` y se lo comunica.
5. Si no lo están, le explica el estado que devuelve la acción.

## Qué no hace

- No envía los bonos a un email distinto del de la reserva.
- No promete una fecha de emisión que no devuelva ninguna acción.

## Cuándo pasa a una persona

- El pago consta pero los bonos siguen sin estar disponibles y el viaje se acerca.
- El pago final no aparece registrado aunque el cliente dice haberlo hecho.

## Cómo lo puede pedir el cliente

- «He completado el pago de mi reserva y aún no dispongo de los bonos.»
- «ya lo pague todo y no me llegan los bonos»
- «Hola, pagué lo que faltaba, ¿cuándo puedo descargar los bonos del hotel?»
- «pagado está, pero en mi zona de cliente los bonos salen como pendientes, ¿me los mandáis?»
