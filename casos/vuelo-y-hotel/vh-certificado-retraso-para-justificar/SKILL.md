---
name: vh-certificado-retraso-para-justificar
description: El cliente necesita un justificante del retraso o la cancelación de
  su vuelo para presentarlo en el trabajo o en otro trámite.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ha sufrido una incidencia en el vuelo y le piden un documento que la acredite. No reclama dinero, solo necesita el justificante.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` los datos y el estado registrado del vuelo afectado.
3. Busca con `buscar-informacion` la respuesta aprobada sobre quién emite este tipo de justificantes.
4. Prepara la respuesta con los pasos y los datos del vuelo, y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No emite certificados en nombre de la aerolínea.
- No redacta documentos con horarios que no estén confirmados.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si el cliente necesita un documento firmado por la agencia.

## Cómo lo puede pedir el cliente

- «Necesito un certificado del retraso para mi empresa»
- «me podeis dar un papel q diga q el vuelo se cancelo? es para el curro»
- «Hola, ¿quién emite el justificante de retraso, vosotros o la aerolínea?»
- «Por el retraso falté al trabajo y me piden algo oficial, ¿me ayudáis?»
