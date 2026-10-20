---
name: aloj-wifi-en-alojamiento
description: El cliente pregunta si su alojamiento tiene wifi, si es gratuita y
  si llega a las habitaciones.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere saber si tendrá conexión a internet en su alojamiento y en qué zonas.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` si hay wifi, en qué zonas y si tiene coste.
4. Responde con lo que indica el alojamiento, sin añadir valoraciones propias.

## Qué no hace

- No facilita claves de acceso a la red.
- No garantiza la velocidad ni la calidad de la conexión.

## Cuándo pasa a una persona

- El cliente reclama porque la wifi anunciada no existe o no funciona durante la estancia.

## Cómo lo puede pedir el cliente

- «¿El hotel dispone de wifi en las habitaciones?»
- «hay wifi? es gratis?»
- «Hola, tengo que teletrabajar desde el apartamento, la conexión es buena? y hay escritorio?»
- «Quisiera saber si el alojamiento ofrece conexión a internet.»
