---
name: aloj-pagos-en-destino-tasas
description: El cliente quiere saber si tendrá que pagar algo en el alojamiento,
  como la tasa turística o servicios no incluidos.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pregunta por pagos en destino: tasa turística, suplementos locales o servicios que se abonan allí. El agente prepara la respuesta y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` qué servicios incluye la reserva.
3. Revisa con `consultar-pagos` qué está pagado y qué queda pendiente con la agencia.
4. Busca con `buscar-informacion` la respuesta aprobada sobre tasas y pagos en destino.
5. Prepara la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No indica importes de la tasa ni de los suplementos.
- No asegura que no habrá ningún pago en destino si no consta.

## Cuándo pasa a una persona

- El cliente reclama un pago en destino que no se le informó al reservar.

## Cómo lo puede pedir el cliente

- «¿Hay que pagar alguna tasa al llegar al hotel?»
- «lo de la tasa turistica lo pago alli o ya esta?»
- «Hola, tenemos que pagar algo más en el apartamento aparte de lo que os pagamos? la limpieza final por ejemplo»
- «Desearía saber si existen cargos a abonar directamente en el establecimiento.»
