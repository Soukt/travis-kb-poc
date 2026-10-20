---
name: doc-alojamiento-pide-datos-precheckin
description: El cliente ha recibido un email del alojamiento pidiendo sus datos
  para el registro previo y duda si es fiable.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el alojamiento solicita por adelantado datos de los viajeros o copia de documentos para el registro de entrada.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el alojamiento y las fechas para ver si el mensaje encaja con la reserva.
3. Busca con `buscar-informacion` lo que la agencia tiene aprobado sobre los registros previos de los alojamientos.
4. Prepara la respuesta con esas indicaciones para que booking la revise antes de enviarla.

## Qué no hace

- No asegura que el mensaje sea legítimo.
- No recoge ni reenvía documentos de los viajeros al alojamiento.

## Cuándo pasa a una persona

- El mensaje pide pagos o datos de tarjeta.
- El mensaje no corresponde con el alojamiento de la reserva.

## Cómo lo puede pedir el cliente

- «El hotel me pide los DNI por email antes de llegar, ¿es normal?»
- «me ha escrito el apartamento para hacer el registro online, me fio?»
- «El establecimiento me solicita datos de los huéspedes con antelación y deseo confirmar su legitimidad.»
- «¿tengo que rellenar lo que me manda el hotel o con el bono basta?»
