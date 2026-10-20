---
name: pago-factura-proforma-antes-de-pagar
description: El cliente necesita una factura proforma o un presupuesto formal
  antes de pagar lo pendiente.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La empresa o entidad que paga el viaje exige un documento previo con el importe para autorizar el pago pendiente.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios y los viajeros.
3. Consulta con `consultar-pagos` el importe pendiente y la fecha límite.
4. Busca con `buscar-informacion` si la agencia emite proformas o presupuestos.
5. Prepara la petición con `crear-ticket-booking` para que booking la revise y emita el documento.

## Qué no hace

- No emite documentos por su cuenta.
- No amplía la fecha límite de pago mientras se tramita.

## Cuándo pasa a una persona

- La fecha límite de pago está próxima y el documento no estará a tiempo.

## Cómo lo puede pedir el cliente

- «Para tramitar el pago, nuestra empresa requiere una factura proforma.»
- «me podeis mandar un presupuesto con lo que falta por pagar para q lo apruebe mi jefe»
- «Hola, en mi trabajo no pagan sin una proforma, ¿me la hacéis?»
- «necesito proforma antes de pagar y tambien saber hasta cuando tengo para pagar»
