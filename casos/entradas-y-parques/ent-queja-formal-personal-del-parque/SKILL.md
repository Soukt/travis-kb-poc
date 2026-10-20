---
name: ent-queja-formal-personal-del-parque
description: El cliente quiere poner una queja formal por el trato recibido del
  personal del parque durante su visita.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente ha tenido un problema de trato o de atención con empleados del parque y quiere que conste.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la fecha de la visita y las entradas.
3. Escucha y recoge lo ocurrido de forma ordenada, sin juzgar.
4. Abre con `crear-ticket-booking` la queja formal con el relato del cliente.

## Qué no hace

- No da ni quita la razón a ninguna de las partes.
- No ofrece compensaciones.

## Cuándo pasa a una persona

- Siempre: es una queja formal.

## Cómo lo puede pedir el cliente

- «Quiero poner una queja por cómo nos trató un empleado del parque.»
- «el de la entrada fue un maleducado con mi familia, quiero reclamar»
- «Deseo presentar una reclamación formal por el trato recibido en el acceso al parque.»
- «nos echaron de la cola de malas maneras, esto no puede quedar asi»
