---
name: ferri-numero-camarote-o-butaca-asignado
description: El cliente quiere saber su número de camarote o de butaca y cuándo
  se lo asignan si todavía no lo tiene.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

En el bono o en la zona de cliente no aparece el número de camarote o de asiento y el cliente quiere conocerlo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` si la acomodación ya tiene número asignado.
3. Si no lo tiene, busca con `buscar-informacion` cuándo y dónde se asigna según la información aprobada.
4. Responde con el número o con el momento de asignación.

## Qué no hace

- No asigna ni reserva números concretos.
- No inventa el momento de asignación si no hay respuesta aprobada.

## Cuándo pasa a una persona

- El cliente necesita un camarote o una butaca concretos por un motivo justificado.

## Cómo lo puede pedir el cliente

- «¿Cuál es el número de mi camarote?»
- «en el bono no sale el numero de asiento, cuando me lo dan?»
- «Buenas tardes, ¿la numeración de las butacas se asigna en el embarque?»
- «No veo el número de camarote por ningún lado, ¿es normal? ¿Y a qué hora embarcamos?»
