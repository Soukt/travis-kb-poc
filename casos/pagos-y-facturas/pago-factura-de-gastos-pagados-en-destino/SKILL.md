---
name: pago-factura-de-gastos-pagados-en-destino
description: El cliente quiere factura de algo que pagó directamente en destino,
  como la tasa turística o extras del hotel.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente pagó en el alojamiento o a otro proveedor un importe que no cobró la agencia y pide que la agencia se lo facture.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` qué incluía la reserva y qué no.
3. Busca con `buscar-informacion` la respuesta aprobada sobre facturas de pagos hechos en destino.
4. Le explica que esa factura la emite quien cobró el importe y, si procede, cómo pedirla.

## Qué no hace

- No emite factura de importes que no cobró la agencia.
- No contacta con el proveedor por su cuenta.

## Cuándo pasa a una persona

- El cliente afirma que lo pagado en destino debía estar incluido en la reserva.

## Cómo lo puede pedir el cliente

- «Necesito factura de la tasa turística abonada en el hotel.»
- «en el hotel pague el parking, me dais factura de eso?»
- «Hola, pagué unos extras en recepción y no me dieron factura, ¿me la hacéis vosotros?»
- «la factura de lo que pague alli me la dais o es el hotel»
