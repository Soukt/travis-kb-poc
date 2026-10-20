---
name: aloj-aviso-obras-antes-viaje
description: El cliente ha oído o leído que su alojamiento está en obras y
  quiere saber cómo le afectará antes de viajar.
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

Cuando el cliente aún no ha viajado y tiene dudas por posibles obras o cierres parciales. El agente prepara la consulta al alojamiento y booking la revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` las fechas y el alojamiento.
3. Revisa con `consultar-servicios-alojamiento` si figura algún aviso de cierre o reforma.
4. Si no hay información, prepara la consulta en `crear-ticket-booking` para que booking la revise y la envíe al alojamiento.

## Qué no hace

- No confirma ni desmiente rumores sin información del alojamiento.
- No ofrece cancelar sin gastos.

## Cuándo pasa a una persona

- El cliente quiere cancelar o cambiar de alojamiento por las obras.
- Las obras afectan a un servicio contratado.

## Cómo lo puede pedir el cliente

- «He leído que el hotel está en obras, ¿nos va a afectar?»
- «me han dicho q estan reformando el apartamento, es verdad?»
- «Hola, en las opiniones dicen que hay obras y ruido. Seguirán cuando vayamos? Si es así prefiero otro»
- «Desearía saber si el establecimiento tiene previstas obras durante las fechas de mi estancia.»
