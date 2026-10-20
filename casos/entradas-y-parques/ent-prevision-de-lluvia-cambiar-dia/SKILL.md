---
name: ent-prevision-de-lluvia-cambiar-dia
description: El cliente ve que hará mal tiempo el día de su visita y pregunta si
  puede cambiar de día o qué pasa si llueve.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

Aplica antes de la visita, por una previsión meteorológica. El parque puede seguir abierto aunque llueva.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` la fecha de las entradas.
3. Revisa con `consultar-condiciones-entrada` qué prevé el parque en caso de mal tiempo.
4. Consulta con `consultar-politica-cancelacion` si se puede cambiar la fecha y con qué gastos.
5. Prepara la respuesta con las opciones para que booking la revise antes de enviarla.

## Qué no hace

- No predice el tiempo ni garantiza el cierre del parque.
- No cambia la fecha por su cuenta.

## Cuándo pasa a una persona

- El cliente pide cambiar de fecha o una devolución por el mal tiempo.

## Cómo lo puede pedir el cliente

- «Dan lluvia para el día que vamos al parque. ¿Podemos cambiar de día?»
- «si llueve cierran el parque? nos devolveis el dinero?»
- «Buenos días, ante la previsión de tormenta, ¿qué opciones tengo con las entradas?»
- «va a hacer un tiempo horrible, merece la pena ir o cambiamos?»
