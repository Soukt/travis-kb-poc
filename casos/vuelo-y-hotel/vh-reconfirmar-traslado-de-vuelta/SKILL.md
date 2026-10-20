---
name: vh-reconfirmar-traslado-de-vuelta
description: El cliente ha leído en su bono que debe reconfirmar el traslado de
  vuelta y no sabe cómo hacerlo.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El proveedor del traslado pide que el cliente reconfirme la recogida de vuelta durante su estancia. El cliente no sabe a quién dirigirse.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-traslados` las instrucciones del traslado de vuelta.
3. Busca con `buscar-informacion` la respuesta aprobada sobre la reconfirmación de traslados.
4. Le indica los pasos según esos datos.

## Qué no hace

- No reconfirma en nombre del cliente si no está previsto.
- No da contactos del proveedor que no devuelva la acción.

## Cuándo pasa a una persona

- Si el cliente no consigue reconfirmar por los medios indicados.

## Cómo lo puede pedir el cliente

- «En el bono pone que tengo que reconfirmar el traslado, ¿cómo lo hago?»
- «hay q llamar a alguien pa confirmar la vuelta?»
- «Buenas, ¿la reconfirmación del traslado se hace con vosotros?»
- «no se si reconfirmar o no, y si no lo hago no vienen?»
