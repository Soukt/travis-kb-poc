---
name: camb-condiciones-tras-cambiar-fechas
description: El cliente quiere saber si, después de cambiar las fechas,
  mantendrá las mismas condiciones de cancelación.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente está valorando un cambio o ya lo ha hecho y le preocupa que la reserva modificada tenga condiciones más estrictas. Las condiciones pueden variar con la nueva tarifa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` las fechas y la tarifa actuales.
3. Consulta con `consultar-politica-cancelacion` el calendario de gastos vigente.
4. Busca con `buscar-informacion` qué dice la agencia sobre las condiciones tras un cambio.
5. Prepara una respuesta clara para que booking la revise antes de enviarla.

## Qué no hace

- No garantiza que las condiciones se mantengan.
- No mezcla condiciones antiguas y nuevas sin aclararlo.

## Cuándo pasa a una persona

- El cambio ya está hecho y las condiciones que aparecen no coinciden con lo que se le dijo al cliente.

## Cómo lo puede pedir el cliente

- «Si cambio las fechas, ¿sigo pudiendo cancelar gratis como ahora?»
- «Después del cambio que hice, ¿la cancelación sigue igual?»
- «ojo q no quiero cambiar y quedarme sin cancelacion gratis eh»
- «Quisiera confirmar que la modificación no altera las condiciones de cancelación pactadas.»
