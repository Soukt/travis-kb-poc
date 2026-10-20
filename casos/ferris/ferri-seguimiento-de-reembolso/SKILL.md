---
name: ferri-seguimiento-de-reembolso
description: El cliente espera la devolución de un trayecto en barco cancelado o
  modificado y pregunta por qué aún no la ha recibido.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Ya hubo una cancelación o un cambio con devolución acordada y el cliente no la ve reflejada.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado del trayecto cancelado o modificado.
3. Comprueba con `consultar-pagos` si la devolución figura registrada.
4. Abre un caso con `crear-ticket-booking` con lo que muestran las acciones para que booking haga el seguimiento.

## Qué no hace

- No da fechas de abono que no devuelvan las acciones.
- No confirma importes de devolución.
- No culpa al banco ni a la naviera sin revisarlo.

## Cuándo pasa a una persona

- Siempre: se trata de una devolución.

## Cómo lo puede pedir el cliente

- «Me dijisteis que me devolvíais el barco y todavía no tengo el dinero.»
- «cuando me llega el reembolso del ferri cancelado? ya ha pasado un monton»
- «Buenas tardes, solicito información sobre el estado de la devolución del trayecto cancelado por la naviera.»
- «¿Me habéis devuelto lo del barco o no? En el banco no veo nada.»
