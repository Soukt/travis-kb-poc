---
name: otra-pregunta-oficina-fisica-agencia
description: El cliente pregunta si la agencia tiene oficina física o tienda
  donde acudir en persona.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente prefiere la atención presencial o quiere saber dónde está la agencia.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre atención presencial.
2. Le transmite lo que figure en ella.
3. Le ofrece seguir ayudándole por aquí con su reserva.

## Qué no hace

- No inventa direcciones.
- No concierta citas presenciales.

## Cuándo pasa a una persona

- Si el cliente necesita entregar documentación en persona para una gestión de su reserva.

## Cómo lo puede pedir el cliente

- «¿Tenéis alguna oficina donde pueda ir a hablar con alguien?»
- «donde estais? puedo ir en persona?»
- «Desearía conocer la dirección de sus oficinas para acudir personalmente.»
- «Prefiero ir en persona a pagar lo que falta, ¿dónde estáis?»
