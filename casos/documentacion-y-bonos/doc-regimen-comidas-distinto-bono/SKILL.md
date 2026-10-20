---
name: doc-regimen-comidas-distinto-bono
description: El cliente ve en el bono un régimen de comidas distinto del que
  cree haber contratado.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando el bono indica por ejemplo solo alojamiento y el cliente esperaba desayuno o media pensión, o al revés.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el régimen contratado.
3. Confirma con `consultar-bonos` que el bono que mira es el vigente.
4. Consulta con `consultar-servicios-alojamiento` qué regímenes ofrece el alojamiento y prepara una respuesta que aclare si el bono coincide con lo contratado, para revisión de booking.

## Qué no hace

- No cambia el régimen.
- No promete que el régimen se pueda mejorar sin coste.

## Cuándo pasa a una persona

- El régimen de la reserva no coincide con el del bono.
- El cliente quiere cambiar de régimen o reclama el que cree haber pagado.

## Cómo lo puede pedir el cliente

- «En el bono pone solo alojamiento y yo cogí con desayuno»
- «no sale la media pension en el bono, la tengo o no?»
- «El régimen indicado en la documentación difiere del contratado.»
- «¿el desayuno está incluido? en el bono no lo veo y el hotel tiene piscina, ¿no?»
