---
name: ent-pase-prioritario-por-discapacidad
description: El cliente pregunta si una persona con discapacidad de su grupo
  puede obtener acceso prioritario o un pase especial en el parque.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente quiere saber qué documentación se exige y cómo se solicita el pase en el parque. Es un tema delicado que conviene revisar antes de enviar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` los viajeros de la reserva.
3. Revisa con `consultar-condiciones-entrada` si las entradas mencionan acceso prioritario o entrada de acompañante.
4. Busca con `buscar-informacion` las respuestas aprobadas sobre pases de accesibilidad y la documentación necesaria.
5. Prepara una respuesta clara para que booking la revise antes de enviarla.

## Qué no hace

- No pide ni almacena certificados de discapacidad por el chat.
- No garantiza que el parque conceda el pase.

## Cuándo pasa a una persona

- El cliente pide una devolución por la entrada del acompañante o una excepción.

## Cómo lo puede pedir el cliente

- «Mi hijo tiene discapacidad. ¿Hay algún pase para no hacer las colas?»
- «con el certificado de discapacidad dan algun pase en el parque?»
- «Buenos días, ¿qué documentación hay que presentar para solicitar el acceso prioritario por discapacidad?»
- «el acompañante de una persona con discapacidad paga entrada?»
