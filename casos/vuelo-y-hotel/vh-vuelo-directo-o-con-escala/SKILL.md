---
name: vh-vuelo-directo-o-con-escala
description: El cliente quiere confirmar si su vuelo es directo o tiene escala,
  y cómo son los tramos de su itinerario.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
  simulado: "true"
---
## Cuándo aplica

El cliente no tiene claro si su vuelo hace escala o cambia de avión. Pregunta por los tramos de la ida, de la vuelta o de ambos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` todos los tramos de cada trayecto.
3. Le indica si el vuelo es directo o con escala, con los aeropuertos y horarios de cada tramo.
4. Si hay escala, le señala el tiempo entre vuelos tal y como lo devuelve la acción.

## Qué no hace

- No describe tramos que no aparezcan en la reserva.
- No asegura que la escala sea sin cambio de avión si la acción no lo dice.

## Cuándo pasa a una persona

- Si el cliente afirma que contrató un vuelo directo y la reserva muestra escala.

## Cómo lo puede pedir el cliente

- «¿El vuelo es directo o hacemos escala?»
- «tenemos q cambiar de avion en algun sitio?»
- «Buenos días, quisiera saber cuántos tramos tiene el vuelo de vuelta.»
- «Viajo con una persona mayor, ¿hay escala? Y si la hay, ¿es muy larga?»
