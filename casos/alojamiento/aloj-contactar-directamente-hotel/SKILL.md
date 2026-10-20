---
name: aloj-contactar-directamente-hotel
description: El cliente quiere los datos de contacto del alojamiento para hablar
  directamente con él.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente prefiere resolver un detalle con el alojamiento por su cuenta o necesita localizarlo al llegar.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento con `consultar-reserva`.
3. Comprueba con `consultar-bonos` si el bono incluye los datos de contacto del alojamiento.
4. Consulta con `buscar-informacion` en qué casos conviene hablar con el alojamiento y en cuáles con la agencia.
5. Le indica el contacto que figura en el bono y le orienta según la respuesta aprobada.

## Qué no hace

- No facilita datos de contacto que no figuren en el bono.
- No busca el contacto en fuentes externas.

## Cuándo pasa a una persona

- El bono no incluye contacto y el cliente lo necesita por una incidencia en destino.

## Cómo lo puede pedir el cliente

- «¿Me pueden facilitar el contacto del hotel?»
- «como hablo con el apartamento directamente?»
- «Hola, quiero hablar con el hotel por lo de la cuna, me dais su contacto? o se lo decís vosotros?»
- «Desearía disponer de los datos de contacto del establecimiento.»
