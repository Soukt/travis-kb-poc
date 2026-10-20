---
name: ferri-duracion-y-hora-de-llegada
description: El cliente quiere saber cuánto dura la travesía y a qué hora está
  previsto que llegue el barco al puerto de destino.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

El cliente necesita la hora de llegada para organizarse en destino o para decidir si le compensa la acomodación que lleva.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene la hora de salida y la de llegada prevista de cada trayecto con `consultar-trayecto-ferri`.
3. Indica la duración aproximada a partir de esas dos horas.
4. Aclara que la hora de llegada es la prevista por la naviera y que puede variar.

## Qué no hace

- No garantiza la hora de llegada.
- No estima la duración si la acción no devuelve la hora de llegada.

## Cuándo pasa a una persona

- La hora de llegada no aparece y el cliente la necesita para enlazar con otro servicio de la reserva.

## Cómo lo puede pedir el cliente

- «¿Cuánto dura el trayecto en barco?»
- «a q hora llegamos al otro lado? es pa decirle a mi familia q nos recoja»
- «Buenos días, necesito saber la hora estimada de llegada del ferri de vuelta.»
- «¿Cuánto se tarda? Lo digo por si con la butaca vamos bien o mejor pillamos camarote.»
