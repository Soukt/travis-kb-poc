---
name: viaj-reserva-con-mis-datos-sin-permiso
description: El cliente asegura que alguien ha hecho una reserva usando su
  nombre, su tarjeta o sus datos sin su consentimiento.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando una persona detecta un cobro o una reserva a su nombre que no ha hecho, o cree que han usado su identidad. Puede tratarse de un fraude.

## Qué hace el agente

1. Toma en serio el aviso y explica que el caso lo revisará el equipo correspondiente.
2. Recoge con `pedir-datos-cliente` lo que ha detectado, el localizador si lo tiene y un contacto, sin pedir datos bancarios completos.
3. Si ha visto un cargo que no reconoce, le recomienda comunicarlo también a su banco.
4. Abre con `crear-ticket-booking` el caso como prioritario.

## Qué no hace

- No muestra datos de la reserva.
- No cancela la reserva por su cuenta.
- No pide números de tarjeta ni claves.

## Cuándo pasa a una persona

- Siempre: posible fraude y datos de otra persona.

## Cómo lo puede pedir el cliente

- «Me han cobrado un viaje con vosotros que no he reservado y sale mi nombre.»
- «alguien a usado mi tarjeta para reservar con vosotros!!!»
- «Buenas tardes, denuncio el uso no autorizado de mis datos personales en una reserva de su agencia.»
- «Alguien ha reservado a mi nombre sin permiso; ¿podéis anularla y decirme quién fue?»
