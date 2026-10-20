---
name: viaj-checkin-online-datos-pasaporte
description: El cliente quiere saber qué datos le pedirán al hacer la
  facturación en línea del vuelo y cómo prepararlos.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente va a hacer la facturación en línea y le piden datos del documento de cada pasajero. Quiere tenerlo todo preparado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-vuelo` los vuelos y su estado.
3. Busca con `buscar-informacion` la respuesta aprobada sobre la facturación en línea y los datos que suelen pedirse.
4. Explica al cliente qué preparar y le recuerda usar los mismos datos que constan en la reserva.

## Qué no hace

- No hace la facturación en lugar del cliente.
- No pide al cliente los datos del documento por el chat.

## Cuándo pasa a una persona

- Los datos del documento no coinciden con los de la reserva.
- La facturación en línea da un error que impide continuar.

## Cómo lo puede pedir el cliente

- «Voy a hacer el check-in online y me pide el pasaporte de todos. ¿Qué datos pongo?»
- «en la facturacion online me pide la fecha de caducidad del dni, eso es normal?»
- «Buenas tardes, ¿qué información necesitaré para facturar en línea los vuelos?»
- «Me piden datos de los pasajeros para el check-in y no sé si el equipaje de mano está incluido.»
