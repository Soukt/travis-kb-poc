---
name: aloj-propietario-no-aparece-llaves
description: El cliente está en la puerta del apartamento a la hora acordada y
  nadie aparece para entregarle las llaves.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente ya está en destino y no puede acceder al apartamento porque nadie le recibe. Es una urgencia que gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma el alojamiento y la fecha de entrada con `consultar-reserva`.
3. Revisa con `consultar-bonos` que el bono está emitido y si incluye un contacto del alojamiento para facilitárselo.
4. Recoge dónde está el cliente, desde cuándo espera y si ha intentado contactar, y abre un ticket urgente con `crear-ticket-booking`.
5. Le confirma que booking está gestionándolo y que le contactarán.

## Qué no hace

- No le indica que busque otro alojamiento por su cuenta.
- No promete reembolsos ni el pago de otro alojamiento.
- No da por hecho que la reserva esté anulada.

## Cuándo pasa a una persona

- Siempre y con máxima prioridad: el cliente está en destino sin acceso al alojamiento.
- El cliente se ve obligado a pagar otro alojamiento esa noche.

## Cómo lo puede pedir el cliente

- «Estamos en la puerta del apartamento y no viene nadie a darnos las llaves.»
- «aqui no hay nadie!!! llevamos un rato esperando con las maletas»
- «Hola, el del apartamento no contesta y estamos en la calle con dos niños, ayuda por favor»
- «Les informo de que la persona encargada de la entrega de llaves no se ha presentado.»
