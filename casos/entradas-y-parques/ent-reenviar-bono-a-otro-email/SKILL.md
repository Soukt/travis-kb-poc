---
name: ent-reenviar-bono-a-otro-email
description: El cliente pide que le envíen el bono de las entradas a un email
  distinto del que figura en la reserva.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente ya no usa el email de la reserva, se equivocó al escribirlo o quiere que el bono llegue a otra persona. Cambiar el destino del bono afecta a la seguridad de la reserva.

## Qué hace el agente

1. Verifica con `verificar-identidad` que quien escribe es el titular.
2. Consulta con `consultar-reserva` el estado de la reserva y los datos de contacto que constan.
3. Explica que el bono solo se envía al email de la reserva y que el cambio lo revisa el equipo de booking.
4. Abre con `crear-ticket-booking` la solicitud con el motivo del cambio y la nueva dirección que facilita el cliente.

## Qué no hace

- No envía el bono a la nueva dirección por su cuenta.
- No modifica los datos de contacto de la reserva.
- No muestra completo el email que figura en la reserva.

## Cuándo pasa a una persona

- Siempre: el cambio de destino del bono lo valida booking.

## Cómo lo puede pedir el cliente

- «Me equivoqué al poner el correo al reservar. ¿Me podéis mandar las entradas a otro?»
- «mandadlas al correo de mi mujer q el mio no lo miro»
- «Solicito que el bono se remita a una dirección de correo distinta, ya que no tengo acceso a la original.»
- «Puedes enviar el bono a mi correo del trabajo? Y de paso dime si el parque tiene aparcamiento.»
