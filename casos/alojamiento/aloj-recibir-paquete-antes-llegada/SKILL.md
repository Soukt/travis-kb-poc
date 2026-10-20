---
name: aloj-recibir-paquete-antes-llegada
description: El cliente quiere enviar un paquete al alojamiento para recogerlo
  cuando llegue o necesita recibir algo durante su estancia.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pregunta si el alojamiento acepta y guarda envíos a su nombre. El agente prepara la consulta y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma alojamiento y fechas con `consultar-reserva`.
3. Revisa con `consultar-servicios-alojamiento` si consta servicio de recepción de paquetes.
4. Si no consta, prepara la consulta en `crear-ticket-booking` para que booking la revise y la traslade al alojamiento.

## Qué no hace

- No facilita direcciones de envío que no figuren en la información del alojamiento.
- No se responsabiliza de la custodia del paquete.

## Cuándo pasa a una persona

- El paquete contiene medicación o material imprescindible para el viaje.

## Cómo lo puede pedir el cliente

- «¿Puedo enviar un paquete al hotel para recogerlo al llegar?»
- «me van a llegar unas cosas, las recoge el hotel?»
- «Hola, he comprado por internet algo para la boda y quiero que llegue al apartamento, es posible?»
- «Desearía saber si el establecimiento admite la recepción de envíos a nombre de los huéspedes.»
