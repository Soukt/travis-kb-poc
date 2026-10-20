---
name: otra-preventa-precio-bajo-tras-reservar
description: El cliente ha visto su mismo viaje más barato después de reservar y
  pide que le devuelvan la diferencia.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente encuentra después de reservar un precio inferior para el mismo servicio y fechas, en la agencia o en otro sitio.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` los servicios y condiciones de la reserva.
3. Revisa con `consultar-politica-cancelacion` qué condiciones de cambio o cancelación aplican ahora.
4. Recoge dónde y cuándo vio el precio más bajo y crea un ticket con `crear-ticket-booking`.

## Qué no hace

- No promete igualar el precio ni devolver la diferencia.
- No recomienda cancelar y volver a reservar.

## Cuándo pasa a una persona

- Siempre: pide dinero y una excepción a las condiciones.

## Cómo lo puede pedir el cliente

- «He visto mi mismo hotel más barato hoy en vuestra web, ¿me devolvéis la diferencia?»
- «acabo de ver la oferta mas barata q lo q pague, no es justo»
- «Solicito el ajuste del precio de mi reserva tras detectar una tarifa inferior para las mismas fechas.»
- «Si cancelo y vuelvo a reservar me sale mejor, ¿qué me cobráis por cancelar?»
