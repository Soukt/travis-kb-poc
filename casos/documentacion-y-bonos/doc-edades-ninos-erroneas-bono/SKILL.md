---
name: doc-edades-ninos-erroneas-bono
description: El cliente ve que las edades de los niños que figuran en el bono no
  son las correctas.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la edad de algún menor en el bono o en la reserva es incorrecta, lo que puede afectar a camas, régimen o precio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` las edades registradas para cada menor.
3. Recoge con `pedir-datos-cliente` la edad correcta de cada menor en la fecha del viaje.
4. Abre `crear-ticket-booking` con las edades registradas y las correctas para que booking valore el cambio con el proveedor.

## Qué no hace

- No corrige edades por su cuenta.
- No le dice al cliente que no pasa nada si la edad cambia la tarifa.

## Cuándo pasa a una persona

- Siempre: la edad de los menores puede alterar la tarifa y lo valida booking.

## Cómo lo puede pedir el cliente

- «Han puesto mal la edad de mi hijo en el bono»
- «mi niña ya no es bebe y en el bono sale como si lo fuera»
- «Las edades de los menores indicadas en la reserva no son correctas.»
- «puse mal la edad del peque al reservar, ¿me van a cobrar más en el hotel?»
