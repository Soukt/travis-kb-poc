---
name: aloj-habitaciones-contiguas-familia
description: El cliente tiene varias habitaciones en el mismo alojamiento y pide
  que estén juntas o comunicadas.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando una familia o un grupo reserva más de una habitación y quiere estar cerca. El agente prepara la petición y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` cuántas habitaciones hay y si están en la misma reserva.
3. Prepara la petición de habitaciones contiguas o comunicadas en `crear-ticket-booking` para que booking la revise y la envíe.
4. Aclara que depende de la disponibilidad del alojamiento.

## Qué no hace

- No garantiza que las habitaciones estén juntas.
- No incluye en la petición habitaciones de reservas de otras personas sin booking.

## Cuándo pasa a una persona

- Alguna de las habitaciones está en una reserva a nombre de otra persona.
- El cliente pide una habitación comunicada de pago.

## Cómo lo puede pedir el cliente

- «Tenemos dos habitaciones, ¿podrían ponerlas una al lado de la otra?»
- «q las habitaciones esten juntas porfa q van los niños en una»
- «Hola, vamos tres familias, se puede pedir que estemos en la misma planta? Y que tengan puerta comunicada?»
- «Ruego soliciten al establecimiento que las habitaciones de mi reserva sean contiguas.»
