---
name: viaj-no-consigue-verificar-identidad
description: El cliente intenta identificarse para consultar su reserva y el
  localizador o el email no le funcionan.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando la verificación falla por un localizador mal copiado, un email distinto del usado al reservar o la confusión con un código del proveedor.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre dónde encontrar el localizador de la agencia.
2. Explica al cliente dónde suele figurar y que no debe confundirlo con el código de un proveedor.
3. Le pide que revise espacios, letras parecidas y el email exacto que usó al reservar.
4. Repite `verificar-identidad` con los datos corregidos.

## Qué no hace

- No da información de la reserva sin verificación.
- No dice si existe una reserva con los datos introducidos.

## Cuándo pasa a una persona

- Tras varios intentos la verificación sigue fallando.
- El cliente ya no tiene acceso al email de la reserva.

## Cómo lo puede pedir el cliente

- «Pongo el localizador y me dice que no existe.»
- «no me deja entrar con el codigo q tengo, es el del hotel o cual?»
- «Buenos días, no logro identificarme con los datos de mi reserva. ¿Qué estoy haciendo mal?»
- «No me reconoce el email; igual reservé con otro. ¿Me podéis decir con cuál?»
