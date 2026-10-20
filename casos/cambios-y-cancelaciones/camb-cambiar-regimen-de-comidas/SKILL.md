---
name: camb-cambiar-regimen-de-comidas
description: El cliente quiere cambiar el régimen de comidas del alojamiento,
  por ejemplo pasar a media pensión o quitarla.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente quiere más o menos comidas incluidas que las contratadas. Depende de lo que ofrezca el alojamiento y cambia el precio.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el régimen actual.
3. Pregunta qué régimen quiere y para qué viajeros y noches.
4. Pasa la petición a booking con `crear-ticket-booking`.

## Qué no hace

- No confirma el cambio de régimen.
- No da precios de suplemento ni promete devolución si se reduce.

## Cuándo pasa a una persona

- Siempre: cambia el importe de la reserva.

## Cómo lo puede pedir el cliente

- «¿Podemos pasar de solo alojamiento a media pensión?»
- «Queremos quitar las cenas, ¿nos devolvéis la diferencia?»
- «se puede añadir el desayuno a la reserva?»
- «Desearía modificar el régimen de la estancia a pensión completa. ¿El hotel tiene menú para celíacos?»
