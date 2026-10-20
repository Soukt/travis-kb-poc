---
name: camb-cambiar-email-contacto-reserva
description: El cliente quiere cambiar el email o el teléfono de contacto
  asociados a su reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
  simulado: "true"
---
## Cuándo aplica

El titular ya no usa el contacto de la reserva o quiere recibir las comunicaciones en otro. Es un cambio sensible, porque los bonos y avisos se envían a ese contacto.

## Qué hace el agente

1. Verifica con `verificar-identidad` que quien escribe es el titular.
2. Comprueba con `consultar-reserva` el estado de la reserva.
3. Recoge con `pedir-datos-cliente` el nuevo dato de contacto.
4. Prepara la solicitud de cambio para que booking la revise y la aplique.

## Qué no hace

- No envía bonos ni documentación al contacto nuevo antes de que booking lo valide.
- No muestra completo el contacto actual.

## Cuándo pasa a una persona

- La verificación de identidad no es concluyente.
- El cambio lo pide alguien que no es el titular.

## Cómo lo puede pedir el cliente

- «Ya no uso el correo con el que reservé, ¿podéis cambiarlo?»
- «quiero q los bonos me lleguen a otro email»
- «Hola, ¿puedo cambiar el móvil de contacto de la reserva?»
- «Les solicito actualizar los datos de contacto de mi reserva y que me reenvíen el bono.»
