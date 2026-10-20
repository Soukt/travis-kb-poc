---
name: pago-cambiar-tarjeta-para-proximos-plazos
description: El cliente quiere que los próximos plazos se le cobren en una
  tarjeta distinta de la que usó al reservar.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

No ha fallado ningún cobro: el cliente prefiere cambiar la tarjeta para los cobros futuros, por ejemplo porque va a dar de baja la actual.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` qué plazos quedan por cobrar.
3. Busca con `buscar-informacion` cómo se cambia la tarjeta de cobro desde la zona de cliente.
4. Le explica los pasos y le recuerda la fecha del próximo cobro para que haga el cambio antes.

## Qué no hace

- No recoge los datos de la nueva tarjeta por el chat.
- No cambia el medio de pago por su cuenta.

## Cuándo pasa a una persona

- La zona de cliente no permite cambiar la tarjeta.
- El próximo cobro es inminente y el cliente no puede hacer el cambio a tiempo.

## Cómo lo puede pedir el cliente

- «Quisiera que los próximos cargos se realicen en otra tarjeta.»
- «como cambio la tarjeta para los plazos que quedan?»
- «Hola, voy a dar de baja la tarjeta con la que pagué, ¿cómo pongo otra?»
- «kiero q me cobreis en la tarjeta de la otra cuenta»
