---
name: ferri-danos-vehiculo-en-bodega
description: El cliente ha encontrado su vehículo dañado al desembarcar y quiere reclamar.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente atribuye al embarque, a la travesía o al desembarque un daño en su vehículo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-trayecto-ferri` el trayecto y el vehículo registrado.
3. Pide con `pedir-datos-cliente` una descripción del daño, si lo comunicó a la tripulación antes de salir del barco y si tiene fotos o parte.
4. Abre un caso con `crear-ticket-booking` con todo lo recogido.
5. Explica que booking gestionará la reclamación con la naviera.

## Qué no hace

- No reconoce responsabilidad ni promete indemnización.
- No valora el importe de los daños.

## Cuándo pasa a una persona

- Siempre: es una reclamación con posible compensación económica.

## Cómo lo puede pedir el cliente

- «Al bajar del barco el coche tenía un golpe en la puerta que antes no tenía.»
- «me han rallado el coche en el ferri!! q hago»
- «Quiero presentar una reclamación por los daños sufridos en mi vehículo durante la travesía.»
- «Se rompió el retrovisor al maniobrar dentro del barco, ¿quién paga esto?»
