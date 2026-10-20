---
name: aloj-salida-tardia-peticion
description: El cliente quiere quedarse en la habitación más allá de la hora de
  salida el último día de su estancia.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pide una salida tardía. Es una petición sujeta al alojamiento, por lo que el agente la prepara y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma la fecha de salida y la habitación con `consultar-reserva`.
3. Consulta la hora de salida oficial con `consultar-horarios-hotel`.
4. Prepara la petición con la hora que necesita el cliente en `crear-ticket-booking` para que booking la revise y la envíe.
5. Aclara al cliente que la respuesta depende del alojamiento y que se le confirmará.

## Qué no hace

- No confirma la salida tardía antes de que responda el alojamiento.
- No informa de importes por la ampliación.

## Cuándo pasa a una persona

- El alojamiento cobra la salida tardía y hay que gestionar el pago.
- El cliente quiere convertirlo en una noche adicional.

## Cómo lo puede pedir el cliente

- «¿Podríamos dejar la habitación más tarde el último día?»
- «se puede hacer late checkout? el vuelo sale tardisimo»
- «Buenas, nos gustaría alargar un poco la salida del hotel, cuánto cobran por eso?»
- «Me interesaría solicitar una salida tardía para el día de regreso.»
