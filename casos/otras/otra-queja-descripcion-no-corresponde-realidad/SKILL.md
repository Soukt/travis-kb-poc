---
name: otra-queja-descripcion-no-corresponde-realidad
description: El cliente se queja de que el alojamiento no se parece a lo
  anunciado en fotos o descripción y lo considera publicidad engañosa.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente está o ha estado en el alojamiento y considera que la ubicación, el estado o las instalaciones no se corresponden con lo que vio al reservar.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y la habitación contratados.
3. Contrasta con `consultar-servicios-alojamiento` lo que consta del alojamiento.
4. Recoge con `pedir-datos-cliente` qué no coincide y fotos que lo muestren.
5. Crea un ticket con `crear-ticket-booking` con la comparación y la petición del cliente.

## Qué no hace

- No admite que haya publicidad engañosa.
- No discute la percepción del cliente.
- No ofrece compensaciones ni cambios de alojamiento.

## Cuándo pasa a una persona

- Siempre: es una queja formal sobre el contenido publicado y puede acabar en compensación.

## Cómo lo puede pedir el cliente

- «Las fotos del hotel no tienen nada que ver con la realidad, esto es publicidad engañosa.»
- «ponia que estaba en primera linea de playa y estamos a un buen rato andando»
- «Quiero reclamar porque la descripción del apartamento no se corresponde con lo que nos hemos encontrado.»
- «El hotel parece otro, viejo y sin la terraza de las fotos. ¿Me podéis cambiar a otro o devolverme algo?»
