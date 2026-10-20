---
name: camb-comprobar-cambio-aplicado-y-bonos
description: El cliente ha recibido aviso de que su cambio está hecho y quiere
  comprobarlo y tener los bonos actualizados.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Una modificación ya se ha aplicado y el cliente quiere confirmar fechas, viajeros y servicios, y recibir los bonos con los datos nuevos.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los datos actuales y se los resume al cliente.
3. Comprueba con `consultar-bonos` si los bonos actualizados están disponibles.
4. Si lo están, se los reenvía al email de la reserva con `reenviar-bono`.
5. Le recuerda que use solo los bonos nuevos y deseche los anteriores.

## Qué no hace

- No reenvía bonos que aún no están actualizados.
- No envía los bonos a un email distinto del de la reserva.

## Cuándo pasa a una persona

- Los datos de la reserva no coinciden con el cambio pedido.
- Los bonos siguen sin estar disponibles con los datos nuevos.

## Cómo lo puede pedir el cliente

- «Me ha llegado que el cambio está hecho, ¿me mandáis los bonos nuevos?»
- «¿Podéis confirmarme que ya están bien las fechas y mandarme el bono?»
- «el bono q tengo es el viejo, enviarme el nuevo porfa»
- «Buenos días, ruego confirmen los datos actualizados de la reserva y me reenvíen la documentación. ¿El hotel tiene wifi?»
