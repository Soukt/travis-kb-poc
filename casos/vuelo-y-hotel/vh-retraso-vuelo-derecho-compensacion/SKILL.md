---
name: vh-retraso-vuelo-derecho-compensacion
description: El cliente ha sufrido un retraso importante en su vuelo y quiere
  saber si le corresponde una compensación o cómo reclamarla.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El vuelo ya ha tenido lugar con un retraso y el cliente quiere reclamar. Puede incluir gastos o servicios perdidos por culpa del retraso.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-vuelo` el trayecto afectado y el estado registrado.
3. Pide con `pedir-datos-cliente` las horas reales de salida y llegada, los gastos ocasionados y los justificantes que tenga.
4. Crea con `crear-ticket-booking` un ticket con todo lo recogido.
5. Informa al cliente de que booking revisará su caso y le responderá, sin comprometer resultados.

## Qué no hace

- No confirma que le corresponda compensación ni su cuantía.
- No tramita pagos ni reembolsos.
- No da plazos de resolución.

## Cuándo pasa a una persona

- Siempre, porque hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Nuestro vuelo salió con muchísimo retraso, ¿tenemos derecho a indemnización?»
- «quiero reclamar el retraso del vuelo de vuelta, como lo hago»
- «Buenas tardes, por el retraso perdimos la cena del hotel y el traslado; quiero saber qué me cubren.»
- «llegamos tardisimo y nadie nos dio ni agua, esto se puede reclamar?»
