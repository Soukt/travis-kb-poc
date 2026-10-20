---
name: camb-anadir-mascota-trayecto-ferri
description: El cliente quiere llevar a su mascota en el ferri y no la incluyó
  al hacer la reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Viajará un animal de compañía que no figura en la reserva del trayecto. Las navieras tienen normas propias y plazas limitadas para mascotas.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el trayecto y la acomodación contratados.
3. Busca con `buscar-informacion` las normas aprobadas para viajar con mascotas en ferri.
4. Le explica las condiciones generales y le pregunta el tipo y el tamaño del animal.
5. Pasa el alta de la mascota a booking con `crear-ticket-booking`.

## Qué no hace

- No confirma plaza para la mascota.
- No asegura que pueda ir en el camarote.

## Cuándo pasa a una persona

- Siempre: el alta de la mascota la gestiona booking y puede tener coste.

## Cómo lo puede pedir el cliente

- «Vamos con el perro, ¿hay que añadirlo a la reserva del barco?»
- «¿Puede viajar mi gato en el camarote con nosotros?»
- «se me olvido poner al perro en el ferry, se puede añadir?»
- «Solicito incluir un animal de compañía en el trayecto. ¿Qué documentación necesita?»
