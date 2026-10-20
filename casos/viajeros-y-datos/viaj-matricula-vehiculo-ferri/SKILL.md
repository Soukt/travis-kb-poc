---
name: viaj-matricula-vehiculo-ferri
description: El cliente necesita cambiar la matrícula del vehículo registrado en
  el ferri porque se equivocó o viajará con otro coche.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la matrícula registrada en el trayecto no es la del vehículo que embarcará. Si el vehículo nuevo es de otro tipo o tamaño, puede cambiar el precio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-trayecto-ferri` el vehículo registrado y sus características.
3. Pide con `pedir-datos-cliente` la matrícula correcta y el tipo de vehículo.
4. Abre con `crear-ticket-booking` el cambio, indicando si el vehículo es distinto del contratado.

## Qué no hace

- No confirma el cambio con la naviera.
- No da por hecho que un vehículo de otro tipo cueste lo mismo.

## Cuándo pasa a una persona

- Siempre: el cambio lo tramita booking con la naviera.

## Cómo lo puede pedir el cliente

- «Puse mal una letra de la matrícula del coche en la reserva del barco.»
- «Al final vamos con el coche de mi padre, ¿hay que cambiar la matrícula?»
- «Buenas, necesito actualizar los datos del vehículo del ferri porque hemos cambiado de coche.»
- «cambie de coche y ahora es una furgoneta, me cobran mas o lo dejo como esta?»
