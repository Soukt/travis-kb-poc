---
name: aloj-alergias-intolerancias-alimentarias
description: El cliente tiene alergias o intolerancias alimentarias y quiere que
  el alojamiento lo sepa antes de llegar.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente o algún viajero necesita una dieta especial por alergia, intolerancia o motivo religioso. El agente prepara la petición y booking la revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba régimen y viajeros con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` si el alojamiento informa de menús especiales.
4. Prepara la petición al alojamiento, con solo la información alimentaria imprescindible, en `crear-ticket-booking` para que booking la revise y la envíe.
5. Recomienda al cliente recordarlo también en el restaurante al llegar.

## Qué no hace

- No garantiza la ausencia de trazas ni la seguridad alimentaria.
- No pide informes médicos ni más detalles de salud de los necesarios.

## Cuándo pasa a una persona

- La alergia es grave y el alojamiento no confirma poder atenderla.
- El alojamiento pide un suplemento por el menú especial.

## Cómo lo puede pedir el cliente

- «Soy celíaca, ¿pueden avisar al hotel para que tengan opciones sin gluten?»
- «mi hijo es alergico a los frutos secos, el hotel lo sabe?»
- «Hola, somos vegetarianos y además intolerantes a la lactosa, hay algo para nosotros en la media pensión?»
- «Solicito que se informe al establecimiento de las necesidades alimentarias de uno de los viajeros.»
