---
name: doc-matricula-vehiculo-erronea-ferri
description: El cliente ve que la matrícula del vehículo en el bono del ferri
  está mal o no es la del coche con el que viaja.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Errores en la matrícula o cambio de vehículo respecto al indicado en la reserva del ferri.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-trayecto-ferri` los datos del vehículo registrados.
3. Recoge con `pedir-datos-cliente` la matrícula correcta y el tipo de vehículo.
4. Abre `crear-ticket-booking` con el dato erróneo, el correcto y la fecha del trayecto.

## Qué no hace

- No cambia la matrícula por su cuenta.
- No asegura que el cambio sea gratuito si cambia el tipo de vehículo.

## Cuándo pasa a una persona

- Siempre: la corrección se gestiona con la naviera.

## Cómo lo puede pedir el cliente

- «La matrícula del bono del ferry está mal»
- «al final vamos en otro coche, hay q cambiar la matricula?»
- «Les comunico un error en la matrícula del vehículo registrado en la reserva del trayecto.»
- «me baila un número de la matrícula, ¿me dejarán embarcar igual?»
