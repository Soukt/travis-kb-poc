---
name: viaj-jovenes-sin-adultos-alojamiento
description: El cliente pregunta si un grupo de jóvenes, con alguno menor de
  edad, puede alojarse sin un adulto responsable.
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

Cuando la reserva es de un grupo de amigos jóvenes o de un menor con amigos mayores de edad. Muchos alojamientos exigen una edad mínima para registrarse.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los viajeros y sus edades.
3. Revisa con `consultar-servicios-alojamiento` las condiciones del alojamiento sobre huéspedes menores.
4. Busca con `buscar-informacion` la respuesta aprobada sobre menores alojados sin adultos.
5. Prepara la respuesta y la deja para revisión de booking antes de enviarla.

## Qué no hace

- No asegura que el alojamiento vaya a aceptar al grupo.
- No sugiere registrar a un adulto que no viaja.

## Cuándo pasa a una persona

- El alojamiento no admite al grupo y el cliente plantea cancelar o cambiar.
- Las condiciones no aclaran el caso.

## Cómo lo puede pedir el cliente

- «Vamos varios amigos y uno es menor, ¿nos dejarán hacer el check-in?»
- «soy menor pero mis amigos no, puedo ir al hotel con ellos?»
- «Buenas tardes, ¿cuál es la edad mínima para alojarse en el hotel sin acompañante adulto?»
- «Somos un grupo de jóvenes; ¿necesitamos alguna autorización de nuestros padres y el hotel tiene piscina?»
