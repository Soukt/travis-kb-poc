---
name: viaj-perro-de-asistencia
description: El cliente viajará con un perro de asistencia y pregunta qué debe
  tener en cuenta en el alojamiento y en el transporte.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero usa perro guía o de asistencia. Tiene un tratamiento distinto al de una mascota y la respuesta debe ser precisa.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los servicios del viaje.
3. Revisa con `consultar-servicios-alojamiento` lo que indica el alojamiento sobre animales de asistencia.
4. Busca con `buscar-informacion` la respuesta aprobada sobre perros de asistencia en transportes y alojamientos.
5. Prepara la respuesta, sin tratar al perro como una mascota, y la deja para revisión de booking antes de enviarla.

## Qué no hace

- No aplica al perro de asistencia las condiciones de las mascotas.
- No pide que se justifique la discapacidad.

## Cuándo pasa a una persona

- Algún proveedor pone pegas o pide un suplemento.
- Hay que avisar formalmente a un proveedor del transporte.

## Cómo lo puede pedir el cliente

- «Voy con mi perro guía, ¿hay que avisar al hotel?»
- «llevo perro de asistencia, me van a cobrar como si fuera mascota??»
- «Buenos días, ¿qué documentación debo llevar para viajar con un perro de asistencia en el ferri y en el hotel?»
- «Mi hija tiene perro de asistencia; ¿puede ir con él en el traslado y entrar en el parque?»
