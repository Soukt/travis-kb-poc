---
name: doc-acomodacion-ferri-incorrecta-bono
description: El cliente ve en el bono del ferri una acomodación distinta de la
  que reservó, por ejemplo butaca en lugar de camarote.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la acomodación del bono (butaca, camarote, tipo de camarote) no es la contratada.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-trayecto-ferri` la acomodación registrada.
3. Compara con `consultar-reserva` lo que se contrató.
4. Abre `crear-ticket-booking` con la acomodación del bono, la contratada y la fecha del trayecto.

## Qué no hace

- No cambia la acomodación.
- No promete una mejora a bordo.

## Cuándo pasa a una persona

- Siempre: la corrección depende de la naviera y puede tener impacto económico.

## Cómo lo puede pedir el cliente

- «Reservé camarote y en el bono pone butaca»
- «no me sale el camarote en el bono del barco»
- «La acomodación indicada en el bono del trayecto no se corresponde con la contratada.»
- «pagué camarote con ventana y pone interior, ¿lo cambiáis?»
