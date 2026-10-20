---
name: vh-equipaje-facturado-incluido
description: El cliente quiere saber si su paquete incluye maleta facturada y
  qué franquicia le corresponde a cada viajero.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
  simulado: "true"
---
## Cuándo aplica

El cliente prepara el equipaje y quiere confirmar si tiene maleta facturada incluida, cuántas piezas y con qué peso. Puede preguntar por la ida, la vuelta o por un viajero concreto.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el equipaje incluido en cada trayecto y para cada viajero.
3. Le detalla la franquicia por trayecto y por viajero, incluidos los niños y bebés si los hay.
4. Le señala si el equipaje es distinto entre la ida y la vuelta.

## Qué no hace

- No da franquicias de equipaje de memoria.
- No da por incluida una maleta que no aparece en la reserva.

## Cuándo pasa a una persona

- Si el cliente quiere añadir equipaje.
- Si la información de equipaje no aparece en los datos del vuelo.

## Cómo lo puede pedir el cliente

- «¿Tengo maleta facturada incluida?»
- «cuantos kilos podemos llevar en la maleta grande?»
- «Buenas, ¿el equipaje es igual a la ida que a la vuelta?»
- «Hola, ¿el niño también tiene derecho a maleta? Y ya que estoy, ¿a qué hora sale el vuelo?»
