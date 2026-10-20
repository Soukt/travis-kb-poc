---
name: ferri-viajar-con-bicicleta
description: El cliente quiere llevar su bicicleta en el barco, sin coche, y
  pregunta si está permitido y cómo se embarca.
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

El cliente viaja como pasajero a pie con una o varias bicicletas, normales, plegables o eléctricas.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` si la bicicleta figura en el trayecto.
3. Busca con `buscar-informacion` las condiciones aprobadas para bicicletas: si hay que registrarlas, dónde van y cómo se embarcan.
4. Responde con lo que diga la información aprobada.

## Qué no hace

- No añade la bicicleta a la reserva.
- No asegura que se pueda llevar sin registrarla si la información aprobada no lo dice.

## Cuándo pasa a una persona

- Hay que añadir la bicicleta al trayecto y eso puede tener coste.

## Cómo lo puede pedir el cliente

- «¿Puedo subir con la bici al barco?»
- «vamos de cicloturismo, las bicis se pagan aparte en el ferri?»
- «Buenas tardes, ¿la bicicleta plegable cuenta como equipaje de mano?»
- «kiero llevar la bici electrica, hay algun problema con la bateria?»
