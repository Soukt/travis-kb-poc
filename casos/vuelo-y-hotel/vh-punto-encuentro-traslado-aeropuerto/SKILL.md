---
name: vh-punto-encuentro-traslado-aeropuerto
description: El cliente pregunta dónde le espera el conductor del traslado al
  llegar al aeropuerto y cómo lo reconocerá.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

El cliente tiene traslado de llegada y quiere saber qué hacer al salir de la zona de equipajes. Suele preguntarlo poco antes de viajar o ya en el aeropuerto.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-traslados` el punto de encuentro y las instrucciones del proveedor.
3. Revisa con `consultar-bonos` que el bono del traslado está disponible para presentarlo.
4. Le explica dónde dirigirse y le recomienda tener el bono a mano al aterrizar.

## Qué no hace

- No inventa puntos de encuentro.
- No da teléfonos ni contactos que no devuelva la acción.

## Cuándo pasa a una persona

- Si el bono del traslado no está disponible y el viaje es inminente.

## Cómo lo puede pedir el cliente

- «¿Dónde nos espera el del traslado al salir?»
- «como se q es nuestro conductor? llevara un cartel?»
- «Buenas, ¿tengo que ir a algún mostrador para el traslado?»
- «al salir de la zona de maletas q hago para encontrar el traslado»
