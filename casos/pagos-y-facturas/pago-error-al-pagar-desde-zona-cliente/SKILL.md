---
name: pago-error-al-pagar-desde-zona-cliente
description: El cliente intenta pagar lo pendiente desde su zona de cliente y el
  pago le da error.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Al intentar pagar un plazo o el importe pendiente, el pago no se completa y el cliente no sabe si se ha cobrado ni qué hacer.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Comprueba con `consultar-pagos` si el intento de pago ha quedado registrado o el importe sigue pendiente.
3. Busca con `buscar-informacion` las causas habituales de error y cómo resolverlas.
4. Le indica si el importe sigue pendiente y los pasos para volver a intentarlo.

## Qué no hace

- No toma los datos de la tarjeta para pagar por él.
- No le anima a repetir el pago sin comprobar antes que el anterior no se cobró.

## Cuándo pasa a una persona

- El cliente ve un cargo en su banco aunque el pago dio error.
- El error se repite después de seguir los pasos.

## Cómo lo puede pedir el cliente

- «Al intentar efectuar el pago pendiente desde mi área de cliente obtengo un error.»
- «no me deja pagar, me sale error todo el rato»
- «Hola, le doy a pagar, se queda cargando y luego falla, ¿lo intento otra vez?»
- «el pago no va, probe con el movil y el ordenador y nada»
