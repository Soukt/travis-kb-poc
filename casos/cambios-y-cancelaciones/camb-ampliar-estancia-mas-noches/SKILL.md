---
name: camb-ampliar-estancia-mas-noches
description: El cliente quiere añadir noches a su estancia, llegando antes o
  marchándose más tarde de lo reservado.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya tiene el alojamiento reservado y quiere ampliar la estancia por delante o por detrás. Requiere disponibilidad del hotel y supone un coste adicional.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` las fechas, el tipo de habitación y el régimen actuales.
3. Consulta con `consultar-politica-cancelacion` si ampliar la estancia afecta a las condiciones de la reserva.
4. Pregunta cuántas noches quiere añadir, si van antes o después de la estancia y si deben ser en la misma habitación.
5. Crea la solicitud con `crear-ticket-booking` para que booking compruebe disponibilidad y precio.

## Qué no hace

- No confirma la ampliación ni da precio de las noches extra.
- No da por hecho que las noches nuevas tendrán el mismo régimen o la misma tarifa.

## Cuándo pasa a una persona

- Siempre: la ampliación implica un nuevo cobro y la gestiona booking.

## Cómo lo puede pedir el cliente

- «Hola, ¿podríamos quedarnos una noche más en el hotel? Nos viene mejor volver el lunes.»
- «Queremos llegar un día antes, ¿se puede añadir esa noche a la reserva?»
- «porfa añadirme otra noche al final, que el vuelo de vuelta lo tengo por la tarde. ¿el desayuno seguiría incluido?»
- «Buenas tardes, desearía ampliar mi estancia. Indíquenme cómo proceder.»
