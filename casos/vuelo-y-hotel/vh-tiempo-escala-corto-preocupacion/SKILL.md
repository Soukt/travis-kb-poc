---
name: vh-tiempo-escala-corto-preocupacion
description: El cliente cree que el tiempo entre sus vuelos con escala es muy
  justo y teme perder la conexión.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Antes de viajar, el cliente ve poco margen entre la llegada del primer vuelo y la salida del segundo. No hay ningún cambio de horario de por medio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` los horarios de ambos tramos y si van en el mismo billete.
3. Busca con `buscar-informacion` la respuesta aprobada sobre conexiones y qué ocurre si se pierde una.
4. Le explica la situación según esos datos y le aconseja avisar al personal de la aerolínea si el primer vuelo se retrasa.

## Qué no hace

- No garantiza que llegue a tiempo a la conexión.
- No cambia el vuelo por iniciativa propia.

## Cuándo pasa a una persona

- Si el cliente quiere cambiar a otro vuelo con más margen.
- Si los vuelos van en billetes separados.

## Cómo lo puede pedir el cliente

- «Tengo muy poco tiempo entre un vuelo y otro, ¿me da tiempo?»
- «la escala es cortisima, y si no llego?»
- «Buenas tardes, ¿qué pasa si el primer vuelo se retrasa y pierdo el segundo?»
- «con tan poco margen no lo veo claro, me podeis poner otro vuelo?»
