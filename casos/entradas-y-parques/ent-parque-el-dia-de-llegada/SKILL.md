---
name: ent-parque-el-dia-de-llegada
description: El cliente quiere ir al parque el mismo día que llega, antes de
  tener la habitación, y pregunta qué hacer con el equipaje.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - consultar-servicios-alojamiento
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica a paquetes de hotel y entradas en los que el primer día de parque coincide con la llegada. El cliente quiere aprovechar el día.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` si tiene entrada para el día de llegada.
3. Revisa con `consultar-horarios-hotel` el horario de entrada al alojamiento.
4. Consulta con `consultar-servicios-alojamiento` si el hotel guarda el equipaje antes de la entrada.
5. Revisa con `consultar-condiciones-entrada` el horario del parque ese día y le propone cómo organizarse.

## Qué no hace

- No garantiza una entrada anticipada a la habitación.
- No cambia la fecha de las entradas.

## Cuándo pasa a una persona

- El cliente pide entrar antes a la habitación como excepción o con coste.

## Cómo lo puede pedir el cliente

- «Llegamos por la mañana. ¿Podemos dejar las maletas en el hotel e ir al parque?»
- «el primer dia vamos directos al parque, donde dejamos el equipaje?»
- «Buenos días, ¿podemos usar la entrada del parque el día de llegada aunque aún no tengamos la habitación?»
- «a q hora nos dan la habitacion? queremos ir al parque antes»
