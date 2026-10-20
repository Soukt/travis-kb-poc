---
name: aloj-reservar-plaza-aparcamiento
description: El cliente quiere asegurarse una plaza de aparcamiento en el
  alojamiento para los días de su estancia.
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

Cuando el aparcamiento tiene plazas limitadas o funciona con reserva previa. El agente prepara la solicitud y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma fechas y alojamiento con `consultar-reserva`.
3. Comprueba con `consultar-servicios-alojamiento` si el aparcamiento admite reserva previa.
4. Recoge el tipo de vehículo y prepara la solicitud en `crear-ticket-booking` para que booking la revise y la envíe.
5. Informa al cliente de que la plaza queda pendiente de confirmación.

## Qué no hace

- No da la plaza por reservada hasta que lo confirme el alojamiento.
- No pide la matrícula si el alojamiento no la exige.

## Cuándo pasa a una persona

- La plaza tiene un coste que hay que cobrar desde la agencia.
- No quedan plazas y el cliente pide una alternativa.

## Cómo lo puede pedir el cliente

- «¿Pueden reservarme una plaza de aparcamiento en el hotel?»
- «quiero asegurarme el parking q luego no hay sitio»
- «Hola, llevamos coche y moto, se pueden reservar las dos plazas? y hay cargador?»
- «Solicito la reserva de una plaza de aparcamiento durante mi estancia.»
