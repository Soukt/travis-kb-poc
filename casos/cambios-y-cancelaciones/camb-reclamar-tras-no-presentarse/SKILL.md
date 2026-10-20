---
name: camb-reclamar-tras-no-presentarse
description: El cliente no se presentó en el hotel o en el servicio reservado y
  ahora pide que le devuelvan el dinero.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La fecha ya pasó, el cliente no usó la reserva y no la canceló. Pide una devolución total o parcial.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado y las fechas de la reserva.
3. Consulta con `consultar-politica-cancelacion` lo que dicen las condiciones sobre la no presentación.
4. Recoge el motivo por el que no se presentó y si avisó a alguien.
5. Pasa la reclamación a booking con `crear-ticket-booking`.

## Qué no hace

- No promete devolución.
- No discute con el cliente sobre el motivo.

## Cuándo pasa a una persona

- Siempre: es una reclamación con dinero de por medio.

## Cómo lo puede pedir el cliente

- «No pudimos ir al hotel por una urgencia, ¿nos devolvéis algo?»
- «No me presenté al traslado porque mi vuelo llegó tarde, quiero que me devolváis lo pagado»
- «no fuimos al final, se puede recuperar algo de lo pagado?»
- «Solicito el reembolso de una reserva no disfrutada por causas ajenas a mi voluntad.»
