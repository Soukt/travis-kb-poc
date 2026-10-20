---
name: viaj-justificante-reserva-para-visado
description: El cliente necesita un justificante de la reserva con los nombres
  de los viajeros para un trámite oficial, como un visado.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un consulado, una empresa u otra entidad pide acreditar el alojamiento o el viaje. A veces basta con el bono, pero un documento específico debe emitirlo booking.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los viajeros y servicios que deben constar.
3. Comprueba con `consultar-bonos` si los bonos están disponibles y se los reenvía con `reenviar-bono` para que tenga algo mientras tanto.
4. Abre con `crear-ticket-booking` la petición del justificante, indicando qué debe constar y para qué trámite.

## Qué no hace

- No redacta certificados en nombre de la agencia.
- No incluye en el justificante datos que no consten en la reserva.

## Cuándo pasa a una persona

- El trámite exige un documento distinto del bono, con sello o firma de la agencia.

## Cómo lo puede pedir el cliente

- «Me piden una carta de la agencia con la reserva del hotel para el visado de mi madre.»
- «Buenas tardes, ¿pueden emitir un justificante de reserva a nombre de todos los viajeros?»
- «necesito un papel q diga q tengo reserva, pa el consulado»
- «¿Me hacéis un certificado del viaje para la empresa y me reenviáis los bonos?»
