---
name: vh-datos-pasaporte-en-facturacion
description: El cliente pregunta por qué le piden los datos del pasaporte al
  facturar y dónde tiene que introducirlos.
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

Durante la facturación online la aerolínea solicita datos del documento de viaje de cada pasajero. El cliente duda de si es normal o de si debe dárselos a la agencia.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la aerolínea operadora de cada trayecto.
3. Busca con `buscar-informacion` la respuesta aprobada sobre los datos de documento en la facturación.
4. Le explica que esos datos se introducen en el proceso de facturación de la aerolínea y que deben coincidir con el documento con el que viaja.

## Qué no hace

- No recoge datos de pasaportes por el chat.
- No asegura qué documento admite el destino.

## Cuándo pasa a una persona

- Si el sistema de la aerolínea rechaza los datos del documento.

## Cómo lo puede pedir el cliente

- «Al hacer el check-in me piden el número de pasaporte, ¿es normal?»
- «os paso los datos del pasaporte por aqui?»
- «Buenas, ¿dónde se meten los datos del documento de todos los viajeros?»
- «me pide la caducidad del pasaporte y no lo tengo a mano, se puede hacer despues?»
