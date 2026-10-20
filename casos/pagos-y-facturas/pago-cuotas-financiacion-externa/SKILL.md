---
name: pago-cuotas-financiacion-externa
description: El cliente financió su viaje con una entidad financiera externa y
  pregunta por sus cuotas.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El pago de la reserva se hizo mediante una financiación con una entidad externa y el cliente pregunta por las cuotas, sus fechas o cómo cambiarlas, algo que gestiona esa entidad.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Confirma con `consultar-pagos` que la reserva se pagó mediante financiación.
3. Busca con `buscar-informacion` cómo se gestionan las cuotas con la entidad financiera.
4. Le explica que las cuotas dependen de la entidad y cómo contactar con ella según la respuesta aprobada.

## Qué no hace

- No informa de cuotas ni de intereses de la financiación.
- No gestiona cambios en el contrato de financiación.

## Cuándo pasa a una persona

- El cliente dice que la entidad le remite a la agencia y nadie le resuelve.
- La reserva no aparece como financiada aunque el cliente afirma que lo está.

## Cómo lo puede pedir el cliente

- «Financié el viaje en el momento de la compra y necesito información sobre las cuotas.»
- «cuando me cobran la cuota de la financiacion?»
- «Hola, quiero cambiar la cuenta donde me pasan las cuotas del viaje financiado»
- «lo financie y no se si las cuotas os las pago a vosotros o a la financiera»
