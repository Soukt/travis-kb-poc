---
name: vh-maleta-no-llego-al-destino
description: El cliente ha llegado al destino y su maleta no ha salido en la
  cinta de equipajes.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - buscar-informacion
    - consultar-vuelo
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente acaba de aterrizar o ya está en el hotel y le falta una maleta facturada. Necesita saber qué hacer y que se le haga seguimiento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Busca con `buscar-informacion` los pasos aprobados para equipaje no entregado y se los indica, empezando por el parte en el mostrador de equipajes del aeropuerto.
3. Obtiene con `consultar-vuelo` los datos del vuelo y con `consultar-reserva` el alojamiento, para que el cliente pueda indicar dónde entregarle la maleta.
4. Pide con `pedir-datos-cliente` la referencia del parte de equipaje y los gastos de primera necesidad que tenga.
5. Crea con `crear-ticket-booking` un ticket con todo para el seguimiento.

## Qué no hace

- No promete plazos de entrega de la maleta.
- No garantiza el reembolso de las compras hechas.
- No tramita por su cuenta la reclamación con la aerolínea.

## Cuándo pasa a una persona

- Siempre, porque puede haber gastos que reclamar.

## Cómo lo puede pedir el cliente

- «Mi maleta no ha salido, ¿qué hago?»
- «hemos llegado y la maleta no esta, estoy sin ropa»
- «Buenas, ya hice el parte en el aeropuerto, ¿me la llevan al hotel?»
- «no ha llegado el equipaje del niño, puedo comprar cosas y q me lo paguen?»
