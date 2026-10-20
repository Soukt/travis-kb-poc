---
name: doc-direccion-alojamiento-bono-dudosa
description: El cliente cree que la dirección del alojamiento que aparece en el
  bono está mal o incompleta.
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

Cuando el cliente busca la dirección del bono y no la encuentra, o le sale en otra localidad.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el alojamiento y el destino de la reserva.
3. Confirma con `consultar-bonos` que el bono es el vigente.
4. Prepara una respuesta con los datos del alojamiento que devuelven las acciones para que booking la revise y, si hace falta, la complete.

## Qué no hace

- No da direcciones sacadas de fuera de las acciones.
- No asegura que la dirección es correcta sin revisión.

## Cuándo pasa a una persona

- La dirección del bono y la del alojamiento reservado no coinciden.
- El cliente está ya en destino y no encuentra el alojamiento.

## Cómo lo puede pedir el cliente

- «La dirección del bono no aparece en el mapa»
- «me sale otro pueblo con la direccion del bono, esta bien?»
- «Les ruego verifiquen la dirección del alojamiento indicada en el documento.»
- «falta el número de la calle en el bono, ¿cómo llego?»
