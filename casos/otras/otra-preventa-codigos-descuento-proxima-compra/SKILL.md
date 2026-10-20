---
name: otra-preventa-codigos-descuento-proxima-compra
description: El cliente pregunta si hay códigos de descuento o promociones para
  su próxima reserva.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente está contento o quiere repetir y pregunta por ventajas para una compra futura.

## Qué hace el agente

1. Busca con `buscar-informacion` si hay promociones o códigos aprobados.
2. Le informa de lo que figure en la respuesta aprobada.
3. Si no hay respuesta aprobada, le dice que no tiene información de promociones.

## Qué no hace

- No inventa códigos ni descuentos.
- No aplica descuentos a reservas ya hechas.

## Cuándo pasa a una persona

- Si quiere aplicar un descuento a su reserva actual.

## Cómo lo puede pedir el cliente

- «¿Tenéis algún código de descuento para clientes que repiten?»
- «hay alguna promo pa la proxima vez?»
- «Quisiera saber si disponen de descuentos para futuras contrataciones.»
- «¿Hay cupón para el siguiente viaje? Y ya que estoy, ¿cuándo me cobráis lo pendiente?»
