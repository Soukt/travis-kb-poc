---
name: viaj-medicacion-en-equipaje
description: El cliente pregunta si puede llevar medicación, líquidos médicos o
  jeringuillas en el equipaje de mano del vuelo.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero necesita su medicación durante el viaje, a veces refrigerada o en más cantidad de lo habitual. Afecta al control de seguridad y al equipaje.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-vuelo` el equipaje incluido.
3. Busca con `buscar-informacion` la respuesta aprobada sobre medicación en el equipaje.
4. Prepara la respuesta, recomendando llevar el informe médico si así lo indica la información aprobada, y la deja para revisión de booking.

## Qué no hace

- No da consejos médicos.
- No asegura lo que permitirá el control de seguridad.

## Cuándo pasa a una persona

- La medicación necesita frío o un equipo que requiere autorización.
- No hay respuesta aprobada.

## Cómo lo puede pedir el cliente

- «Soy diabético, ¿puedo llevar la insulina en la mochila del avión?»
- «puedo llevar los jarabes del niño en el equipaje de mano o me los quitan?»
- «Buenos días, ¿qué documentación se requiere para llevar medicación inyectable en cabina?»
- «Llevo medicación que tiene que ir en frío; ¿la puedo subir al avión y qué maleta tengo incluida?»
