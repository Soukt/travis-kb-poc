---
name: vh-escala-nocturna-alojamiento-incluido
description: El cliente tiene una escala que pasa la noche y pregunta si su
  paquete incluye algún alojamiento para esas horas.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

El itinerario original tiene una escala nocturna y el cliente quiere saber si tiene dónde dormir. Es una consulta sobre lo contratado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` las horas de llegada y salida de la escala.
3. Revisa con `consultar-reserva` si entre los servicios contratados hay alojamiento para esa noche.
4. Le confirma lo que incluye la reserva y, si no hay alojamiento, se lo dice con claridad.

## Qué no hace

- No reserva un hotel para la escala.
- No da por incluido un servicio que no aparece en la reserva.

## Cuándo pasa a una persona

- Si el cliente quiere añadir alojamiento para la noche de la escala.
- Si la escala nocturna ha aparecido por un cambio de horario de la aerolínea.

## Cómo lo puede pedir el cliente

- «La escala es de noche, ¿tenemos hotel incluido?»
- «dormimos en el aeropuerto o q?»
- «Buenas, ¿el paquete incluye alguna habitación para la noche de la escala?»
- «Pasamos la noche en la escala con un bebé, ¿hay algo incluido para descansar?»
