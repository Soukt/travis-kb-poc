---
name: vh-documentacion-transito-en-escala
description: El cliente pregunta si necesita visado o algún documento especial
  para hacer escala en otro país aunque no salga del aeropuerto.
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

La escala se hace en un país distinto al de origen y al de destino. El cliente quiere saber qué documentación le pueden pedir en tránsito.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el aeropuerto y el país de la escala.
3. Busca con `buscar-informacion` la respuesta aprobada sobre documentación en tránsito.
4. Si hay respuesta, se la traslada; si no, le dice que no puede confirmarlo y le remite a las autoridades oficiales de ese país y a la aerolínea.

## Qué no hace

- No asesora sobre visados ni requisitos migratorios por su cuenta.
- No asegura que no haga falta ningún documento.

## Cuándo pasa a una persona

- Si un viajero no puede embarcar por un problema de documentación y el viaje ya está en curso.

## Cómo lo puede pedir el cliente

- «¿Necesito visado para la escala si no salgo del aeropuerto?»
- «en la escala me piden algun papel?»
- «Buenas, mi pareja tiene otra nacionalidad, ¿le hace falta algún permiso para la escala?»
- «Para el tránsito, ¿vale con el DNI o hace falta pasaporte?»
