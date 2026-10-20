---
name: camb-cambiar-fecha-trayecto-ferri
description: El cliente quiere cambiar la fecha o la salida de su trayecto en
  ferri, de ida o de vuelta.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente tiene un trayecto en ferri reservado y necesita viajar otro día o en otra salida. El cambio depende de la naviera, de la tarifa y de la disponibilidad, incluido el espacio para el vehículo si lo lleva.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los trayectos incluidos.
3. Consulta con `consultar-trayecto-ferri` la salida, el vehículo y la acomodación actuales.
4. Revisa con `consultar-politica-cancelacion` si la tarifa admite cambios y con qué gastos.
5. Pregunta qué trayecto cambiar y la nueva fecha o salida preferida, y crea la solicitud con `crear-ticket-booking`.

## Qué no hace

- No confirma plaza en otra salida.
- No asegura que se mantengan la acomodación o el espacio para el vehículo.

## Cuándo pasa a una persona

- Siempre: el cambio lo gestiona booking con la naviera.

## Cómo lo puede pedir el cliente

- «Hola, necesito cambiar el ferri de vuelta a un día después, ¿se puede?»
- «¿Puedo coger el barco de la tarde en vez del de la mañana?»
- «kiero cambiar la fecha del ferry de ida, vamos con el coche»
- «Buenas, ¿qué tendría que hacer para modificar la fecha del trayecto en barco? ¿Y la hora de embarque cuál es?»
