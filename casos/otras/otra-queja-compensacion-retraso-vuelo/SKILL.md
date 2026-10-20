---
name: otra-queja-compensacion-retraso-vuelo
description: El cliente pide una compensación porque un vuelo de su reserva
  sufrió un retraso o una cancelación.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El vuelo ya ha ocurrido o se ha cancelado y el cliente quiere que le indemnicen o le paguen los gastos que tuvo.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-vuelo` los vuelos de la reserva y su estado.
3. Busca con `buscar-informacion` la respuesta aprobada sobre cómo se tramitan estas reclamaciones a la aerolínea.
4. Recoge qué ocurrió, qué gastos tuvo y qué le ofreció la aerolínea, y crea un ticket con `crear-ticket-booking`.

## Qué no hace

- No calcula ni promete importes de compensación.
- No asegura que el cliente tenga derecho a indemnización.
- No inventa el procedimiento si no hay respuesta aprobada.

## Cuándo pasa a una persona

- Siempre: hay una reclamación económica.

## Cómo lo puede pedir el cliente

- «El vuelo de vuelta salió con muchísimo retraso, ¿me corresponde alguna indemnización?»
- «nos cancelaron el vuelo y tuvimos que dormir en el aeropuerto, quiero que me paguen»
- «Solicito información para reclamar la compensación por el retraso del vuelo incluido en mi reserva.»
- «Llegamos tardísimo por el retraso y perdimos la primera noche de hotel, ¿quién me devuelve eso?»
