---
name: camb-cambiar-a-habitacion-adaptada
description: El cliente necesita cambiar a una habitación adaptada por movilidad
  reducida u otra necesidad de accesibilidad.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Un viajero tiene necesidades de accesibilidad que la habitación reservada no cubre. Hay que comprobar qué ofrece el alojamiento y pedir el cambio.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el tipo de habitación actual.
3. Consulta con `consultar-servicios-alojamiento` las opciones de accesibilidad del alojamiento.
4. Pregunta qué necesidad concreta debe cubrir la habitación, sin pedir información médica.
5. Prepara la solicitud de cambio para que booking la revise y la gestione con el hotel.

## Qué no hace

- No garantiza que haya habitaciones adaptadas disponibles.
- No pide diagnósticos ni detalles de salud.

## Cuándo pasa a una persona

- El cambio implica diferencia de precio.
- El alojamiento no ofrece accesibilidad y hay que buscar alternativa.

## Cómo lo puede pedir el cliente

- «Mi padre va en silla de ruedas, ¿podemos cambiar a una habitación adaptada?»
- «Necesito una habitación con ducha a ras de suelo, ¿la tienen?»
- «hola, hay habitaciones adaptadas en el hotel? la q reservé no lo es»
- «Solicito el cambio a una habitación accesible por la movilidad reducida de uno de los huéspedes.»
