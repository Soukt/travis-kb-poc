---
name: ent-cambiar-titular-de-las-entradas
description: El cliente no podrá ir al parque y quiere que otra persona use sus
  entradas en su lugar.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente quiere ceder sus entradas a un familiar o amigo. Implica datos de otra persona y depende de si las entradas son nominativas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular de la reserva.
2. Revisa con `consultar-condiciones-entrada` si las entradas son nominativas y si admiten cambio de nombre.
3. Recoge con `pedir-datos-cliente` los datos de la persona que usará las entradas.
4. Abre con `crear-ticket-booking` la solicitud de cambio con los datos recogidos para que booking la gestione con el proveedor.

## Qué no hace

- No confirma el cambio de titular sin la validación de booking.
- No informa por su cuenta de posibles costes del cambio.

## Cuándo pasa a una persona

- Siempre: la cesión implica datos de otra persona y puede tener costes.

## Cómo lo puede pedir el cliente

- «Al final no puedo ir. ¿Puede usar las entradas mi hermana?»
- «kiero pasarle las entradas a un amigo, se puede?»
- «Por motivos personales no asistiré. Solicito que las entradas se pongan a nombre de otra persona.»
- «Mi suegra va en mi lugar con los niños, tengo que cambiar algo en las entradas o vale asi?»
