---
name: doc-reenviar-bono-a-otro-email
description: El cliente pide que le envíen los bonos a un email distinto del que
  figura en la reserva.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-bonos
    - reenviar-bono
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente quiere que la documentación llegue a otra dirección, por ejemplo la de otro viajero o una personal en lugar de la del trabajo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` que los bonos están disponibles.
3. Le ofrece `reenviar-bono` al email de la reserva para que él mismo los reenvíe a quien quiera, o descargarlos desde la zona de cliente.
4. Si insiste en que lleguen a otra dirección, recoge el motivo y la dirección y abre `crear-ticket-booking`.

## Qué no hace

- No envía bonos a direcciones que no sean la de la reserva.
- No cambia el email de contacto de la reserva.

## Cuándo pasa a una persona

- El cliente necesita que la documentación llegue directamente a otra dirección.
- La dirección nueva pertenece a otra persona.

## Cómo lo puede pedir el cliente

- «¿Podéis mandar el bono al correo de mi madre? Ella es la que viaja»
- «Mandádmelo a mi email personal, que el del curro no lo miro»
- «Solicito que la confirmación se envíe a otra dirección de correo electrónico.»
- «envialo a otro correo porfa q ese casi no lo abro»
