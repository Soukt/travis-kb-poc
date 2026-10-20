---
name: doc-canje-bono-ferri-puerto
description: El cliente pregunta si el bono del ferri sirve para embarcar o
  tiene que canjearlo por la tarjeta de embarque en el puerto.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Reservas con trayecto en ferri en las que el cliente no sabe qué hacer con el bono al llegar al puerto.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-trayecto-ferri` el puerto, la hora de presentación y si viaja con vehículo.
3. Confirma con `consultar-bonos` que el bono del trayecto está disponible.
4. Busca con `buscar-informacion` cómo funciona el canje en el puerto y le explica qué presentar, incluido el documento de identidad de cada pasajero.

## Qué no hace

- No inventa la ubicación de mostradores ni procedimientos de la naviera.
- No cambia el trayecto ni la hora de salida.

## Cuándo pasa a una persona

- Los datos del trayecto no coinciden con lo que el cliente esperaba.
- El bono del ferri no está disponible y la salida es inminente.

## Cómo lo puede pedir el cliente

- «¿El bono del barco ya es la tarjeta de embarque?»
- «tengo q pasar por algun mostrador en el puerto o voy directo al barco?»
- «Desearía saber si debo canjear el localizador por la tarjeta de embarque antes de subir.»
- «voy con el coche al ferry, ¿qué papeles enseño y dónde?»
