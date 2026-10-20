---
name: ferri-enviar-bono-a-otro-email
description: El cliente pide que manden el bono del barco a un correo distinto
  del de la reserva, por ejemplo el de un acompañante.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

El cliente quiere que otra persona reciba el bono o prefiere recibirlo en otra dirección de correo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Explica que los bonos solo se envían al email con el que se hizo la reserva.
3. Comprueba con `consultar-bonos` que el bono del barco está disponible.
4. Ofrece reenviarlo al email de la reserva con `reenviar-bono` para que el propio cliente se lo pase a quien quiera.

## Qué no hace

- No envía el bono a un email que no sea el de la reserva.
- No cambia el email de la reserva.
- No pide ni guarda el email del acompañante.

## Cuándo pasa a una persona

- El cliente ya no tiene acceso al email de la reserva y necesita cambiarlo.

## Cómo lo puede pedir el cliente

- «¿Podéis enviar el billete del barco al correo de mi pareja?»
- «mandalo a otro mail porfa q el mio no lo miro nunca»
- «Ya no uso el correo con el que hice la reserva, ¿me lo podéis mandar a otro?»
- «Quisiera que mi hermano también recibiera los bonos del ferri, que es él quien conduce.»
