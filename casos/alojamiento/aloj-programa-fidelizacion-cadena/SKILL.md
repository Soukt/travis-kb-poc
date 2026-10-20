---
name: aloj-programa-fidelizacion-cadena
description: El cliente quiere saber si su estancia reservada con la agencia
  suma puntos o ventajas en el programa de fidelización de la cadena hotelera.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pregunta de forma general por programas de puntos o tarjetas de socio del alojamiento. No necesita datos de su reserva.

## Qué hace el agente

1. Identifica que la pregunta es general y no requiere consultar la reserva.
2. Busca con `buscar-informacion` la respuesta aprobada sobre programas de fidelización de alojamientos.
3. Responde con esa respuesta o, si no la hay, indica que no dispone de esa información sin suponer nada.

## Qué no hace

- No afirma que se sumen o no puntos sin respuesta aprobada.
- No pide el número de socio del cliente.
- No se compromete a que el alojamiento aplique ventajas de socio.

## Cuándo pasa a una persona

- El cliente reclama ventajas de socio que el alojamiento no le ha aplicado.

## Cómo lo puede pedir el cliente

- «¿Las reservas hechas con ustedes acumulan puntos en el programa de la cadena?»
- «soy socio del hotel, me cuentan los puntos?»
- «Hola, tengo tarjeta de cliente de esa cadena, me dan las ventajas igual? y el parking me sale gratis entonces?»
- «Desearía saber si mi estancia computa en el programa de fidelización del establecimiento.»
