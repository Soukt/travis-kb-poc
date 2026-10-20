---
name: pago-documentos-para-reclamar-al-seguro
description: El cliente necesita la factura y la documentación de su reserva
  cancelada para reclamar a su seguro.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - consultar-factura
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente canceló o no pudo viajar y su aseguradora le pide documentos de la agencia: factura, gastos de cancelación o certificado de no uso.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado de la reserva.
3. Consulta con `consultar-politica-cancelacion` los gastos que se aplicaron.
4. Comprueba con `consultar-factura` qué facturas están disponibles.
5. Prepara con `crear-ticket-booking` la petición de los documentos que no puede descargar, para que booking la revise.

## Qué no hace

- No redacta certificados ni declaraciones en nombre de la agencia.
- No opina sobre si el seguro cubrirá el caso.

## Cuándo pasa a una persona

- La aseguradora pide un documento con un formato que la agencia no emite de forma habitual.

## Cómo lo puede pedir el cliente

- «Mi aseguradora requiere la factura y un certificado de los gastos de cancelación.»
- «el seguro me pide papeles de la cancelacion, cuales me podeis dar?»
- «Hola, no pudimos viajar por una operación y el seguro quiere la factura y algo que diga lo que perdimos»
- «necesito un certificado de que no use el viaje para el seguro»
