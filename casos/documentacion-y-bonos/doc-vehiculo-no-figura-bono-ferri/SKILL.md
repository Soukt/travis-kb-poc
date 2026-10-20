---
name: doc-vehiculo-no-figura-bono-ferri
description: El cliente viaja en ferri con vehículo y este no aparece en el bono.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el bono del ferri muestra solo pasajeros y el cliente cuenta con embarcar su coche, moto o caravana.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` si el vehículo se contrató.
3. Consulta con `consultar-trayecto-ferri` los datos de vehículo del trayecto.
4. Abre `crear-ticket-booking` explicando si el vehículo está en la reserva pero no en el bono o si no se contrató.

## Qué no hace

- No añade el vehículo a la reserva.
- No le dice que podrá embarcar el vehículo sin que conste.

## Cuándo pasa a una persona

- Siempre: incluir o corregir el vehículo afecta al precio y lo gestiona booking con la naviera.

## Cómo lo puede pedir el cliente

- «En el bono del ferry no aparece mi coche»
- «no sale la moto en el bono, la puse al reservar!!»
- «El vehículo no figura en la documentación del trayecto marítimo.»
- «¿puedo subir la caravana si no viene en el bono?»
