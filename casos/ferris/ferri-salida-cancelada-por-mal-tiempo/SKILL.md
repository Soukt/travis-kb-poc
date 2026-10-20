---
name: ferri-salida-cancelada-por-mal-tiempo
description: El cliente ha sido avisado de que su barco no sale por mal tiempo y
  quiere saber qué pasa con su viaje.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La naviera ha cancelado la salida por temporal o por el estado del mar, antes del viaje o con el cliente ya en el puerto.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-trayecto-ferri` el estado del trayecto.
3. Revisa con `consultar-reserva` qué otros servicios dependen de ese trayecto.
4. Consulta con `consultar-politica-cancelacion` las condiciones aplicables.
5. Recoge qué prefiere el cliente y abre un caso urgente con `crear-ticket-booking`.

## Qué no hace

- No promete una salida alternativa ni una fecha concreta.
- No confirma devoluciones ni compensaciones.

## Cuándo pasa a una persona

- Siempre: hay que reubicar, cancelar o compensar y afecta a otros servicios.

## Cómo lo puede pedir el cliente

- «Han cancelado el barco por el temporal, ¿y ahora qué?»
- «no sale el ferri x el viento y estamos tirados en el puerto!!»
- «Buenas tardes, la naviera ha suspendido la salida por condiciones meteorológicas. ¿Qué alternativas tengo?»
- «Si no hay barco hoy, ¿quién paga la noche de hotel? ¿Y el hotel del destino lo pierdo?»
