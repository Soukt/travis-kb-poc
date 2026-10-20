---
name: vh-facturacion-con-bebe-en-brazos
description: El cliente no consigue facturar online porque viaja con un bebé en
  brazos y la aerolínea no le deja completar el proceso.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El bebé figura en la reserva sin asiento propio y la facturación online da error o no lo muestra. El cliente quiere saber si es un problema del billete.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-reserva` que el bebé figura en la reserva.
3. Revisa con `consultar-vuelo` cómo aparece el bebé en cada trayecto.
4. Busca con `buscar-informacion` la respuesta aprobada sobre la facturación con bebés.
5. Prepara la respuesta y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No añade al bebé a la reserva.
- No asegura que pueda facturar online.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si el bebé no figura en la reserva del vuelo.

## Cómo lo puede pedir el cliente

- «No me deja facturar porque viajo con un bebé»
- «el bebe no sale en el check in, q hago»
- «Buenas, ¿con un bebé en brazos hay que facturar en el mostrador?»
- «me sale error al meter los datos del bebé en la web de la aerolinea»
