---
name: camb-cambiar-vehiculo-registrado-ferri
description: El cliente va a viajar en el ferri con un vehículo distinto del que
  registró en la reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
  simulado: "true"
---
## Cuándo aplica

Cambia el vehículo, con otra matrícula o modelo, respecto al indicado en la reserva. Si cambian el tamaño o el tipo, la naviera puede aplicar diferencias.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el vehículo registrado.
3. Recoge con `pedir-datos-cliente` la matrícula nueva y si cambian el tipo o las dimensiones del vehículo.
4. Prepara la actualización para que booking la revise y la comunique a la naviera.

## Qué no hace

- No da por válida la nueva matrícula sin revisión.
- No asegura que no haya diferencia de precio si cambia el tipo de vehículo.

## Cuándo pasa a una persona

- El nuevo vehículo es de otra categoría o lleva remolque.
- El trayecto es inminente.

## Cómo lo puede pedir el cliente

- «Hemos cambiado de coche, ¿hay que actualizar la matrícula del ferri?»
- «voy con otro coche al final, pasa algo?»
- «La furgoneta está en el taller, iremos con un turismo. ¿Lo cambiáis?»
- «Les comunico un cambio de vehículo para el trayecto reservado.»
