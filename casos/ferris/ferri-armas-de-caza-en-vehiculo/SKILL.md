---
name: ferri-armas-de-caza-en-vehiculo
description: El cliente quiere viajar en barco con armas de caza o de tiro
  deportivo en su vehículo y pregunta qué condiciones hay.
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

El cliente transporta armas con su licencia y quiere saber si la naviera las admite y si debe avisar.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la ruta y el vehículo.
3. Busca con `buscar-informacion` las condiciones aprobadas para el transporte de armas a bordo.
4. Prepara una respuesta ceñida a lo aprobado para que booking la revise antes de enviarla.

## Qué no hace

- No asesora sobre licencias ni normativa de armas.
- No confirma que pueda embarcarlas si no hay respuesta aprobada.

## Cuándo pasa a una persona

- No hay información aprobada o la naviera exige un aviso previo que hay que tramitar.

## Cómo lo puede pedir el cliente

- «Vamos a una montería y llevamos las escopetas en el coche, ¿se puede?»
- «puedo llevar el rifle de caza en el maletero en el ferri?»
- «Buenas tardes, practico tiro deportivo y viajo con mi arma y la documentación en regla. ¿Hay que comunicarlo a la naviera?»
- «llevamos armas de caza con sus papeles, hay q declararlas al embarcar?»
