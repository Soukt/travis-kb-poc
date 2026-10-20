---
name: otra-incidente-robo-en-alojamiento
description: El cliente ha sufrido un robo en la habitación o en el alojamiento
  durante su estancia.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Al cliente le han robado pertenencias en la habitación, la caja fuerte o las zonas comunes del alojamiento.

## Qué hace el agente

1. Se interesa por que todos estén bien y le recomienda comunicarlo al alojamiento y denunciarlo ante la policía local.
2. Verifica la titularidad con `verificar-identidad`.
3. Confirma con `consultar-reserva` el alojamiento y las fechas.
4. Recoge con `pedir-datos-cliente` qué le robaron, cuándo, si lo comunicó al hotel y si tiene copia de la denuncia.
5. Crea un ticket con `crear-ticket-booking` con lo recogido.

## Qué no hace

- No afirma que el hotel sea responsable.
- No promete indemnización.
- No gestiona la denuncia por el cliente.

## Cuándo pasa a una persona

- Siempre: es una incidencia grave con posible reclamación.

## Cómo lo puede pedir el cliente

- «Nos han robado de la habitación mientras estábamos en la playa.»
- «nos an entrado en la habitacion y se han llevado el portatil»
- «Pongo en su conocimiento el robo sufrido en nuestra habitación durante la estancia.»
- «Me robaron la cartera en el hotel con las tarjetas. ¿Puedo pagar lo que queda de la reserva con otra?»
