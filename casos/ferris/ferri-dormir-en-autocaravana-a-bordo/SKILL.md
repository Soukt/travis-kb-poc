---
name: ferri-dormir-en-autocaravana-a-bordo
description: El cliente viaja con autocaravana o camper y pregunta si puede
  quedarse dentro durante la travesía o conectarla a la corriente.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere usar su autocaravana como alojamiento a bordo y no sabe si lo permite la naviera o si necesita butaca o camarote.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el vehículo registrado y la acomodación contratada.
3. Busca con `buscar-informacion` las condiciones aprobadas para permanecer en vehículos o conectarlos durante la travesía.
4. Responde y, si la información aprobada exige acomodación a bordo y no la tiene contratada, se lo indica.

## Qué no hace

- No autoriza a permanecer en el vehículo si la información aprobada no lo permite.
- No añade acomodación a bordo.

## Cuándo pasa a una persona

- El cliente necesita contratar butaca o camarote porque no puede quedarse en el vehículo.

## Cómo lo puede pedir el cliente

- «Vamos en autocaravana, ¿podemos dormir dentro durante la noche en el barco?»
- «se puede enchufar la camper en el ferri?»
- «Disculpe, ¿hace falta reservar camarote si viajamos con caravana?»
- «en la furgo camper podemos ir con el perro dentro todo el viaje?»
