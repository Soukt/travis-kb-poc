---
name: ferri-denegacion-embarque-por-sobreventa
description: El cliente no ha podido embarcar porque la naviera le dice que no
  hay plaza aunque tiene billete confirmado.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

En el embarque le niegan la plaza a él, a algún viajero o al vehículo por falta de capacidad, teniendo el trayecto confirmado.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` que el trayecto estaba confirmado.
3. Revisa con `consultar-bonos` que el bono estaba emitido.
4. Recoge lo que le ha dicho la naviera y si le han ofrecido alternativa, y abre un caso urgente con `crear-ticket-booking`.

## Qué no hace

- No acepta en nombre del cliente la alternativa de la naviera.
- No promete compensaciones ni su importe.

## Cuándo pasa a una persona

- Siempre y con prioridad: el cliente se queda sin viajar y puede haber compensación.

## Cómo lo puede pedir el cliente

- «Nos dicen que el barco está lleno y no podemos subir, ¡tenemos billete!»
- «no hay sitio pal coche dicen, y ahora q??»
- «Les informo de que la naviera nos ha denegado el embarque por exceso de reservas. Solicito su intervención.»
- «Nos ofrecen ir en el barco de mañana, ¿lo aceptamos? ¿Quién paga el hotel de esta noche?»
