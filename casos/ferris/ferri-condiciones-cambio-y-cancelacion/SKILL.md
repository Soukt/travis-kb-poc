---
name: ferri-condiciones-cambio-y-cancelacion
description: El cliente quiere saber qué le costaría cambiar o cancelar su
  billete de barco antes de decidir nada.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

El cliente se plantea modificar o cancelar el trayecto, pero de momento solo pide información.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene con `consultar-politica-cancelacion` el calendario de gastos de cambio y de cancelación.
3. Explica con claridad qué se aplicaría en cada momento, tal y como lo devuelve la acción.
4. Aclara que si decide cambiar o cancelar, la gestión la hace booking.

## Qué no hace

- No ejecuta cambios ni cancelaciones.
- No calcula importes que la acción no devuelva.

## Cuándo pasa a una persona

- El cliente decide cambiar o cancelar.
- El cliente pide una excepción a las condiciones.

## Cómo lo puede pedir el cliente

- «Si cancelo el barco, ¿pierdo todo el dinero?»
- «cuanto me cuesta cambiar el ferri de dia? es solo pa saberlo»
- «Buenos días, ¿podrían indicarme las condiciones de modificación de mi billete marítimo?»
- «Estoy pensando en no ir, ¿hasta cuándo puedo cancelar sin gastos? ¿Y el hotel también?»
