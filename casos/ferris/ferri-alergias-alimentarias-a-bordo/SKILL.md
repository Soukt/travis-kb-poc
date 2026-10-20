---
name: ferri-alergias-alimentarias-a-bordo
description: El cliente o algún viajero tiene alergias o intolerancias
  alimentarias y pregunta si podrá comer con seguridad durante la travesía.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La travesía es larga o incluye comidas y a algún viajero le preocupa la restauración a bordo por motivos de salud.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` si el trayecto incluye comidas y la naviera.
3. Busca con `buscar-informacion` la información aprobada sobre alérgenos y menús especiales a bordo.
4. Prepara una respuesta prudente para que booking la revise antes de enviarla.

## Qué no hace

- No garantiza que la comida a bordo sea apta.
- No da consejos médicos ni nutricionales.
- No pide detalles de salud que no hagan falta.

## Cuándo pasa a una persona

- El trayecto incluye comidas y hay que solicitar un menú especial a la naviera.

## Cómo lo puede pedir el cliente

- «Soy celíaca, ¿en el barco hay comida sin gluten?»
- «mi hijo es alergico a los frutos secos, es seguro comer en el ferri?»
- «Buenas tardes, ¿es posible solicitar un menú especial para la cena incluida a bordo?»
- «tengo intolerancia a la lactosa, me llevo la comida o alli hay opciones? se puede subir comida?»
