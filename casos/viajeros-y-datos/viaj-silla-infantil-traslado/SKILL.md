---
name: viaj-silla-infantil-traslado
description: El cliente pregunta si el traslado incluye sillas o elevadores para
  los niños o si debe llevar los suyos.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-traslados
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva incluye traslados y viajan niños pequeños. El cliente quiere saber qué sistema de retención tendrá el vehículo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` las edades de los niños.
3. Revisa con `consultar-traslados` el tipo de traslado y lo que incluye.
4. Explica al cliente lo que figura sobre sillas infantiles y, si no consta, se lo dice con claridad.

## Qué no hace

- No asegura que habrá silla si la acción no lo indica.
- No da consejos de seguridad vial.

## Cuándo pasa a una persona

- El cliente quiere solicitar una silla que no está incluida.

## Cómo lo puede pedir el cliente

- «¿El traslado tiene silla para el bebé?»
- «tengo q llevar el alzador del niño para el transfer o lo ponen ellos»
- «Buenas tardes, ¿dispone el vehículo del traslado de sistemas de retención infantil?»
- «¿Hay sillas para los niños en el traslado y dónde nos recogen?»
