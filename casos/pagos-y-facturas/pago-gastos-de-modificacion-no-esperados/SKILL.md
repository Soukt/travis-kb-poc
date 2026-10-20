---
name: pago-gastos-de-modificacion-no-esperados
description: El cliente no está de acuerdo con los gastos que se le han cobrado
  por modificar su reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras un cambio de fechas, viajeros o servicios se le ha cobrado un importe por gastos de modificación que, según el cliente, no se le informó o le parece excesivo.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el cambio realizado.
3. Consulta con `consultar-politica-cancelacion` los gastos de cambio que aplicaban.
4. Revisa con `consultar-pagos` el cobro realizado por la modificación.
5. Pasa la reclamación con `crear-ticket-booking`.

## Qué no hace

- No anula ni rebaja los gastos.
- No discute con el cliente sobre si se le informó o no.

## Cuándo pasa a una persona

- Siempre: es un cargo discutido.

## Cómo lo puede pedir el cliente

- «Se me han cobrado unos gastos de modificación de los que no fui informado.»
- «cambie la fecha y me habeis cobrado un pastizal, eso no me lo dijisteis»
- «Hola, ¿por qué me cobráis por cambiar el nombre de un viajero?»
- «no estoy de acuerdo con el cargo del cambio de fechas, quiero que lo reviséis»
