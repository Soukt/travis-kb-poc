---
name: doc-varios-bonos-identificar-cada-uno
description: El cliente ha recibido varios bonos y no sabe a qué servicio
  corresponde cada uno ni cuándo usarlos.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Viajes con varios servicios o varios alojamientos en los que el cliente se lía con tanta documentación.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` los servicios y el orden en que se usan durante el viaje.
3. Consulta con `consultar-bonos` qué bono corresponde a cada servicio.
4. Le devuelve una lista ordenada por fecha con qué bono presentar en cada momento.

## Qué no hace

- No reenvía bonos que el cliente ya tiene si no lo pide.
- No añade servicios que no estén en la reserva.

## Cuándo pasa a una persona

- Algún bono no corresponde a ningún servicio de la reserva.

## Cómo lo puede pedir el cliente

- «Me han llegado un montón de bonos y no sé cuál es cuál»
- «tengo varios pdf, cual es para el hotel y cual para el barco?»
- «Les agradecería una aclaración sobre a qué servicio corresponde cada documento recibido.»
- «voy a dos hoteles y tengo bonos de todo, ¿me hacéis un resumen de qué uso cada día?»
