---
name: aloj-regimen-no-reconocido-hotel
description: El cliente está en el alojamiento y le dicen que su reserva no
  incluye el régimen de comidas que él contrató.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el alojamiento no reconoce el desayuno, la media pensión u otro régimen contratado y pide pagarlo. Hay dinero de por medio y lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el régimen contratado.
3. Revisa con `consultar-bonos` el régimen que figura en el bono para que el cliente lo enseñe en recepción.
4. Abre un ticket urgente con `crear-ticket-booking` con lo que dice el alojamiento.

## Qué no hace

- No le dice que pague el régimen en el alojamiento.
- No promete el reembolso de lo que ya haya pagado allí.

## Cuándo pasa a una persona

- Siempre: hay un posible cobro indebido en destino.
- Con prioridad si el cliente ya está pagando las comidas.

## Cómo lo puede pedir el cliente

- «En el hotel dicen que no tenemos el desayuno incluido y en mi reserva aparece.»
- «nos quieren cobrar la cena y tenemos media pension!!»
- «Hola, enseñé el bono y dicen que es solo alojamiento. Llevamos varios desayunos pagados de nuestro bolsillo, me los devolvéis?»
- «Les comunico que el establecimiento no reconoce el régimen de pensión contratado.»
