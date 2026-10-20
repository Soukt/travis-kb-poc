---
name: ferri-embarque-como-pasajero-a-pie
description: El cliente viaja sin vehículo y quiere saber por dónde y cómo se
  embarca como pasajero a pie.
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

El trayecto está contratado solo para pasajeros y el cliente no sabe a qué zona del puerto tiene que ir ni cómo es el acceso al barco.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-trayecto-ferri` que viaja sin vehículo y obtiene el puerto y la hora de presentación.
3. Busca con `buscar-informacion` cómo es el embarque aprobado para pasajeros a pie.
4. Explica los pasos: dónde presentarse, qué enseñar y cómo se accede al barco.

## Qué no hace

- No inventa ubicaciones dentro del puerto.
- No le aplica la hora de presentación de los vehículos.

## Cuándo pasa a una persona

- El cliente necesita ayuda para embarcar por movilidad reducida.

## Cómo lo puede pedir el cliente

- «Vamos sin coche, ¿por dónde se sube al barco?»
- «es la primera vez q cojo un ferri andando, como va esto»
- «Buenos días, ¿los pasajeros a pie embarcan por una pasarela distinta a la de los vehículos?»
- «Llevamos maletas grandes y vamos a pie, ¿hay que dejarlas en algún sitio antes de subir?»
