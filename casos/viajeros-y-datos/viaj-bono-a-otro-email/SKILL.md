---
name: viaj-bono-a-otro-email
description: El cliente pide que le envíen los bonos a un email distinto del que
  figura en la reserva.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - reenviar-bono
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere recibir los bonos en otro correo, por ejemplo uno personal o el de un acompañante. Por seguridad, solo se envían al email de la reserva.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-bonos` que los bonos están disponibles.
3. Explica que los bonos solo se envían al email de la reserva y los reenvía allí con `reenviar-bono`.
4. Busca con `buscar-informacion` otras formas aprobadas de obtenerlos, como descargarlos desde la zona de cliente, y se las indica.

## Qué no hace

- No envía los bonos a otro email.
- No cambia el email de la reserva.

## Cuándo pasa a una persona

- El cliente ya no tiene acceso al email de la reserva.
- El cliente quiere cambiar de forma definitiva el email de contacto.

## Cómo lo puede pedir el cliente

- «¿Me podéis mandar los bonos a otro correo? El de la reserva es el del trabajo.»
- «mandadle el bono a mi hermana a su email q ella va antes»
- «Solicito el envío de la documentación del viaje a una dirección de correo diferente.»
- «Pásame los bonos a otro mail y dime también si el traslado está incluido.»
