---
name: viaj-titular-ausente-en-checkin
description: El cliente, titular de la reserva, no viajará o llegará más tarde y
  pregunta si otro viajero puede hacer la entrada en el alojamiento.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el titular no estará en la recepción a la llegada. Algunos alojamientos piden la presencia del titular o una tarjeta a su nombre en la entrada.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué viajeros figuran.
3. Revisa con `consultar-horarios-hotel` los horarios de entrada.
4. Busca con `buscar-informacion` la respuesta aprobada sobre entradas sin el titular.
5. Prepara la respuesta y, si procede, el aviso al alojamiento, para que booking los revise antes de enviarlos.

## Qué no hace

- No cambia el titular de la reserva.
- No asegura que el alojamiento no pida una garantía a la llegada.

## Cuándo pasa a una persona

- El titular no viaja y el cliente quiere cambiar de titular.
- El alojamiento exige un trámite que solo puede hacer booking.

## Cómo lo puede pedir el cliente

- «Yo hice la reserva pero no voy; ¿mi hermana puede hacer el check-in?»
- «llego mas tarde q mis amigos, pueden entrar ellos sin mi?»
- «Buenas tardes, el titular no podrá presentarse a la llegada. ¿Podrá registrarse otro de los viajeros?»
- «No voy a estar en la entrada del hotel; ¿le pedirán a mi hijo una tarjeta a su nombre?»
