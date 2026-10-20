---
name: otra-justificante-viaje-para-empresa
description: El cliente necesita un justificante de que ha viajado o se ha
  alojado, por ejemplo para su empresa o su centro de estudios.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

Al cliente le piden un documento que acredite las fechas de su viaje o estancia, distinto de una factura.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` las fechas, los viajeros y los servicios.
3. Revisa con `consultar-factura` si la factura ya le sirve como justificante.
4. Prepara el texto del justificante con los datos reales de la reserva para que booking lo revise y lo emita.

## Qué no hace

- No incluye datos de viajeros que no sean necesarios.
- No modifica fechas ni datos para adaptarlos a lo que pide la empresa.

## Cuándo pasa a una persona

- Si piden un formato oficial, sello o firma.
- Si el justificante debe incluir importes desglosados que no figuran en la factura.

## Cómo lo puede pedir el cliente

- «En el trabajo me piden un justificante de que estuve de viaje esas fechas.»
- «necesito un papel q diga q estuve en el hotel pa la uni»
- «Solicito un certificado de estancia a nombre del titular para presentarlo en mi empresa.»
- «¿Me podéis hacer un documento que diga que viajé? Y si puede ser, la factura también.»
