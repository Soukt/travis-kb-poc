---
name: vh-contratar-embarque-prioritario-extras
description: El cliente quiere añadir servicios extra a su vuelo, como embarque
  prioritario o acceso rápido al control de seguridad.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente quiere un servicio adicional de la aerolínea o del aeropuerto que no tiene incluido. Supone un cargo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` los servicios incluidos en su tarifa.
3. Pide con `pedir-datos-cliente` qué servicio quiere, para qué trayectos y para qué viajeros.
4. Crea con `crear-ticket-booking` un ticket con la petición.
5. Le informa de que booking le confirmará disponibilidad y coste antes de aplicar nada.

## Qué no hace

- No da precios ni confirma la disponibilidad del servicio.
- No asegura que la aerolínea lo ofrezca en ese vuelo.

## Cuándo pasa a una persona

- Siempre, porque implica un cargo.

## Cómo lo puede pedir el cliente

- «¿Se puede añadir embarque prioritario?»
- «quiero el fast track del control, se puede contratar con vosotros?»
- «Buenas, ¿qué extras se pueden añadir al vuelo de la reserva?»
- «con prioridad podria subir la maleta de cabina? si es asi lo contrato»
