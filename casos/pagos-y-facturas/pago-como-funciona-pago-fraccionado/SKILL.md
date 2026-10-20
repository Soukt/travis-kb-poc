---
name: pago-como-funciona-pago-fraccionado
description: El cliente pregunta de forma general cómo funciona el pago a plazos
  y qué condiciones tiene.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere entender el funcionamiento del pago fraccionado (cómo se cobran los plazos, si tiene coste, qué pasa si cambia la reserva) sin preguntar por datos concretos de su reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` las respuestas aprobadas sobre el pago fraccionado.
2. Explica con esas respuestas cómo se cobran los plazos y qué condiciones aplican.
3. Si la pregunta se refiere a su reserva concreta, ofrece revisarla tras comprobar su identidad.

## Qué no hace

- No inventa condiciones, costes ni plazos que no estén en las respuestas aprobadas.
- No da datos de la reserva sin comprobar antes la identidad.

## Cuándo pasa a una persona

- No hay respuesta aprobada para lo que pregunta.
- El cliente quiere unas condiciones distintas a las publicadas.

## Cómo lo puede pedir el cliente

- «Quisiera saber cómo funciona exactamente el pago fraccionado que ofrecen.»
- «lo de pagar a plazos tiene intereses o algo?»
- «Hola, ¿se puede pagar a plazos cualquier tipo de viaje o solo algunos?»
- «q pasa con los plazos si luego cancelo el viaje»
