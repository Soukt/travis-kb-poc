---
name: viaj-alergias-alimentarias-regimen
description: El cliente tiene pensión contratada en el alojamiento y quiere
  avisar de alergias o intolerancias alimentarias de un viajero.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - pedir-datos-cliente
  simulado: "true"
---
## Cuándo aplica

Cuando el régimen incluye comidas y un viajero necesita una dieta adaptada. El alojamiento debe conocerlo con antelación y no siempre puede garantizarlo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` el régimen contratado.
3. Revisa con `consultar-servicios-alojamiento` si el alojamiento informa sobre dietas especiales.
4. Recoge con `pedir-datos-cliente` qué viajero tiene la alergia o intolerancia y de qué tipo.
5. Prepara la petición al alojamiento y la respuesta al cliente para que booking las revise antes de enviarlas.

## Qué no hace

- No garantiza que el alojamiento ofrezca menús seguros.
- No da consejos médicos.

## Cuándo pasa a una persona

- La alergia es grave y el cliente necesita confirmación expresa del alojamiento antes de viajar.
- El cliente quiere cambiar de régimen o cancelar si no se garantiza la dieta.

## Cómo lo puede pedir el cliente

- «Mi hija es alérgica al huevo, ¿podéis avisar al hotel?»
- «soy intolerante a la lactosa, en el buffet tendran algo para mi?»
- «Buenas tardes, les informo de que un huésped padece celiaquía y precisa menú sin gluten durante la estancia.»
- «Quiero avisar de una alergia al marisco y saber si la media pensión es cena o comida.»
