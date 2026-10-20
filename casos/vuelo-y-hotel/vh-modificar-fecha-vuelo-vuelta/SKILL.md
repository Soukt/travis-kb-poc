---
name: vh-modificar-fecha-vuelo-vuelta
description: El cliente quiere cambiar por decisión propia la fecha o la hora de
  su vuelo de vuelta antes de viajar.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

No hay ningún cambio de la aerolínea: es el cliente quien quiere volver otro día o a otra hora. Puede afectar también a las noches de hotel.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el vuelo de vuelta actual.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio que aplican.
4. Crea con `crear-ticket-booking` un ticket con la fecha u hora deseada y si quiere ajustar también el hotel.

## Qué no hace

- No cambia el vuelo.
- No da presupuesto de la diferencia.
- No modifica las noches de hotel si el cliente no lo pide.

## Cuándo pasa a una persona

- Siempre, porque el cambio puede tener coste.

## Cómo lo puede pedir el cliente

- «Quiero volver un día más tarde, ¿se puede cambiar el vuelo?»
- «podemos adelantar la vuelta? nos ha surgido algo»
- «Buenas, ¿cuánto costaría cambiar la hora del vuelo de regreso?»
- «me gustaria volver por la tarde en vez de por la mañana, se puede?»
