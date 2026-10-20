---
name: viaj-entrada-acompanante-discapacidad
description: El cliente pagó entrada completa para el acompañante de una persona
  con discapacidad y pide aplicar la condición especial o recuperar la
  diferencia.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - consultar-pagos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente descubre que el parque ofrece condiciones especiales para personas con discapacidad o sus acompañantes que no se aplicaron en su compra. Hay dinero de por medio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-condiciones-entrada` si las entradas contemplan esa condición.
3. Revisa con `consultar-pagos` lo pagado por las entradas.
4. Recoge con `pedir-datos-cliente` qué viajero tiene la discapacidad reconocida y quién le acompaña, sin pedir el certificado por el chat.
5. Abre con `crear-ticket-booking` la solicitud para que booking la valore.

## Qué no hace

- No promete devoluciones.
- No pide información médica.

## Cuándo pasa a una persona

- Siempre: se trata de una posible devolución.

## Cómo lo puede pedir el cliente

- «He leído que el acompañante de una persona con discapacidad tiene condiciones especiales en el parque y yo pagué las dos entradas.»
- «me devolveis la entrada de mi mujer? es acompañante de mi hijo q tiene discapacidad»
- «Solicito la aplicación de la tarifa de acompañante y el reembolso de la diferencia abonada.»
- «Quiero saber si me devolvéis la entrada del acompañante y qué tengo que enseñar en la puerta.»
