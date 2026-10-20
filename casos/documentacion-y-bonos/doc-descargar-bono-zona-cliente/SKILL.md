---
name: doc-descargar-bono-zona-cliente
description: El cliente pregunta cómo descargar sus bonos desde la zona de cliente.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - buscar-informacion
    - verificar-identidad
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

El cliente quiere tener el bono en el móvil o imprimirlo y no sabe dónde se descarga.

## Qué hace el agente

1. Busca con `buscar-informacion` las instrucciones aprobadas para descargar documentación desde la zona de cliente.
2. Comprueba con `verificar-identidad` que es el titular de la reserva.
3. Revisa con `consultar-bonos` si los bonos ya están disponibles para descarga.
4. Le explica los pasos y, si los bonos aún no están disponibles, le dice el motivo que devuelve la acción.

## Qué no hace

- No describe pantallas o botones que no estén en la información aprobada.
- No inventa cuándo estarán disponibles los bonos.

## Cuándo pasa a una persona

- Los bonos figuran como disponibles pero el cliente no los ve en su zona de cliente.

## Cómo lo puede pedir el cliente

- «¿Dónde puedo descargar el bono?»
- «no encuentro donde se bajan los bonos en la web»
- «Buenas, ¿desde el móvil se puede descargar la documentación o tengo que usar el ordenador?»
- «Quiero descargarme el bono y ver de paso si el desayuno está incluido»
