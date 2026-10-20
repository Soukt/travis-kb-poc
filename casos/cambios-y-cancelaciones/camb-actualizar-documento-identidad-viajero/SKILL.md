---
name: camb-actualizar-documento-identidad-viajero
description: El cliente necesita actualizar el número o el tipo de documento de
  identidad de un viajero en la reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero ha renovado el documento, lo dio mal o viajará con otro distinto, y algún servicio, como el vuelo o el ferri, lo requiere.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` qué servicios necesitan el documento.
3. Pide con `pedir-datos-cliente` el documento nuevo mediante el formulario, para que no lo escriba en el chat.
4. Pasa la actualización a booking con `crear-ticket-booking`.

## Qué no hace

- No pide ni muestra documentos en el chat.
- No valida si el documento es suficiente para viajar al destino.

## Cuándo pasa a una persona

- Siempre: son datos personales de un viajero y se actualizan con el proveedor.

## Cómo lo puede pedir el cliente

- «He renovado el DNI y el número ha cambiado, ¿lo actualizáis?»
- «Mi hijo viaja con pasaporte y no con DNI, ¿hay que cambiar algo?»
- «puse mal el numero del documento de mi mujer en el ferry»
- «Necesito modificar el documento de identidad de uno de los viajeros. ¿Cómo se lo hago llegar?»
