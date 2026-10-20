---
name: ferri-error-en-nombre-del-titular
description: El cliente detecta una errata en su propio nombre o apellido en el
  billete de barco y quiere corregirla.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - pedir-datos-cliente
  simulado: "true"
---
## Cuándo aplica

El nombre del titular en la reserva o en el bono no coincide exactamente con su documento por un error de escritura.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` y `consultar-bonos` cómo figura el nombre.
3. Pide con `pedir-datos-cliente` el nombre exacto tal y como aparece en su documento.
4. Prepara la solicitud de corrección para la naviera y la respuesta al cliente, para que booking las revise antes de enviarlas.

## Qué no hace

- No confirma la corrección hasta que booking la tramite.
- No corrige nombres de otros viajeros por esta vía.

## Cuándo pasa a una persona

- El error afecta a otro viajero o la corrección tiene coste.

## Cómo lo puede pedir el cliente

- «En el billete del barco tengo mal escrito el apellido.»
- «me falta una letra en el nombre del bono, me dejaran subir?»
- «Buenas tardes, he detectado un error tipográfico en mi nombre en el billete marítimo. Solicito su corrección.»
- «pone mi segundo apellido mal, hay q cambiarlo? y de paso, a q hora sale el barco?»
