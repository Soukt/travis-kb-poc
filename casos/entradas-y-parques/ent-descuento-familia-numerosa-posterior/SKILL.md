---
name: ent-descuento-familia-numerosa-posterior
description: El cliente pide que le apliquen un descuento de familia numerosa u
  otra condición especial a unas entradas ya compradas.
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

Aplica cuando el cliente no acreditó una condición con descuento al comprar y la reclama después. Es una excepción con dinero de por medio.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` las entradas y los viajeros.
3. Revisa con `consultar-pagos` lo que ha pagado el cliente.
4. Recoge el motivo y la condición que alega y abre con `crear-ticket-booking` la solicitud para booking.

## Qué no hace

- No aplica descuentos ni promete devoluciones.
- No pide ni guarda copias de documentos acreditativos por el chat.

## Cuándo pasa a una persona

- Siempre: es una excepción con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Somos familia numerosa y no lo indiqué al comprar. ¿Me podéis aplicar el descuento?»
- «tengo carnet de familia numerosa, me devolveis algo?»
- «Solicito que se aplique a mi reserva el descuento correspondiente a familia numerosa.»
- «en la taquilla hay descuento para familias numerosas y vosotros no me lo habeis hecho, por que?»
