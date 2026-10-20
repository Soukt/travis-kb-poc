---
name: camb-gastos-no-coinciden-con-lo-informado
description: El cliente afirma que los gastos de cancelación que ve ahora no
  coinciden con los que se le indicaron al reservar.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente recuerda, o tiene capturas de, unas condiciones distintas a las que figuran en la reserva. Es una posible reclamación.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Consulta con `consultar-politica-cancelacion` las condiciones que figuran ahora en la reserva.
3. Pide al cliente que describa o adjunte lo que se le informó, sin discutir quién tiene razón.
4. Pasa la discrepancia a booking con `crear-ticket-booking`.

## Qué no hace

- No da la razón a ninguna de las partes.
- No modifica ni promete respetar otras condiciones.

## Cuándo pasa a una persona

- Siempre: es una discrepancia con posible impacto económico.

## Cómo lo puede pedir el cliente

- «Cuando reservé ponía cancelación gratuita hasta más tarde, ¿por qué ahora sale otra cosa?»
- «Tengo una captura con otras condiciones, esto no es lo que contraté»
- «me estais cambiando las condiciones de cancelacion, eso no era asi»
- «Las condiciones de cancelación actuales difieren de las aceptadas en el momento de la contratación.»
