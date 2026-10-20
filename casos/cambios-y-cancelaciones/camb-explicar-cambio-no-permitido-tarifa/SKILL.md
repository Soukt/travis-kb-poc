---
name: camb-explicar-cambio-no-permitido-tarifa
description: El cliente pide un cambio que su tarifa no permite y hay que
  explicárselo con claridad y tacto.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

Las condiciones de la reserva no admiten modificaciones, o ya no las admiten, y el cliente insiste en cambiar. La respuesta es delicada porque suele generar frustración.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la tarifa y los servicios.
3. Confirma con `consultar-politica-cancelacion` que la tarifa no admite el cambio pedido.
4. Prepara una respuesta empática que explique las condiciones aceptadas y, si las hay, las alternativas que recoge la política.
5. Deja la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No ofrece excepciones.
- No culpa al cliente por la tarifa elegida.

## Cuándo pasa a una persona

- El cliente pide formalmente una excepción.
- El cliente presenta una queja.

## Cómo lo puede pedir el cliente

- «¿Cómo que no puedo cambiar las fechas? ¡Si aún queda mucho para el viaje!»
- «Me dice la web que no se puede modificar, ¿de verdad no hay ninguna opción?»
- «no entiendo xq no me dejais cambiar nada, explicadmelo»
- «Solicito que me expliquen por qué mi reserva no admite modificación de fechas.»
