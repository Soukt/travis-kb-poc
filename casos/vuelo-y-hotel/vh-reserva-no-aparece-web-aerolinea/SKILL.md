---
name: vh-reserva-no-aparece-web-aerolinea
description: El cliente introduce el código de su vuelo en la web de la
  aerolínea y le dice que la reserva no existe o no la encuentra.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente intenta gestionar su vuelo en la web de la aerolínea y no encuentra la reserva. Puede deberse a usar el código equivocado o a un problema real con el billete.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` el estado de la reserva y los nombres de los viajeros.
3. Obtiene con `consultar-vuelo` el código de la aerolínea y los datos de cada trayecto.
4. Prepara una respuesta con el código correcto y los pasos a seguir, o con la incidencia detectada.
5. Envía la propuesta con `crear-ticket-booking` para que booking la revise y, si hace falta, lo compruebe con la aerolínea antes de responder.

## Qué no hace

- No confirma que el billete está emitido sin la revisión de booking.
- No sugiere al cliente que vuelva a comprar el vuelo.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si el vuelo es inminente y el cliente no puede facturar, se marca como urgente.

## Cómo lo puede pedir el cliente

- «Pongo el código en la web de la aerolínea y me dice que no existe la reserva»
- «no me sale mi reserva en la pagina de la compañia, estoy agobiada»
- «Buenas, ¿es normal que la aerolínea no encuentre mi reserva? Quiero facturar ya»
- «Me sale reserva no encontrada, ¿tengo billete o no?»
