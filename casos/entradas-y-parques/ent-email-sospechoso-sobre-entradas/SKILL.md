---
name: ent-email-sospechoso-sobre-entradas
description: El cliente ha recibido un mensaje que dice venir de la agencia o
  del parque y le pide pagar o dar datos para validar sus entradas.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando hay sospecha de suplantación o fraude relacionado con las entradas. El cliente duda de si el mensaje es legítimo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Revisa con `consultar-pagos` si existe algún pago pendiente real en la reserva.
3. Consulta con `consultar-bonos` el estado real de las entradas.
4. Le recomienda no pagar ni facilitar datos a través de ese mensaje y abre con `crear-ticket-booking` el aviso con lo que describe el cliente.

## Qué no hace

- No pide datos de tarjeta ni contraseñas.
- No abre enlaces ni da por bueno el mensaje recibido.

## Cuándo pasa a una persona

- Siempre: es una posible suplantación que debe revisar booking.

## Cómo lo puede pedir el cliente

- «Me ha llegado un correo diciendo que tengo que pagar para validar las entradas. ¿Es vuestro?»
- «me piden los datos de la tarjeta por un mensaje para no perder las entradas, es real?»
- «Buenos días, he recibido una comunicación sospechosa sobre mi reserva de entradas.»
- «me ha llamado uno diciendo q es del parque y me pide un pago, es normal??»
