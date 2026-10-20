---
name: otra-queja-reembolso-por-mal-tiempo
description: El cliente pide que le devuelvan dinero porque el mal tiempo le
  impidió disfrutar del viaje o de algún servicio.
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

Durante o después del viaje, el cliente considera que la lluvia, el temporal u otro fenómeno meteorológico le ha estropeado servicios que pagó.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` los servicios y fechas afectados.
3. Revisa con `consultar-politica-cancelacion` qué dicen las condiciones de la reserva.
4. Explica con tacto lo que dicen las condiciones y crea un ticket con `crear-ticket-booking` con la petición del cliente.

## Qué no hace

- No promete devolución ni excepción a las condiciones.
- No le dice que no tiene derecho a nada antes de que booking lo revise.

## Cuándo pasa a una persona

- Siempre: pide dinero y una posible excepción a las condiciones.

## Cómo lo puede pedir el cliente

- «Ha llovido toda la semana, no hemos podido ir a la playa ni a la piscina. ¿Me devolvéis algo?»
- «con el temporal no pudimos ir al parque, quiero el dinero de las entradas»
- «Solicito el reembolso parcial de mi viaje debido a las condiciones meteorológicas adversas.»
- «Con la tormenta no salió la excursión en barco... ¿y ahora qué? ¿Me lo pagáis?»
