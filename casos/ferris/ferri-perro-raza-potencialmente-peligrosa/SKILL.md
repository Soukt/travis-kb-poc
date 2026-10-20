---
name: ferri-perro-raza-potencialmente-peligrosa
description: El cliente viaja con un perro de una raza considerada
  potencialmente peligrosa y pregunta qué requisitos adicionales le piden en el
  barco.
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

La mascota registrada, o que el cliente quiere llevar, pertenece a una raza con requisitos especiales de documentación o de seguridad.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la mascota registrada y la ruta.
3. Busca con `buscar-informacion` los requisitos aprobados para este tipo de perros a bordo.
4. Prepara la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No opina sobre el carácter del perro ni sobre la raza.
- No exime de requisitos como bozal o documentación si la información aprobada los indica.

## Cuándo pasa a una persona

- No hay información aprobada para esa ruta.
- La mascota no figura en el trayecto y el cliente quiere añadirla.

## Cómo lo puede pedir el cliente

- «Tengo un perro de raza considerada peligrosa, ¿puede viajar en el barco?»
- «mi perro es ppp, tiene q ir con bozal todo el viaje?»
- «Buenos días, ¿qué documentación adicional exige la naviera para perros potencialmente peligrosos?»
- «mi perro es buenisimo aunque sea de esa raza, me van a poner pegas al embarcar?»
