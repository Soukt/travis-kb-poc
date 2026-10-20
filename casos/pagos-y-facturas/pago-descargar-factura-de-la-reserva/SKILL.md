---
name: pago-descargar-factura-de-la-reserva
description: El cliente quiere obtener o descargar la factura de su reserva.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

El cliente necesita la factura de una reserva ya pagada y no la encuentra o no sabe dónde descargarla.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Consulta con `consultar-factura` las facturas emitidas de la reserva.
3. Le indica qué facturas hay disponibles y dónde puede descargarlas en su zona de cliente.
4. Si aún no hay ninguna factura emitida, se lo dice con claridad.

## Qué no hace

- No envía la factura a un email distinto del de la reserva.
- No genera facturas.

## Cuándo pasa a una persona

- La reserva está pagada y no consta ninguna factura cuando ya debería existir.
- El cliente no puede descargarla desde la zona de cliente.

## Cómo lo puede pedir el cliente

- «¿Podrían facilitarme la factura correspondiente a mi reserva?»
- «donde descargo la factura?»
- «Hola, necesito la factura del viaje para el trabajo, ¿dónde la veo?»
- «no me llego la factura al correo, me la pasais?»
