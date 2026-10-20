---
name: vh-rechaza-cambio-horario-quiere-cancelar
description: El cliente no acepta el cambio de horario que ha hecho la aerolínea
  y quiere cancelar el paquete y recuperar su dinero.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-politica-cancelacion
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El nuevo horario no le sirve al cliente y prefiere no viajar. Pide anular sin gastos por tratarse de un cambio de la aerolínea.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el horario original y el nuevo.
3. Consulta con `consultar-politica-cancelacion` las condiciones de la reserva.
4. Revisa con `consultar-pagos` lo pagado hasta ahora.
5. Crea con `crear-ticket-booking` un ticket con la petición y el detalle del cambio.

## Qué no hace

- No cancela la reserva.
- No asegura un reembolso total ni parcial.
- No aplica las condiciones habituales sin que booking valore el cambio de la aerolínea.

## Cuándo pasa a una persona

- Siempre, porque hay dinero y una posible excepción a las condiciones.

## Cómo lo puede pedir el cliente

- «Con este horario no nos vamos, queremos cancelar y que nos devolváis el dinero»
- «si me cambian el vuelo yo cancelo, me lo devolveis todo?»
- «Buenas tardes, el nuevo horario no nos sirve. ¿Podemos anular sin gastos?»
- «no acepto el cambio, quiero mi dinero»
