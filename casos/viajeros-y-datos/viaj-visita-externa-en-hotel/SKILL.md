---
name: viaj-visita-externa-en-hotel
description: El cliente pregunta si una persona que no está alojada puede
  visitarle o usar las instalaciones del alojamiento.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-servicios-alojamiento
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando un familiar o amigo que vive en el destino quiere ir a ver al cliente, comer con él o usar la piscina, sin formar parte de la reserva.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-servicios-alojamiento` las instalaciones y lo que indique sobre visitas.
3. Busca con `buscar-informacion` la respuesta aprobada sobre visitas a huéspedes.
4. Explica al cliente lo que conste y le aclara que la decisión final es del alojamiento.

## Qué no hace

- No añade a la visita como viajero.
- No asegura que la visita pueda pasar la noche.

## Cuándo pasa a una persona

- La visita quiere quedarse a dormir, lo que equivale a añadir un viajero.

## Cómo lo puede pedir el cliente

- «Una amiga vive allí, ¿puede venir a verme al hotel?»
- «mi hermano puede bajar a la piscina con nosotros aunque no este alojado?»
- «Buenos días, ¿permite el alojamiento el acceso de visitas no registradas?»
- «¿Pueden venir mis primos a cenar al hotel? ¿Y quedarse a dormir?»
