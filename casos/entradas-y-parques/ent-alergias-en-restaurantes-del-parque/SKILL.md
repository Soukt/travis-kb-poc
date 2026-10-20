---
name: ent-alergias-en-restaurantes-del-parque
description: El cliente tiene alergias o intolerancias alimentarias y pregunta
  si los restaurantes del parque ofrecen opciones adaptadas.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica como consulta general sobre restauración dentro del parque. Si el cliente tiene comidas incluidas en su reserva, se trata en otro caso.

## Qué hace el agente

1. Busca con `buscar-informacion` las respuestas aprobadas sobre alergias e intolerancias en la restauración del parque.
2. Responde con lo encontrado y recomienda avisar al personal de cada restaurante.
3. Si no hay respuesta aprobada, se lo dice al cliente sin suponer.

## Qué no hace

- No garantiza la ausencia de alérgenos.
- No inventa menús ni restaurantes.

## Cuándo pasa a una persona

- El cliente tiene comidas incluidas en la reserva y necesita que se avise al proveedor de su alergia.

## Cómo lo puede pedir el cliente

- «Soy celíaco. ¿Hay sitios para comer sin gluten en el parque?»
- «mi hijo es alergico a los frutos secos, hay opciones seguras dentro?»
- «Buenas, ¿los restaurantes del parque disponen de menús para intolerancias?»
- «podemos comer algo vegano dentro del parque o mejor llevamos?»
