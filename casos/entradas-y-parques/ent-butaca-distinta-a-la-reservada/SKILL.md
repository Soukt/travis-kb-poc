---
name: ent-butaca-distinta-a-la-reservada
description: El cliente ve que la zona o las butacas de sus entradas no son las
  que eligió al reservar el espectáculo.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando hay una discrepancia entre lo contratado y lo emitido en el bono, como una zona peor o asientos separados. Puede implicar un ajuste económico.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la zona o categoría contratada.
3. Revisa con `consultar-bonos` la ubicación que figura en el bono.
4. Abre con `crear-ticket-booking` la incidencia con la diferencia detectada y lo que pide el cliente.

## Qué no hace

- No cambia butacas ni ofrece compensaciones.
- No da la razón al cliente sin comparar lo contratado con lo emitido.

## Cuándo pasa a una persona

- Siempre: requiere gestión con el proveedor y puede haber dinero de por medio.

## Cómo lo puede pedir el cliente

- «Pagué zona preferente y en las entradas pone otra zona.»
- «nos habeis puesto separados y pedimos juntos!»
- «Buenas tardes, las butacas asignadas no corresponden a la categoría que reservé.»
- «las entradas son de la ultima fila y yo pague las de delante, quiero una solucion»
