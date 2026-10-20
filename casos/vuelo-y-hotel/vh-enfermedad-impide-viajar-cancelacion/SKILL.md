---
name: vh-enfermedad-impide-viajar-cancelacion
description: El cliente no puede viajar por una enfermedad o un imprevisto grave
  y pide cancelar sin gastos o con alguna excepción.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Antes de la salida surge una causa grave, como una enfermedad, una operación o un fallecimiento. El cliente pide que no se le apliquen los gastos habituales.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Consulta con `consultar-politica-cancelacion` las condiciones de la reserva.
3. Pide con `pedir-datos-cliente` el justificante que pueda aportar, sin solicitar más detalle del necesario.
4. Crea con `crear-ticket-booking` un ticket con la petición de excepción.
5. Responde con empatía y le explica que booking valorará su caso.

## Qué no hace

- No promete la excepción.
- No pide más información médica de la necesaria.
- No cancela la reserva.

## Cuándo pasa a una persona

- Siempre, porque es una excepción a las condiciones con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Me han operado y no puedo viajar, ¿me devolvéis el dinero?»
- «estoy enfermo y no puedo coger el avion, tengo justificante medico»
- «Buenos días, por un motivo grave no podremos viajar; ¿hay alguna opción sin gastos?»
- «ha fallecido un familiar y no vamos a ir, que podemos hacer»
