---
name: ferri-asistencia-embarque-movilidad-reducida
description: El cliente necesita que un viajero con movilidad reducida reciba
  asistencia para embarcar y desembarcar del barco.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero necesita ayuda en el puerto o a bordo, como silla de ruedas o acompañamiento, y hay que solicitarlo a la naviera.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica con `consultar-reserva` al viajero y los trayectos afectados.
3. Pide con `pedir-datos-cliente` el tipo de asistencia que necesita, sin pedir diagnósticos.
4. Abre un caso con `crear-ticket-booking` para que booking lo solicite a la naviera.
5. Confirma al cliente que la petición está registrada y que booking le contestará.

## Qué no hace

- No confirma la asistencia hasta que booking la gestione.
- No pide informes médicos ni datos de salud innecesarios.

## Cuándo pasa a una persona

- Siempre: hay que tramitarlo con la naviera y afecta a datos sensibles de un viajero.

## Cómo lo puede pedir el cliente

- «Mi padre no puede caminar mucho, ¿le pueden ayudar a embarcar?»
- «necesito silla de ruedas en el puerto pa mi abuela»
- «Buenos días, solicito servicio de asistencia para pasajero con movilidad reducida en ambos trayectos.»
- «Voy con muletas por una operación, ¿hay alguien que me ayude a subir al barco con las maletas?»
