---
name: aloj-perro-de-asistencia
description: El cliente viaja con un perro de asistencia y quiere asegurarse de
  que el alojamiento lo sabe y no habrá problemas.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente indica que su animal es un perro de asistencia, aunque el alojamiento no admita mascotas. El agente prepara la comunicación y booking la revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma alojamiento y fechas con `consultar-reserva`.
3. Busca con `buscar-informacion` la respuesta aprobada sobre perros de asistencia en alojamientos.
4. Prepara la comunicación al alojamiento en `crear-ticket-booking` para que booking la revise y la envíe.

## Qué no hace

- No trata al perro de asistencia como una mascota sujeta a suplemento.
- No pide detalles de la discapacidad del cliente.
- No niega el acceso basándose en la política de mascotas.

## Cuándo pasa a una persona

- El alojamiento pone pegas o pide un suplemento.
- El cliente ya ha tenido un problema en el alojamiento por este motivo.

## Cómo lo puede pedir el cliente

- «Viajo con mi perro de asistencia, ¿hay que comunicarlo al hotel?»
- «llevo perro guia, me pueden poner pegas?»
- «Hola, el hotel pone que no admite animales pero el mío es de asistencia. Lo podéis avisar vosotros?»
- «Les informo de que me acompañará un perro de asistencia y solicito que lo trasladen al alojamiento.»
