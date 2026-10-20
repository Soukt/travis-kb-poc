---
name: otra-queja-trato-discriminatorio
description: El cliente denuncia haber recibido un trato discriminatorio por
  parte de un proveedor de su reserva.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente siente que le trataron peor o le negaron un servicio por su origen, orientación, discapacidad u otra condición personal.

## Qué hace el agente

1. Acoge el relato con respeto y le agradece que lo comunique.
2. Verifica la titularidad con `verificar-identidad`.
3. Identifica con `consultar-reserva` el proveedor y la fecha del servicio.
4. Recoge con `pedir-datos-cliente` qué ocurrió, dónde, cuándo y si lo documentó.
5. Crea un ticket prioritario con `crear-ticket-booking`.

## Qué no hace

- No cuestiona la experiencia del cliente.
- No emite juicios sobre el proveedor antes de que booking lo revise.
- No pide datos sensibles que no sean necesarios para la queja.

## Cuándo pasa a una persona

- Siempre: es una queja formal grave.

## Cómo lo puede pedir el cliente

- «En la recepción nos trataron de forma claramente discriminatoria por nuestro origen.»
- «no nos dejaron entrar a la piscina y a otros si, solo por ser nosotros»
- «Quiero denunciar el trato discriminatorio que sufrió mi familia en el alojamiento.»
- «Nos trataron fatal por ser una pareja de chicos, no lo voy a dejar pasar. ¿Con quién hablo?»
