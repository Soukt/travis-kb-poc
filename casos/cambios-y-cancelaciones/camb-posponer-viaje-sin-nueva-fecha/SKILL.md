---
name: camb-posponer-viaje-sin-nueva-fecha
description: El cliente quiere aplazar el viaje sin tener todavía fechas nuevas
  y pide conservar lo pagado para más adelante.
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

El cliente no puede viajar ahora y tampoco sabe cuándo podrá, y pregunta si puede dejar la reserva abierta. No es un cambio de fechas normal y depende de una decisión de booking.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados.
3. Consulta con `consultar-politica-cancelacion` qué ocurriría si cancela o cambia hoy, para que el cliente conozca la situación de partida.
4. Le explica que dejar una reserva sin fecha no es una opción estándar y que debe valorarlo booking.
5. Traslada la petición con `crear-ticket-booking`.

## Qué no hace

- No ofrece créditos ni saldos a favor.
- No cancela la reserva.

## Cuándo pasa a una persona

- Siempre: es una excepción con dinero de por medio.

## Cómo lo puede pedir el cliente

- «No podemos ir ahora pero sí más adelante, ¿podéis guardarme el dinero para otro viaje?»
- «Quiero aplazar el viaje pero todavía no sé cuándo, ¿qué puedo hacer?»
- «se puede dejar la reserva en pausa hasta q sepa fechas??»
- «Debido a un cambio en mi situación personal, solicito posponer el viaje sin fecha concreta.»
