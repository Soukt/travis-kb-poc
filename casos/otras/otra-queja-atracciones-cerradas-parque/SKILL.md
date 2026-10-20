---
name: otra-queja-atracciones-cerradas-parque
description: El cliente se queja de que en el parque había atracciones o zonas
  cerradas, o colas excesivas, el día de su visita.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

El cliente ya fue al parque con sus entradas y está descontento porque no pudo disfrutar de parte de las atracciones o por las esperas.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` las entradas y la fecha de la visita.
3. Revisa con `consultar-condiciones-entrada` qué incluyen las entradas y si mencionan cierres o mantenimiento.
4. Prepara una respuesta comprensiva que explique lo que dicen las condiciones y la deja para revisión de booking.

## Qué no hace

- No promete devoluciones ni entradas gratis.
- No afirma que el parque garantice todas las atracciones si las condiciones no lo dicen.

## Cuándo pasa a una persona

- Si el cliente pide devolución o compensación.
- Si el parque estuvo cerrado por completo o no le dejaron entrar.

## Cómo lo puede pedir el cliente

- «Fuimos al parque y muchas atracciones estaban cerradas, no es normal pagar lo mismo.»
- «colas interminables en todo, un dia perdido»
- «Quisiera manifestar mi descontento: la atracción principal estuvo cerrada todo el día de nuestra visita.»
- «Las atracciones de agua estaban cerradas, ¿eso lo avisan? Y otra cosa, ¿las entradas valen para volver otro día?»
