---
name: camb-naviera-cancela-por-temporal
description: El cliente tiene un trayecto en ferri que la naviera ha cancelado o
  suspendido por mal tiempo y pregunta qué hacer.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El trayecto no sale por condiciones meteorológicas o por decisión de la naviera. El cliente necesita saber si se le reubica o se le devuelve el dinero, y puede tener alojamiento afectado.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Consulta con `consultar-trayecto-ferri` el estado y los detalles del trayecto.
3. Pregunta si prefiere viajar en otra salida o cancelar, y si tiene otros servicios afectados.
4. Abre un ticket prioritario con `crear-ticket-booking`.

## Qué no hace

- No confirma nuevas salidas ni devoluciones.
- No le dice que vaya al puerto sin información confirmada.

## Cuándo pasa a una persona

- Siempre: implica reubicación o devolución.

## Cómo lo puede pedir el cliente

- «Nos han dicho que el barco no sale por el temporal, ¿qué hacemos?»
- «El ferri de hoy está cancelado, ¿nos ponéis en el siguiente?»
- «han suspendido el ferry y tenemos el hotel en la isla, ayuda»
- «La naviera ha anulado la salida. Solicito una alternativa o el reembolso.»
