---
name: doc-titular-no-viaja-otros-alojan
description: El cliente es el titular de la reserva pero no viaja y pregunta si
  los demás viajeros pueden presentar el bono.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva está a nombre de quien la pagó, por ejemplo un regalo, y quienes llegan al alojamiento son otras personas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué viajeros figuran en la reserva.
3. Busca con `buscar-informacion` qué tiene aprobado la agencia sobre reservas en las que el titular no viaja.
4. Prepara una respuesta con lo que deben llevar los viajeros para que booking la revise antes de enviarla.

## Qué no hace

- No cambia el titular ni los nombres de los viajeros.
- No garantiza que el alojamiento acepte la entrada sin el titular.

## Cuándo pasa a una persona

- Los viajeros que van a alojarse no figuran en la reserva y hay que cambiar nombres.
- La información aprobada indica que el alojamiento exige la presencia del titular.

## Cómo lo puede pedir el cliente

- «La reserva está a mi nombre pero van mis padres, ¿hay algún problema?»
- «es un regalo para mis amigos, pueden entrar ellos con el bono sin mi?»
- «Les consulto si los ocupantes pueden registrarse sin la presencia del titular.»
- «yo no voy al final, van mi hermana y su novio, ¿el bono les vale?»
