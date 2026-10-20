---
name: viaj-menu-especial-en-vuelo
description: El cliente quiere pedir un menú especial en el vuelo por motivos de
  salud, religiosos o de dieta.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
    - pedir-datos-cliente
  simulado: "true"
---
## Cuándo aplica

Cuando un pasajero necesita una comida adaptada a bordo y el vuelo incluye servicio de comida. Depende de la aerolínea y del tipo de tarifa.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-vuelo` los vuelos y lo que incluye la tarifa.
3. Busca con `buscar-informacion` la respuesta aprobada sobre menús especiales a bordo.
4. Recoge con `pedir-datos-cliente` el pasajero y el tipo de menú que necesita.
5. Prepara la petición y la respuesta al cliente para que booking las revise antes de enviarlas.

## Qué no hace

- No garantiza que la aerolínea disponga del menú.
- No da consejos médicos ni nutricionales.

## Cuándo pasa a una persona

- El menú tiene un coste adicional.
- Es una alergia grave que requiere confirmación expresa de la aerolínea.

## Cómo lo puede pedir el cliente

- «Soy celíaco, ¿puedo pedir comida sin gluten en el avión?»
- «mi madre es vegetariana, le pueden poner algo en el vuelo??»
- «Buenos días, deseo solicitar un menú especial por motivos religiosos para uno de los pasajeros.»
- «¿Hay comida en el vuelo? Si la hay, quiero una sin lactosa para mi hijo.»
