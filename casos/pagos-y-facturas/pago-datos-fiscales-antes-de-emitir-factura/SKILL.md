---
name: pago-datos-fiscales-antes-de-emitir-factura
description: El cliente quiere indicar sus datos fiscales antes de que se emita
  la factura para que salga correcta.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Todavía no hay factura emitida y el cliente quiere asegurarse de que se emita con los datos fiscales correctos.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Confirma con `consultar-factura` que la factura aún no se ha emitido.
3. Busca con `buscar-informacion` cómo se introducen o modifican los datos de facturación desde la zona de cliente.
4. Le explica los pasos para hacerlo.

## Qué no hace

- No recoge datos fiscales por el chat si existe la opción en la zona de cliente.
- No garantiza el contenido de la factura antes de su emisión.

## Cuándo pasa a una persona

- La factura ya está emitida con otros datos.
- La zona de cliente no permite introducir los datos.

## Cómo lo puede pedir el cliente

- «Antes de que emitan la factura, desearía facilitar mis datos fiscales.»
- «donde pongo mis datos para la factura?»
- «Hola, que no se os olvide poner mi NIF en la factura, ¿dónde lo meto?»
- «quiero que la factura salga ya con los datos de mi empresa, como lo hago»
