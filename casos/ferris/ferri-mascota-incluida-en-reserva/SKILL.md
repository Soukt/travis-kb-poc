---
name: ferri-mascota-incluida-en-reserva
description: El cliente quiere comprobar que su mascota figura en la reserva del
  barco y en qué modalidad viaja.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

El cliente viaja con un animal de compañía y quiere asegurarse de que está registrado en el trayecto antes de ir al puerto.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados.
3. Comprueba con `consultar-trayecto-ferri` si la mascota está registrada y la modalidad contratada para ella.
4. Responde con lo que figura en cada trayecto.

## Qué no hace

- No añade la mascota si no figura.
- No da por hecho que una mascota no registrada pueda embarcar.

## Cuándo pasa a una persona

- La mascota no figura en el trayecto o lo hace en una modalidad distinta de la que el cliente esperaba.

## Cómo lo puede pedir el cliente

- «¿Está incluido mi perro en el billete del barco?»
- «sale el gato en la reserva? nose si lo puse»
- «Buenas tardes, desearía confirmar que mi mascota consta en los trayectos de ida y vuelta.»
- «El perro va con nosotros, ¿está todo bien en la reserva? ¿Y en el hotel admiten perros?»
