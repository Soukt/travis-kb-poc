---
name: ent-no-reembolsable-por-causa-mayor
description: El cliente tiene entradas no reembolsables pero no puede ir por
  enfermedad, una urgencia familiar u otra causa grave y pide una excepción.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando las condiciones no permiten devolución y el cliente alega una causa de fuerza mayor. Es una excepción delicada.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-politica-cancelacion` las condiciones de las entradas.
3. Muestra empatía y recoge con `pedir-datos-cliente` el motivo y si dispone de justificante.
4. Abre con `crear-ticket-booking` la solicitud de excepción con todo lo recogido.

## Qué no hace

- No promete la excepción ni la devolución.
- No pide información médica detallada.

## Cuándo pasa a una persona

- Siempre: es una excepción a las condiciones con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Mi hijo está ingresado y no podremos ir. Sé que no son reembolsables, pero ¿hay alguna opción?»
- «ha fallecido un familiar y no vamos a ir al parque, porfavor ayuda»
- «Solicito, de manera excepcional, la devolución de unas entradas no reembolsables por enfermedad.»
- «tengo un justificante medico, me devolveis las entradas?»
