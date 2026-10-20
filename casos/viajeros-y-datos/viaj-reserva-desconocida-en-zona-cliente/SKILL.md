---
name: viaj-reserva-desconocida-en-zona-cliente
description: El cliente ve en su zona de cliente una reserva que no reconoce o
  con viajeros que no conoce.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando aparece en la cuenta del cliente una reserva que él no hizo, quizá porque un familiar usó su email o por un error de asociación. Puede contener datos de otras personas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` si el email del cliente es el de esa reserva.
2. Revisa con `consultar-reserva` solo lo necesario para identificar el caso, sin repetir datos de otros viajeros.
3. Pregunta al cliente si algún conocido pudo reservar con su email.
4. Abre con `crear-ticket-booking` el caso para que booking lo revise.

## Qué no hace

- No cancela la reserva.
- No comparte datos de los viajeros que el cliente no conoce.

## Cuándo pasa a una persona

- Siempre: puede implicar datos de otras personas o un uso indebido.

## Cómo lo puede pedir el cliente

- «En mi cuenta aparece un viaje que yo no he hecho.»
- «me sale una reserva con gente q no conozco de nada, esto q es?»
- «Buenas tardes, observo en mi área de cliente una reserva que no reconozco. Solicito que lo revisen.»
- «Tengo una reserva en mi perfil que no es mía; ¿me la vais a cobrar?»
