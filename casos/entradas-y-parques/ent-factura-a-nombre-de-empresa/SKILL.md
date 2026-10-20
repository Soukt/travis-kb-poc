---
name: ent-factura-a-nombre-de-empresa
description: El cliente pide que la factura de sus entradas se emita a nombre de
  una empresa o con otros datos fiscales.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-factura
    - pedir-datos-cliente
  simulado: "true"
---
## Cuándo aplica

Aplica cuando las entradas son para un viaje de empresa o el cliente necesita datos fiscales distintos. La factura rectificada la revisa booking.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-factura` la factura emitida y sus datos.
3. Recoge con `pedir-datos-cliente` los datos fiscales para la nueva factura.
4. Prepara la solicitud de factura rectificada para que booking la revise antes de tramitarla.

## Qué no hace

- No emite ni modifica facturas.
- No valida datos fiscales.

## Cuándo pasa a una persona

- La rectificación no es posible o el cliente pide un cambio en los importes.

## Cómo lo puede pedir el cliente

- «Necesito la factura de las entradas a nombre de mi empresa.»
- «podeis poner la factura con el cif de la empresa?»
- «Solicito la rectificación de la factura con los datos fiscales de mi empresa.»
- «la factura sale a mi nombre y la necesito para la asociacion, se puede cambiar?»
