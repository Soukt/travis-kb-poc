---
name: ferri-menor-viaja-solo
description: El cliente quiere que un menor de su reserva haga el trayecto en
  barco solo, sin ningún adulto acompañante.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un menor de la reserva va a embarcar sin adultos, ya sea en la ida o en la vuelta.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` qué viajeros hacen cada trayecto.
3. Busca con `buscar-informacion` si hay condiciones aprobadas para menores no acompañados y las comparte sin darlas por cerradas.
4. Recoge el trayecto afectado y la situación, y abre un caso con `crear-ticket-booking`.
5. Explica al cliente que booking debe validarlo con la naviera antes de confirmar nada.

## Qué no hace

- No confirma que el menor pueda viajar solo.
- No recoge por el chat datos de los tutores ni de quien recogerá al menor.

## Cuándo pasa a una persona

- Siempre: es una excepción a las condiciones habituales y la valida booking con la naviera.

## Cómo lo puede pedir el cliente

- «Mi hijo adolescente quiere volver él solo en el barco, ¿puede?»
- «puede ir mi hija sola en el ferri? ya es mayorcita»
- «Solicito información sobre las condiciones para que un menor viaje sin acompañante en el trayecto de vuelta.»
- «Al final yo no puedo ir, ¿mi hijo puede hacer el viaje en barco solo y que le recojan en destino?»
