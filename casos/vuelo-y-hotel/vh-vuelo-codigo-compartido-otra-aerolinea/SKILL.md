---
name: vh-vuelo-codigo-compartido-otra-aerolinea
description: El cliente ve en su reserva una aerolínea pero el vuelo lo opera
  otra y no sabe dónde facturar ni qué normas de equipaje aplican.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El vuelo se vende con el código de una aerolínea y lo opera otra. El cliente duda de con cuál tiene que hacer la facturación o qué equipaje le corresponde.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la aerolínea que comercializa y la que opera cada trayecto, si la acción lo indica.
3. Busca con `buscar-informacion` la respuesta aprobada sobre vuelos en código compartido.
4. Le explica con qué aerolínea debe facturar y le recomienda revisar las condiciones de la aerolínea operadora.

## Qué no hace

- No supone qué aerolínea opera el vuelo si la acción no lo indica.
- No da de memoria las normas de equipaje de ninguna aerolínea.

## Cuándo pasa a una persona

- Si ninguna de las dos aerolíneas reconoce la reserva.
- Si el equipaje que indica la aerolínea operadora no coincide con el de la reserva.

## Cómo lo puede pedir el cliente

- «En mi billete pone una compañía pero en el aeropuerto dicen que vuelo con otra, ¿cuál es la buena?»
- «nose con que aerolinea vuelo, me salen dos nombres»
- «Buenas, ¿en qué web tengo que hacer el check-in si el vuelo lo opera otra compañía?»
- «Si el vuelo es de otra aerolínea, ¿me sigue valiendo la maleta que tengo incluida?»
