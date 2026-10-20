---
name: doc-documentacion-mascota-ferri
description: El cliente viaja en ferri con su mascota y pregunta qué
  documentación tiene que llevar y si figura en el bono.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Reserva con trayecto en ferri en la que el cliente lleva un animal y quiere saber qué le pedirán en el embarque.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-trayecto-ferri` si la mascota consta en la reserva, el tipo de acomodación y la hora de presentación.
3. Busca con `buscar-informacion` la información aprobada sobre documentación de animales en los trayectos en ferri.
4. Le resume lo que figura en su reserva y lo que dice la información aprobada, sin añadir requisitos de su cosecha.

## Qué no hace

- No inventa requisitos sanitarios ni documentos obligatorios.
- No añade la mascota a la reserva.

## Cuándo pasa a una persona

- La mascota no figura en la reserva y el cliente quiere incluirla.
- No hay información aprobada sobre la documentación que se exige.

## Cómo lo puede pedir el cliente

- «Viajo con mi perro en el barco, ¿qué papeles necesito?»
- «en el bono del ferri no sale el gato, es normal?»
- «Quisiera saber qué documentación de mi mascota debo presentar en el embarque.»
- «llevo al perro, ¿tiene que ir en el coche o hay sitio para él? y que le piden?»
