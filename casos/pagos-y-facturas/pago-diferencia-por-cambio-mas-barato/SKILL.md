---
name: pago-diferencia-por-cambio-mas-barato
description: El cliente cambió su reserva a una opción más barata y pide que le
  devuelvan la diferencia.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras cambiar fechas, habitación o servicios por una opción de menor precio, el cliente no ve reflejada la diferencia a su favor.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el cambio realizado.
3. Consulta con `consultar-pagos` lo pagado y si consta alguna devolución.
4. Pasa la petición con `crear-ticket-booking`.

## Qué no hace

- No calcula la diferencia por su cuenta.
- No promete devolverla.

## Cuándo pasa a una persona

- Siempre: es una devolución.

## Cómo lo puede pedir el cliente

- «Tras cambiar a una habitación de categoría inferior, ¿se me reembolsará la diferencia?»
- «cambie a un hotel mas barato y no me habeis devuelto nada»
- «Hola, quité la media pensión, ¿me devolvéis lo que cuesta?»
- «la reserva nueva vale menos que la vieja, la diferencia pa cuando»
