---
name: viaj-distribucion-camas-habitacion
description: El cliente quiere pedir camas separadas o de matrimonio, o saber
  dónde dormirá cada viajero en la habitación reservada.
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

Cuando viajan amigos, familiares o niños y la configuración de camas importa. La petición se atiende según disponibilidad, salvo que el tipo de habitación la garantice.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` el tipo de habitación y la ocupación contratados.
3. Revisa con `consultar-servicios-alojamiento` lo que informa el alojamiento sobre camas y camas supletorias.
4. Prepara la respuesta y, si procede, la petición al alojamiento, para que booking las revise antes de enviarlas.

## Qué no hace

- No garantiza una configuración de camas que no esté contratada.
- No añade camas supletorias con coste.

## Cuándo pasa a una persona

- La configuración deseada requiere cambiar de tipo de habitación.
- La cama supletoria tiene coste.

## Cómo lo puede pedir el cliente

- «Vamos dos amigas, ¿podéis pedir que sean camas separadas?»
- «el niño donde duerme? tiene cama o con nosotros»
- «Buenos días, ¿la habitación reservada dispone de cama de matrimonio o de camas individuales?»
- «Queremos cama de matrimonio y una supletoria para el niño; ¿hay que pagar algo?»
