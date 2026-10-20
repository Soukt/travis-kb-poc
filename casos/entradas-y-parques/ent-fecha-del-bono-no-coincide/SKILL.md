---
name: ent-fecha-del-bono-no-coincide
description: El cliente ve en el bono una fecha distinta a la que reservó para ir al parque.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Aplica cuando la fecha del bono no cuadra con la de la reserva. A veces es la fecha de emisión o de compra y no la de la visita.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` la fecha de visita contratada.
3. Revisa con `consultar-bonos` qué fecha figura en el bono y a qué corresponde.
4. Prepara una respuesta que explique la diferencia para que booking la revise antes de enviarla.

## Qué no hace

- No reemite el bono.
- No confirma un error sin la revisión de booking.

## Cuándo pasa a una persona

- El bono está emitido realmente para otra fecha y hay que corregirlo con el proveedor.

## Cómo lo puede pedir el cliente

- «En el bono pone otra fecha que no es la de nuestra visita.»
- «las entradas tienen el dia mal!!»
- «Buenas, he detectado que la fecha que aparece en el bono no coincide con la de la reserva.»
- «la fecha del bono es la de cuando compre o la del dia que vamos? me lio»
