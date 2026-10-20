---
name: doc-tipo-habitacion-distinto-bono
description: El cliente ve que el tipo de habitación del bono no es el que reservó.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el bono indica otra categoría de habitación, otra distribución de camas o vistas distintas a las contratadas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el tipo de habitación contratado.
3. Confirma con `consultar-bonos` que el bono es el vigente.
4. Abre `crear-ticket-booking` con la habitación del bono, la de la reserva y lo que esperaba el cliente.

## Qué no hace

- No cambia la habitación.
- No garantiza una mejora ni una habitación concreta.

## Cuándo pasa a una persona

- Siempre: la corrección depende del proveedor y puede tener impacto en el precio.

## Cómo lo puede pedir el cliente

- «Reservé habitación doble y en el bono pone dos camas»
- «el bono pone habitacion estandar y yo pague la superior!!»
- «La tipología de habitación reflejada en el bono no corresponde a la reservada.»
- «pedí con vistas al mar y no lo pone, ¿me la darán igual?»
