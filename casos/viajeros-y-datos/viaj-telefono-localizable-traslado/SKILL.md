---
name: viaj-telefono-localizable-traslado
description: El cliente quiere que el proveedor del traslado tenga un teléfono
  para localizarle el día de llegada.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-traslados
    - pedir-datos-cliente
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente tiene traslado contratado y le preocupa que el conductor no le encuentre, por ejemplo porque usará otro número en destino.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-traslados` el traslado, el punto de encuentro y los horarios.
3. Pide con `pedir-datos-cliente` el teléfono en el que estará localizable.
4. Prepara la nota para el proveedor del traslado y la respuesta al cliente con el punto de encuentro, para que booking las revise antes de enviarlas.

## Qué no hace

- No facilita al cliente teléfonos del proveedor que no devuelvan las acciones.
- No garantiza que el conductor vaya a llamar.

## Cuándo pasa a una persona

- La llegada es inminente y no da tiempo a una revisión ordinaria.
- El traslado no aparece en la reserva.

## Cómo lo puede pedir el cliente

- «¿El conductor del traslado tiene mi móvil? Allí usaré otro número.»
- «Buenas, quiero dejar un teléfono de contacto para el traslado del aeropuerto al hotel.»
- «y si el del transfer no me encuentra? os dejo mi numero?»
- «Quiero dar un teléfono para el traslado y saber dónde tengo que esperar al conductor.»
