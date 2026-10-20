---
name: aloj-entrada-anticipada-peticion
description: El cliente llega antes de la hora de entrada y pide que le dejen
  ocupar la habitación antes de lo establecido.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente solicita una entrada anticipada. Depende siempre de la disponibilidad del alojamiento, así que el agente prepara la petición y booking la revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba la fecha de llegada y el tipo de habitación con `consultar-reserva`.
3. Consulta la hora de entrada oficial con `consultar-horarios-hotel`.
4. Prepara la petición de entrada anticipada en `crear-ticket-booking` para que booking la revise y la traslade al alojamiento.
5. Explica al cliente que es una petición sujeta a disponibilidad, no una garantía.

## Qué no hace

- No garantiza la entrada anticipada.
- No acepta en nombre del cliente ningún suplemento.

## Cuándo pasa a una persona

- El alojamiento solo la concede con un coste adicional.
- El cliente quiere pagar una noche extra para asegurarse la habitación al llegar.

## Cómo lo puede pedir el cliente

- «Llegamos a primera hora de la mañana, ¿sería posible entrar antes en la habitación?»
- «podemos hacer el check in antes? llegamos muy pronto»
- «Hola, venimos en el ferri de la mañana y no nos dan habitación hasta la tarde, se puede pedir antes? y si no, donde dejamos las maletas»
- «Solicito, si es posible, la entrada anticipada en el alojamiento.»
