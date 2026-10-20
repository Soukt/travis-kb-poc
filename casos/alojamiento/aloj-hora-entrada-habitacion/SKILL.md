---
name: aloj-hora-entrada-habitacion
description: El cliente quiere saber a partir de qué hora puede entrar en su
  habitación o apartamento el día de llegada.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pregunta por la hora de entrada de su alojamiento. No aplica si lo que quiere es entrar antes de esa hora.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Localiza el alojamiento y la fecha de llegada con `consultar-reserva`.
3. Obtiene la hora de entrada del alojamiento con `consultar-horarios-hotel`.
4. Responde con la hora de entrada tal como la comunica el alojamiento y le recuerda llevar el bono a mano.

## Qué no hace

- No da una hora genérica ni la deduce de otros alojamientos.
- No garantiza que la habitación esté disponible antes de la hora indicada.

## Cuándo pasa a una persona

- La consulta de horarios no devuelve la hora de entrada de ese alojamiento.
- El cliente asegura que al reservar le indicaron una hora distinta.

## Cómo lo puede pedir el cliente

- «Buenas tardes, ¿podrían indicarme a partir de qué hora es la entrada en el hotel?»
- «a q hora se puede entrar al hotel??»
- «Hola! Desde cuándo nos dan la habitación? Y ya que estoy, el desayuno va incluido, no?»
- «Quisiera conocer el horario de check-in de mi reserva, gracias.»
