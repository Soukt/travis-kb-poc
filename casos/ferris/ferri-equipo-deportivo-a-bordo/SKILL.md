---
name: ferri-equipo-deportivo-a-bordo
description: El cliente quiere llevar material deportivo voluminoso, como tablas
  de surf, kayak o equipo de buceo, en el barco.
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

El cliente viaja con material deportivo grande, a pie o con vehículo, y no sabe si se admite ni dónde va.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` si viaja con vehículo y la naviera del trayecto.
3. Busca con `buscar-informacion` las condiciones aprobadas para material deportivo.
4. Responde con lo que diga la información aprobada.

## Qué no hace

- No añade el material a la reserva.
- No asegura que vaya sin coste si la información aprobada no lo dice.

## Cuándo pasa a una persona

- El material debe registrarse en el trayecto o tiene un suplemento.

## Cómo lo puede pedir el cliente

- «¿Se pueden llevar tablas de surf en el ferri?»
- «vamos con el kayak en el techo del coche, hay q avisar?»
- «Buenos días, viajo con equipo de buceo y botellas, ¿hay alguna restricción?»
- «llevo la tabla de paddle y la bici, cuenta como equipaje normal?»
