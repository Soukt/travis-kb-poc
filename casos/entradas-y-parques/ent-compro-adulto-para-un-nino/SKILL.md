---
name: ent-compro-adulto-para-un-nino
description: El cliente compró una entrada de adulto para un menor que podía
  tener tarifa infantil y pide recuperar la diferencia.
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

Aplica cuando el cliente se da cuenta de que eligió mal la tarifa de un menor y quiere un ajuste. Hay dinero de por medio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` el viajero y la tarifa contratada.
3. Revisa con `consultar-condiciones-entrada` el tramo de edad que le correspondería.
4. Consulta con `consultar-politica-cancelacion` si la reserva admite cambios de tarifa.
5. Abre con `crear-ticket-booking` la solicitud con lo comprobado para que booking decida.

## Qué no hace

- No promete la devolución de la diferencia.
- No cancela la entrada de adulto.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Compré entrada de adulto para mi hija y le correspondía la de niño. ¿Me devolvéis la diferencia?»
- «me equivoque y puse a mi hijo como adulto, se puede cambiar?»
- «Buenas tardes, solicito el ajuste de la tarifa de uno de los menores, que se reservó como adulto por error.»
- «he pagado de mas por la entrada del niño, como lo arreglamos?»
