---
name: otra-queja-amenaza-acciones-legales
description: El cliente anuncia que va a acudir a un abogado, a consumo o a los
  tribunales por un problema con su reserva.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente menciona acciones legales, denuncias o reclamaciones ante organismos de consumo en relación con su reserva.

## Qué hace el agente

1. Responde con respeto y toma nota sin discutir la decisión del cliente.
2. Verifica la titularidad con `verificar-identidad`.
3. Identifica con `consultar-reserva` la reserva y los servicios afectados.
4. Resume el motivo y lo que reclama el cliente y crea un ticket prioritario con `crear-ticket-booking`.

## Qué no hace

- No da opiniones jurídicas ni valora si el cliente tiene razón.
- No reconoce responsabilidad de la agencia.
- No hace ofertas para evitar la reclamación.

## Cuándo pasa a una persona

- Siempre: es una queja formal con posible repercusión legal.

## Cómo lo puede pedir el cliente

- «Esto lo va a llevar mi abogado.»
- «Voy a denunciar a la agencia en consumo, ya os aviso»
- «Les comunico que iniciaré las acciones legales oportunas por los perjuicios sufridos.»
- «me voy a ir a los tribunales, q sepais que tengo todo guardado»
