---
name: vh-objeto-olvidado-en-traslado
description: El cliente se ha dejado algo en el vehículo del traslado entre el
  aeropuerto y el hotel y quiere recuperarlo.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-traslados
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Al llegar al hotel o al aeropuerto, el cliente echa en falta un objeto que llevaba en el traslado. Hay que contactar con el proveedor.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-traslados` el servicio, la fecha y el trayecto en que viajó.
3. Pide con `pedir-datos-cliente` una descripción del objeto y dónde iba en el vehículo.
4. Prepara la petición al proveedor y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No promete que el objeto aparezca.
- No se compromete a enviarlo ni a cubrir gastos de envío.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la petición antes de contactar con el proveedor.
- Si lo olvidado es un documento imprescindible para volar.

## Cómo lo puede pedir el cliente

- «Me he dejado una bolsa en el autobús del traslado»
- «se me cayo el movil en la furgoneta del traslado, podeis llamar?»
- «Buenas, mi hijo olvidó su mochila en el traslado de llegada.»
- «creo q me deje la chaqueta en el traslado, se puede recuperar antes de volver?»
