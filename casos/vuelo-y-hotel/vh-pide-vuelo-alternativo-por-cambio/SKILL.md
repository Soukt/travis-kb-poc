---
name: vh-pide-vuelo-alternativo-por-cambio
description: El cliente pide otro vuelo porque el nuevo horario impuesto por la
  aerolínea no le encaja, pero no quiere cancelar el viaje.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras un cambio de horario, el cliente quiere mantener el paquete pero volar en otro horario o en otro día cercano.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el horario original y el nuevo.
3. Revisa con `consultar-reserva` las fechas del hotel y los traslados.
4. Pide con `pedir-datos-cliente` la franja horaria o las fechas que le vendrían bien.
5. Crea con `crear-ticket-booking` un ticket con la petición.

## Qué no hace

- No busca ni reserva vuelos alternativos.
- No asegura que el cambio sea gratuito.

## Cuándo pasa a una persona

- Siempre, porque puede haber diferencia de precio y requiere gestión con la aerolínea.

## Cómo lo puede pedir el cliente

- «El nuevo horario no me va bien, ¿me podéis poner otro vuelo?»
- «prefiero salir mas tarde, hay otro vuelo ese dia?»
- «Buenos días, no queremos cancelar, solo cambiar a un vuelo con mejor horario.»
- «con ese horario no llego desde el trabajo, cambiadmelo porfa»
