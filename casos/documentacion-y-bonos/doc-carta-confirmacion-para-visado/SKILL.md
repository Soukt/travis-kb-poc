---
name: doc-carta-confirmacion-para-visado
description: El cliente necesita una confirmación de la reserva para tramitar un
  visado o presentarla en un control fronterizo.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando un consulado, una embajada o un control de entrada piden acreditar el alojamiento o el viaje de regreso.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el estado, las fechas y los viajeros.
3. Consulta con `consultar-bonos` qué documentos de la reserva están disponibles.
4. Busca con `buscar-informacion` qué documentos ofrece la agencia para trámites de visado y prepara la respuesta para revisión de booking.

## Qué no hace

- No garantiza que el documento sea aceptado por las autoridades.
- No asesora sobre requisitos de visado.
- No redacta cartas de invitación ni certificados oficiales.

## Cuándo pasa a una persona

- La autoridad pide una carta firmada o un formato específico.

## Cómo lo puede pedir el cliente

- «Necesito una carta de la reserva para el visado»
- «el consulado me pide la reserva del hotel, me vale el bono?»
- «Solicito un documento que acredite la reserva para presentarlo ante la embajada.»
- «mi cuñado viene de fuera y le piden justificar el alojamiento, ¿qué le mando?»
