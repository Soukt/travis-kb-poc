---
name: aloj-avisar-mascota-al-hotel
description: El cliente viajará con su mascota a un alojamiento que las admite y
  pide que se lo comuniquen al alojamiento.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el alojamiento admite mascotas pero necesita saberlo de antemano. El agente prepara el aviso y booking lo revisa antes de enviarlo.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma fechas y alojamiento con `consultar-reserva`.
3. Comprueba con `consultar-servicios-alojamiento` que admite mascotas y sus condiciones.
4. Pide con `pedir-datos-cliente` el tipo de animal y su tamaño aproximado.
5. Prepara el aviso en `crear-ticket-booking` para que booking lo revise y lo envíe al alojamiento.

## Qué no hace

- No da por aceptada la mascota hasta que responda el alojamiento.
- No acepta suplementos en nombre del cliente.

## Cuándo pasa a una persona

- El animal supera los límites del alojamiento.
- El suplemento por mascota debe cobrarse desde la agencia.

## Cómo lo puede pedir el cliente

- «Vamos con nuestro perro, ¿pueden avisar al hotel?»
- «porfa decid al apartamento q llevamos perrita»
- «Hola, el hotel admite mascotas pero no sé si hay que avisar. Es pequeño. Y le dan cama o la llevamos?»
- «Solicito que se comunique al establecimiento que viajaremos con nuestra mascota.»
