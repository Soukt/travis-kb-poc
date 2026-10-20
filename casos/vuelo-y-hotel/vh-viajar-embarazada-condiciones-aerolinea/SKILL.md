---
name: vh-viajar-embarazada-condiciones-aerolinea
description: El cliente pregunta qué condiciones o documentos pide la aerolínea
  para volar durante el embarazo.
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

Una viajera de la reserva está embarazada y quiere saber si la aerolínea pone límites o pide algún certificado. Es un tema delicado que se revisa antes de responder.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la aerolínea operadora de cada trayecto.
3. Busca con `buscar-informacion` la respuesta aprobada sobre volar durante el embarazo.
4. Prepara una respuesta con esa información y la remisión a las condiciones de la aerolínea, y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No da consejo médico ni opina sobre si es seguro volar.
- No asegura que la aerolínea vaya a permitir el embarque.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si quiere cambiar o cancelar el viaje por este motivo.

## Cómo lo puede pedir el cliente

- «Estoy embarazada, ¿me pondrán pegas para volar?»
- «me piden algun certificado medico por estar embarazada?»
- «Buenas, ¿hasta qué semana de embarazo deja volar la aerolínea?»
- «si al final no me dejan volar por el embarazo me devolveis el dinero?»
