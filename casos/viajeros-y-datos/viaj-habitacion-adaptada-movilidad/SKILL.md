---
name: viaj-habitacion-adaptada-movilidad
description: El cliente necesita una habitación adaptada para un viajero con
  movilidad reducida o que usa silla de ruedas.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el viajero necesita accesos sin escalones, baño adaptado u otras condiciones. Si la habitación reservada no lo es, puede requerir cambiar de tipo de habitación.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` la habitación contratada.
3. Revisa con `consultar-servicios-alojamiento` la información de accesibilidad del alojamiento.
4. Recoge con `pedir-datos-cliente` qué adaptaciones necesita exactamente el viajero.
5. Abre con `crear-ticket-booking` la petición para que booking la confirme con el alojamiento.

## Qué no hace

- No garantiza la habitación adaptada.
- No pide información médica más allá de las necesidades prácticas.

## Cuándo pasa a una persona

- Siempre: hay que confirmarlo con el alojamiento y puede implicar cambiar de habitación.

## Cómo lo puede pedir el cliente

- «Mi padre va en silla de ruedas, ¿la habitación está adaptada?»
- «necesito baño adaptado q yo no puedo meterme en bañera»
- «Buenos días, solicito una habitación accesible para una persona con movilidad reducida.»
- «¿Me aseguráis que la habitación es adaptada? Si no lo es, ¿me cambiáis sin coste?»
