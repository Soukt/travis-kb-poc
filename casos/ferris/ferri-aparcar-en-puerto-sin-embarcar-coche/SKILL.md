---
name: ferri-aparcar-en-puerto-sin-embarcar-coche
description: El cliente viaja a pie pero llegará en coche al puerto y pregunta
  si puede dejarlo aparcado allí durante el viaje.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente no embarca el vehículo y quiere saber si hay aparcamiento en el puerto de salida mientras está fuera.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica el puerto de salida y las fechas de ida y vuelta con `consultar-trayecto-ferri`.
3. Busca con `buscar-informacion` si hay información aprobada sobre aparcamiento en ese puerto.
4. Responde con lo que haya y, si no hay respuesta aprobada, lo dice sin suponer.

## Qué no hace

- No recomienda aparcamientos concretos ni da tarifas.
- No reserva plazas de aparcamiento.

## Cuándo pasa a una persona

- El cliente quiere contratar el aparcamiento a través de la agencia.

## Cómo lo puede pedir el cliente

- «¿Hay parking en el puerto para dejar el coche mientras estamos de viaje?»
- «dejo el coche en el puerto y me voy en el barco andando, se puede?»
- «Disculpe, ¿el aparcamiento del puerto está vigilado durante la noche?»
- «Vamos a pie en el ferri, pero ¿dónde dejo el coche? Y ¿el traslado al hotel está incluido?»
