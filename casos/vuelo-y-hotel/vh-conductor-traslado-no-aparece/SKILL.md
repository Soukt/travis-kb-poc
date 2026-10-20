---
name: vh-conductor-traslado-no-aparece
description: El cliente ha llegado al aeropuerto a su hora y el conductor del
  traslado no aparece en el punto de encuentro.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-traslados
    - consultar-vuelo
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El vuelo ha llegado según lo previsto, el cliente está en el punto de encuentro y no hay nadie esperándole. Necesita ayuda en ese momento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-traslados` el punto de encuentro y, si los hay, los datos de contacto del proveedor.
3. Confirma con `consultar-vuelo` la hora real de llegada.
4. Crea con `crear-ticket-booking` un ticket urgente con la incidencia.
5. Le pide que espere en el punto de encuentro y que, si toma otro transporte, guarde el justificante.

## Qué no hace

- No promete el reembolso de un taxi.
- No da contactos que no devuelva la acción.

## Cuándo pasa a una persona

- Siempre y con prioridad urgente.

## Cómo lo puede pedir el cliente

- «Estamos en el punto de encuentro y no hay nadie del traslado»
- «llevamos un buen rato esperando y el conductor no viene»
- «Buenas noches, no encontramos el traslado, ¿qué hacemos?»
- «nadie con nuestro nombre en la salida, cojo un taxi?»
