---
name: ent-entrada-caducada-sin-utilizar
description: El cliente no usó sus entradas dentro de su fecha o periodo de
  validez y pregunta si puede recuperarlas o usarlas en otra fecha.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando la fecha o la validez de las entradas ya ha pasado sin usarlas. Cualquier solución sería una excepción.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` las fechas de las entradas.
3. Revisa con `consultar-condiciones-entrada` y `consultar-politica-cancelacion` qué dicen las condiciones sobre entradas no utilizadas.
4. Recoge el motivo por el que no se usaron y abre con `crear-ticket-booking` la solicitud para que booking la valore.

## Qué no hace

- No promete reembolsos ni nuevas fechas.
- No da a entender que la entrada sigue siendo válida.

## Cuándo pasa a una persona

- Siempre: es una excepción con dinero de por medio.

## Cómo lo puede pedir el cliente

- «No pudimos ir al parque y las entradas ya han caducado. ¿Hay alguna solución?»
- «se nos pasaron las fechas de las entradas, nos devolveis algo?»
- «Solicito información sobre la posibilidad de reutilizar unas entradas que no llegamos a usar.»
- «las entradas eran del mes pasado y no fuimos x una boda, las puedo usar ahora?»
