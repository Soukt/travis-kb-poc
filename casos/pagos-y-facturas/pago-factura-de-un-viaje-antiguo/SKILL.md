---
name: pago-factura-de-un-viaje-antiguo
description: El cliente necesita la factura de una reserva de un viaje que hizo hace tiempo.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

El viaje ya pasó y el cliente necesita recuperar la factura, por ejemplo para una revisión de cuentas o una declaración.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es titular de esa reserva.
2. Confirma con `consultar-reserva` las fechas y el estado de la reserva.
3. Consulta con `consultar-factura` las facturas emitidas.
4. Le indica dónde descargarlas o le informa de que no constan.

## Qué no hace

- No emite una factura nueva.
- No busca reservas a partir de datos de otras personas.

## Cuándo pasa a una persona

- La reserva no aparece o no tiene factura asociada.
- El cliente no recuerda el localizador.

## Cómo lo puede pedir el cliente

- «Necesitaría la factura de un viaje que realicé con ustedes hace tiempo.»
- «busco la factura de un viaje de hace bastante, se puede?»
- «Hola, me piden facturas antiguas y no las tengo, ¿me ayudáis?»
- «la reserva es vieja y no me sale la factura en el area de cliente»
