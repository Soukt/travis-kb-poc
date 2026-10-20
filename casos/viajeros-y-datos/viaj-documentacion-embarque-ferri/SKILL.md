---
name: viaj-documentacion-embarque-ferri
description: El cliente quiere saber qué documentación deben presentar los
  viajeros para embarcar en el ferri de su reserva.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente tiene un trayecto en ferri y no sabe qué le pedirán en el puerto a él, a sus acompañantes o a los menores.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-trayecto-ferri` el puerto, la hora de presentación y las condiciones de embarque.
3. Busca con `buscar-informacion` la respuesta aprobada sobre documentación para embarcar.
4. Resume al cliente qué deben llevar los viajeros y a qué hora presentarse, según lo que devuelvan las acciones.

## Qué no hace

- No inventa requisitos de la naviera.
- No da horas de presentación distintas de las que devuelva la acción.

## Cuándo pasa a una persona

- Algún viajero no tiene documento válido.
- La información de la acción y la aprobada se contradicen.

## Cómo lo puede pedir el cliente

- «¿Qué tenemos que enseñar para subir al barco?»
- «los niños necesitan dni para el ferry o vale con el libro de familia?»
- «Buenos días, ¿qué documentación solicita la naviera en el embarque?»
- «Para el barco, ¿qué papeles llevo? ¿Y puedo subir con el perro?»
