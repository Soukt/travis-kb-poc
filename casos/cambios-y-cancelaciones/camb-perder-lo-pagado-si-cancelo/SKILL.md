---
name: camb-perder-lo-pagado-si-cancelo
description: El cliente ha pagado una parte de la reserva y pregunta si la
  perdería en caso de cancelar.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

La reserva se paga en varios plazos o con una señal, y el cliente quiere saber qué pasa con lo ya pagado según el momento en que cancele.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-pagos` lo pagado y lo pendiente.
3. Consulta con `consultar-politica-cancelacion` los gastos que aplicarían hoy.
4. Prepara una explicación que compare lo pagado con los gastos vigentes, sin prometer devoluciones.
5. La deja para que booking la revise antes de enviarla.

## Qué no hace

- No calcula devoluciones definitivas.
- No cancela la reserva.

## Cuándo pasa a una persona

- El cliente decide cancelar.
- Los gastos superan lo pagado y el cliente pregunta si tendría que pagar más.

## Cómo lo puede pedir el cliente

- «Si cancelo, ¿pierdo lo que ya pagué de señal?»
- «He pagado el primer plazo, si anulo me lo devolvéis?»
- «lo q ya e pagado lo pierdo o no?»
- «Querría saber qué sucedería con las cantidades abonadas en caso de cancelación.»
