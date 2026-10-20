---
name: doc-bono-enviado-email-ajeno
description: El cliente teme que su bono haya llegado a un email al que ahora
  tiene acceso otra persona y que lo pueda usar.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el email de la reserva es una cuenta compartida, de una expareja o de un trabajo anterior, y el cliente ya no la controla.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el estado de la reserva.
3. Recoge con `pedir-datos-cliente` el nuevo email de contacto y lo que le preocupa (cambios no autorizados, uso del bono).
4. Abre `crear-ticket-booking` con prioridad para que booking cambie el contacto y valore proteger la reserva.

## Qué no hace

- No reenvía el bono al email antiguo.
- No cambia el email de contacto por su cuenta.

## Cuándo pasa a una persona

- Siempre: hay riesgo sobre la reserva y datos de otra persona.

## Cómo lo puede pedir el cliente

- «El bono ha ido al correo de mi ex y no quiero que lo vea»
- «puse el email del trabajo y ya no curro alli, alguien puede usar mi reserva?»
- «La dirección de correo de la reserva ya no está bajo mi control y temo un uso indebido.»
- «mi expareja tiene acceso a ese correo, ¿puede cancelar mi viaje?»
