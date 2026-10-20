---
name: doc-peticiones-especiales-no-figuran-bono
description: El cliente hizo peticiones especiales al reservar y no aparecen
  reflejadas en el bono.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Peticiones como cuna, cama de matrimonio, habitaciones juntas o planta alta que el cliente indicó y no ve en el bono.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` si la petición quedó registrada.
3. Confirma con `consultar-bonos` que el bono es el vigente.
4. Consulta con `consultar-servicios-alojamiento` si el alojamiento ofrece ese servicio y prepara una respuesta, aclarando que las peticiones están sujetas a disponibilidad, para revisión de booking.

## Qué no hace

- No garantiza que la petición se cumpla.
- No añade servicios de pago.

## Cuándo pasa a una persona

- La petición es imprescindible (por ejemplo una cuna para un bebé) y hay que trasladarla al alojamiento.
- La petición implica un servicio con coste.

## Cómo lo puede pedir el cliente

- «Pedí una cuna y no aparece en el bono»
- «puse q queriamos cama de matrimonio y no lo pone»
- «Las solicitudes especiales indicadas en la reserva no constan en la documentación.»
- «pedí habitaciones juntas para los abuelos, ¿lo sabe el hotel? ¿y hay ascensor?»
