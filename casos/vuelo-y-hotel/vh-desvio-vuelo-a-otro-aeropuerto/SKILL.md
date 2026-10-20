---
name: vh-desvio-vuelo-a-otro-aeropuerto
description: El cliente ha aterrizado en un aeropuerto distinto al previsto
  porque su vuelo se ha desviado y no sabe cómo llegar al hotel.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-traslados
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El mismo día del viaje, el vuelo de llegada se desvía a otro aeropuerto por meteorología u otra incidencia. El traslado incluido le espera en el aeropuerto original.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-vuelo` el estado del vuelo y el aeropuerto de llegada.
3. Revisa con `consultar-traslados` el traslado de llegada afectado.
4. Le indica que siga las instrucciones de la aerolínea para continuar el viaje.
5. Crea con `crear-ticket-booking` un ticket urgente para adaptar el traslado y avisar al hotel.

## Qué no hace

- No le indica que contrate transporte por su cuenta.
- No promete reembolsar gastos de desplazamiento.
- No da por perdidos el traslado ni la noche de hotel.

## Cuándo pasa a una persona

- Siempre y con prioridad urgente.

## Cómo lo puede pedir el cliente

- «Hemos aterrizado en otro aeropuerto por la niebla, ¿qué hacemos?»
- «nos han desviado y el traslado nos espera en el otro aeropuerto!!»
- «Buenas noches, el avión se ha desviado, ¿quién nos lleva al hotel?»
- «aterrizamos donde no era, la aerolinea dice q ponen un bus, avisais al hotel?»
