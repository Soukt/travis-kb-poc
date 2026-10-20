---
name: aloj-necesidad-medica-en-habitacion
description: El cliente necesita algo en la habitación por un motivo de salud,
  como una nevera para medicación o un enchufe para un equipo.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando hay una necesidad médica que requiere preparar la habitación. El agente prepara la petición y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y la habitación.
3. Consulta con `consultar-servicios-alojamiento` si la habitación tiene nevera u otros elementos.
4. Prepara la petición, con solo la información imprescindible, en `crear-ticket-booking` para que booking la revise y la envíe.

## Qué no hace

- No pide diagnósticos ni informes médicos.
- No da consejos médicos.
- No garantiza el equipamiento hasta que lo confirme el alojamiento.

## Cuándo pasa a una persona

- La necesidad es imprescindible para el viaje y el alojamiento no la confirma.

## Cómo lo puede pedir el cliente

- «Necesito una nevera en la habitación para guardar insulina, ¿lo pueden pedir?»
- «uso una maquina para dormir, hay enchufe cerca de la cama?»
- «Hola, tengo medicación que va en frío, el minibar sirve? y si no, me la guardan en recepción?»
- «Solicito que el alojamiento disponga en la habitación de refrigeración para medicamentos.»
