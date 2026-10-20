---
name: pago-devolucion-entradas-no-utilizadas
description: El cliente no usó las entradas del parque incluidas en su reserva y
  pide que le devuelvan su importe.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - consultar-bonos
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Por decisión propia o por un imprevisto, el cliente no fue al parque y quiere recuperar el dinero de las entradas.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-condiciones-entrada` las condiciones de uso y validez de las entradas.
3. Comprueba con `consultar-bonos` el estado de los bonos.
4. Consulta con `consultar-politica-cancelacion` las condiciones de cancelación de ese servicio.
5. Pasa la petición con `crear-ticket-booking`.

## Qué no hace

- No promete el reembolso de entradas no reembolsables.
- No anula los bonos.

## Cuándo pasa a una persona

- Siempre: es una petición de devolución.

## Cómo lo puede pedir el cliente

- «No hicimos uso de las entradas al parque y solicitamos su reembolso.»
- «no fuimos al parque, me devolveis las entradas?»
- «Hola, llovió y no fuimos al parque, ¿se puede recuperar el dinero?»
- «las entradas estan sin usar, se pueden devolver o cambiar de dia?»
