---
name: doc-factura-en-vez-de-bono
description: El cliente confunde la factura con el bono o necesita la factura y
  solo encuentra el bono.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pide la factura pensando que es lo que tiene que presentar, o al revés, tiene el bono y busca la factura.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Consulta con `consultar-factura` las facturas emitidas de la reserva.
3. Revisa con `consultar-bonos` qué bonos tiene disponibles.
4. Le explica que la factura acredita el pago y el bono es lo que se presenta en destino, y si hace falta le reenvía el bono con `reenviar-bono`.

## Qué no hace

- No modifica datos fiscales de la factura.
- No emite facturas nuevas.

## Cuándo pasa a una persona

- El cliente necesita cambiar los datos de la factura o pide una factura que no está emitida.

## Cómo lo puede pedir el cliente

- «Necesito la factura, ¿es lo mismo que el bono?»
- «me habeis mandado la factura pero en el hotel que enseño?»
- «Les solicito la factura de la reserva, ya que solo dispongo del bono.»
- «no encuentro la factura, solo el bono, y la necesito para la empresa»
