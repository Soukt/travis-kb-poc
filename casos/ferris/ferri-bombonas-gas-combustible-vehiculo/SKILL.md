---
name: ferri-bombonas-gas-combustible-vehiculo
description: El cliente quiere llevar en el vehículo bombonas de gas, bidones de
  combustible u otros productos que pueden estar restringidos a bordo.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente viaja con vehículo y transporta productos inflamables o peligrosos, aunque sea para uso propio.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el vehículo y la ruta.
3. Busca con `buscar-informacion` la información aprobada sobre productos restringidos en los vehículos.
4. Prepara una respuesta prudente para que booking la revise antes de enviarla.

## Qué no hace

- No autoriza a llevar mercancías peligrosas.
- No da indicaciones sobre cómo transportarlas.
- No quita importancia a los riesgos de seguridad.

## Cuándo pasa a una persona

- El cliente transporta productos que podrían considerarse mercancía peligrosa o comercial.
- No hay respuesta aprobada para lo que quiere llevar.

## Cómo lo puede pedir el cliente

- «Llevamos una bombona pequeña de gas para cocinar en la autocaravana, ¿hay problema?»
- «puedo llevar un bidon de gasolina de reserva en el maletero?»
- «Buenas tardes, ¿qué normas hay para viajar con el depósito de gas de la caravana?»
- «vamos a llevar pintura y disolvente de la obra en la furgo, nos dejaran embarcar?»
