---
name: camb-reembolso-a-otra-tarjeta
description: El cliente pide que el reembolso se haga en una tarjeta o cuenta
  distinta de la que usó para pagar.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La tarjeta original está cancelada o caducada, o el cliente prefiere otro medio. Cambiar el destino de una devolución es una gestión sensible.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-pagos` el medio de pago original, sin mostrar sus datos completos.
3. Le explica que el cambio de destino del reembolso debe validarlo booking y le pide que no comparta datos bancarios por el chat.
4. Pasa la petición a booking con `crear-ticket-booking`.

## Qué no hace

- No recoge números de tarjeta ni de cuenta.
- No promete que se pueda reembolsar en otro medio.

## Cuándo pasa a una persona

- Siempre: implica dinero y datos bancarios.

## Cómo lo puede pedir el cliente

- «La tarjeta con la que pagué ya no existe, ¿dónde me devolvéis el dinero?»
- «¿Me podéis hacer la devolución a otra cuenta?»
- «el reembolso a otra tarjeta porfa q esa la cancele»
- «Solicito que el reembolso se efectúe en un medio de pago diferente al original.»
