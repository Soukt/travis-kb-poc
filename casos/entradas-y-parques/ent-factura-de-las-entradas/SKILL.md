---
name: ent-factura-de-las-entradas
description: El cliente necesita la factura de sus entradas y no sabe dónde encontrarla.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente pide la factura para su control o para justificar un gasto, sin cambios en sus datos fiscales.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-factura` las facturas emitidas de la reserva.
3. Indica las facturas disponibles y dónde descargarlas en su zona de cliente.

## Qué no hace

- No emite facturas nuevas ni las modifica.
- No envía facturas a otras direcciones.

## Cuándo pasa a una persona

- No hay factura emitida o el cliente necesita cambiar los datos fiscales.

## Cómo lo puede pedir el cliente

- «¿Dónde puedo descargar la factura de las entradas?»
- «necesito factura de las entradas para el trabajo»
- «Buenas tardes, solicito la factura correspondiente a mi reserva de entradas.»
- «no me ha llegado factura, me la mandais?»
