---
name: ferri-perro-de-asistencia-a-bordo
description: El cliente viaja con un perro de asistencia y pregunta si puede ir
  con él en todo momento a bordo y qué debe acreditar.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Uno de los viajeros necesita su perro de asistencia durante todo el viaje y quiere asegurarse de que no habrá problemas en el embarque.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros de la reserva.
3. Comprueba con `consultar-trayecto-ferri` si el perro de asistencia consta en el trayecto.
4. Busca con `buscar-informacion` las condiciones aprobadas para perros de asistencia.
5. Prepara una respuesta cuidada para que booking la revise antes de enviarla.

## Qué no hace

- No trata al perro de asistencia como una mascota más.
- No pide informes médicos por el chat.
- No asegura condiciones que la respuesta aprobada no recoja.

## Cuándo pasa a una persona

- El perro de asistencia no consta en el trayecto y hay que comunicarlo a la naviera.
- El viajero necesita además asistencia en el embarque.

## Cómo lo puede pedir el cliente

- «Soy usuaria de perro guía, ¿puede estar conmigo en la butaca durante todo el viaje?»
- «mi perro es de asistencia, tengo q pagar por el en el ferri?»
- «Buenas tardes, ¿qué acreditación del perro de asistencia debo presentar al embarcar?»
- «Mi hijo tiene un perro de asistencia, ¿hay que avisar a la naviera o lo hacéis vosotros?»
