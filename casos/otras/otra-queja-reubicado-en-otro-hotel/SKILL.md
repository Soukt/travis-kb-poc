---
name: otra-queja-reubicado-en-otro-hotel
description: El cliente se queja de que al llegar el alojamiento no tenía sitio
  y le enviaron a otro distinto del reservado.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El hotel reservado no ha podido alojar al cliente y lo ha recolocado en otro establecimiento, a veces peor o más lejos.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-reserva` qué alojamiento figura en la reserva.
3. Recoge con `pedir-datos-cliente` a qué alojamiento le han enviado, qué le dijeron y qué gastos ha tenido.
4. Le pide que conserve los justificantes de cualquier gasto adicional.
5. Crea un ticket prioritario con `crear-ticket-booking`.

## Qué no hace

- No acepta en nombre del cliente el alojamiento alternativo.
- No promete compensación ni reembolso de gastos.
- No da por buena la explicación del hotel sin confirmarla.

## Cuándo pasa a una persona

- Siempre: es un incumplimiento del proveedor con posible compensación.
- Con máxima prioridad si el cliente está sin alojamiento en ese momento.

## Cómo lo puede pedir el cliente

- «Llegamos al hotel y nos dicen que no hay habitaciones, que nos mandan a otro.»
- «nos han realojado en un hotel peor y lejisimos, esto no es lo q contrate»
- «Les informo de que el establecimiento reservado nos ha trasladado a otro alojamiento por exceso de reservas.»
- «Nos han mandado a otro hotel, ¿el traslado de vuelta nos recogerá aquí o en el original?»
