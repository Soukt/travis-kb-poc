---
name: camb-cambio-fechas-arrastra-otros-servicios
description: El cliente pregunta si al cambiar las fechas de un servicio se
  cambian también los demás servicios de su reserva.
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

La reserva combina varios servicios, por ejemplo alojamiento, entradas y traslado, y el cliente quiere saber si un cambio de fechas afecta a todo o solo a una parte. Cada servicio puede tener condiciones distintas.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Lista con `consultar-reserva` todos los servicios y sus fechas.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio de cada servicio por separado.
4. Prepara una explicación de qué servicios habría que cambiar a la vez y qué condiciones tiene cada uno, para que booking la revise antes de enviarla.

## Qué no hace

- No da por hecho que un servicio se cambia solo al cambiar otro.
- No abre ningún cambio.

## Cuándo pasa a una persona

- El cliente decide hacer el cambio.
- Las condiciones de los servicios son incompatibles entre sí.

## Cómo lo puede pedir el cliente

- «Si cambio las fechas del hotel, ¿las entradas se cambian solas?»
- «Tengo hotel, entradas y traslado. Si muevo el viaje, ¿tengo que cambiar cada cosa?»
- «oye si cambio el dia del ferri, el hotel tambien se mueve o no?»
- «Antes de solicitar un cambio de fechas, querría saber cómo afecta al resto de servicios contratados.»
