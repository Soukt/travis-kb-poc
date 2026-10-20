---
name: vh-localizador-aerolinea-para-facturar
description: El cliente necesita el código de reserva de la aerolínea, distinto
  del localizador de la agencia, para facturar o gestionar su vuelo.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

La web de la aerolínea no acepta el localizador de la agencia y el cliente necesita el código propio de la aerolínea. Suele pasar al intentar facturar, elegir asiento o añadir datos del pasaporte.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el código de reserva de la aerolínea de cada trayecto, si la acción lo devuelve.
3. Si no aparece, revisa con `consultar-bonos` si la confirmación del vuelo ya está disponible y lo incluye.
4. Explica la diferencia entre el localizador de la agencia y el de la aerolínea, y dónde usar cada uno.

## Qué no hace

- No inventa ni deduce el código de la aerolínea.
- No facilita el código a nadie que no haya superado la verificación.

## Cuándo pasa a una persona

- Si ni los datos del vuelo ni los bonos contienen el código de la aerolínea.

## Cómo lo puede pedir el cliente

- «Para hacer el check-in me piden un código de reserva de la aerolínea y el vuestro no funciona»
- «cual es el localizador de la aerolinea? el q tengo no me vale»
- «Hola, ¿me podéis pasar el código de reserva del vuelo? Quiero elegir asiento»
- «Buenas tardes, necesito la referencia de la compañía aérea para añadir mis datos de pasaporte.»
