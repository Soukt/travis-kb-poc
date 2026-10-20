---
name: doc-instrucciones-llegada-no-recibidas
description: El cliente esperaba recibir las instrucciones de llegada del
  alojamiento por separado y no le han llegado.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el bono indica que el alojamiento enviará las instrucciones de acceso antes de la llegada y el cliente no las tiene.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` la fecha de llegada y el alojamiento.
3. Le da con `consultar-horarios-hotel` el horario de entrada para que lo tenga presente.
4. Abre `crear-ticket-booking` con la fecha y hora estimada de llegada para que booking solicite las instrucciones al alojamiento.

## Qué no hace

- No inventa instrucciones de acceso.
- No contacta con el alojamiento por su cuenta.

## Cuándo pasa a una persona

- Siempre: conseguir las instrucciones requiere que booking contacte con el alojamiento.

## Cómo lo puede pedir el cliente

- «Me dijeron que me mandarían cómo entrar al apartamento y no me ha llegado nada»
- «llego en nada y no tengo instrucciones de llegada!!»
- «No he recibido las indicaciones de acceso que, según el bono, debía remitirme el alojamiento.»
- «¿cómo entro al piso? nadie me ha escrito y no sé si habrá alguien»
