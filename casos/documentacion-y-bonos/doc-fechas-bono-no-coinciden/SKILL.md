---
name: doc-fechas-bono-no-coinciden
description: El cliente ve que las fechas del bono no coinciden con las que él reservó.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la fecha de entrada, de salida o de un servicio que figura en el bono es distinta de la que el cliente cree haber contratado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` las fechas registradas en la reserva.
3. Confirma con `consultar-bonos` que el bono que mira el cliente es el vigente.
4. Abre `crear-ticket-booking` indicando si la discrepancia está entre el bono y la reserva o entre la reserva y lo que el cliente dice haber pedido.

## Qué no hace

- No cambia las fechas.
- No asegura que haya disponibilidad para las fechas que pide el cliente.
- No habla de gastos de cambio sin que booking lo revise.

## Cuándo pasa a una persona

- Siempre: corregir fechas puede implicar cambios con el proveedor y diferencias de precio.

## Cómo lo puede pedir el cliente

- «Las fechas del bono no son las que yo reservé»
- «el bono pone un dia mas tarde!! yo reserve otra fecha»
- «Les comunico que las fechas indicadas en el bono no se corresponden con las solicitadas.»
- «me sale salida un día antes de lo que quería, ¿me equivoqué yo o vosotros?»
