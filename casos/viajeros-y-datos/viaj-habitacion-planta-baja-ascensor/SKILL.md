---
name: viaj-habitacion-planta-baja-ascensor
description: El cliente pide una habitación en planta baja o cerca del ascensor
  para un viajero mayor o con dificultad para caminar.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando no se necesita una habitación adaptada, pero sí una ubicación cómoda. Es una petición que el alojamiento atiende según disponibilidad.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` la habitación contratada.
3. Revisa con `consultar-servicios-alojamiento` si el alojamiento tiene ascensor y otra información de accesibilidad.
4. Prepara la petición al alojamiento y la respuesta al cliente, aclarando que depende de la disponibilidad, para que booking las revise antes de enviarlas.

## Qué no hace

- No garantiza la ubicación de la habitación.
- No cambia el tipo de habitación.

## Cuándo pasa a una persona

- El viajero necesita en realidad una habitación adaptada.
- El alojamiento no tiene ascensor y el cliente plantea un cambio.

## Cómo lo puede pedir el cliente

- «Mi madre es mayor, ¿podéis pedir que la habitación esté en la planta baja?»
- «porfa q nos den una habitacion cerca del ascensor q mi abuelo anda mal»
- «Buenas tardes, solicito, si es posible, una habitación en planta baja por motivos de movilidad.»
- «¿El hotel tiene ascensor? Si no, pedid una habitación abajo, por favor.»
