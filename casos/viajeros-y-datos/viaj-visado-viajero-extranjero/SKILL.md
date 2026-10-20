---
name: viaj-visado-viajero-extranjero
description: El cliente pregunta si un viajero con otra nacionalidad necesita
  visado u otro permiso para el destino de la reserva.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando en la reserva viaja alguien con una nacionalidad distinta a la del resto o con permiso de residencia. Los requisitos varían según la nacionalidad y la agencia no puede garantizarlos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` el destino y los servicios del viaje.
3. Busca con `buscar-informacion` la respuesta aprobada sobre visados y permisos.
4. Prepara una respuesta que traslade esa información y remita al cliente a las autoridades consulares para confirmarlo, y la deja para revisión de booking.

## Qué no hace

- No dice si un viajero necesita visado si la información aprobada no lo recoge.
- No tramita visados.

## Cuándo pasa a una persona

- El cliente necesita un justificante de la reserva para el trámite.
- El viajero no obtendrá el permiso y plantea cancelar.

## Cómo lo puede pedir el cliente

- «Mi pareja tiene otra nacionalidad, ¿necesita visado para este viaje?»
- «Buenas tardes, una de las viajeras reside aquí con permiso de residencia. ¿Necesita algún documento adicional?»
- «mi amigo es extranjero, le dejaran entrar solo con su pasaporte?»
- «¿Mi madre necesita visado? Si se lo deniegan, ¿me devolvéis el dinero?»
