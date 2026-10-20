---
name: ferri-consulta-de-quien-no-es-titular
description: El cliente que escribe no es el titular de la reserva, por ejemplo
  un acompañante, y pide datos o cambios del trayecto en barco.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La verificación no confirma que quien escribe sea el titular y la consulta requiere datos de la reserva o modificaciones.

## Qué hace el agente

1. Intenta confirmar la titularidad con `verificar-identidad`.
2. Si no se confirma, explica que no puede compartir datos ni hacer cambios y que el titular debe escribir desde su zona de cliente.
3. Recoge el motivo de la consulta sin pedir datos personales de nadie.
4. Abre un caso con `crear-ticket-booking` para que booking valide la situación.

## Qué no hace

- No comparte horarios, bonos ni datos de la reserva con quien no es el titular.
- No hace cambios a petición de un tercero.
- No envía el bono a otro email.

## Cuándo pasa a una persona

- Siempre que la verificación no confirme al titular y la consulta requiera datos o cambios.

## Cómo lo puede pedir el cliente

- «Hola, la reserva la hizo mi madre, pero quiero saber a qué hora sale el barco.»
- «soy el q conduce, me decis la hora del ferri? la reserva no esta a mi nombre»
- «Buenas, escribo en nombre de mi jefe, que es el titular. Necesitamos cambiar la matrícula del coche.»
- «El titular está en el hospital y yo soy su pareja, ¿podéis cancelar el barco?»
