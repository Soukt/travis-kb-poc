---
name: ent-precio-mas-barato-en-taquilla
description: El cliente ha visto sus entradas más baratas en la taquilla o en
  otra web y reclama la diferencia.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente se siente perjudicado por el precio pagado. Es una reclamación económica.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` lo que incluye su reserva.
3. Revisa con `consultar-pagos` lo que ha pagado.
4. Recoge la queja y abre con `crear-ticket-booking` la reclamación.

## Qué no hace

- No compara precios ni justifica diferencias.
- No promete devolución.

## Cuándo pasa a una persona

- Siempre: es una reclamación con dinero de por medio.

## Cómo lo puede pedir el cliente

- «En la taquilla del parque las entradas cuestan menos de lo que pagué.»
- «lo he visto mas barato en otra pagina, me devolveis la diferencia?»
- «Presento una queja por el precio de las entradas, superior al de venta directa.»
- «me siento estafado con el precio, explicadme por que»
