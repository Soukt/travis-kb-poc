---
name: viaj-viajera-embarazada-restricciones
description: El cliente pregunta si una viajera embarazada puede volar o
  embarcar en el ferri y qué documentación le pueden pedir.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando una viajera estará embarazada en las fechas del viaje. Los transportistas pueden pedir un certificado médico o limitar el embarque según la etapa del embarazo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` las fechas y los servicios.
3. Revisa con `consultar-vuelo` o `consultar-trayecto-ferri` los trayectos de la reserva.
4. Busca con `buscar-informacion` la respuesta aprobada sobre viajar embarazada.
5. Prepara una respuesta prudente que recomiende consultarlo también con su médico, y la deja para revisión de booking.

## Qué no hace

- No da límites de semanas de embarazo que no consten en la información aprobada.
- No da consejos médicos.

## Cuándo pasa a una persona

- La viajera no podrá viajar y plantea cambiar o cancelar.
- El transportista exige un trámite previo.

## Cómo lo puede pedir el cliente

- «Estoy embarazada, ¿me dejarán subir al avión?»
- «mi mujer va a estar de bastantes meses en el viaje, le pediran algun papel en el barco?»
- «Buenos días, ¿qué requisitos exige la aerolínea a las pasajeras embarazadas?»
- «Estoy embarazada; ¿necesito un certificado médico y, si no puedo volar, qué pasa con la reserva?»
