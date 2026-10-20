---
name: aloj-ocupacion-maxima-habitacion
description: El cliente pregunta si en su habitación cabe alguien más, por
  ejemplo un niño que dormiría con los padres.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere saber la capacidad de su habitación antes de decidir si añade a alguien. El agente prepara la respuesta y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el tipo de habitación y la ocupación contratada.
3. Busca con `buscar-informacion` la respuesta aprobada sobre ocupación máxima y niños que comparten cama.
4. Prepara la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No dice que puede llevar a alguien no declarado en la reserva.
- No añade al viajero.

## Cuándo pasa a una persona

- El cliente decide añadir al viajero a la reserva.

## Cómo lo puede pedir el cliente

- «¿Cuántas personas caben como máximo en nuestra habitación?»
- «el peque puede dormir con nosotros en la cama sin pagar?»
- «Hola, somos dos adultos y dos niños en una doble, nos dejan? o hay que coger otra habitación?»
- «Desearía conocer la ocupación máxima admitida en la habitación contratada.»
