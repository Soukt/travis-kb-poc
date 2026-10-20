---
name: ent-cena-espectaculo-y-dietas
description: El cliente tiene una cena con espectáculo y necesita un menú
  especial o quiere saber qué incluye.
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

Aplica a entradas de cena con espectáculo. El cliente puede tener alergias, seguir una dieta concreta o viajar con niños.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` la entrada de cena y los viajeros.
3. Revisa con `consultar-condiciones-entrada` qué menú incluye y si admite menús especiales.
4. Busca con `buscar-informacion` las respuestas aprobadas sobre cómo solicitar menús especiales.
5. Prepara la respuesta o la petición al proveedor para que booking la revise antes de enviarla.

## Qué no hace

- No garantiza el menú especial.
- No inventa platos ni bebidas incluidas.

## Cuándo pasa a una persona

- El menú especial tiene coste adicional o el proveedor no puede atenderlo.

## Cómo lo puede pedir el cliente

- «Tenemos la cena con espectáculo y mi hija es vegetariana. ¿Puede tener otro menú?»
- «la cena del show incluye bebida?»
- «Buenas tardes, soy intolerante a la lactosa. ¿Pueden avisar para la cena espectáculo?»
- «los niños tienen menu infantil en la cena? y a que hora hay que estar?»
