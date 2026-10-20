---
name: viaj-documento-digital-en-movil
description: El cliente pregunta si puede viajar o registrarse en el alojamiento
  solo con el documento de identidad digital del móvil.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente lleva su documentación en una aplicación oficial del móvil y duda si se la aceptarán. La respuesta depende del tipo de servicio contratado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué servicios tiene, porque cada uno puede pedir algo distinto.
3. Busca con `buscar-informacion` la respuesta aprobada sobre documentos digitales.
4. Explica al cliente lo que diga esa respuesta y le recomienda llevar también el documento físico si así lo indica.

## Qué no hace

- No asegura que el proveedor acepte el documento digital si la respuesta aprobada no lo dice.
- No da instrucciones sobre aplicaciones concretas.

## Cuándo pasa a una persona

- No hay respuesta aprobada sobre documentos digitales.

## Cómo lo puede pedir el cliente

- «¿Me vale el DNI del móvil para el hotel o tengo que llevar el físico?»
- «puedo coger el barco solo con el dni digital?? es q el fisico no lo encuentro»
- «Buenas, ¿se acepta la documentación en formato digital en todos los servicios de mi reserva?»
- «Llevo el DNI en el móvil; ¿sirve también para recoger las entradas del parque?»
