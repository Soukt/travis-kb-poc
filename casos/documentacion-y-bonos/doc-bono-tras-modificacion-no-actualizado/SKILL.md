---
name: doc-bono-tras-modificacion-no-actualizado
description: El cliente ha modificado su reserva y el bono que tiene todavía
  muestra los datos antiguos.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Tras un cambio ya aplicado en la reserva (fechas, viajeros, habitación), el cliente no ha recibido el bono actualizado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Confirma con `consultar-reserva` que el cambio está aplicado en la reserva.
3. Revisa con `consultar-bonos` si el bono nuevo ya está emitido.
4. Si lo está, se lo envía con `reenviar-bono` y le aclara que debe usar esa versión.

## Qué no hace

- No aplica ni completa la modificación.
- No da por bueno un bono con datos que no coinciden con la reserva.

## Cuándo pasa a una persona

- La reserva no refleja el cambio que el cliente dice haber pedido.
- El bono actualizado no se emite y el viaje está próximo.

## Cómo lo puede pedir el cliente

- «Cambié las fechas y el bono sigue poniendo las antiguas»
- «hice un cambio en la reserva y no me ha llegado el bono nuevo»
- «Tras la modificación de mi reserva, aún no he recibido la documentación actualizada.»
- «añadí un niño a la reserva, ¿me mandáis el bono con él incluido?»
