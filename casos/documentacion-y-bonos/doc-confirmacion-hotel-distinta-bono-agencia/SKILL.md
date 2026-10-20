---
name: doc-confirmacion-hotel-distinta-bono-agencia
description: El cliente ha recibido un email del propio alojamiento con datos
  distintos a los del bono de la agencia.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Cuando el alojamiento escribe directamente al cliente con fechas, habitación o régimen que no coinciden con el bono.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` los datos de la reserva con la agencia.
3. Confirma con `consultar-bonos` que el bono es el vigente.
4. Prepara una respuesta que señale qué datos coinciden y cuáles no, para que booking la revise y decida si hay que contactar con el alojamiento.

## Qué no hace

- No da por buena la información del alojamiento por encima de la reserva.
- No contacta con el alojamiento por su cuenta.

## Cuándo pasa a una persona

- Las diferencias afectan a fechas, ocupación o servicios contratados.

## Cómo lo puede pedir el cliente

- «El hotel me ha mandado un correo con otras fechas, ¿cuál vale?»
- «me escribe el hotel y pone otra habitacion distinta a la vuestra»
- «He recibido una comunicación del establecimiento que no coincide con su bono.»
- «el apartamento dice que somos dos y el bono pone cuatro, ¿quién tiene razón?»
