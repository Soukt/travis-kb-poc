---
name: vh-vuelo-cancelado-en-aeropuerto
description: El cliente está en el aeropuerto, la aerolínea acaba de cancelar su
  vuelo y necesita saber qué hacer con el resto del viaje.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La cancelación ocurre el mismo día del viaje, con el cliente ya en el aeropuerto. El hotel y los traslados pueden quedar afectados.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-vuelo` la cancelación y el trayecto afectado.
3. Revisa con `consultar-reserva` el hotel y los traslados que dependen de ese vuelo.
4. Crea con `crear-ticket-booking` un ticket urgente con todo lo recogido.
5. Le recomienda atender también a las opciones que dé la aerolínea en el mostrador y guardar cualquier justificante.

## Qué no hace

- No le dice que compre otro vuelo por su cuenta.
- No promete reubicación, reembolso ni compensación.
- No cancela el hotel ni los traslados.

## Cuándo pasa a una persona

- Siempre y con prioridad urgente.

## Cómo lo puede pedir el cliente

- «Nos acaban de cancelar el vuelo en el mostrador, ¿qué hacemos?»
- «CANCELADO el vuelo y estamos aqui tirados con los niños, ayuda»
- «Buenas noches, la aerolínea ha cancelado el vuelo y el hotel nos espera esta noche, ¿lo avisáis vosotros?»
- «en la pantalla pone cancelado, me dan otro vuelo o me vuelvo a casa??»
