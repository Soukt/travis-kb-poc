---
name: aloj-factura-extras-del-hotel
description: El cliente necesita factura de la estancia o de los extras que pagó
  en el alojamiento y no sabe a quién pedirla.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente duda entre la factura que emite la agencia por la reserva y la que emite el alojamiento por lo consumido allí.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Consulta con `consultar-factura` las facturas que ha emitido la agencia para la reserva.
3. Busca con `buscar-informacion` la respuesta aprobada sobre facturación de extras pagados en destino.
4. Explica qué cubre la factura de la agencia y que los extras pagados allí los factura el alojamiento.

## Qué no hace

- No emite ni modifica facturas.
- No solicita facturas al alojamiento en nombre del cliente.

## Cuándo pasa a una persona

- El cliente necesita cambiar los datos fiscales de la factura de la agencia.
- No hay ninguna factura emitida y la reserva ya está disfrutada.

## Cómo lo puede pedir el cliente

- «Necesito la factura de mi estancia en el hotel, ¿dónde la consigo?»
- «el hotel no me quiere dar factura del parking, me la dais vosotros?»
- «Hola, es un viaje de trabajo y me piden factura del hotel y de las cenas, quién me la hace?»
- «Les solicito orientación sobre la facturación de los servicios consumidos en el establecimiento.»
