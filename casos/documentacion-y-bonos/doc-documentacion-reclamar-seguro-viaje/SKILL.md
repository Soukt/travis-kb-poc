---
name: doc-documentacion-reclamar-seguro-viaje
description: El cliente necesita documentación de la reserva para reclamar a su
  seguro tras cancelar o sufrir una incidencia.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la aseguradora pide al cliente el bono, la factura, los gastos de cancelación aplicados u otro documento de la agencia.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el estado de la reserva.
3. Consulta con `consultar-factura` las facturas emitidas que puede aportar.
4. Revisa con `consultar-politica-cancelacion` los gastos aplicables según el calendario de la reserva.
5. Abre `crear-ticket-booking` con la lista de documentos que pide la aseguradora para que booking prepare los que no están disponibles.

## Qué no hace

- No redacta certificados de gastos de cancelación.
- No valora si el seguro cubrirá la reclamación.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio y los certificados los emite booking.

## Cómo lo puede pedir el cliente

- «El seguro me pide un certificado de los gastos de cancelación»
- «necesito papeles para q el seguro me devuelva el dinero»
- «La aseguradora requiere documentación acreditativa de la reserva y de su cancelación.»
- «tuve que cancelar por enfermedad, ¿qué documentos me dais para el seguro?»
