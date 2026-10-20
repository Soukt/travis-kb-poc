---
name: doc-bono-sin-importes-regalo
description: El cliente quiere regalar el viaje y pide un bono o confirmación en
  la que no aparezca lo que ha pagado.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Reservas que son un regalo y en las que el cliente quiere entregar la documentación sin que se vea el precio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` qué documentos hay disponibles.
3. Busca con `buscar-informacion` si el bono incluye importes y si existe alguna versión sin ellos.
4. Prepara la respuesta con esa información para que booking la revise antes de enviarla.

## Qué no hace

- No edita ni crea documentos personalizados.
- No cambia el titular de la reserva.

## Cuándo pasa a una persona

- El cliente necesita un documento personalizado que no existe entre los disponibles.

## Cómo lo puede pedir el cliente

- «Es un regalo, ¿se puede tener el bono sin el precio?»
- «quiero regalarselo a mis padres y no quiero q vean lo que costo»
- «Solicito, si es posible, una versión de la documentación que no muestre importes.»
- «¿el bono pone lo que he pagado? es una sorpresa de aniversario»
