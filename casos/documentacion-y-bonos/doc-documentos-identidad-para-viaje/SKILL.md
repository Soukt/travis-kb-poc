---
name: doc-documentos-identidad-para-viaje
description: El cliente pregunta qué documento de identidad tiene que llevar
  cada viajero junto con el bono.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - buscar-informacion
    - verificar-identidad
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente duda entre documento nacional de identidad, pasaporte u otro documento, o viaja con personas de otra nacionalidad.

## Qué hace el agente

1. Busca con `buscar-informacion` la información aprobada sobre documentación de identidad para viajar.
2. Comprueba con `verificar-identidad` que es el titular de la reserva.
3. Revisa con `consultar-reserva` el destino, los servicios y los viajeros para ajustar la respuesta.
4. Prepara una respuesta basada solo en la información aprobada, remitiendo a las autoridades competentes para requisitos legales, y la deja para que booking la revise.

## Qué no hace

- No da por hecho requisitos legales o migratorios que no estén en la información aprobada.
- No asesora sobre visados ni permisos.

## Cuándo pasa a una persona

- Algún viajero tiene una situación documental especial (documento caducado, nacionalidad distinta, menor sin sus padres).

## Cómo lo puede pedir el cliente

- «¿Con el DNI es suficiente o necesito pasaporte?»
- «mi pareja no es española, q documento tiene q llevar?»
- «Quisiera conocer la documentación de identidad necesaria para cada uno de los viajeros.»
- «¿los niños necesitan DNI para el ferry? y para el hotel?»
