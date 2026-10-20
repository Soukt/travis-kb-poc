---
name: vh-volver-antes-por-emergencia-familiar
description: El cliente está ya en destino y necesita volver antes de lo
  previsto por una emergencia familiar o de salud.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El viaje está en curso y surge un imprevisto grave que obliga a regresar. Afecta al vuelo de vuelta, al hotel y al traslado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` las noches y los servicios pendientes.
3. Obtiene con `consultar-vuelo` el vuelo de vuelta actual.
4. Crea con `crear-ticket-booking` un ticket urgente que incluya el vuelo, el hotel y el traslado afectados.
5. Responde con empatía y le confirma que booking se pondrá en contacto con prioridad.

## Qué no hace

- No pide detalles de la emergencia más allá de lo imprescindible.
- No promete devolver las noches no disfrutadas.
- No compra un vuelo nuevo.

## Cuándo pasa a una persona

- Siempre y con prioridad urgente, porque implica cambios, costes y posibles excepciones.

## Cómo lo puede pedir el cliente

- «Tenemos que volver ya, ha pasado algo en casa»
- «urgente, necesito volver antes, un familiar esta ingresado»
- «Buenas, por un problema familiar tenemos que adelantar la vuelta, ¿qué opciones hay?»
- «nos volvemos mañana como sea, que pasa con el hotel?»
