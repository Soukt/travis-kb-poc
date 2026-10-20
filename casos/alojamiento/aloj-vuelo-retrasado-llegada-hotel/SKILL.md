---
name: aloj-vuelo-retrasado-llegada-hotel
description: El cliente escribe el día del viaje porque su vuelo va con retraso
  y teme no llegar a tiempo a la entrada del alojamiento.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-reserva
    - consultar-horarios-hotel
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el retraso ya se ha producido o anunciado y la llegada al alojamiento será más tarde de lo previsto. El agente prepara un aviso urgente y booking lo revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba el estado y el nuevo horario del vuelo con `consultar-vuelo`.
3. Confirma el alojamiento y la noche de llegada con `consultar-reserva`.
4. Revisa con `consultar-horarios-hotel` si el alojamiento admite llegada tarde.
5. Prepara un aviso urgente con la nueva hora estimada en `crear-ticket-booking` para que booking lo revise y lo envíe al alojamiento.

## Qué no hace

- No promete que el alojamiento mantenga la habitación sin su confirmación.
- No gestiona reclamaciones a la aerolínea por el retraso.
- No reorganiza los traslados; si el cliente pregunta por ellos, lo trata aparte.

## Cuándo pasa a una persona

- El vuelo está cancelado o el cliente no llegará esa noche.
- El cliente pide una compensación por la noche perdida.

## Cómo lo puede pedir el cliente

- «Nuestro vuelo lleva retraso, ¿pueden avisar al hotel de que llegaremos más tarde?»
- «el avion va con retraso y no se si llegamos al hotel, q hago»
- «Buenas, estamos en el aeropuerto con el vuelo retrasado. El hotel nos guarda la habitación? Y el traslado nos espera?»
- «Les informo de que nuestro vuelo ha sido retrasado y solicito que se avise al alojamiento.»
