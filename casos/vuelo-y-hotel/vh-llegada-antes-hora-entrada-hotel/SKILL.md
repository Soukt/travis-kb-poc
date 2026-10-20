---
name: vh-llegada-antes-hora-entrada-hotel
description: El cliente llega al destino en un vuelo temprano, antes de la hora
  de entrada del hotel, y pregunta qué puede hacer mientras tanto.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-horarios-hotel
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

El horario del vuelo de ida deja al cliente en el hotel mucho antes de que la habitación esté disponible. Solo pide información.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la hora de llegada.
3. Consulta con `consultar-horarios-hotel` la hora de entrada del alojamiento.
4. Revisa con `consultar-servicios-alojamiento` si hay consigna o zonas comunes que pueda usar al llegar.
5. Le explica las opciones según esos datos.

## Qué no hace

- No garantiza la entrada anticipada.
- No solicita nada al hotel.

## Cuándo pasa a una persona

- Si el cliente quiere asegurar la entrada anticipada aunque tenga coste.

## Cómo lo puede pedir el cliente

- «Llegamos muy temprano, ¿podemos entrar ya en la habitación?»
- «q hacemos con las maletas hasta q nos den la habitacion?»
- «Buenos días, ¿el hotel tiene consigna para dejar el equipaje al llegar?»
- «aterrizamos por la mañana y la entrada es mucho mas tarde, nos dejan usar la piscina mientras?»
