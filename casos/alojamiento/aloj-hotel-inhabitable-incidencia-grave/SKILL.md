---
name: aloj-hotel-inhabitable-incidencia-grave
description: El cliente avisa de que el alojamiento ha quedado inhabitable por
  un incendio, una inundación, un corte de suministros o similar.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando una incidencia grave impide alojarse con normalidad o pone en riesgo a los viajeros. Es una emergencia que gestiona booking.

## Qué hace el agente

1. Si hay riesgo para las personas, le indica que siga primero las instrucciones del alojamiento y de los servicios de emergencia locales.
2. Verifica al titular con `verificar-identidad`.
3. Comprueba con `consultar-reserva` el alojamiento y las noches pendientes.
4. Recoge dónde están los viajeros y qué solución les ofrece el alojamiento, y abre un ticket de máxima prioridad con `crear-ticket-booking`.

## Qué no hace

- No antepone trámites a la seguridad de los viajeros.
- No promete reembolsos ni alojamiento alternativo.
- No da instrucciones de seguridad propias.

## Cuándo pasa a una persona

- Siempre y con máxima prioridad: emergencia en destino.

## Cómo lo puede pedir el cliente

- «Ha habido un incendio en el hotel y nos han desalojado, ¿qué hacemos?»
- «se ha inundado el apartamento y no hay luz»
- «Hola, llevamos sin agua ni luz desde ayer y el hotel no da solución, tenemos niños. Nos buscáis otro sitio?»
- «Les informo de que el alojamiento se encuentra inhabitable y solicito asistencia urgente.»
