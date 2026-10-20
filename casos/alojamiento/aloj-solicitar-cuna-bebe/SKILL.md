---
name: aloj-solicitar-cuna-bebe
description: El cliente viaja con un bebé y pide una cuna en la habitación.
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

Cuando el cliente necesita cuna y el bebé ya figura en la reserva. El agente prepara la petición y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` que el bebé figura en la reserva.
3. Consulta con `consultar-servicios-alojamiento` si el alojamiento ofrece cunas y si tienen coste.
4. Prepara la petición de cuna en `crear-ticket-booking` para que booking la revise y la envíe.
5. Informa al cliente de que la cuna queda pendiente de confirmación.

## Qué no hace

- No garantiza la cuna hasta que el alojamiento la confirme.
- No añade al bebé si no figura en la reserva.

## Cuándo pasa a una persona

- El bebé no figura en la reserva.
- La cuna tiene un coste que se cobra desde la agencia.

## Cómo lo puede pedir el cliente

- «¿Podrían solicitar una cuna para nuestro bebé?»
- «necesitamos cuna porfa»
- «Hola, viajamos con la peque, hay cuna? la tenemos que pagar? y si no, cabe nuestra de viaje?»
- «Solicito una cuna en la habitación para el menor incluido en la reserva.»
