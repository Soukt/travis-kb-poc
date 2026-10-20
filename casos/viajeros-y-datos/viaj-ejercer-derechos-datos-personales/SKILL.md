---
name: viaj-ejercer-derechos-datos-personales
description: El cliente quiere saber qué datos personales suyos guarda la
  agencia o pide que se corrijan o se borren.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente ejerce sus derechos de protección de datos: acceso, rectificación, supresión u oposición. Puede referirse a sus datos como titular o como acompañante en la reserva de otra persona.

## Qué hace el agente

1. Si la petición afecta a una reserva suya, comprueba con `verificar-identidad` que es el titular.
2. Busca con `buscar-informacion` la respuesta aprobada sobre el ejercicio de derechos de protección de datos.
3. Le explica el procedimiento según esa respuesta.
4. Abre con `crear-ticket-booking` la petición para que se tramite por el cauce correspondiente.

## Qué no hace

- No borra ni exporta datos por su cuenta.
- No da datos de reservas de otras personas en las que aparezca el cliente.
- No inventa plazos legales.

## Cuándo pasa a una persona

- Siempre: el ejercicio de derechos se tramita formalmente.

## Cómo lo puede pedir el cliente

- «Quiero que borréis todos mis datos de vuestra web.»
- «Buenos días, en ejercicio de mi derecho de acceso, solicito copia de los datos personales que tratan sobre mí.»
- «un amigo me metio en su reserva y no quiero q tengais mis datos»
- «¿Qué datos míos tenéis guardados? Y quiero que corrijáis mi dirección.»
