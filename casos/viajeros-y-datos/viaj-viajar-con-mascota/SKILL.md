---
name: viaj-viajar-con-mascota
description: El cliente quiere viajar con su mascota y pregunta si el
  alojamiento y el ferri de la reserva la admiten y en qué condiciones.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere llevar a su perro o su gato y no lo indicó al reservar. Solo se informa de lo que devuelvan las acciones.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué servicios tiene el viaje.
3. Revisa con `consultar-servicios-alojamiento` si el alojamiento admite mascotas y con qué condiciones.
4. Si hay ferri, revisa con `consultar-trayecto-ferri` las condiciones para animales a bordo.
5. Explica al cliente lo que conste y le avisa si de algún servicio no hay información.

## Qué no hace

- No asegura que se admita la mascota si no consta.
- No añade la mascota a la reserva.

## Cuándo pasa a una persona

- Hay que registrar la mascota en el ferri o pagar un suplemento.
- El alojamiento no admite mascotas y el cliente quiere cambiar.

## Cómo lo puede pedir el cliente

- «¿Puedo llevar a mi perro al hotel?»
- «el gato puede ir en el barco con nosotros o va en una jaula aparte?»
- «Buenas tardes, ¿admite el alojamiento animales de compañía? ¿Con qué condiciones?»
- «Queremos llevar al perro; ¿hay que pagar algo en el ferri y en el hotel?»
