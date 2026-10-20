---
name: viaj-sustituir-viajero-por-otro
description: El cliente quiere que otra persona viaje en lugar de uno de los
  viajeros que figuran en la reserva.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero no puede ir y el cliente quiere ceder su plaza a otra persona. Cada proveedor tiene sus condiciones y puede haber gastos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué viajero se quiere sustituir y en qué servicios figura.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio, sin comprometer importes.
4. Pide con `pedir-datos-cliente` los datos del nuevo viajero.
5. Abre con `crear-ticket-booking` la petición con todo lo recogido y avisa al cliente de que booking confirmará si es posible y con qué coste.

## Qué no hace

- No confirma la sustitución.
- No informa de importes por su cuenta.
- No retira al viajero original antes de que booking lo apruebe.

## Cuándo pasa a una persona

- Siempre: la sustitución depende del proveedor y puede tener coste.

## Cómo lo puede pedir el cliente

- «Mi hermano no puede venir al viaje, ¿puede ir mi cuñada en su lugar?»
- «Buenos días, desearía cambiar a una de las personas de la reserva por otra. ¿Qué necesitan?»
- «una amiga se a puesto mala, puedo poner a otra persona en su sitio o como va eso»
- «Quiero cambiar un viajero por otro y, si cuesta dinero, saber cuánto antes de decidir.»
