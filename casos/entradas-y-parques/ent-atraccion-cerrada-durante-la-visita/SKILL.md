---
name: ent-atraccion-cerrada-durante-la-visita
description: El cliente se queja de que una atracción o zona importante del
  parque estuvo cerrada durante su visita y pide una compensación.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica durante o después de la visita, cuando el cliente considera que no pudo disfrutar lo que esperaba. Es una reclamación con dinero de por medio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` la fecha de la visita y las entradas.
3. Revisa con `consultar-condiciones-entrada` qué dicen las condiciones sobre cierres de atracciones.
4. Recoge lo ocurrido y abre con `crear-ticket-booking` la reclamación.

## Qué no hace

- No promete compensaciones.
- No minimiza la queja del cliente.

## Cuándo pasa a una persona

- Siempre: es una reclamación con posible compensación.

## Cómo lo puede pedir el cliente

- «La atracción principal estuvo cerrada todo el día. Quiero una compensación.»
- «medio parque cerrado por mantenimiento y nadie avisa, vergonzoso»
- «Presento una reclamación porque varias atracciones no estaban operativas el día de nuestra visita.»
- «fuimos solo por una atraccion y estaba cerrada, me devolveis algo?»
