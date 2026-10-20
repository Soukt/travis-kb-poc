---
name: camb-gastos-distintos-por-servicio
description: El cliente no entiende por qué los servicios de su reserva tienen
  condiciones de cancelación distintas.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

La reserva combina servicios con políticas diferentes, por ejemplo un alojamiento flexible y unas entradas no reembolsables, y el cliente pide una explicación.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Lista con `consultar-reserva` los servicios contratados.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cada servicio.
4. Prepara una explicación servicio por servicio, sencilla y sin tecnicismos.
5. Deja la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No unifica condiciones que son distintas.
- No ofrece excepciones.

## Cuándo pasa a una persona

- El cliente considera que no se le informó y presenta una queja.

## Cómo lo puede pedir el cliente

- «¿Por qué el hotel lo puedo cancelar gratis y las entradas no?»
- «No entiendo las condiciones, cada cosa dice algo distinto»
- «explicame lo de los gastos xq el ferri y el hotel van diferente»
- «Solicito aclaración sobre las distintas políticas de cancelación de los servicios de mi reserva.»
