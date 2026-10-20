---
name: vh-vuelo-cancelado-antes-del-viaje
description: El cliente ha recibido el aviso de que la aerolínea ha cancelado su
  vuelo antes de la fecha del viaje y pregunta qué opciones tiene.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La cancelación llega con el viaje aún por empezar. El cliente necesita saber si habrá vuelo alternativo y qué pasa con el hotel.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-vuelo` el estado del vuelo cancelado.
3. Revisa con `consultar-reserva` el hotel y los traslados que dependen de ese vuelo.
4. Crea con `crear-ticket-booking` un ticket con la preferencia del cliente, si la indica.
5. Le informa de que booking le presentará las opciones disponibles.

## Qué no hace

- No elige por el cliente entre alternativa y reembolso.
- No cancela el hotel ni los traslados.

## Cuándo pasa a una persona

- Siempre, porque hay reubicación o devolución de dinero.

## Cómo lo puede pedir el cliente

- «Me ha llegado un correo de que cancelan mi vuelo»
- «nos han cancelado el vuelo de ida, y el hotel q?»
- «Buenos días, ¿qué alternativas hay si la aerolínea ha anulado el vuelo?»
- «cancelado el vuelo!! preferimos q nos devolvais el dinero»
