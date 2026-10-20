---
name: camb-saber-si-permite-cambio-nombre
description: El cliente pregunta si su reserva admitiría un cambio de nombre o
  de viajero, sin pedirlo todavía.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente duda de si alguien podrá viajar en lugar de otro y quiere saberlo antes de decidir.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio de cada servicio.
4. Busca con `buscar-informacion` qué indica la agencia sobre cambios de nombre según el tipo de servicio.
5. Le explica qué servicios lo admiten, cuáles no y cuáles dependen del proveedor.

## Qué no hace

- No inicia el cambio.
- No da por hecho que se pueda en vuelos o en entradas nominativas.

## Cuándo pasa a una persona

- El cliente decide hacer el cambio.
- No hay información aprobada para el servicio concreto.

## Cómo lo puede pedir el cliente

- «Si al final no puede venir mi amigo, ¿podría ir otra persona con su plaza?»
- «¿Se puede cambiar el nombre de la reserva o va fijo?»
- «una pregunta, los nombres se pueden cambiar despues o no?»
- «Desearía saber si la reserva permite modificar a los viajeros y hasta cuándo.»
