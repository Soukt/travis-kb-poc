---
name: doc-numero-documento-viajero-erroneo
description: El cliente ve que el número de documento de identidad de un viajero
  está mal en la reserva del vuelo o del ferri.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Servicios que registran el documento de identidad de cada viajero y en los que un error puede impedir el embarque.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` qué servicio y qué viajero están afectados.
3. Recoge con `pedir-datos-cliente` el dato correcto mediante el formulario, sin que el cliente lo escriba en el chat.
4. Abre `crear-ticket-booking` con el servicio, el viajero y la fecha del viaje.

## Qué no hace

- No repite ni muestra números de documento en la conversación.
- No corrige el dato por su cuenta.

## Cuándo pasa a una persona

- Siempre: son datos personales de viajeros y la corrección se hace con el proveedor.

## Cómo lo puede pedir el cliente

- «El número de DNI de mi mujer está mal en la reserva»
- «me equivoque al poner el pasaporte, se puede cambiar?»
- «Detecto un error en el número de documento de uno de los pasajeros.»
- «puse el DNI caducado y ahora tengo otro, ¿hay que actualizarlo para el barco?»
