---
name: viaj-cambiar-email-cuenta-cliente
description: El cliente quiere cambiar el email con el que accede a su zona de
  cliente, no el de una reserva concreta.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando la duda es sobre el acceso a la cuenta y no sobre el contacto de una reserva. Es una consulta general sobre la zona de cliente.

## Qué hace el agente

1. Aclara con el cliente si quiere cambiar el acceso a su cuenta o el contacto de una reserva.
2. Busca con `buscar-informacion` la respuesta aprobada sobre cómo cambiar el email de la cuenta.
3. Le explica los pasos según esa respuesta.
4. Le advierte de que el email de las reservas ya hechas puede no cambiar automáticamente, si así lo indica la información aprobada.

## Qué no hace

- No modifica la cuenta del cliente.
- No inventa pasos si no hay respuesta aprobada.

## Cuándo pasa a una persona

- El cliente no puede hacerlo por sí mismo y la información aprobada indica que lo gestiona la agencia.
- Sospecha que alguien ha cambiado el email sin su permiso.

## Cómo lo puede pedir el cliente

- «¿Cómo cambio el correo con el que entro en mi cuenta?»
- «kiero cambiar el mail de mi usuario, donde se hace»
- «Buenas tardes, deseo modificar la dirección de acceso a mi área de cliente.»
- «Quiero cambiar el email de la cuenta y que las reservas que tengo también pasen al nuevo.»
