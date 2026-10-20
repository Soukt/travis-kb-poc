---
name: camb-descuento-al-cancelar-reserva
description: El cliente usó un código de descuento en la reserva y pregunta qué
  pasa con él si la cancela.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La reserva se pagó aplicando un cupón o código de descuento y el cliente quiere saber si lo recupera o se pierde al cancelar.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los datos de la reserva y si consta el descuento.
3. Busca con `buscar-informacion` qué indica la agencia sobre los descuentos en las cancelaciones.
4. Le explica lo que dice la información aprobada.

## Qué no hace

- No genera ni reactiva códigos.
- No promete conservar el descuento.

## Cuándo pasa a una persona

- No hay información aprobada.
- El cliente pide recuperar el descuento como excepción.

## Cómo lo puede pedir el cliente

- «Usé un código de descuento, si cancelo ¿lo puedo volver a usar?»
- «si anulo la reserva pierdo el cupon?»
- «el descuento q me aplicasteis me lo devolveis si cancelo?»
- «¿Qué sucede con el código promocional aplicado en caso de anulación?»
