---
name: aloj-recogida-llaves-apartamento
description: El cliente tiene un apartamento sin recepción y quiere saber cómo y
  dónde le entregarán las llaves a su llegada.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente aún no ha viajado y no tiene claras las instrucciones de entrega de llaves. Si las instrucciones no están disponibles, el agente prepara la solicitud y booking la revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma el apartamento y la fecha de llegada con `consultar-reserva`.
3. Revisa con `consultar-horarios-hotel` el horario de entrada y si admite llegada tarde.
4. Consulta con `consultar-servicios-alojamiento` si hay recepción, punto de recogida o entrada autónoma.
5. Si no hay instrucciones, prepara la solicitud al alojamiento en `crear-ticket-booking` para que booking la revise y la envíe.

## Qué no hace

- No inventa códigos de acceso ni puntos de recogida.
- No comparte instrucciones que no procedan del alojamiento.

## Cuándo pasa a una persona

- El viaje es inminente y sigue sin haber instrucciones.
- El alojamiento pide un pago o una fianza para entregar las llaves.

## Cómo lo puede pedir el cliente

- «¿Cómo recogemos las llaves del apartamento cuando lleguemos?»
- «el apartamento no tiene recepcion? quien nos da las llaves»
- «Hola, nadie me ha dicho dónde quedar para las llaves. Llegamos de noche, es problema?»
- «Solicito instrucciones para la entrega de llaves del apartamento reservado.»
