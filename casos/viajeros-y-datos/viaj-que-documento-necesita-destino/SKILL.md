---
name: viaj-que-documento-necesita-destino
description: El cliente pregunta qué documento de identidad o de viaje necesita
  cada viajero para el destino de su reserva.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente duda entre viajar con DNI o con pasaporte, o no sabe qué se pide en su destino. Un error puede dejarle sin viajar, por eso la respuesta se revisa.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` el destino, los servicios y los viajeros.
3. Busca con `buscar-informacion` la respuesta aprobada sobre documentación para ese tipo de viaje.
4. Prepara la respuesta con lo que diga esa información y recomienda confirmar los requisitos con las autoridades oficiales.
5. Deja la respuesta para revisión de booking antes de enviarla.

## Qué no hace

- No da requisitos de entrada que no estén en la información aprobada.
- No asegura que un documento será aceptado en frontera.

## Cuándo pasa a una persona

- No hay respuesta aprobada para el destino o el tipo de viajero.
- Algún viajero tiene una situación documental especial.

## Cómo lo puede pedir el cliente

- «¿Necesito pasaporte para este viaje o me vale con el DNI?»
- «Buenos días, querría saber qué documentación debemos llevar todos los viajeros.»
- «con el carnet de identidad me dejan o tengo q sacarme el pasaporte?»
- «¿Qué documento necesitamos para viajar y a qué hora tenemos que estar en el aeropuerto?»
