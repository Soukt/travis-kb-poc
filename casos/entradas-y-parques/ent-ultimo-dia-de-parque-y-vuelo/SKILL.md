---
name: ent-ultimo-dia-de-parque-y-vuelo
description: El cliente quiere aprovechar el último día en el parque y pregunta
  por la salida del hotel, el equipaje, el traslado y su vuelo.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-horarios-hotel
    - consultar-servicios-alojamiento
    - consultar-vuelo
    - consultar-traslados
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el último día del viaje combina parque y vuelo de vuelta. El cliente necesita cuadrar horarios.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-horarios-hotel` el horario de salida del alojamiento.
3. Revisa con `consultar-servicios-alojamiento` si el hotel guarda el equipaje tras la salida.
4. Consulta con `consultar-vuelo` el horario del vuelo de vuelta y con `consultar-traslados` el traslado al aeropuerto.
5. Le ayuda a organizar el día con esos horarios.

## Qué no hace

- No cambia el vuelo ni el traslado.
- No asegura que el tiempo en el parque sea suficiente.

## Cuándo pasa a una persona

- El cliente quiere retrasar la salida del hotel o cambiar el traslado.

## Cómo lo puede pedir el cliente

- «El último día queremos ir al parque. ¿A qué hora hay que dejar la habitación y a qué hora sale el traslado?»
- «nos da tiempo a ir al parque el dia del vuelo?»
- «Buenas tardes, ¿podemos dejar las maletas en el hotel después de la salida e ir al parque?»
- «el ultimo dia el vuelo es por la noche, como lo hacemos con las maletas y el bus al aeropuerto?»
