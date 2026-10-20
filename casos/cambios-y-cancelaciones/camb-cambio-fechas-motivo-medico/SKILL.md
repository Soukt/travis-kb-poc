---
name: camb-cambio-fechas-motivo-medico
description: El cliente necesita cambiar las fechas del viaje por un problema de
  salud y pide que no le cobren gastos.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente o un acompañante tiene una enfermedad, lesión u operación que le impide viajar en las fechas reservadas y quiere aplazar sin gastos. Es una petición de excepción.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios y las fechas.
3. Consulta con `consultar-politica-cancelacion` lo que aplicaría según las condiciones normales y se lo explica con tacto.
4. Pide con `pedir-datos-cliente` las nuevas fechas deseadas y si dispone de justificante médico, sin solicitar detalles de salud innecesarios.
5. Pasa el caso a booking con `crear-ticket-booking`.

## Qué no hace

- No promete que se eximan los gastos.
- No pide diagnósticos ni información médica detallada.
- No valora si el motivo es suficiente.

## Cuándo pasa a una persona

- Siempre: es una excepción a las condiciones con impacto económico.

## Cómo lo puede pedir el cliente

- «Me han operado de urgencia y no puedo viajar esas fechas, ¿podemos cambiarlas sin coste?»
- «hola, mi hija se ha roto una pierna, nos podeis mover el viaje sin cobrarnos?»
- «Por prescripción médica no puedo viajar. Tengo el informe. ¿Qué opciones hay para aplazar?»
- «estoy de baja y el medico no me deja viajar, se puede cambiar la fecha? tengo justificante»
