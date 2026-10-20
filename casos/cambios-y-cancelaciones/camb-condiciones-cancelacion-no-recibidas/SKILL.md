---
name: camb-condiciones-cancelacion-no-recibidas
description: El cliente asegura que nunca recibió ni vio las condiciones de
  cancelación de su reserva.
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

El cliente descubre las condiciones al intentar cancelar y alega que no se le informó. Puede acabar en reclamación.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios y la tarifa.
3. Recupera con `consultar-politica-cancelacion` las condiciones de la reserva.
4. Prepara una respuesta que se las muestre de forma clara, sin tono acusatorio.
5. Deja la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No discute si el cliente las leyó o no.
- No ofrece excepciones.

## Cuándo pasa a una persona

- El cliente presenta una queja formal.
- El cliente pide que no se le apliquen las condiciones.

## Cómo lo puede pedir el cliente

- «Nadie me dijo que esto tenía gastos de cancelación»
- «¿Dónde ponía lo de las condiciones? Yo no lo vi»
- «a mi no me informasteis de nada de esto cuando reserve»
- «No recibí las condiciones de cancelación en el momento de la contratación. Solicito que me las faciliten.»
