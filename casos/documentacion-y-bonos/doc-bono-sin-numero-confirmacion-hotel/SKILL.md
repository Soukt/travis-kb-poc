---
name: doc-bono-sin-numero-confirmacion-hotel
description: El cliente ve que su bono no incluye el número de confirmación del
  alojamiento y le preocupa que no tengan la reserva.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el bono muestra el localizador de la agencia pero no el código de confirmación del propio alojamiento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` el estado del bono y si incluye la confirmación del proveedor.
3. Busca con `buscar-informacion` si el bono es válido sin número de confirmación del alojamiento.
4. Le explica qué localizador presentar y que el bono de la agencia es el documento válido.

## Qué no hace

- No inventa números de confirmación.
- No pide la confirmación al alojamiento.

## Cuándo pasa a una persona

- La llegada es inminente y el cliente necesita la confirmación del alojamiento para algún trámite.
- La información aprobada indica que ese alojamiento requiere su propio código.

## Cómo lo puede pedir el cliente

- «El bono no tiene número de confirmación del hotel, ¿es normal?»
- «solo sale vuestro localizador, el hotel sabra q voy?»
- «Quisiera saber si necesito un código de confirmación emitido por el propio establecimiento.»
- «¿cómo sé que el hotel tiene mi reserva si no hay número suyo?»
