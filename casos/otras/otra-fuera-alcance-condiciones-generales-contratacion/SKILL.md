---
name: otra-fuera-alcance-condiciones-generales-contratacion
description: El cliente quiere leer las condiciones generales de contratación de
  la agencia o saber dónde están.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere consultar el texto completo de las condiciones que aceptó al reservar.

## Qué hace el agente

1. Busca con `buscar-informacion` dónde están publicadas las condiciones generales.
2. Le indica cómo consultarlas según la respuesta aprobada.
3. Si no hay respuesta aprobada, se lo dice sin improvisar.

## Qué no hace

- No interpreta jurídicamente las condiciones.
- No resume cláusulas que no estén en la respuesta aprobada.

## Cuándo pasa a una persona

- Si el cliente discute que una condición se aplique a su reserva.

## Cómo lo puede pedir el cliente

- «¿Dónde puedo leer las condiciones generales que acepté al reservar?»
- «quiero ver la letra pequeña del contrato»
- «Les solicito una copia de las condiciones generales de contratación vigentes.»
- «¿Qué pone en las condiciones sobre cancelar? Quiero leerlas enteras.»
