---
name: camb-cambiar-fecha-vuelo-reserva
description: El cliente quiere cambiar la fecha o el horario de un vuelo
  incluido en su reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva incluye vuelos y el cliente necesita volar otro día u otra hora. Las condiciones dependen de la tarifa aérea y suelen implicar diferencia de precio.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` qué otros servicios dependen del vuelo.
3. Consulta con `consultar-vuelo` los vuelos, horarios y equipaje actuales.
4. Revisa con `consultar-politica-cancelacion` si la tarifa permite cambios y le avisa de que el cambio puede afectar al traslado o a las noches de hotel.
5. Recoge el vuelo a cambiar y la nueva fecha u hora deseada, y lo pasa a booking con `crear-ticket-booking`.

## Qué no hace

- No confirma plaza en otro vuelo.
- No da precios ni diferencias de tarifa.

## Cuándo pasa a una persona

- Siempre: el cambio de vuelo lo cotiza y lo gestiona booking.

## Cómo lo puede pedir el cliente

- «Quiero cambiar el vuelo de vuelta para volver por la noche, ¿se puede?»
- «hola, me han cambiado un examen y tengo que volar otro dia, que hago»
- «¿Se puede adelantar el vuelo de ida? Y si cambio, ¿la maleta facturada sigue incluida?»
- «Les escribo para solicitar la modificación de la fecha de mi vuelo.»
