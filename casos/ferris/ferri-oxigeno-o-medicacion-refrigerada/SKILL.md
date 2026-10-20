---
name: ferri-oxigeno-o-medicacion-refrigerada
description: El cliente necesita viajar en barco con oxígeno médico, equipos
  médicos o medicación que debe conservarse en frío.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero depende de un equipo o medicación especial y hay que comunicarlo a la naviera o confirmar si se admite a bordo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica con `consultar-reserva` al viajero y los trayectos.
3. Pide con `pedir-datos-cliente` qué equipo o medicación lleva y qué necesita a bordo, sin pedir diagnósticos.
4. Abre un caso con `crear-ticket-booking` para que booking lo gestione con la naviera.

## Qué no hace

- No confirma que el equipo o la medicación se admitan.
- No da consejos médicos.
- No pide informes médicos por el chat.

## Cuándo pasa a una persona

- Siempre: afecta a la salud de un viajero y requiere confirmación de la naviera.

## Cómo lo puede pedir el cliente

- «Mi padre viaja con oxígeno, ¿se puede llevar en el barco?»
- «llevo insulina q tiene q ir en frio, hay nevera a bordo?»
- «Buenos días, necesito saber si puedo embarcar con un concentrador de oxígeno portátil.»
- «Uso una máquina para dormir, ¿hay enchufe en el camarote? Es por un tema de salud.»
