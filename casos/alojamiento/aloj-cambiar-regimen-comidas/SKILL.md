---
name: aloj-cambiar-regimen-comidas
description: El cliente quiere cambiar el régimen de comidas de su reserva, por
  ejemplo pasar de desayuno a media pensión.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pide mejorar o reducir el régimen contratado, o se equivocó al elegirlo. Implica cambio de precio, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa el régimen actual y las fechas con `consultar-reserva`.
3. Consulta con `consultar-politica-cancelacion` las condiciones de modificación.
4. Recoge el régimen deseado y abre un ticket con `crear-ticket-booking`.

## Qué no hace

- No modifica el régimen ni da precios de la diferencia.
- No garantiza que el alojamiento tenga ese régimen disponible.

## Cuándo pasa a una persona

- Siempre: el cambio de régimen supone una diferencia de precio.

## Cómo lo puede pedir el cliente

- «Quisiéramos pasar de solo desayuno a media pensión, ¿es posible?»
- «me equivoque y puse solo alojamiento, quiero desayuno»
- «Hola, mejor todo incluido que vamos con niños. Cuánto cuesta el cambio? y lo pago allí?»
- «Solicito la modificación del régimen de comidas de mi reserva.»
