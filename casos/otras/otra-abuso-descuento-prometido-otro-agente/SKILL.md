---
name: otra-abuso-descuento-prometido-otro-agente
description: El cliente asegura que otro agente le prometió un descuento, una
  mejora o una excepción que no consta en la reserva.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente reclama algo que dice que le aseguraron por otro canal y que no aparece en su reserva ni en sus pagos.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` si consta alguna mejora o condición especial.
3. Consulta con `consultar-pagos` los importes cobrados y pendientes.
4. Recoge qué le prometieron, cuándo y por qué canal, y crea un ticket con `crear-ticket-booking`.

## Qué no hace

- No confirma la promesa si no consta.
- No acusa al cliente de mentir.
- No aplica descuentos.

## Cuándo pasa a una persona

- Siempre: implica dinero o una excepción a las condiciones.

## Cómo lo puede pedir el cliente

- «La chica que me atendió me dijo que me harían un descuento y no lo veo.»
- «me prometieron q la habitacion seria superior sin pagar mas»
- «Se me garantizó telefónicamente una mejora de régimen que no figura en mi reserva.»
- «Me dijeron que no me cobrarían la cancelación, ¿lo tenéis apuntado? ¿Y el resto del pago?»
