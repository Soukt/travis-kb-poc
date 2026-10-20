---
name: doc-reenvio-bono-email-borrado
description: El cliente tenía los bonos pero ha borrado el email o los ha
  perdido y pide que se los vuelvan a enviar.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

El cliente ya recibió los bonos en su momento y ahora no los encuentra, por haber borrado el correo, cambiado de móvil o perdido el papel, incluso estando ya de viaje.

## Qué hace el agente

1. Confirma con `verificar-identidad` que es el titular de la reserva.
2. Comprueba con `consultar-bonos` que los bonos siguen vigentes y disponibles.
3. Los reenvía con `reenviar-bono` al email de la reserva.
4. Le indica que también puede descargarlos en cualquier momento desde su zona de cliente y guardarlos en el móvil para no depender de la conexión.

## Qué no hace

- No genera bonos nuevos ni distintos de los ya emitidos.
- No envía los bonos a otro email ni por otro canal.

## Cuándo pasa a una persona

- El cliente ya no tiene acceso al email de la reserva.
- Los bonos aparecen como anulados o no disponibles sin un motivo que explique la acción.

## Cómo lo puede pedir el cliente

- «He borrado sin querer el correo con el bono, ¿me lo podéis mandar otra vez?»
- «Se me ha roto el móvil y tenía ahí los bonos, y ya estoy en el destino»
- «Buenos días, solicito el reenvío de la documentación de mi reserva, por favor.»
- «porfa reenviarme el bono q lo perdi, y de paso dime a que hora se puede entrar al hotel»
