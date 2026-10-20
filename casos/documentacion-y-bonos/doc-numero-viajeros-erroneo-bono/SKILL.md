---
name: doc-numero-viajeros-erroneo-bono
description: El cliente ve que el bono indica un número de adultos o niños
  distinto del que viaja.
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

Cuando en el bono falta un viajero, sobra alguno o un niño aparece como adulto o al revés.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` los viajeros registrados en la reserva.
3. Confirma con `consultar-bonos` que el bono revisado es el vigente.
4. Abre `crear-ticket-booking` con el número correcto de adultos y niños y dónde está la discrepancia.

## Qué no hace

- No añade ni quita viajeros.
- No da por hecho que la corrección no tenga coste.

## Cuándo pasa a una persona

- Siempre: cambiar la ocupación afecta a la reserva con el proveedor y puede cambiar el precio.

## Cómo lo puede pedir el cliente

- «En el bono pone dos adultos y somos tres»
- «falta mi hija en el bono!!»
- «La ocupación reflejada en la documentación no se corresponde con la de nuestra reserva.»
- «pone que va un niño y van dos, ¿lo arregláis antes de llegar?»
