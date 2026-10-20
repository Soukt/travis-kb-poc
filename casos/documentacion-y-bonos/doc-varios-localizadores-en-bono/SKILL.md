---
name: doc-varios-localizadores-en-bono
description: El cliente ve varios localizadores en el bono y no sabe cuál tiene
  que dar en destino.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el bono muestra el localizador de la agencia y otros códigos de proveedor y el cliente se confunde.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` los bonos de la reserva y los códigos que contienen.
3. Busca con `buscar-informacion` la explicación aprobada sobre los distintos localizadores.
4. Le explica cuál dar en cada servicio y cuál usar para hablar con la agencia.

## Qué no hace

- No inventa el significado de códigos sin información aprobada.
- No modifica el bono.

## Cuándo pasa a una persona

- Algún código no corresponde a ningún servicio de la reserva.

## Cómo lo puede pedir el cliente

- «En el bono hay varios números de reserva, ¿cuál es el bueno?»
- «q localizador doy en el hotel? hay como tres»
- «Les agradecería que me indicaran cuál de los códigos debo facilitar en recepción.»
- «un número es vuestro y otro no sé de quién, ¿cuál uso para el ferry?»
