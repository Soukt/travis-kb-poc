---
name: ent-pase-rapido-sin-colas
description: El cliente pregunta si su entrada incluye un pase para evitar colas
  o si puede añadirlo.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente quiere aprovechar mejor el día y se interesa por los pases de acceso rápido a las atracciones.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` las entradas contratadas.
3. Revisa con `consultar-condiciones-entrada` si incluyen pase rápido.
4. Busca con `buscar-informacion` si la agencia ofrece añadirlo o si se compra en el parque.
5. Prepara una respuesta con las opciones para que booking la revise antes de enviarla.

## Qué no hace

- No vende ni añade el pase.
- No da precios.

## Cuándo pasa a una persona

- El cliente quiere comprar el pase a través de la agencia.

## Cómo lo puede pedir el cliente

- «¿Tenemos pase rápido incluido?»
- «se puede añadir el pase para no hacer cola?»
- «Buenas tardes, quisiera saber si es posible incorporar el acceso exprés a mis entradas.»
- «las colas son muy largas? merece la pena el pase ese?»
