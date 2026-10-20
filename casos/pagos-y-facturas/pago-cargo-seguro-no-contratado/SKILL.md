---
name: pago-cargo-seguro-no-contratado
description: El cliente ve que se le ha cobrado un seguro de viaje que dice no
  haber contratado.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

En la reserva o en los cobros aparece un seguro y el cliente asegura que no lo eligió o que lo quitó durante la compra.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` si el seguro figura entre los servicios contratados.
3. Consulta con `consultar-pagos` lo cobrado por ese concepto.
4. Pasa la reclamación con `crear-ticket-booking`.

## Qué no hace

- No da de baja el seguro.
- No promete devolver su importe.

## Cuándo pasa a una persona

- Siempre: es un cargo discutido.

## Cómo lo puede pedir el cliente

- «Se me ha cobrado un seguro que no solicité en ningún momento.»
- «yo no contrate ningun seguro y me lo habeis cobrado»
- «Hola, desmarqué lo del seguro y me sale en la reserva, quiero que me lo quitéis»
- «el seguro me lo habeis metido sin preguntar, devolvedme eso»
