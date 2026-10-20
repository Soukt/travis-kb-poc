---
name: ent-parque-acuatico-cerrado-por-tiempo
description: El cliente fue al parque acuático y estaba cerrado o cerró pronto
  por mal tiempo, y reclama una solución.
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

Aplica durante o después de la visita, cuando el parque no abrió o cerró antes por la meteorología. Implica una posible devolución o cambio.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la fecha y las entradas.
3. Revisa con `consultar-condiciones-entrada` qué dicen las condiciones sobre cierres por mal tiempo.
4. Recoge lo ocurrido, si llegaron a entrar y qué solicita el cliente, y abre con `crear-ticket-booking` la solicitud.

## Qué no hace

- No promete devoluciones ni nuevas entradas.
- No cuestiona el relato del cliente.

## Cuándo pasa a una persona

- Siempre: hay dinero o un cambio de condiciones de por medio.

## Cómo lo puede pedir el cliente

- «El parque acuático no abrió por el viento y teníamos entradas para hoy.»
- «cerraron a media mañana x tormenta, quiero q me devolvais la entrada»
- «Buenas tardes, solicito una solución para unas entradas que no pudimos disfrutar por cierre meteorológico.»
- «llegamos y estaba cerrado por la lluvia, nadie nos aviso, y ahora que?»
