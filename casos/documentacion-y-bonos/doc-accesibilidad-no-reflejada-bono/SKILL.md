---
name: doc-accesibilidad-no-reflejada-bono
description: El cliente necesita una habitación adaptada o una asistencia
  especial y no la ve reflejada en el bono.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Viajeros con movilidad reducida u otras necesidades que requieren adaptaciones y no las ven confirmadas en la documentación.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` si la necesidad se indicó al reservar.
3. Consulta con `consultar-servicios-alojamiento` las opciones de accesibilidad del alojamiento.
4. Abre `crear-ticket-booking` con la necesidad concreta, la fecha de llegada y lo que ofrece el alojamiento, para que booking lo confirme.

## Qué no hace

- No garantiza una habitación adaptada sin confirmación del proveedor.
- No pide información médica.

## Cuándo pasa a una persona

- Siempre: es una necesidad que hay que confirmar con el alojamiento.

## Cómo lo puede pedir el cliente

- «Necesito habitación adaptada para silla de ruedas y en el bono no pone nada»
- «mi madre va en silla, el hotel lo sabe?»
- «Les ruego confirmen que la habitación asignada está adaptada a movilidad reducida.»
- «pedí ducha sin plato por accesibilidad, ¿está confirmado? no lo veo en el bono»
